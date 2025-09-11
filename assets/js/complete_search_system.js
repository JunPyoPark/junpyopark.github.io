// 완전한 검색, 카테고리, 페이지네이션 시스템

class CompleteSearchSystem {
    constructor() {
        this.allPosts = [];
        this.filteredPosts = [];
        this.currentPage = 1;
        this.postsPerPage = 8;
        this.currentFilter = 'all';
        this.currentQuery = '';
        this.isDataLoaded = false;
        
        this.init();
    }
    
    async init() {
        // 1. 현재 페이지 포스트들 로드 (즉시 표시)
        this.loadCurrentPagePosts();
        
        // 2. 전체 게시물 데이터 로드 (백그라운드)
        await this.loadAllPosts();
        
        // 3. 이벤트 리스너 설정
        this.setupEventListeners();
        
        // 4. 초기 렌더링
        this.renderPosts();
    }
    
    // 현재 페이지 포스트들 로드
    loadCurrentPagePosts() {
        const posts = document.querySelectorAll('.post');
        this.allPosts = Array.from(posts).map(post => ({
            url: post.querySelector('.post-title a')?.href || '',
            title: post.querySelector('.post-title a')?.textContent?.trim() || '',
            content: post.querySelector('.post-content p')?.textContent?.trim() || '',
            date: post.querySelector('.post-date')?.textContent?.trim() || '',
            tags: Array.from(post.querySelectorAll('.post-tag')).map(tag => tag.textContent.trim()),
            excerpt: post.querySelector('.post-content p')?.textContent?.trim() || '',
            isFeatured: post.classList.contains('featured'),
            element: post,
            isCurrentPage: true
        }));
        
        this.filteredPosts = [...this.allPosts];
        console.log('현재 페이지 포스트 로드 완료:', this.allPosts.length);
    }
    
    // 전체 게시물 데이터 로드
    async loadAllPosts() {
        try {
            console.log('전체 게시물 데이터 로드 시작...');
            
            // Jekyll 사이트맵에서 포스트 URL들 추출
            const response = await fetch('/sitemap.xml');
            const text = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, 'text/xml');
            
            const urls = Array.from(xmlDoc.querySelectorAll('loc'))
                .map(loc => loc.textContent)
                .filter(url => {
                    // 포스트 URL만 필터링
                    return url.includes('/posts/') || 
                           url.match(/\d{4}-\d{2}-\d{2}/) ||
                           (url.includes('github.io') && !url.includes('page/'));
                });
            
            console.log('발견된 URL들:', urls.length);
            
            // 각 포스트의 메타데이터 로드
            const additionalPosts = await Promise.all(
                urls.map(async (url) => {
                    try {
                        // 현재 페이지 포스트는 스킵
                        if (this.allPosts.some(p => p.url === url)) {
                            return null;
                        }
                        
                        const postResponse = await fetch(url);
                        const postText = await postResponse.text();
                        const postDoc = new DOMParser().parseFromString(postText, 'text/html');
                        
                        const title = postDoc.querySelector('h1, h2, .post-title')?.textContent?.trim() || '';
                        const content = postDoc.querySelector('.post-content, .content')?.textContent?.trim() || '';
                        const date = postDoc.querySelector('time, .post-date')?.textContent?.trim() || '';
                        const tags = Array.from(postDoc.querySelectorAll('.post-tag, .tag')).map(tag => tag.textContent.trim());
                        
                        // 제목이 있는 경우만 추가
                        if (title) {
                            return {
                                url: url,
                                title: title,
                                content: content,
                                date: date,
                                tags: tags,
                                excerpt: content.substring(0, 200) + (content.length > 200 ? '...' : ''),
                                isFeatured: false,
                                element: null,
                                isCurrentPage: false
                            };
                        }
                        return null;
                    } catch (error) {
                        console.warn('포스트 로드 실패:', url, error);
                        return null;
                    }
                })
            );
            
            // 유효한 포스트들만 필터링하고 병합
            const validPosts = additionalPosts.filter(post => post !== null);
            this.allPosts = [...this.allPosts, ...validPosts];
            this.filteredPosts = [...this.allPosts];
            this.isDataLoaded = true;
            
            console.log('전체 게시물 데이터 로드 완료:', this.allPosts.length);
            
        } catch (error) {
            console.error('전체 데이터 로드 실패:', error);
            this.isDataLoaded = false;
        }
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
        
