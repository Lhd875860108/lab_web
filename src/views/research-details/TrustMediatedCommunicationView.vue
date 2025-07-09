<script setup>
import { useRouter } from 'vue-router'
import Image1 from '../../assets/Research/01.png'


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
    <h1 class="project-title">Trust-mediated Communication: The Interaction Code among Government, Risk and Society</h1>
    
    <!-- 页面内容 -->
    <div class="project-content">
      <!-- 可以在这里添加更多页面内容 -->
    </div>

    <div class="project-img">
      <img :src="Image1" alt="" class="project-img-item"> 
    </div>

    <div class="project-essay">
      Trust refers to the willingness of one party to believe that the other will act in the expected way even when the latter's behavior is uncertain. In a communication context, it implies the existence of a trust foundation among the communicating parties, which influences the transmission, reception and understanding of information. In crisis and risk events, trust in institutions plays a crucial role in the communication process. For instance, trust in risk management institutions is regarded as a cost-effective measure that has assisted both authorities and citizens in combating the pandemic (Bronfman et al., 2008).
    </div>
    <div class="project-essay">
      Our research explores the trust-mediated communication model, especially government trust in risk communication. Our study discovered that satisfaction and trust in government agencies mediate the impact of responsiveness on the intention of word-of-mouth regarding vaccines (Wang et al., 2022). The results of our model comparison indicated that if the public perceives the government as responsive, they are more likely to be satisfied with and trust the government, which then prompts them to assist in promoting vaccines.
      <br>
      Moreover, trust in the government can either amplify or attenuate risk perception and management in different societies (Dai et al., 2022). Specifically, different aspects of institutional trust, namely ability-based trust and benevolence-based trust, were found to mediate the influence of media attention on risk perception and risk management in various societies. While both dimensions served as significant mediators in Taiwan, benevolence-based trust and ability-based trust were the sole mediators in Mainland China and Hong Kong, respectively.
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