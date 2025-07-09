<script setup>
import { useRouter } from 'vue-router'
import Image5 from '../assets/Research/05.png'
import Image6 from '../assets/Research/06.png'

const router = useRouter()

// 导航到研究项目详情页
const navigateToProject = (projectPath) => {
  router.push(projectPath)
}
</script>

<template>
  <div class="information-behavior-exhibit">
    <div class="exhibit-left" @click="navigateToProject('/research/information-behavior/digital-media-behavior')">
      <div class="img">
        <img :src="Image5" alt="" class="project-img-item">
      </div>
      <div class="title">Media, Information and Behaviors</div>
    </div>
    <div class="exhibit-right" @click="navigateToProject('/research/information-behavior/health-information-literacy')">
      <div class="img">
        <img :src="Image6" alt="" class="project-img-item">
      </div>
      <div class="title">Information Management During Crisis Times</div>
    </div>
  </div>
  <div class="publications">
    <h2 class="publications-header">Publications</h2>
    <div class="publications-list">
      <div class="publications-item">Huang, Y. H. C., Liu, R., & Sun, J. (2024). Understanding the conditional media effects: trust, new media exposure, and preventive behaviors during the COVID-19 pandemic. Chinese Journal of Communication, 1-18. https://doi.org/10.1080/17544750.2024.2374269</div>
      <div class="publications-item">Lu, Y., Chen, X., Huang, Y. H. C., & Lin, F. (2024). Measuring up in a pandemic: information attention, source credibility, and public evaluation of the government COVID-19 response in mainland China. Chinese Journal of Communication, 17(2), 170-188. https://doi.org/10.1080/17544750.2023.2238316</div>
      <div class="publications-item">Zheng, H., Wang, X., & Huang, Y. H. (2023). Fake news in a time of plague: Exploring individuals’ online information management in the COVID-19 era. Computers in Human Behavior, 146, 107790. https://doi.org/10.1016/j.chb.2023.107790</div>
      <div class="publications-item">Dai, Y., Huang, Y. H. C., Jia, W., & Cai, Q. (2022). The paradoxical effects of institutional trust on risk perception and risk management in the Covid-19 pandemic: evidence from three societies. Journal of Risk Research, 25(11-12), 1337-1355. https://doi.org/10.1080/13669877.2022.2108122</div>
      <div class="publications-item">Liu, R., Huang, Y. H. C., Sun, J., Lau, J., & Cai, Q. (2022). A shot in the arm for vaccination intention: The media and the health belief model in three Chinese societies. International Journal of Environmental Research and Public Health, 19(6), 3705. https://doi.org/10.3390/ijerph19063705</div>
      <div class="publications-item">Wang, X., Huang, Y. H. C., & Cai, Q. (2022). Increasing vaccination: Psychological characteristics of COVID-19 vaccine advocates, converts, and resisters in Hong Kong. Vaccines, 10(10), 1744. https://doi.org/10.3390/vaccines10101744</div>
      <div class="publications-item">Wang, X., Huang, Y. H. C., Wu, Q., & Fong, I. W. Y. (2021). Exploring the effects of instructional message strategies on risk perceptions and behavioral intentions: the case of a substandard vaccine incident. SAGE Open, 11(4), 21582440211061525. https://doi.org/10.1177/21582440211061525</div>
      <div class="publications-item">Zheng, H., Wang, X., & Huang, Y. H. (2023). Fake news in a time of plague: Exploring individuals’ online information management in the COVID-19 era. Computers in Human Behavior, 146, 107790.</div>
      <div class="publications-item">Wang, X., Zheng, H., & Huang, C. Y. H. (2023). Examining the pathways from information acquisition to preventive behaviors: the information-response model. Science Communication, 45(6), 724-750.</div>
      <div class="publications-item">Liu, R., Huang, Y. H. C., & Sun, J. (2024). The Media-Mediated Model of Information Seeking Behavior: A Proposed Framework in the Chinese Culture During the COVID Pandemic. Health Communication, 1-12.</div>
    </div>
  </div>
</template>

<style scoped>
.information-behavior-exhibit {
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
  .information-behavior-exhibit {
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
  .information-behavior-exhibit {
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
  .information-behavior-exhibit {
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