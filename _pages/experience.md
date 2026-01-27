---
permalink: /experience/
title: "Experience"
layout: single
author_profile: true
toc: true
toc_label: "Timeline"
toc_icon: "briefcase"
---

## Work Experience

### 가천대학교 의과대학 (2024.09 - Present)
**AI 서비스 개발 총괄 및 연구원** | Incheon, South Korea

#### 주요 성과

**차세대 AI Segmentation 엔진 개발** *(Deep Tech)*
- **MedSAM2** 기반 3D Interactive Segmentation 통합
  - 3D Volumetric Data 처리를 위한 Slice-by-Slice 양방향 전파 알고리즘 구현
  - Celery Worker Execution Pool 최적화로 CUDA 초기화 충돌 해결
  - GPU 전처리 및 Longest-side Resize 기법 도입으로 추론 속도·정확도 향상

- **SAM2** Video Segmentation 탑재
  - 의료 비디오 내 객체 추적 및 분할
  - GrabCut, Magic Wand 알고리즘 구현 → Human-in-the-Loop 편집 도구

- **React 기반 고성능 의료영상 뷰어** 자체 개발
  - Web Worker + Zero-copy View로 대용량 NIfTI 데이터 초고속 렌더링
  - Canvas API 활용 실시간 Brush/Eraser 및 Overlay 시각화

**의료기기 제품화 및 인허가** *(Product Launch)*
- **Curaxel-Insight** (1등급 의료영상전송장치) - 2025.04.29 등록 완료
  - 진행률 40% 프로젝트 인수 → 2개월 만에 100% 기능 완성
  - Reactive Reporting 시스템: Annotation 수정 시 리포트 실시간 재계산

- **Curaxel-Spine** (2등급 AI 척추진단) - 2025.12 개발 완료
  - CPU 기반 ONNX/TorchScript 경량화로 GPU 자원 효율화
  - Jinja2 + WeasyPrint PDF 리포트 생성 서비스 표준화

- **Curaxel-Soma** (2등급 AI 체성분분석) - 2025.08 런칭
  - MSA 분리: MIP-Service 마이크로서비스 구축
  - 실시간 HU Thresholding + 지능형 캐싱

**시스템 최적화** *(DevOps \u0026 Optimization)*
- 🚀 **핵심 알고리즘 92.4% 성능 개선** (52.7초 → 4.0초)
  - C++ → Python 포팅 + Multiprocessing 병렬 처리
  - A* 탐색 알고리즘 적용
  
- Docker Autoheal, Load Shedding 기반 Self-healing 아키텍처
- SSE 기반 실시간 상태 푸시 시스템

**보안 인증**
- 🔒 의료기기 사이버보안 인증 (KTR) 획득 (2025.11)
- GMP 및 기술문서 총괄

**Tech Stack:** Python, PyTorch, MedSAM2, SAM2, FastAPI, Celery, Redis, Docker, React, Vite, SimpleITK

---

### 퀀트스퀘어 (2023.05 - 2024.04)
**대표** | 비정형 데이터 기반 퀀트 프로그램 개발

- 퀀트스퀘어 프로그램 기획, 설계, 프레임워크 구축
- 외부 API 연동 및 전략 분석 엔진 구축
- **사업비 4,700만 원** 지원 (예비창업패키지)
- **우수 창업기업** 선정

**Tech Stack:** Python, Pandas, NumPy, RESTful API

---

### UNIST AI-Challenger Program (2023.04 - 2023.12)
**팀장** | LLM 기반 금융 텍스트 분석 연구

- 증권사 리포트 기반 LLM 투자 전략 개발
- 금융 텍스트 DB 구축 및 자동 수집 모듈 구현
- 🏆 **ACM ICAIF 2023 Best Poster Award**
- 연구비 400만 원 지원, 논문 투고 완료

**Tech Stack:** Python, BERT, GPT, NLP, Web Scraping

---

### 알파프라임 (2017.06 - 2020.02)
**초기 멤버** | 알파스퀘어 개발 프로젝트

- UNIST 학생창업팀 초기 멤버로 참여
- 통합 스마트 트레이딩 플랫폼 '알파스퀘어' 개발
- 종목 이슈 DB 구축 및 정보 시각화 설계
- 자체 캔들차트 모듈 및 전략 시뮬레이션 기능 개발
- **월간 MAU 30,000명** 달성
- **3억 원 시드 투자** 유치

**Tech Stack:** JavaScript, Python, Web Development

---

## Education

### 울산과학기술원 (UNIST)
**산업공학부 / 금융공학전공 석사** | 2021.03 - 2024.02  
- 전액 장학금, GPA: 3.8/4.3
- **Relevant Coursework**: Convex Optimization, Time Series Analysis, Data-driven Simulation
- **연구 분야**: 금융 AI, 시계열 분석, 포트폴리오 최적화

### 한국과학기술원 (KAIST)
**금융공학 석사과정 (중퇴)** | 2020.03 - 2020.03  
- 장학금 14:1 경쟁 합격 → 타대학 진학 변경

### 울산과학기술원 (UNIST)
**수리과학부 (복수전공: 산업경영공학부)** | 2012.03 - 2019.08  
- 전액 장학금, GPA: 3.31/4.3, TOEIC: 810

---

## Additional Experience

### 외주개발: 인천 길병원 레지던트 당직근무표 프로그램 (2021.04 - 2021.06)
- MIQCP 기반 최적화 알고리즘 설계 및 구현
- **근무표 생성 시간: 30분 → 3분** 단축
- 유상 판매 완료

### UNIST-NC Soft 산학협력 (2022.06 - 2022.12)
- AI 기반 Direct Indexing 전략 개발
- 지수 추종 및 포트폴리오 최적화 모듈 구현

[View Full CV →](/cv/){: .btn .btn--primary}
