<script setup>
import { useRouter } from 'vue-router'
import Image5 from '../../assets/Research/05.png'
const router = useRouter()

// 导航函数
const navigateToResearch = () => {
  router.push('/research')
}

const navigateToInformationBehavior = () => {
  router.push('/research/information-behavior')
}
</script>

<template>
  <div class="project-page">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <span class="breadcrumb-item" @click="navigateToResearch">Research</span>
      <span class="breadcrumb-separator"> | </span>
      <span class="breadcrumb-item" @click="navigateToInformationBehavior">Information Behavior</span>
    </div>
    
    <!-- 页面标题 -->
    <h1 class="project-title">Media, Information and Behaviors</h1>
    
    <!-- 页面内容 -->
    <div class="project-content">
      
    </div>

    <div class="project-img">
      <img :src="Image5" alt="Project Image" class="project-img-item">
    </div>

    <div class="project-essay">
      We investigate how information or media content influence people’s attitudes, beliefs and behaviors during the crisis. Our research suggests that information attention or media exposure related to crisis would predict the public’s attitude toward related institutions and intentions of relative behaviors, such as vaccination intention, trust in institutions, and preventive behaviors (see Dai et al., 2022; Huang et al., 2024; Wang et al., 2021).
    </div>
    <div class="project-essay">
      Our recent papers examine how new media exposure predicts preventive behaviors during COVID-19 pandemic (Huang et al., 2024) and how the public evaluate the government COVID-19 response based on their information attention (Lu et al., 2024). 
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