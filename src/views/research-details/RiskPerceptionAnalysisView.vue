<script setup>
import { useRouter } from 'vue-router'
import Image4 from '../../assets/Research/04.png'
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
    <h1 class="project-title">Trust and Risk: Insights from Technology Risk Communication</h1>
    
    <!-- 页面内容 -->
    <div class="project-content">
      
    </div>

    <div class="project-img">
      <img :src="Image4" alt="Project Image" class="project-img-item">
    </div>

    <div class="project-essay">
      In modern societies, public trust in regulatory authorities plays a crucial role in managing technology-related risks. Huang et al. (2021) explored this dynamic through a comparative study of food safety risks in post-Fukushima food imports across Hong Kong, Mainland China, and Taiwan. The study found that trust in regulators indirectly influenced individuals’ risk acceptance and behavioral intentions through both cognitive and affective risk perceptions. Notably, risk acceptance was a more prominent mediator in Mainland China, whereas risk perception played a larger role in Hong Kong and Taiwan. These findings underscore the importance of tailoring risk communication strategies to specific political and cultural contexts (Huang et al., 2021).
    </div>
    <div class="project-essay">
      Building on the role of information in risk management, Wang, Zheng, and Huang (2023) proposed an information-response model that demonstrates how individuals process and act upon risk-related information. Their research revealed that acquiring information influences perceived risk, efficacy, emotional responses, and preventive behaviors. Trust in the information source enhances the utility of information, further promoting behavioral changes. This study highlights the critical role of instrumental factors in transforming information into meaningful preventive actions during crises (Wang et al., 2023).
      <br>
      Finally, Huang (2001) developed the Organization-Public Relationship Assessment (OPRA) scale, providing a framework for measuring trust and relationship quality between organizations and their publics. The OPRA scale has since been used to assess cross-cultural variations in public relationships, offering valuable insights for public relations strategies in managing risk and crisis communication. Together, these studies reveal that trust, risk perception, and information acquisition are central to effective technology risk management (Huang, 2001).
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