        // 검색이나 필터가 비활성화된 경우 기존 포스트들 표시
        if (!this.currentQuery && this.currentFilter === 'all') {
            this.showAllPosts();
            return;
        }
        
        // 현재 페이지의 포스트들 계산
        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const postsToShow = this.filteredPosts.slice(startIndex, endIndex);
        
        // 기존 포스트들 숨기기
        this.hideAllPosts();
        
        // 필터된 포스트들 표시
        postsToShow.forEach((post, index) => {
            if (post.element && post.isCurrentPage) {
                // 기존 요소가 있는 경우
                post.element.style.display = 'block';
                post.element.classList.add('visible');
                post.element.classList.remove('hidden');
            } else {
                // 새로 생성해야 하는 경우
                const postElement = this.createPostElement(post, index === 0);
                container.appendChild(postElement);
            }
        });
        
        // 페이지네이션 렌더링
        this.renderPagination();
    }
    
    // 모든 포스트 표시
    showAllPosts() {
        const posts = document.querySelectorAll('.post');
        posts.forEach(post => {
            post.style.display = 'block';
            post.classList.add('visible');
            post.classList.remove('hidden');
        });
        
        // 페이지네이션 제거
        this.removePagination();
    }
    
    // 모든 포스트 숨기기
    hideAllPosts() {
        const posts = document.querySelectorAll('.post');
        posts.forEach(post => {
            post.style.display = 'none';
            post.classList.add('hidden');
            post.classList.remove('visible');
        });
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
        
        // 기존 페이지네이션 제거
        this.removePagination();
        
        if (totalPages <= 1) return;
        
        const pagination = document.createElement('div');
        pagination.className = 'pagination';
        
        // 이전 버튼
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn prev-btn';
        prevBtn.textContent = '← 이전';
        prevBtn.disabled = this.currentPage === 1;
        prevBtn.addEventListener('click', () => this.goToPage(this.currentPage - 1));
        
        // 페이지 번호들
        const pageNumbers = document.createElement('div');
        pageNumbers.className = 'page-numbers';
        
        const startPage = Math.max(1, this.currentPage - 2);
        const endPage = Math.min(totalPages, this.currentPage + 2);
        
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `page-number ${i === this.currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => this.goToPage(i));
            pageNumbers.appendChild(pageBtn);
        }
        
        // 다음 버튼
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn next-btn';
        nextBtn.textContent = '다음 →';
        nextBtn.disabled = this.currentPage === totalPages;
        nextBtn.addEventListener('click', () => this.goToPage(this.currentPage + 1));
        
        // 페이지 정보
        const pageInfo = document.createElement('span');
        pageInfo.className = 'page-info';
        pageInfo.textContent = `${this.currentPage} / ${totalPages}`;
        
        pagination.appendChild(prevBtn);
        pagination.appendChild(pageNumbers);
        pagination.appendChild(pageInfo);
        pagination.appendChild(nextBtn);
        
        // 컨테이너에 추가
        const container = document.querySelector('.masonry-container');
        container.parentNode.insertBefore(pagination, container.nextSibling);
    }
    
    // 페이지네이션 제거
    removePagination() {
        const existingPagination = document.querySelector('.pagination');
        if (existingPagination) {
            existingPagination.remove();
        }
    }
    
    // 페이지 이동
    goToPage(page) {
        const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
        if (page < 1 || page > totalPages) return;
        
        this.currentPage = page;
        this.renderPosts();
        
        // 페이지 상단으로 스크롤
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // 결과 카운터 업데이트
    updateResultsCount() {
        const resultsCount = document.querySelector('.search-results-count, .filter-results');
        if (resultsCount) {
            const count = this.currentQuery || this.currentFilter !== 'all' ? this.filteredPosts.length : this.allPosts.length;
            resultsCount.textContent = `${count}개의 포스트를 찾았습니다.`;
        }
    }
}

// 전역 인스턴스 생성
let completeSearchSystem;

document.addEventListener('DOMContentLoaded', function() {
    completeSearchSystem = new CompleteSearchSystem();
});
