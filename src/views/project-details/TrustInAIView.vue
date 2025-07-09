<template>
  <div class="trust-ai-page">
    <div class="page-container">
      <!-- 上方Project导航 -->
      <nav class="page-nav">
        <RouterLink to="/project" class="nav-link">Project</RouterLink>
      </nav>
      
      <!-- Header组件 -->
      <div class="header">
        <!-- 左侧文字内容 -->
        <div class="content-left">
          <h1 class="title">Trust in Artificial Intelligence: Empowering Reliable Autonomous Vehicles and Other AI Technologies</h1>
          <p class="description">Empirical study of public trust in AI technologies, focusing on autonomous vehicles and their societal acceptance.</p>
        </div>
        
        <!-- 右侧图片 -->
        <div class="content-right">
          <div class="image-placeholder">
            <img src="../../assets/Project/03.png" alt="" class="project-img">
          </div>
        </div>
      </div>

      <div class="content-container">
        <p>This project delves into the psychological mechanisms underpinning public trust in AI technologies, investigating how diverse antecedents in today’s multifaceted media environment shape this trust. AI technologies, such as autonomous vehicles, hold transformative potential, promising significant benefits to society while simultaneously presenting unique risks and challenges. For instance, autonomous vehicles—already operational in Hong Kong and various global regions—may evoke concerns over traffic safety, which can undermine public trust and acceptance.</p>
        <p>Focusing initially on autonomous vehicles, the team aims to broaden the scope of research to encompass other AI applications, seeking to unravel their distinct trust dynamics. The ultimate objective is to contribute meaningful insights toward the design and development of trustworthy AI systems that address societal concerns and foster widespread adoption.</p>
        <p>To date, the research team has conducted a series of attitude surveys examining perceptions of autonomous vehicles in Hong Kong, Shenzhen, and Wuhan during 2022 and 2024. Findings reveal that nearly half of Hong Kong residents perceive autonomous driving technology as safe and express willingness to adopt it in the future. The surveys also identified five critical factors influencing public attitudes toward autonomous vehicles: efficiency, ease of use, safety, responsibility planning, and employment challenges.</p>
        <p>In October 2022, the CityU team surveyed 2,635 residents across Hong Kong and Shenzhen, followed by an additional survey involving 1,163 Wuhan residents in September 2024. Building on these foundational studies, the team is preparing to launch cross-national and cross-regional surveys to expand the understanding of trust in various AI technologies. This comprehensive approach aims to uncover commonalities and distinctions in trust mechanisms across contexts, paving the way for more inclusive and effective strategies to enhance public confidence in AI innovations.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 项目页面逻辑
</script>

<style scoped>
.trust-ai-page {
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
  .trust-ai-page {
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
  .trust-ai-page {
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