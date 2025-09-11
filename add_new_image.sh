#!/bin/bash

# 새 이미지 추가 및 최적화 자동화 스크립트

if [ $# -eq 0 ]; then
    echo "사용법: ./add_new_image.sh 이미지파일명 [이미지URL]"
    echo "예시: ./add_new_image.sh my-image.jpg https://example.com/image.jpg"
    exit 1
fi

IMAGE_NAME="$1"
IMAGE_URL="$2"

echo "🖼️ 새 이미지 추가 및 최적화 시작..."

# 1. 이미지 다운로드 (URL이 제공된 경우)
if [ ! -z "$IMAGE_URL" ]; then
    echo "📥 이미지 다운로드 중: $IMAGE_URL"
    wget -O "assets/img/$IMAGE_NAME" "$IMAGE_URL"
    if [ $? -eq 0 ]; then
        echo "✅ 다운로드 완료: assets/img/$IMAGE_NAME"
    else
        echo "❌ 다운로드 실패"
        exit 1
    fi
fi

# 2. 이미지 최적화
echo "🔧 이미지 최적화 중..."
./optimize_images.sh

# 3. HTML 코드 생성
echo "📝 HTML 코드 생성 중..."
echo ""
echo "=== 사용할 HTML 코드 ==="
echo '<picture>'
echo '  <source srcset="/assets/img/optimized/'${IMAGE_NAME%.*}'" type="image/webp">'
echo '  <img src="/assets/img/optimized/'${IMAGE_NAME%.*}'" alt="설명" class="스타일">'
echo '</picture>'
echo ""
echo "=== Front Matter에 추가할 내용 ==="
echo "img: \"${IMAGE_NAME%.*}.jpg\""
echo ""

echo "✅ 새 이미지 추가 완료!"
echo "📊 최적화된 이미지: assets/img/optimized/"
