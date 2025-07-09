<script setup>
import { useRouter } from 'vue-router'
import Image8 from '../../assets/Research/08.png'
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
    <h1 class="project-title">The studies collectively explore the complex interplay between cultural values, trust, and behavior, particularly in Chinese societies, while drawing comparisons with Western contexts like the US. </h1>
    
    <!-- 页面内容 -->
    <div class="project-content">
      
    </div>

    <div class="project-img">
      <img :src="Image8" alt="Project Image" class="project-img-item">
    </div>

    <div class="project-essay">
      One study examines how cultural values, such as collectivism and individualism, influence the adoption of containment measures during COVID-19. By reconceptualizing collectivism as a context-sensitive construct, the research demonstrates that institutional trust mediates the relationship between cultural values and health behaviors in both China and the US. The findings reveal that individuals with collectivistic tendencies, prevalent in Chinese culture, are more likely to adopt measures like mask-wearing, driven by trust in public institutions. This dynamic underscores the cultural specificity of trust and its role in shaping public health compliance.
    </div>
    <div class="project-essay">
      Another study critiques the dominance of Western-centric theories in public relations and strategic communication, arguing for the importance of focusing on Greater China. The region's rapid economic growth and unique cultural context necessitate localized research to address emerging challenges in communication management. This call for cultural sensitivity in academic research aligns with the development of theoretical frameworks that better capture the nuances of Chinese societies.
      <br>
      Building on this, the relational orientation framework offers a fresh perspective on understanding psychological and social behaviors in Chinese societies. Moving beyond the limitations of individualist-collectivist paradigms, this framework emphasizes the relational dynamics that shape interactions within Chinese cultural contexts. It highlights the importance of structural and relational factors, providing a more nuanced lens to explore agency and social exchange in these societies.
      <br>
      One study on information-seeking behavior during health crises proposes a media-mediated model that integrates individual experiences and media dynamics. Survey data from Mainland China, Hong Kong, and Taiwan reveal how media serves as a critical mediator, shaping public engagement and trust in crises. These findings emphasize the interplay between culture, media, and behavior, offering valuable insights into crisis communication strategies tailored to Chinese societies while enabling meaningful comparisons with global contexts.
      <br>
      Together, these studies weave a rich narrative about the cultural underpinnings of trust, communication, and behavior, with a central focus on the distinctive features of Chinese societies and their comparison with Western models.
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