#!/bin/bash

# 9월 10일 포스트의 이미지를 WebP로 업데이트하는 스크립트

echo "🖼️ 9월 10일 포스트 이미지 WebP 업데이트 시작..."

# 1. collectiveIllusions.html - 책 표지 이미지를 로컬 WebP로 변경
echo "📝 collectiveIllusions.html 업데이트 중..."
sed -i 's|src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788950910945.jpg"|src="/assets/img/optimized/collective-illusions.webp"|g' _posts/2025-09-10-collectiveIllusions.html

# 2. propertyAndFreedom.html - 책 표지 이미지를 로컬 WebP로 변경
echo "📝 propertyAndFreedom.html 업데이트 중..."
sed -i 's|src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788984291713.jpg"|src="/assets/img/optimized/property-and-freedom.webp"|g' _posts/2025-09-10-propertyAndFreedom.html

# 3. whatNations.html - 책 표지 이미지를 로컬 WebP로 변경
echo "📝 whatNations.html 업데이트 중..."
sed -i 's|src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788997871360.jpg"|src="/assets/img/optimized/what-nations.webp"|g' _posts/2025-09-10-whatNations.html

# 4. conservatism.html - 책 표지 이미지를 로컬 WebP로 변경
echo "📝 conservatism.html 업데이트 중..."
sed -i 's|src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791187481683.jpg"|src="/assets/img/optimized/conservatism.webp"|g' _posts/2025-09-10-conservatism.html

echo "✅ 9월 10일 포스트 이미지 업데이트 완료!"
echo "📊 최적화 효과:"
echo "  - collective-illusions: 66KB → 35KB (47% 절약)"
echo "  - property-and-freedom: 24KB → 8KB (65% 절약)"
echo "  - what-nations: 32KB → 11KB (66% 절약)"
echo "  - conservatism: 41KB → 18KB (56% 절약)"
