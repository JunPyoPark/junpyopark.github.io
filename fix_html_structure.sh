#!/bin/bash

echo "🔧 HTML 구조 수정 중..."

# 1. collectiveIllusions.html 수정
echo "📝 collectiveIllusions.html 수정 중..."
sed -i '28s/.*/        <picture><source srcset="\/assets\/img\/optimized\/collective-illusions.webp" type="image\/webp"><img src="\/assets\/img\/optimized\/collective-illusions.jpg" alt="집단 착각 책 표지" class="mx-auto mb-8 w-48 h-auto rounded-lg shadow-lg" aria-label="집단 착각 책 표지"><\/picture>/' _posts/2025-09-10-collectiveIllusions.html

# 2. propertyAndFreedom.html 수정
echo "📝 propertyAndFreedom.html 수정 중..."
sed -i '28s/.*/            <picture><source srcset="\/assets\/img\/optimized\/property-and-freedom.webp" type="image\/webp"><img src="\/assets\/img\/optimized\/property-and-freedom.jpg" alt="소유와 자유 책 표지" class="w-48 mx-auto mb-8 rounded-lg shadow-2xl" onerror="this.onerror=null;this.src=\x27https:\/\/placehold.co\/400x600\/0F172A\/E2E8F0?text=Image+Not+Found\x27;" aria-label="소유와 자유 책 표지"><\/picture>/' _posts/2025-09-10-propertyAndFreedom.html

# 3. whatNations.html 수정
echo "📝 whatNations.html 수정 중..."
sed -i '29s/.*/             <picture><source srcset="\/assets\/img\/optimized\/what-nations.webp" type="image\/webp"><img src="\/assets\/img\/optimized\/what-nations.jpg" alt="국가란 무엇인가 책 표지" class="w-48 rounded-lg shadow-lg" onerror="this.onerror=null;this.src=\x27https:\/\/placehold.co\/400x600\/BFD7EA\/0B3954?text=Book+Cover\x27;" aria-label="국가란 무엇인가 책 표지"><\/picture>/' _posts/2025-09-10-whatNations.html

# 4. conservatism.html 수정
echo "📝 conservatism.html 수정 중..."
sed -i '51s/.*/                    <picture><source srcset="\/assets\/img\/optimized\/conservatism.webp" type="image\/webp"><img src="\/assets\/img\/optimized\/conservatism.jpg" alt="지적인 사람들을 위한 보수주의 안내서 표지" class="rounded-lg shadow-xl mx-auto"><\/picture>/' _posts/2025-09-10-conservatism.html

echo "✅ HTML 구조 수정 완료!"
