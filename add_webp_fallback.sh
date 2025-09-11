#!/bin/bash

# WebP 폴백 지원을 위한 <picture> 태그 추가

echo "🖼️ WebP 폴백 지원 추가 중..."

# collectiveIllusions.html
sed -i 's|<img src="/assets/img/optimized/collective-illusions.webp"|<picture><source srcset="/assets/img/optimized/collective-illusions.webp" type="image/webp"><img src="/assets/img/optimized/collective-illusions.jpg"|g' _posts/2025-09-10-collectiveIllusions.html
sed -i 's|alt="집단 착각 책 표지"|alt="집단 착각 책 표지"></picture>|g' _posts/2025-09-10-collectiveIllusions.html

# propertyAndFreedom.html
sed -i 's|<img src="/assets/img/optimized/property-and-freedom.webp"|<picture><source srcset="/assets/img/optimized/property-and-freedom.webp" type="image/webp"><img src="/assets/img/optimized/property-and-freedom.jpg"|g' _posts/2025-09-10-propertyAndFreedom.html
sed -i 's|alt="소유와 자유 책 표지"|alt="소유와 자유 책 표지"></picture>|g' _posts/2025-09-10-propertyAndFreedom.html

# whatNations.html
sed -i 's|<img src="/assets/img/optimized/what-nations.webp"|<picture><source srcset="/assets/img/optimized/what-nations.webp" type="image/webp"><img src="/assets/img/optimized/what-nations.jpg"|g' _posts/2025-09-10-whatNations.html
sed -i 's|alt="국가란 무엇인가 책 표지"|alt="국가란 무엇인가 책 표지"></picture>|g' _posts/2025-09-10-whatNations.html

# conservatism.html
sed -i 's|<img src="/assets/img/optimized/conservatism.webp"|<picture><source srcset="/assets/img/optimized/conservatism.webp" type="image/webp"><img src="/assets/img/optimized/conservatism.jpg"|g' _posts/2025-09-10-conservatism.html
sed -i 's|alt="보수주의 책 표지"|alt="보수주의 책 표지"></picture>|g' _posts/2025-09-10-conservatism.html

echo "✅ WebP 폴백 지원 추가 완료!"
echo "🌐 모든 브라우저에서 최적화된 이미지 표시됩니다!"
