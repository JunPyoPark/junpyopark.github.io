// 전체 게시물 검색 및 필터링 시스템

class GlobalSearch {
    constructor() {
        this.allPosts = [];
        this.filteredPosts = [];
        this.currentPage = 1;
        this.postsPerPage = 8;
        this.currentFilter = 'all';
        this.currentQuery = '';
        
        this.init();
    }
    
    async init() {
        await this.loadAllPosts();
        this.setupEventListeners();
        this.renderPosts();
    }
    
    // 모든 게시물 데이터 로드
    async loadAllPosts() {
        try {
            // Jekyll의 site.posts 데이터를 JavaScript로 가져오기
            const response = await fetch('/sitemap.xml');
            const text = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, 'text/xml');
            
            // sitemap에서 포스트 URL들 추출
            const urls = Array.from(xmlDoc.querySelectorAll('loc'))
                .map(loc => loc.textContent)
                .filter(url => url.includes('/posts/') || url.match(/\d{4}-\d{2}-\d{2}/));
            
            // 각 포스트의 메타데이터 로드
            this.allPosts = await Promise.all(
                urls.map(async (url) => {
                    try {
                        const postResponse = await fetch(url);
                        const postText = await postResponse.text();
                        const postDoc = new DOMParser().parseFromString(postText, 'text/html');
                        
                        return {
                            url: url,
                            title: postDoc.querySelector('h1, h2, .post-title')?.textContent?.trim() || '',
                            content: postDoc.querySelector('.post-content, .content')?.textContent?.trim() || '',
                            date: postDoc.querySelector('time, .post-date')?.textContent?.trim() || '',
                            tags: Array.from(postDoc.querySelectorAll('.post-tag, .tag')).map(tag => tag.textContent.trim()),
                            excerpt: postDoc.querySelector('.post-excerpt, .excerpt')?.textContent?.trim() || ''
                        };
                    } catch (error) {
                        console.warn('Failed to load post:', url, error);
                        return null;
                    }
                })
            ).then(posts => posts.filter(post => post !== null));
            
        } catch (error) {
            console.error('Failed to load posts:', error);
            // 폴백: 현재 페이지의 포스트들만 사용
            this.loadCurrentPagePosts();
        }
    }
    
    // 현재 페이지의 포스트들만 로드 (폴백)
    loadCurrentPagePosts() {
        const posts = document.querySelectorAll('.post');
        this.allPosts = Array.from(posts).map(post => ({
            url: post.querySelector('.post-title a')?.href || '',
            title: post.querySelector('.post-title a')?.textContent?.trim() || '',
            content: post.querySelector('.post-content p')?.textContent?.trim() || '',
            date: post.querySelector('.post-date')?.textContent?.trim() || '',
            tags: Array.from(post.querySelectorAll('.post-tag')).map(tag => tag.textContent.trim()),
            excerpt: post.querySelector('.post-content p')?.textContent?.trim() || ''
        }));
    }
    
    // 이벤트 리스너 설정
    setupEventListeners() {
        const searchInput = document.querySelector('.search-input');
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        // 검색 입력
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentQuery = e.target.value.toLowerCase();
                this.currentPage = 1;
                this.filterAndSearch();
            });
        }
        
        // 필터 버튼
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // 모든 버튼에서 active 클래스 제거
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // 클릭된 버튼에 active 클래스 추가
                button.classList.add('active');
                
                this.currentFilter = button.dataset.filter;
                this.currentPage = 1;
                this.filterAndSearch();
            });
        });
    }
    
    // 필터링 및 검색 실행
    filterAndSearch() {
        this.filteredPosts = this.allPosts.filter(post => {
            // 카테고리 필터링
            let categoryMatch = true;
            if (this.currentFilter !== 'all') {
                categoryMatch = post.tags.some(tag => 
                    tag.toLowerCase().includes(this.currentFilter.toLowerCase())
                );
            }
            
            // 검색어 필터링
            let searchMatch = true;
            if (this.currentQuery) {
                searchMatch = post.title.toLowerCase().includes(this.currentQuery) ||
                             post.content.toLowerCase().includes(this.currentQuery) ||
                             post.tags.some(tag => tag.toLowerCase().includes(this.currentQuery));
            }
            
            return categoryMatch && searchMatch;
        });
        
        this.renderPosts();
        this.updateResultsCount();
    }
    
    // 포스트 렌더링
    renderPosts() {
        const container = document.querySelector('.masonry-container');
        if (!container) return;
        
        // 현재 페이지의 포스트들 계산
        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const postsToShow = this.filteredPosts.slice(startIndex, endIndex);
        
        // 기존 포스트들 제거
        container.innerHTML = '';
        
        // 포스트들 렌더링
        postsToShow.forEach((post, index) => {
            const postElement = this.createPostElement(post, index === 0);
            container.appendChild(postElement);
        });
        
        // 페이지네이션 렌더링
        this.renderPagination();
    }
    
    // 포스트 요소 생성
    createPostElement(post, isFeatured = false) {
        const div = document.createElement('div');
        div.className = 'masonry-item';
        
        const article = document.createElement('article');
        article.className = isFeatured ? 'post featured' : 'post';
        
        // 포스트 내용 생성
        article.innerHTML = `
            <div class="post-content">
                <div class="post-meta">
                    <div class="post-tags">
                        ${post.tags.map(tag => `<a href="#" class="post-tag ${tag.toLowerCase().replace(/\s+/g, '-')}">${tag}</a>`).join('')}
                    </div>
                </div>
                <h2 class="post-title"><a href="${post.url}">${post.title}</a></h2>
                <p>${post.excerpt}</p>
                <span class="post-date">${post.date}</span>
            </div>
        `;
        
        div.appendChild(article);
        return div;
    }
    
    // 페이지네이션 렌더링
    renderPagination() {
        const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
        if (totalPages <= 1) return;
        
        const pagination = document.createElement('div');
        pagination.className = 'pagination';
        pagination.innerHTML = `
            <div class="pagination-controls">
                <button class="pagination-btn" ${this.currentPage === 1 ? 'disabled' : ''} onclick="globalSearch.goToPage(${this.currentPage - 1})">이전</button>
                <span class="pagination-info">${this.currentPage} / ${totalPages}</span>
                <button class="pagination-btn" ${this.currentPage === totalPages ? 'disabled' : ''} onclick="globalSearch.goToPage(${this.currentPage + 1})">다음</button>
            </div>
        `;
        
        const container = document.querySelector('.masonry-container');
        container.parentNode.insertBefore(pagination, container.nextSibling);
    }
    
    // 페이지 이동
    goToPage(page) {
        if (page < 1 || page > Math.ceil(this.filteredPosts.length / this.postsPerPage)) return;
        this.currentPage = page;
        this.renderPosts();
    }
    
    // 결과 카운터 업데이트
    updateResultsCount() {
        const resultsCount = document.querySelector('.search-results-count, .filter-results');
        if (resultsCount) {
            resultsCount.textContent = `${this.filteredPosts.length}개의 포스트를 찾았습니다.`;
        }
    }
}

// 전역 인스턴스 생성
let globalSearch;

document.addEventListener('DOMContentLoaded', function() {
    globalSearch = new GlobalSearch();
});
