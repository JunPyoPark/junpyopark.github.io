// Jekyll 데이터를 JavaScript로 전달하는 스크립트

// Jekyll에서 생성된 JSON 데이터 로드
window.JekyllData = {
    posts: [],
    categories: [],
    tags: []
};

// Jekyll 데이터 로드 함수
async function loadJekyllData() {
    try {
        // Jekyll이 생성한 JSON 파일에서 데이터 로드
        const response = await fetch('/data/posts.json');
        if (response.ok) {
            const data = await response.json();
            window.JekyllData = data;
            return data;
        }
    } catch (error) {
        console.warn('JSON 데이터를 로드할 수 없습니다. HTML에서 데이터를 추출합니다.');
    }
    
    // 폴백: HTML에서 데이터 추출
    return extractDataFromHTML();
}

// HTML에서 포스트 데이터 추출
function extractDataFromHTML() {
    const posts = [];
    const postElements = document.querySelectorAll('.post');
    
    postElements.forEach((post, index) => {
        const titleElement = post.querySelector('.post-title a');
        const contentElement = post.querySelector('.post-content p');
        const dateElement = post.querySelector('.post-date');
        const tagElements = post.querySelectorAll('.post-tag');
        
        if (titleElement) {
            posts.push({
                url: titleElement.href,
                title: titleElement.textContent.trim(),
                content: contentElement ? contentElement.textContent.trim() : '',
                date: dateElement ? dateElement.textContent.trim() : '',
                tags: Array.from(tagElements).map(tag => tag.textContent.trim()),
                excerpt: contentElement ? contentElement.textContent.trim().substring(0, 200) + '...' : '',
                isFeatured: post.classList.contains('featured')
            });
        }
    });
    
    // 카테고리와 태그 추출
    const categories = [...new Set(posts.flatMap(post => post.tags))];
    const tags = [...new Set(posts.flatMap(post => post.tags))];
    
    window.JekyllData = {
        posts: posts,
        categories: categories,
        tags: tags
    };
    
    return window.JekyllData;
}

// 페이지 로드 시 데이터 로드
document.addEventListener('DOMContentLoaded', function() {
    loadJekyllData().then(data => {
        console.log('Jekyll 데이터 로드 완료:', data);
        // 데이터 로드 완료 후 검색 시스템 초기화
        if (window.globalSearch) {
            window.globalSearch.updateData(data);
        }
    });
});
