---
permalink: /blog/
title: "Blog"
layout: archive
author_profile: true
---

기술 블로그 - AI, 의료 영상 처리, 금융 공학, 시스템 아키텍처 등 다양한 주제를 다룹니다.

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
