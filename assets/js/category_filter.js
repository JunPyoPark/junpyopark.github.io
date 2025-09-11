// 카테고리 필터링 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.post');
    const resultsCounter = document.querySelector('.filter-results');
    
    // 필터 버튼 클릭 이벤트
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 모든 버튼에서 active 클래스 제거
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 클릭된 버튼에 active 클래스 추가
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterPosts(filter);
        });
    });
    
    // 포스트 필터링 함수
    function filterPosts(filter) {
        let visibleCount = 0;
        
        posts.forEach(post => {
            const tags = post.querySelectorAll('.post-tag');
            let shouldShow = false;
            
            if (filter === 'all') {
                shouldShow = true;
            } else {
                tags.forEach(tag => {
                    if (tag.classList.contains(filter)) {
                        shouldShow = true;
                    }
                });
            }
            
            if (shouldShow) {
                post.classList.remove('hidden');
                post.classList.add('visible');
                visibleCount++;
            } else {
                post.classList.add('hidden');
                post.classList.remove('visible');
            }
        });
        
        // 결과 카운터 업데이트
        if (resultsCounter) {
            resultsCounter.textContent = `${visibleCount}개의 포스트를 찾았습니다.`;
        }
        
        // 애니메이션을 위한 약간의 지연
        setTimeout(() => {
            posts.forEach(post => {
                if (post.classList.contains('visible')) {
                    post.style.animation = 'slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                }
            });
        }, 100);
    }
    
    // 초기 로드 시 모든 포스트 표시
    filterPosts('all');
});
