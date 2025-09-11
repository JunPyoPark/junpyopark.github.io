#!/bin/bash

echo "🚀 Lazy Loading 추가 중..."

# 모든 포스트의 img 태그에 loading="lazy" 추가
find _posts -name "*.html" -exec sed -i 's/<img/<img loading="lazy" /g' {} \;

echo "✅ Lazy Loading 추가 완료!"
echo "📊 효과:"
echo "  - 페이지 로딩 속도 향상"
echo "  - 대역폭 절약"
echo "  - 사용자 경험 개선"
