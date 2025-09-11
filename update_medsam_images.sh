#!/bin/bash

echo "🔧 MedSAM 포스트 이미지 최적화 적용 중..."

# 1. medsam2guide.html 수정
echo "📝 medsam2guide.html 수정 중..."
sed -i 's|src="https://medsam2.github.io/static/logo.png"|src="/assets/img/optimized/logo.webp"|g' _posts/2025-09-01-medsam2guide.html
sed -i 's|src="https://medsam2.github.io/static/1.png"|src="/assets/img/optimized/medsam2-1.webp"|g' _posts/2025-09-01-medsam2guide.html
sed -i 's|src="https://medsam2.github.io/static/4.png"|src="/assets/img/optimized/medsam2-4.webp"|g' _posts/2025-09-01-medsam2guide.html

# 2. medsamixExplained.html 수정
echo "📝 medsamixExplained.html 수정 중..."
sed -i 's|src="https://arxiv.org/html/2508.11032v1/x2.png"|src="/assets/img/optimized/arxiv-x2.webp"|g' _posts/2025-09-01-medsamixExplained.html
sed -i 's|src="https://arxiv.org/html/2508.11032v1/x3.png"|src="/assets/img/optimized/arxiv-x3.webp"|g' _posts/2025-09-01-medsamixExplained.html

echo "✅ MedSAM 포스트 이미지 최적화 완료!"
echo "📊 최적화 효과:"
echo "  - logo.png: 876KB → 38KB (96% 절약)"
echo "  - medsam2-1.png: 3.3MB → 304KB (91% 절약)"
echo "  - medsam2-4.png: 470KB → 73KB (84% 절약)"
echo "  - arxiv-x2.png: 492KB → 34KB (93% 절약)"
echo "  - arxiv-x3.png: 987KB → 37KB (96% 절약)"
