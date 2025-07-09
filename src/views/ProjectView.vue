<script setup>
    import Image1 from "../assets/Project/01.png";
    import Image2 from "../assets/Project/02.png";
    import Image3 from "../assets/Project/03.png";
    import Image4 from "../assets/Project/04.png";
</script>

<template>
  <div class="project-page">
    <div class="page-container">
      <!-- 页面标题 -->
      <h1 class="project-main-title">Project</h1>
      
      <!-- 项目卡片网格 -->
      <div class="project-grid">
        <!-- 福岛核废水危机项目 -->
        <div class="project-card">
          <div class="card-image">
            <img :src="Image1" alt="" class="project-img">
          </div>
          <div class="card-content">
            <h3 class="card-title">The 2023 Fukushima Nuclear Waste Crisis: A Multidisciplinary Research Agenda</h3>
            <p class="card-description">Cross-national study of how media, risk perception, and trust shaped public responses to the Fukushima nuclear wastewater crisis.</p>
            <RouterLink to="/project/fukushima-nuclear-waste" class="learn-more-btn">Learn More</RouterLink>
          </div>
        </div>

        <!-- 信任动态项目 -->
        <div class="project-card">
          <div class="card-image">
            <img :src="Image2" alt="" class="project-img">
          </div>
          <div class="card-content">
            <h3 class="card-title">Dynamics of Trust: Navigating Institutional Trust in Crisis Contexts</h3>
            <p class="card-description">Longitudinal investigation of how institutional trust evolves during crises across cultures using the Situational Trust Dynamics Model.</p>
            <RouterLink to="/project/dynamics-of-trust" class="learn-more-btn">Learn More</RouterLink>
          </div>
        </div>

        <!-- AI信任项目 -->
        <div class="project-card">
          <div class="card-image">
            <img :src="Image3" alt="" class="project-img">
          </div>
          <div class="card-content">
            <h3 class="card-title">Trust in Artificial Intelligence: Empowering Reliable Autonomous Vehicles and Other AI Technologies</h3>
            <p class="card-description">Empirical study of public trust in AI technologies, focusing on autonomous vehicles and their societal acceptance.</p>
            <RouterLink to="/project/trust-in-ai" class="learn-more-btn">Learn More</RouterLink>
          </div>
        </div>

        <!-- COVID-19项目 -->
        <div class="project-card">
          <div class="card-image">
            <img :src="Image4" alt="" class="project-img">
          </div>
          <div class="card-content">
            <h3 class="card-title">COVID-19</h3>
            <p class="card-description">Multi-region analysis of institutional trust dynamics during COVID-19 and their impact on public behavior and policy compliance.</p>
            <RouterLink to="/project/covid-19" class="learn-more-btn">Learn More</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-page {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 3rem 0;
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.project-main-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ec5a2e;
  text-align: left;
  margin-bottom: 3rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.project-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #ec5a2e;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 250px;
  background-color: #ccc;
  width: 100%;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  background-color: #ec5a2e;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
}

.card-title {
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.4;
  margin: 0;
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-description {
  color: white;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.learn-more-btn {
  background-color: white;
  color: #ec5a2e;
  padding: 0.7rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  align-self: center;
  margin-top: auto;
}

.learn-more-btn:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(236, 90, 46, 0.3);
}

/* 响应式布局 */
@media screen and (max-width: 1024px) {
  .page-container {
    padding: 0 1.5rem;
  }
  
  .project-main-title {
    font-size: 2.2rem;
  }
  
  .project-grid {
    gap: 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .project-page {
    padding: 2rem 0;
  }
  
  .page-container {
    padding: 0 1rem;
  }
  
  .project-main-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .project-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .card-title {
    font-size: 1.2rem;
    min-height: 3rem;
  }
}

@media screen and (max-width: 480px) {
  .project-page {
    padding: 1.5rem 0;
  }
  
  .page-container {
    padding: 0 0.8rem;
  }
  
  .project-main-title {
    font-size: 1.8rem;
  }
  
  .card-image {
    height: 200px;
  }
  
  .card-content {
    padding: 1.2rem;
  }
  
  .card-title {
    font-size: 1.1rem;
    min-height: 2.8rem;
  }
  
  .card-description {
    font-size: 0.85rem;
    min-height: 2.2rem;
  }
  
  .learn-more-btn {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style> 