<script setup>
import { useRouter } from 'vue-router'
import Image7 from '../../assets/Research/07.png'
const router = useRouter()

// 导航函数
const navigateToResearch = () => {
  router.push('/research')
}

const navigateToStrategicComCulture = () => {
  router.push('/research/strategic-com-culture')
}
</script>

<template>
  <div class="project-page">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <span class="breadcrumb-item" @click="navigateToResearch">Research</span>
      <span class="breadcrumb-separator"> | </span>
      <span class="breadcrumb-item" @click="navigateToStrategicComCulture">Strategic Com & Culture</span>
    </div>
    
    <!-- 页面标题 -->
    <h1 class="project-title">Building Trust in a Complex World: Advancing Public Relations Research</h1>
    
    <!-- 页面内容 -->
    <div class="project-content">
      
    </div>

    <div class="project-img">
      <img :src="Image7" alt="Project Image" class="project-img-item">
    </div>

    <div class="project-essay">
      In an increasingly interconnected and dynamic global environment, public relations play a critical role in shaping and maintaining relationships between organizations and their stakeholders. In today’s world, where crises emerge rapidly and trust in institutions is often fragile, the need for effective public relations strategies grounded in research has never been greater. Despite its significance, the field has long grappled with questions about how to foster trust, sustain commitment, and effectively navigate cultural differences in communication.
    </div>
    <div class="project-essay">
      Professor Yi-Hui Christine Huang’s research group has been at the forefront of addressing these pressing challenges. Their work on public relations models in an international context (Grunig et al., 1995) highlights the complexity of applying traditional frameworks across diverse cultural settings, underscoring the importance of adaptability in global communication. Recognizing the need for precise measurement tools, the group developed the OPRA scale—a cross-cultural, multiple-item instrument for assessing organization-public relationships (Y.-H. Huang, 2001a). This contribution is invaluable for both researchers and practitioners striving to evaluate and improve relational quality.
      <br>
      Trust and relational commitment—essential components of strong organizational relationships—have been central to their research. By demonstrating how these values influence organizational outcomes (Y.-H. Huang, 2001b) and examining their dynamics in corporate communication (Y.-H. Huang, 2008), the group has provided actionable insights for organizations seeking to build and sustain trust, especially in uncertain environments.
      <br>
      Their research also delves deeply into crisis communication, where cultural considerations are also vital. They examined how communication strategies during crises impact public trust and organizational reputation across different cultural settings (Y.-H. Huang, 2006; Y.-H. C. Huang et al., 2016). These findings underscore the importance of culturally tailored crisis responses in maintaining trust and safeguarding organizational reputation.
      <br>
      Through these diverse and impactful studies, Christine’s research group has become a leader in advancing the understanding of public relations strategies across cultures. By integrating insights from communication theories, crisis management and cross-cultural psychology, they offer a holistic framework for navigating the complexities of global public relations. Their work not only enriches academic discourse but also provides organizations with the tools to build trust, foster resilience, and effectively engage with stakeholders in a culturally diverse world.
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