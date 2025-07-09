<script setup>
import { useRouter } from 'vue-router'
import Image7 from '../assets/Research/07.png'
import Image8 from '../assets/Research/08.png'

const router = useRouter()

// 导航到研究项目详情页
const navigateToProject = (projectPath) => {
  router.push(projectPath)
}
</script>

<template>
  <div class="strategic-com-culture-exhibit">
    <div class="exhibit-left" @click="navigateToProject('/research/strategic-com-culture/cultural-communication-strategies')">
      <div class="img">
        <img :src="Image7" alt="" class="project-img-item">
      </div>
      <div class="title">Building Trust in a Complex World: Advancing Public Relations Research</div>
    </div>
    <div class="exhibit-right" @click="navigateToProject('/research/strategic-com-culture/organizational-culture-communication')">
      <div class="img">
        <img :src="Image8" alt="" class="project-img-item">
      </div>
      <div class="title">The studies collectively explore the complex interplay between cultural values, trust, and behavior, particularly in Chinese societies, while drawing comparisons with Western contexts like the US. </div>
    </div>
  </div>
  <div class="publications">
    <h2 class="publications-header">Publications</h2>
    <div class="publications-list">
      <div class="publications-item">Grunig, J. E., Grunig, L. A., Sriramesh, K., Huang, Y.-H., & Lyra, A. (1995). Models of Public Relations in an International Setting. Journal of Public Relations Research, 7(3), 163–186. https://doi.org/10.1207/s1532754xjprr0703_01</div>
      <div class="publications-item">Huang, Y.-H. (2001a). OPRA: A Cross-Cultural, Multiple-Item Scale for Measuring Organization-Public Relationships. Journal of Public Relations Research, 13(1), 61–90. https://doi.org/10.1207/S1532754XJPRR1301_4</div>
      <div class="publications-item">Huang, Y.-H. (2001b). Values of Public Relations: Effects on Organization-Public Relationships Mediating Conflict Resolution. Journal of Public Relations Research, 13(4), 265–301. https://doi.org/10.1207/S1532754XJPRR1304_01</div>
      <div class="publications-item">Huang, Y.-H. (2006). Crisis Situations, Communication Strategies, and Media Coverage: A Multicase Study Revisiting the Communicative Response Model. Communication Research, 33(3), 180–205. https://doi.org/10.1177/0093650206287077</div>
      <div class="publications-item">Huang, Y.-H. (2008). Trust and Relational Commitment in Corporate Crises: The Effects of Crisis Communicative Strategy and Form of Crisis Response. Journal of Public Relations Research, 20(3), 297–327. https://doi.org/10.1080/10627260801962830</div>
      <div class="publications-item">Huang, Y.-H. C., Wu, F., & Cheng, Y. (2016). Crisis communication in context: Cultural and political influences underpinning Chinese public relations practice. Public Relations Review, 42(1), 201–213.</div>
      <div class="publications-item">Huang, Y. H., Bedford, O., & Zhang, Y. (2018). The relational orientation framework for examining culture in Chinese societies. Culture & Psychology, 24(4), 477-490.</div>
      <div class="publications-item">Huang, Y. H. C., Liu, R., & Liu, Y. (2024). A context‐sensitive collectivism during the COVID‐19 pandemic: Effect on the adoption of containment measures in China and the US. International Journal of Psychology, 59(6), 994-1002.</div>
      <div class="publications-item">Huang, Y. H. C., & Kim, S. (2018). Cultures of crisis response: Chinese public relations practices in context. Chinese Journal of Communication, 11(1), 1-4.</div>
      <div class="publications-item">Liu, R., Huang, Y. H. C., & Sun, J. (2024). The Media-Mediated Model of Information Seeking Behavior: A Proposed Framework in the Chinese Culture During the COVID Pandemic. Health Communication, 1-12.</div>
    </div>
  </div>
</template>

<style scoped>
.strategic-com-culture-exhibit {
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
  .strategic-com-culture-exhibit {
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
  .strategic-com-culture-exhibit {
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
  .strategic-com-culture-exhibit {
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