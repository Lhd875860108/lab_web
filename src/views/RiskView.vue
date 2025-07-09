<script setup>
import { useRouter } from 'vue-router'
import Image3 from '../assets/Research/03.png'
import Image4 from '../assets/Research/04.png'

const router = useRouter()

// 导航到研究项目详情页
const navigateToProject = (projectPath) => {
  router.push(projectPath)
}
</script>

<template>
  <div class="risk-exhibit">
    <div class="exhibit-left" @click="navigateToProject('/research/risk/risk-communication-framework')">
      <div class="img">
        <img :src="Image3" alt="" class="project-img-item"> 
      </div>
      <div class="title">Navigating Risk Perception in Health Crises: Media, Trust, Emotions, and Cultural Dynamics </div>
    </div>
    <div class="exhibit-right" @click="navigateToProject('/research/risk/risk-perception-analysis')">
      <div class="img">
        <img :src="Image4" alt="" class="project-img-item"> 
      </div>
      <div class="title">Trust and Risk: Insights from Technology Risk Communication</div>
    </div>
  </div>
  <div class="publications">
    <h2 class="publications-header">Publications</h2>
    <div class="publications-list">
      <div class="publications-item">Dai, Y., Huang, Y. H. C., Jia, W., & Cai, Q. (2022). The paradoxical effects of institutional trust on risk perception and risk management in the Covid-19 pandemic: evidence from three societies. Journal of Risk Research, 25(11-12), 1337-1355.</div>
      <div class="publications-item">Huang, Y. H. C., Sun, J., Liu, R., Lau, J., & Cai, Q. (2022). Country/Region Level Pandemic Severity Moderates the Relationships among Risk Experience, Perceived Life Satisfaction, and Psychological Distress in COVID-19. International Journal of Environmental Research and Public Health, 19(24), 16541.</div>
      <div class="publications-item">Li, J., Liu, R., & Huang, Y. H. C. (2024). Rallying around the vaccine: how state-level risk perceptions and nationalism motivate public acceptance of immunization program. Journal of Risk Research, 1-17.</div>
      <div class="publications-item">Liu, R., Huang, Y. H. C., Sun, J., Lau, J., & Cai, Q. (2022). A shot in the arm for vaccination intention: The media and the health belief model in three Chinese societies. International Journal of Environmental Research and Public Health, 19(6), 3705.</div>
      <div class="publications-item">Lu, Y., & Huang, Y. H. C. (2023). 8 Emotions in Risk and Crisis Communication: An Individual and Networked Perspective. Communicating Risk and Safety, 24, 123.</div>
      <div class="publications-item">Wang, X., Huang, Y. H. C., Wu, Q., & Fong, I. W. Y. (2021). Exploring the effects of instructional message strategies on risk perceptions and behavioral intentions: the case of a substandard vaccine incident. SAGE Open, 11(4), 21582440211061525.</div>
      <div class="publications-item">Wu, Q., Wang, X., & Huang, Y. H. C. (2022). Risk Perceptions Following a Substandard Vaccine Crisis in China: An Exploratory Approach to Substantiating the Tripartite Model. In Crisis Management-Principles, Roles and Application. IntechOpen.</div>
      <div class="publications-item">Huang, Y., Wang, X., Fong, I. W., & Wu, Q. (2021). Examining the role of trust in regulators in food safety risk assessment: A cross-regional analysis of three Chinese societies using an integrative framework. SAGE Open, https://dx.doi.org/10.1177/21582440211061579.</div>
      <div class="publications-item">Wang, X., Zheng, H., & Huang, C. Y.-H. (2023). Examining the pathways from information acquisition to preventive behaviors: The information-response model. Science Communication, https://dx.doi.org/10.1177/10755470231204317.</div>
      <div class="publications-item">Huang, Y. (2001). OPRA: A cross-cultural, multiple-item scale for measuring organization-public relationships. Journal of Public Relations Research, https://dx.doi.org/10.1207/S1532754XJPRR1301_4.</div>
    </div>
  </div>
</template>

<style scoped>
.risk-exhibit {
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
  .risk-exhibit {
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
  .risk-exhibit {
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
  .risk-exhibit {
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