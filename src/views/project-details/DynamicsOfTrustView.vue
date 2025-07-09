<template>
  <div class="dynamics-trust-page">
    <div class="page-container">
      <!-- 上方Project导航 -->
      <nav class="page-nav">
        <RouterLink to="/project" class="nav-link">Project</RouterLink>
      </nav>
      
      <!-- Header组件 -->
      <div class="header">
        <!-- 左侧文字内容 -->
        <div class="content-left">
          <h1 class="title">Dynamics of Trust: Navigating Institutional Trust in Crisis Contexts</h1>
          <p class="description">Longitudinal investigation of how institutional trust evolves during crises across cultures using the Situational Trust Dynamics Model.</p>
        </div>
        
        <!-- 右侧图片 -->
        <div class="content-right">
          <div class="image-placeholder">
            <img src="../../assets/Project/02.png" alt="" class="project-img">
          </div>
        </div>
      </div>

      <div class="content-container">
        <p>This study explores the evolution of institutional trust during crises across Chinese and Western societies, introducing the Situational Trust Dynamics Model (STDM). The project seeks to understand how trust is built, maintained, or eroded under crisis-specific conditions, including risk perception, cultural differences, and crisis responsibility attribution. By investigating these dynamics, the study aims to provide actionable insights for fostering institutional trust, enhancing organizational resilience, and promoting prosocial behavior.</p>
        <p>Through innovative methodologies such as longitudinal surveys, experiments, and AI-powered predictive tools, this research delivers a comprehensive analysis of trust dynamics. It identifies four distinct institutional trust trajectories—resilient trustors, tentative converters, cautious progressors, and persistent distrusters—based on the PI’s ongoing studies in the COVID-19 context. Additionally, the project evaluates trust impacts at multiple levels: individual resilience, institutional reputation, and societal cooperation, offering a multidimensional perspective on the implications of trust during crises.</p>
        <p>The study also represents a methodological breakthrough, employing a longitudinal mixed-method approach that integrates quantitative and qualitative tools to examine institutional trust and develop trust cultivation strategies. Leveraging Large Language Models (LLMs), it explores the predictive capabilities of AI in forecasting public opinion and trust dynamics, helping institutions better prepare for future crises. These insights aim to inform policymakers, researchers, and organizations about effective ways to navigate trust-building in diverse cultural and situational contexts.</p>
        <p>By addressing critical questions about the mechanisms, influences, and applications of trust, the project sets a foundation for advancing research and practice in crisis communication and public trust. The findings will provide a vital resource for understanding and managing trust in an increasingly interconnected and uncertain world.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 项目页面逻辑
</script>

<style scoped>
.dynamics-trust-page {
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
  .dynamics-trust-page {
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
  .dynamics-trust-page {
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