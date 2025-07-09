<template>
  <div class="covid19-page">
    <div class="page-container">
      <!-- 上方Project导航 -->
      <nav class="page-nav">
        <RouterLink to="/project" class="nav-link">Project</RouterLink>
      </nav>
      
      <!-- Header组件 -->
      <div class="header">
        <!-- 左侧文字内容 -->
        <div class="content-left">
          <h1 class="title">COVID-19</h1>
          <p class="description">Multi-region analysis of institutional trust dynamics during COVID-19 and their impact on public behavior and policy compliance.</p>
        </div>
        
        <!-- 右侧图片 -->
        <div class="content-right">
          <div class="image-placeholder">
            <img src="../../assets/Project/04.png" alt="" class="project-img">
          </div>
        </div>
      </div>

      <div class="content-container">
        <p>The COVID-19 pandemic has resulted in a significant decline in public trust worldwide. Strong trust is the foundation upon which individuals cooperate, demonstrate solidarity, and place their faith in governments and public institutions. By contrasty, the lack of trust undermines institutional legitimacy and poses significant disadvantages.</p>
        <p>Despite growing recognition of trust's importance, our understanding of how the public reacts to trust deficits and the effects of trust-based strategies remains limited. Furthermore, the dynamics and pathways of public trust in various social and cultural contexts, particularly in crisis situations, are poorly understood.</p>
        <p>To understand these topics, we conducted longitudinal projects related to institutional trust during the COVID-19 pandemic, encompassing over 40,000 samples drawn from six regions (i.e., Chinese Mainland, Hong Kong, Taiwan, Singapore, the U.S., and UK), and observed changes in the public’s institutional trust over the past years.</p>
        <p>
          <b>Key research objectives include:</b> <br>
          <b>1.Information Dissemination and Media Effects During the Pandemic</b> Studies include conditional media effects, the impact of expert opinions in news coverage, and pathways between information acquisition and public behavior. <br>
          <b>2.Government-Public Relationships and Policy Impacts</b> Exploring how trust between governments and the public influences acceptance of pandemic policies, risk perceptions, and vaccination intentions.<br>
          <b>3.Impact of Misinformation and Miscommunication During the Pandemic</b> Research on fake news, information dissemination, and misinformation and their effects on individual behavior and public health. <br>
          <b>4.Changes in Social Psychology and Collective Behavior in the Context of the Pandemic</b> Includes studies on collectivism, psychological resilience, risk perceptions, and individual coping behaviors, with a focus on cross-cultural comparisons. <br>
          <b>5.Vaccine Acceptance and Promotion Strategies</b> Focuses on factors influencing vaccination uptake, such as risk perception, government policies, social trust, and psychological characteristics.This project offers a comprehensive framework that highlights the critical interplay between culture, communication, and policy in crisis management. By providing both theoretical foundations and practical insights, it equips stakeholders with multidimensional strategies to address global public health challenges effectively.
        </p>
  
      </div>
    </div>
  </div>
</template>

<script setup>
// 项目页面逻辑
</script>

<style scoped>
.covid19-page {
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
  .covid19-page {
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
  .covid19-page {
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