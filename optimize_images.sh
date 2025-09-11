#!/bin/bash

# 이미지 최적화 스크립트
echo "🖼️ 이미지 최적화 시작..."

# 최적화된 이미지 저장할 폴더 생성
mkdir -p assets/img/optimized

# 원본 이미지 개수 확인
total_images=$(find assets/img -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | grep -v optimized | wc -l)
echo "📊 총 $total_images 개 이미지 발견"

# 카운터
count=0

# 모든 이미지 파일 처리
find assets/img -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | grep -v optimized | while read file; do
    if [ -f "$file" ]; then
        count=$((count + 1))
        filename=$(basename "$file")
        name="${filename%.*}"
        ext="${filename##*.}"
        
        echo "[$count/$total_images] 최적화 중: $filename"
        
        # 원본 크기 확인
        original_size=$(stat -c%s "$file")
        
        if [[ "$ext" =~ ^(jpg|jpeg|JPG|JPEG)$ ]]; then
            # JPEG 품질 85%로 압축
            convert "$file" -quality 85 -strip "assets/img/optimized/${name}.jpg"
            # WebP 변환
            convert "$file" -quality 85 -strip "assets/img/optimized/${name}.webp"
        else
            # PNG 압축 (품질 90%)
            convert "$file" -quality 90 -strip "assets/img/optimized/${name}.png"
            # WebP 변환
            convert "$file" -quality 90 -strip "assets/img/optimized/${name}.webp"
        fi
        
        # 결과 확인
        if [[ "$ext" =~ ^(jpg|jpeg|JPG|JPEG)$ ]]; then
            optimized_size=$(stat -c%s "assets/img/optimized/${name}.jpg")
        else
            optimized_size=$(stat -c%s "assets/img/optimized/${name}.png")
        fi
        webp_size=$(stat -c%s "assets/img/optimized/${name}.webp")
        
        saved=$((original_size - optimized_size))
        webp_saved=$((original_size - webp_size))
        
        echo "  ✅ ${ext^^}: ${original_size} → ${optimized_size} bytes (${saved} bytes 절약)"
        echo "  ✅ WebP: ${original_size} → ${webp_size} bytes (${webp_saved} bytes 절약)"
    fi
done

echo ""
echo "✅ 이미지 최적화 완료!"
echo "📁 최적화된 이미지: assets/img/optimized/"
