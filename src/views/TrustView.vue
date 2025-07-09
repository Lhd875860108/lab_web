<script setup>
import { useRouter } from 'vue-router'
import Image1 from '../assets/Research/01.png'
import Image2 from '../assets/Research/02.png'
const router = useRouter()

// 导航到研究项目详情页
const navigateToProject = (projectPath) => {
  router.push(projectPath)
}
</script>

<template>
  <div class="trust-exhibit">
    <div class="exhibit-left" @click="navigateToProject('/research/trust/trust-mediated-communication')">
      <div class="img">
        <img :src="Image1" alt="" class="project-img-item"> 
      </div>
      <div class="title">Trust-mediated Communication: The Interaction Code among Government, Risk and Society</div>
    </div>
    <div class="exhibit-right" @click="navigateToProject('/research/trust/trust-paradox')">
      <div class="img">
        <img :src="Image2" alt="" class="project-img-item"> 
      </div>
      <div class="title">The Trust Paradox: Unraveling Its Impact on Crisis Communication and Public Behavior</div>
    </div>
  </div>
  <div class="publications">
    <h2 class="publications-header">Publications</h2>
    <div class="publications-list">
      <div class="publications-item">Dai, Y., Huang, Y.-H. C., Jia, W., & Cai, Q. (2022). The paradoxical effects of institutional trust on risk perception and risk management in the Covid-19 pandemic: evidence from three societies. Journal of risk research, 25(11-12), 1337-1355. https://doi.org/10.1080/13669877.2022.2108122</div>
      <div class="publications-item">Wang, Y., Huang, Y.-H. C., & Cai, Q. (2022). Exploring the mediating role of government–public relationships during the COVID-19 pandemic: A model comparison approach. Public Relations Review, 48(4), 102231. https://doi.org/https://doi.org/10.1016/j.pubrev.2022.102231</div>
    </div>
  </div>
</template>

<style scoped>
.trust-exhibit {
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
  padding: 0 3rem;
}

.exhibit-left,
.exhibit-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  /* border-radius: 8px; */
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e0e0e0;
  cursor: pointer;
}

.exhibit-left:hover,
.exhibit-right:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.img {
  width: 100%;
  height: 200px;
  background-color: #ccc;
  margin-bottom: 1.5rem;
}

.project-img-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  padding: 0 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.text {
  padding: 0 1.5rem 1.5rem 1.5rem;
  font-size: 0.9rem;
  color: #ec5a2e;
  line-height: 1.5;
  font-weight: 500;
}

.publications {
  margin-top: 2rem;
  padding: 2rem 3rem;
  /* border-top: 1px solid #e0e0e0; */
}

.publications-header {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  text-align: left;
}

.publications-list {
  display: flex;
  flex-direction: column;
}

.publications-item {
  padding: 1.5rem 2rem;
  color: #555;
  line-height: 1.6;
  font-size: 0.95rem;
  border-bottom: 1px solid #d0d0d0;
  text-align: justify;
  font-weight: bold;
}

.publications-item:last-child {
  border-bottom: none;
}

/* 响应式布局 - 平板端 */
@media screen and (max-width: 1024px) {
  .trust-exhibit {
    gap: 2rem;
    padding: 0 2rem;
  }
  
  .img {
    height: 160px;
  }
  
  .title {
    font-size: 1rem;
    padding: 0 1.2rem;
  }
  
  .text {
    padding: 0 1.2rem 1.2rem 1.2rem;
    font-size: 0.85rem;
  }
  
  .publications {
    padding: 2rem;
  }
  
  .publications-header {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
  
  .publications-item {
    padding: 1.2rem 0;
    font-size: 0.9rem;
  }
}

/* 响应式布局 - 移动端 */
@media screen and (max-width: 768px) {
  .trust-exhibit {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  .img {
    height: 140px;
  }
  
  .title {
    font-size: 0.95rem;
    padding: 0 1rem;
    margin-bottom: 0.8rem;
  }
  
  .text {
    padding: 0 1rem 1rem 1rem;
    font-size: 0.8rem;
  }
  
  .publications {
    padding: 1.5rem 1rem;
  }
  
  .publications-header {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
  
  .publications-item {
    padding: 1rem 0;
    font-size: 0.85rem;
  }
}

/* 响应式布局 - 小屏幕移动端 */
@media screen and (max-width: 480px) {
  .trust-exhibit {
    gap: 1rem;
    padding: 0 0.5rem;
  }
  
  .img {
    height: 120px;
  }
  
  .title {
    font-size: 0.9rem;
    padding: 0 0.8rem;
  }
  
  .text {
    padding: 0 0.8rem 0.8rem 0.8rem;
    font-size: 0.75rem;
  }
  
  .publications {
    padding: 1rem 0.5rem;
  }
  
  .publications-header {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .publications-item {
    padding: 0.8rem 0;
    font-size: 0.8rem;
    line-height: 1.5;
  }
}
</style> 