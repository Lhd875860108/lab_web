<script setup>
import { useRouter } from 'vue-router'
import Image3 from '../../assets/Research/03.png'
const router = useRouter()

// 导航函数
const navigateToResearch = () => {
  router.push('/research')
}

const navigateToRisk = () => {
  router.push('/research/risk')
}
</script>

<template>
  <div class="project-page">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <span class="breadcrumb-item" @click="navigateToResearch">Research</span>
      <span class="breadcrumb-separator"> | </span>
      <span class="breadcrumb-item" @click="navigateToRisk">Risk</span>
    </div>
    
    <!-- 页面标题 -->
    <h1 class="project-title">Navigating Risk Perception in Health Crises: Media, Trust, Emotions, and Cultural Dynamics </h1>
    
    <!-- 页面内容 -->
    <div class="project-content">
      
    </div>

    <div class="project-img">
      <img :src="Image3" alt="Project Image" class="project-img-item">
    </div>

    <div class="project-essay">
      Professor Huang’s research explores how individuals perceive and respond to risks during health crises, focusing on the roles of emotions, institutional trust, media influence, and cultural contexts. By examining these factors, the studies aim to uncover their impact on health behaviors and crisis responses, providing a comprehensive understanding of human behavior in high-stakes situations.
    </div>
    <div class="project-essay">
      A central theme in this research is the influence of media and trust on risk perception and its behavioral outcomes. Liu et al. (2022) show that media exposure and Health Belief Model constructs, such as perceived severity and susceptibility, significantly shape vaccination intentions, with media trust moderating these effects. Similarly, Dai et al. (2022) highlight the pivotal role of institutional trust in health behaviors, noting its capacity to heighten or diminish risk perceptions across diverse regions like Mainland China, Hong Kong, and Taiwan.
      <br>
      Emotional mechanisms are another key focus. Wu et al. (2022) validate a tripartite model comprising cognitive, affective, and experiential components that collectively predict behavioral outcomes. Wang et al. (2021) reveal that instructional communication strategies can influence both emotional and cognitive perceptions of vaccine-related risks, boosting public trust and vaccine acceptance. Further, Lu and Huang (2023) discuss how individuals’ emotions impact the cognitive processing of crisis information, providing organizations with strategies to manage collective emotions effectively.
      <br>
      Cultural contexts also play a critical role in shaping risk perception. Huang et al. (2022) demonstrate that pandemic severity in different countries/regions moderates the relationship between risk experiences and psychological outcomes, revealing culturally specific resilience factors. Dai et al. (2022) emphasize the variability of trust in government and media across societies, advocating for culturally tailored communication strategies. Li et al. (2024) highlight how nationalist sentiments in China amplify trust in government, motivating compliance with state-led vaccination campaigns.
      <br>
      This body of work significantly advances the understanding of risk perception during health crises. By integrating insights into media, trust, emotions, and cultural influences, these studies offer actionable strategies to enhance risk communication, build public trust, and design effective interventions for future crises.
    </div>
  </div>
</template>

<style scoped>
.project-page {
  width: 100%;
  min-height: 100vh;
  padding: 4rem 10rem;
}

.breadcrumb {
  margin-bottom: 2rem;
  font-size: 1rem;
}

.breadcrumb-item {
  color: #ec5a2e;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;
}

.breadcrumb-item:hover {
  color: #bf165e;
  text-decoration: underline;
}

.breadcrumb-separator {
  color: #ec5a2e;
  margin: 0 0.5rem;
  font-weight: 500;
}

.project-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
  line-height: 1.4;
  margin-bottom: 1.5rem;
}

.project-content {
  margin-top: 2rem;
}

.project-subtitle {
  font-size: 1.1rem;
  color: #ec5a2e;
  font-weight: 500;
  line-height: 1.5;
}

.project-img {
  width: 100%;
  height: 400px;
  background-color: #ccc;
  margin: 3rem 0;
  border-radius: 8px;
}

.project-img-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-essay {
  margin-bottom: 2rem;
  color: #333;
  line-height: 1.8;
  font-size: 1rem;
  text-align: justify;
}

/* 响应式布局 - 平板端 */
@media screen and (max-width: 1024px) {
  .project-page {
    padding: 3rem 5rem;
  }
  
  .project-title {
    font-size: 2rem;
  }
  
  .breadcrumb {
    font-size: 0.9rem;
  }
  
  .project-subtitle {
    font-size: 1rem;
  }
  
  .project-img {
    height: 320px;
    margin: 2.5rem 0;
  }
  
  .project-essay {
    font-size: 0.95rem;
    margin-bottom: 1.8rem;
  }
}

/* 响应式布局 - 移动端 */
@media screen and (max-width: 768px) {
  .project-page {
    padding: 2rem;
  }
  
  .project-title {
    font-size: 1.8rem;
  }
  
  .breadcrumb {
    font-size: 0.85rem;
  }
  
  .project-subtitle {
    font-size: 0.95rem;
  }
  
  .project-img {
    height: 250px;
    margin: 2rem 0;
  }
  
  .project-essay {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
}

/* 响应式布局 - 小屏幕移动端 */
@media screen and (max-width: 480px) {
  .project-page {
    padding: 1.5rem;
  }
  
  .project-title {
    font-size: 1.6rem;
  }
  
  .breadcrumb {
    font-size: 0.8rem;
  }
  
  .breadcrumb-separator {
    margin: 0 0.3rem;
  }
  
  .project-subtitle {
    font-size: 0.9rem;
  }
  
  .project-img {
    height: 200px;
    margin: 1.5rem 0;
  }
  
  .project-essay {
    font-size: 0.85rem;
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }
}
</style> 