<template>
  <div class="fukushima-page">
    <div class="page-container">
      <!-- 上方Project导航 -->
      <nav class="page-nav">
        <RouterLink to="/project" class="nav-link">Project</RouterLink>
      </nav>
      
      <!-- Header组件 -->
      <div class="header">
        <!-- 左侧文字内容 -->
        <div class="content-left">
          <h1 class="title">The 2023 Fukushima Nuclear Waste Crisis: A Multidisciplinary Research Agenda</h1>
          <p class="description">Cross-national study of how media, risk perception, and trust shaped public responses to the Fukushima nuclear wastewater crisis.</p>
        </div>
        
        <!-- 右侧图片 -->
        <div class="content-right">
          <div class="image-placeholder">
            <img src="../../assets/Project/01.png" alt="" class="project-img">
          </div>
        </div>
      </div>

      <div class="content-container">
        <p>In August 2023, the Tokyo Electric Power Company (TEPCO), with authorization from the Japanese government, initiated the release of treated water stored at the Fukushima Dai’ichi nuclear power plant into the Pacific Ocean. This unprecedented operation, involving over one million tons of water to be discharged over a period of 30 years, has attracted significant international academic attention across diverse disciplines, including marine policy, environmental law, conservation science, and the social sciences. Furthermore, it has drawn widespread interest from policymakers and science-media sectors (Mabon, 2024).</p>
        <p>Our project seeks to explore the crisis as a multifaceted phenomenon situated at the technological crises (Lerbinger, 2012). Specifically, we aim to investigate the dynamic relationships between risk communication, public perceptions, and behavior in the context of this nuclear issue. This project offers an opportunity to compare evolving patterns of risk perception, preventive behavior, and trust dynamics with those observed during the COVID-19 crisis.</p>
        <p>
          <b>Key research objectives include:</b> <br>
          <b>1.Risk Perception and Preventive Behavior:</b>  Examining the interplay between affective and cognitive dimensions of risk perception and their influence on individual preventive actions. <br>
          <b>2.Government Response and Public Trust:</b>  Analyzing how governmental response strategies, including crisis communication approaches, shape public satisfaction and trust. <br>
          <b>3.Media Influence on Risk Perception:</b>  Investigating whether media exposure amplifies risk perceptions or serves as the primary source of risk awareness.
        </p>
        <p>To achieve these objectives, we collected comprehensive survey data between October and December 2023 from eight societies: Hong Kong (n=1418), mainland China (n=1011), Taiwan (n=1087), the United States (n=1006), the United Kingdom (n=1010), Singapore (n=1032), Japan (n=1020), and South Korea (n=1009). This cross-societal dataset provides a unique comparative lens to examine how varying sociocultural, political, and media contexts influence public responses to this prolonged crisis.</p>
        <p>By situating this research within the broader framework of risk communication, trust, and media effects, this project aims to generate actionable insights for policymakers and communicators managing global environmental crises.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 项目页面逻辑
</script>

<style scoped>
.fukushima-page {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem 0;
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-nav {
  margin-bottom: 3rem;
}

.nav-link {
  color: #ec5a2e;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #bf175e;
  text-decoration: underline;
}

.header {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.content-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  line-height: 1.3;
  margin: 0;
}

.description {
  font-size: 1.1rem;
  color: #ec5a2e;
  line-height: 1.6;
  margin: 0;
}

.content-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 100%;
  max-width: 500px;
  height: 300px;
  background-color: #ccc;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}


.content-container {
  margin: 4rem 0;
}

.content-container p {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.content-container p:last-child {
  margin-bottom: 0;
}

/* 响应式布局 */
@media screen and (max-width: 1024px) {
  .page-container {
    padding: 0 1.5rem;
  }
  
  .header {
    gap: 3rem;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .content-container {
    padding: 2.5rem;
  }
  
  .content-container p {
    font-size: 0.95rem;
  }
}

@media screen and (max-width: 768px) {
  .fukushima-page {
    padding: 1.5rem 0;
  }
  
  .page-container {
    padding: 0 1rem;
  }
  
  .nav-link {
    font-size: 1.5rem;
  }
  
  .header {
    flex-direction: column;
    gap: 2rem;
  }
  
  .content-left {
    order: 2;
    text-align: center;
  }
  
  .content-right {
    order: 1;
    width: 100%;
  }
  
  .title {
    font-size: 1.6rem;
  }
  
  .description {
    font-size: 0.95rem;
  }
  
  .image-placeholder {
    height: 250px;
  }
  
  .content-container {
    padding: 2rem;
    margin-top: 1.5rem;
  }
  
  .content-container p {
    font-size: 0.9rem;
    line-height: 1.7;
    margin-bottom: 1.2rem;
  }
}

@media screen and (max-width: 480px) {
  .fukushima-page {
    padding: 1rem 0;
  }
  
  .page-container {
    padding: 0 0.8rem;
  }
  
  .page-nav {
    margin-bottom: 2rem;
  }
  
  .nav-link {
    font-size: 1.3rem;
  }
  
  .title {
    font-size: 1.4rem;
  }
  
  .description {
    font-size: 0.9rem;
  }
  
  .image-placeholder {
    height: 200px;
  }
  
  .content-container {
    padding: 1.5rem;
    margin-top: 1rem;
  }
  
  .content-container p {
    font-size: 0.85rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
}
</style> 