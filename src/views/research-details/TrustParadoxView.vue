<script setup>
import { useRouter } from 'vue-router'
import Image2 from '../../assets/Research/02.png'

const router = useRouter()

// 导航函数
const navigateToResearch = () => {
  router.push('/research')
}

const navigateToTrust = () => {
  router.push('/research/trust')
}
</script>

<template>
  <div class="project-page">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <span class="breadcrumb-item" @click="navigateToResearch">Research</span>
      <span class="breadcrumb-separator"> | </span>
      <span class="breadcrumb-item" @click="navigateToTrust">Trust</span>
    </div>
    
    <!-- 页面标题 -->
    <h1 class="project-title">The Trust Paradox: Unraveling Its Impact on Crisis Communication and Public Behavior</h1>
    
    <!-- 页面内容 -->
    <div class="project-content">
      <!-- 可以在这里添加更多页面内容 -->
    </div>

    <div class="project-img">
      <img :src="Image2" alt="Project Image" class="project-img-item">
    </div>

    <div class="project-essay">
      The trust paradox refers to the complex and often contradictory effects of institutional trust on public attitudes and behaviors. While trust in institutions is generally viewed as essential for effective crisis management, it can lead to divergent outcomes depending on the type and context of trust. Our research has examined this paradox across various scenarios, including the COVID-19 pandemic and Japan's nuclear wastewater discharge, revealing how trust operate in crisis communication and risk management.
    </div>
    <div class="project-essay">
      In the COVID-19 context, we explored how institutional trust influences public risk perception and risk management behaviors across Hong Kong, Taiwan, and Mainland China (Dai et al., 2022). The study highlighted the nuanced roles of ability-based trust (trust in competence and effectiveness) and benevolence-based trust (trust in goodwill and care). Our findings revealed a paradoxical pattern: benevolence-based trust heightened public risk perception, while ability-based trust reduced it. This duality underscores the importance of cultural context in shaping how trust impacts public health behaviors, such as vaccination intentions. These insights emphasize the need for tailored public health communication strategies that leverage the strengths of benevolence-based trust to foster constructive risk perception while maintaining confidence in institutional competence.
      <br>
      During Japan's Fukushima nuclear wastewater discharge, we assessed the interplay of dialogic communication, institutional trust (ability and benevolence dimensions), and public engagement in preventive behaviors. The findings revealed that dialogic communication fosters institutional trust across both dimensions. However, the trust paradox emerged again: ability-based trust was negatively associated with preventive behaviors, whereas benevolence-based trust showed a positive association. Cross-cultural comparisons further illuminated the context-specific dynamics of the trust paradox, offering critical insights into how openness and mutuality in communication can build trust and shape public behavior.
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