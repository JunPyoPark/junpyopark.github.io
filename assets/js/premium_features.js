// 프리미엄 기능 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 실시간 검색 기능
    initRealtimeSearch();
    
    // 이미지 지연 로딩
    initLazyLoading();
    
    // 관련 포스트 추천
    initRelatedPosts();
    
    // 스크롤 진행률
    initScrollProgress();
});

// 실시간 검색 기능
function initRealtimeSearch() {
    const searchInput = document.querySelector('.search-input');
    const posts = document.querySelectorAll('.post');
    const resultsCount = document.querySelector('.search-results-count');
    
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = this.value.toLowerCase().trim();
            performSearch(query, posts, resultsCount);
        }, 300);
    });
    
    // 검색어 하이라이트
    function highlightSearchTerm(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }
}

// 검색 실행
function performSearch(query, posts, resultsCount) {
    let visibleCount = 0;
    
    posts.forEach(post => {
        const title = post.querySelector('.post-title a').textContent.toLowerCase();
        const content = post.querySelector('.post-content p').textContent.toLowerCase();
        const tags = Array.from(post.querySelectorAll('.post-tag')).map(tag => tag.textContent.toLowerCase());
        
        const isMatch = query === '' || 
                       title.includes(query) || 
                       content.includes(query) || 
                       tags.some(tag => tag.includes(query));
        
        if (isMatch) {
            post.style.display = 'block';
            post.classList.add('visible');
            visibleCount++;
            
            // 검색어 하이라이트
            if (query) {
                highlightSearchResults(post, query);
            }
        } else {
            post.style.display = 'none';
            post.classList.remove('visible');
        }
    });
    
    // 결과 카운터 업데이트
    if (resultsCount) {
        resultsCount.textContent = `${visibleCount}개의 포스트를 찾았습니다.`;
        resultsCount.classList.toggle('highlight', query !== '');
    }
}

// 검색 결과 하이라이트
function highlightSearchResults(post, query) {
    const title = post.querySelector('.post-title a');
    const content = post.querySelector('.post-content p');
    
    if (title) {
        title.innerHTML = highlightSearchTerm(title.textContent, query);
    }
    if (content) {
        content.innerHTML = highlightSearchTerm(content.textContent, query);
    }
}

// 이미지 지연 로딩
function initLazyLoading() {
    const images = document.querySelectorAll('.post-thumbnail');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    loadImage(img);
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            img.classList.add('loading');
            imageObserver.observe(img);
        });
    } else {
        // 폴백: 모든 이미지 즉시 로드
        images.forEach(img => loadImage(img));
    }
}

// 이미지 로드
function loadImage(img) {
    const src = img.style.backgroundImage.match(/url\(["']?([^"']+)["']?\)/);
    if (src && src[1]) {
        const image = new Image();
        image.onload = () => {
            img.classList.remove('loading');
            img.classList.add('loaded', 'visible');
        };
        image.onerror = () => {
            img.classList.remove('loading');
            img.classList.add('loaded', 'visible');
        };
        image.src = src[1];
    }
}

// 관련 포스트 추천
function initRelatedPosts() {
    const posts = Array.from(document.querySelectorAll('.post'));
    if (posts.length < 2) return;
    
    // 각 포스트에 관련 포스트 추가
    posts.forEach((post, index) => {
        if (index === 0) return; // 피처드 포스트 제외
        
        const relatedPosts = getRelatedPosts(post, posts, index);
        if (relatedPosts.length > 0) {
            addRelatedPostsSection(post, relatedPosts);
        }
    });
}

// 관련 포스트 찾기
function getRelatedPosts(currentPost, allPosts, currentIndex) {
    const currentTags = Array.from(currentPost.querySelectorAll('.post-tag')).map(tag => tag.textContent);
    const currentTitle = currentPost.querySelector('.post-title a').textContent.toLowerCase();
    
    const related = allPosts
        .filter((post, index) => index !== currentIndex && index !== 0)
        .map(post => {
            const tags = Array.from(post.querySelectorAll('.post-tag')).map(tag => tag.textContent);
            const title = post.querySelector('.post-title a').textContent.toLowerCase();
            
            // 유사도 계산
            const tagSimilarity = calculateSimilarity(currentTags, tags);
            const titleSimilarity = calculateTextSimilarity(currentTitle, title);
            const totalSimilarity = (tagSimilarity * 0.7) + (titleSimilarity * 0.3);
            
            return {
                element: post,
                similarity: totalSimilarity,
                title: post.querySelector('.post-title a').textContent,
                url: post.querySelector('.post-title a').href,
                thumbnail: post.querySelector('.post-thumbnail').style.backgroundImage,
                date: post.querySelector('.post-date').textContent
            };
        })
        .filter(item => item.similarity > 0.2)
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 3);
    
    return related;
}

// 유사도 계산
function calculateSimilarity(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
}

// 텍스트 유사도 계산
function calculateTextSimilarity(str1, str2) {
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    return calculateSimilarity(words1, words2);
}

// 관련 포스트 섹션 추가
function addRelatedPostsSection(post, relatedPosts) {
    const relatedSection = document.createElement('div');
    relatedSection.className = 'related-posts';
    relatedSection.innerHTML = `
        <h3 class="related-posts-title">관련 포스트</h3>
        <div class="related-posts-grid">
            ${relatedPosts.map(item => `
                <div class="related-post">
                    <div class="ai-recommendation">AI 추천</div>
                    <div class="related-post-thumbnail" style="background-image: url(${item.thumbnail.match(/url\(["']?([^"']+)["']?\)/)[1]})"></div>
                    <div class="related-post-content">
                        <h4 class="related-post-title">
                            <a href="${item.url}">${item.title}</a>
                        </h4>
                        <div class="related-post-meta">
                            <span class="related-post-date">${item.date}</span>
                            <span class="related-post-similarity">${Math.round(item.similarity * 100)}% 유사</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    post.parentNode.insertBefore(relatedSection, post.nextSibling);
}

// 스크롤 진행률
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-indicator';
    progressBar.innerHTML = '<div class="scroll-progress"></div>';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        const progress = progressBar.querySelector('.scroll-progress');
        progress.style.width = scrollPercent + '%';
    });
}
