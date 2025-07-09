<script setup>
// 首页组件逻辑
</script>

<template>
  <div class="home-page">
    <div class="section-video">
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/qD0TCrA15R0?si=IlTFbmYYHmYyEHwX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    
    <div class="section-about">
      <div class="about-content">
        <h2 class="about-title">About TRUST Lab</h2>
        <p class="about-text">
          The TRUST Lab, part of the Department of Media and Communication at the City University of Hong Kong, aims to continually investigate the initiatives and responses of public institutions and the public during times of crisis. Our focus includes, but is not limited to, the analysis of trust, risk, and media interventions.
        </p>
        <hr class="about-line">
      </div>
    </div>
    
    <div class="section-activities">
      <h2 class="activities-title">Recent Activities</h2>
      <div class="activities-grid">
        <div class="activity-card">
          <img src="../assets/img/activity01.png" alt="Activity 1" class="card-image">
          <div class="card-content">
            <p class="card-text">
              The 2023 Fukushima Nuclear Waste Crisis: A Multidisciplinary Research Agenda.
            </p>
            <RouterLink to="/project/fukushima-nuclear-waste" class="card-link">
              Learn More <span class="arrow">></span>
            </RouterLink>
          </div>
        </div>
        
        <div class="activity-card">
          <img src="../assets/img/activity02.png" alt="Activity 2" class="card-image">
          <div class="card-content">
            <p class="card-text">
              Dynamics of Trust: Navigating Institutional Trust in Crisis Contexts.
            </p>
            <RouterLink to="/project/dynamics-of-trust" class="card-link">
              Learn More <span class="arrow">></span>
            </RouterLink>
          </div>
        </div>
        
        <div class="activity-card">
          <img src="../assets/img/activity03.png" alt="Activity 3" class="card-image">
          <div class="card-content">
            <p class="card-text">
              Director Huang Visited The School of Journalism and Communication at Peking University.
            </p>
            <RouterLink to="/project/dynamics-of-trust" class="card-link">
              Learn More <span class="arrow">></span>
            </RouterLink>
          </div>
        </div>
        
        <div class="activity-card">
          <img src="../assets/img/activity04.png" alt="Activity 4" class="card-image">
          <div class="card-content">
            <p class="card-text">
              Director Huang gave a lecture at Nanjing University titled "Dynamic Trust in Health Risks; Trajectory Evolution Analysis."
            </p>
            <RouterLink to="/project/trust-in-ai" class="card-link">
              Learn More <span class="arrow">></span>
            </RouterLink>
          </div>
        </div>
        
        <div class="activity-card">
          <img src="../assets/img/activity05.png" alt="Activity 5" class="card-image">
          <div class="card-content">
            <p class="card-text">
              Trust in Artificial Intelligence: Empowering Reliable Autonomous Vehicles and Other AI Technologies.
            </p>
            <RouterLink to="/project/trust-in-ai" class="card-link">
              Learn More <span class="arrow">></span>
            </RouterLink>
          </div>
        </div>
        
        <div class="activity-card">
          <img src="../assets/img/activity04.png" alt="Activity 4" class="card-image">
          <div class="card-content">
            <p class="card-text">
              Trust in Artificial Intelligence: Empowering Reliable Autonomous Vehicles and Other AI Technologies.
            </p>
            <RouterLink to="/project/trust-in-ai" class="card-link">
              Learn More <span class="arrow">></span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
}

/* 主要内容区域样式 */
.section-video {
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
}

.video-image {
  width: 100%;
  height: auto;
  display: block;
}

.section-about {
  width: 100%;
  padding: 4rem 10rem;
  background-color: #f8f9fa;
}

.about-content {
  max-width: 60%;
}

.about-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #bf175e, #e65035, #ffa72b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.about-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 2rem;
  text-align: justify;
}

.about-line {
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #bf175e, #e65035, #ffa72b);
  border: none;
}

.section-activities {
  width: 100%;
  padding: 4rem 10rem;
  background-color: white;
}

.activities-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: left;
  background: linear-gradient(90deg, #bf175e, #e65035, #ffa72b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.activity-card {
  background-color: white;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.activity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.activity-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background: linear-gradient(90deg, #bf175e, #e65035, #ffa72b);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-text {
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  min-height: 3rem;
  font-weight: bold;
}

.card-link {
  display: flex;
  align-items: center;
  color: #c32568;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.card-link:hover {
  opacity: 0.8;
}

.arrow {
  margin-left: 0.5rem;
  font-size: 1rem;
}

/* 响应式布局 - 平板端 */
@media screen and (max-width: 1024px) {
  .section-video {
    padding: 2rem 5rem;
  }
  
  .section-about {
    padding: 3rem 5rem;
  }
  
  .about-content {
    max-width: 70%;
  }
  
  .about-title {
    font-size: 2rem;
  }
  
  .about-text {
    font-size: 0.9rem;
  }

  .section-activities {
    padding: 3rem 5rem;
  }
  
  .activities-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .activities-grid {
    gap: 1.5rem;
  }
  
  .card-image {
    height: 180px;
  }
  
  .card-content {
    padding: 1.2rem;
  }
  
  .card-text {
    font-size: 0.8rem;
  }
}

/* 响应式布局 - 移动端 */
@media screen and (max-width: 768px) {
  .section-video {
    padding: 1.5rem 2rem;
  }
  
  .section-about {
    padding: 2rem;
  }
  
  .about-content {
    max-width: 100%;
  }
  
  .about-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  .about-text {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .section-activities {
    padding: 2rem;
  }
  
  .activities-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  .activities-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  .card-image {
    height: 150px;
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .card-text {
    font-size: 0.8rem;
    min-height: 2.5rem;
  }
}

/* 响应式布局 - 小屏幕移动端 */
@media screen and (max-width: 480px) {
  .section-video {
    padding: 1rem;
  }
  
  .section-about {
    padding: 1.5rem;
  }
  
  .about-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .about-text {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .section-activities {
    padding: 1.5rem;
  }
  
  .activities-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .activities-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: 1rem;
  }
  
  .card-image {
    height: 150px;
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .card-text {
    font-size: 0.8rem;
    min-height: 2rem;
  }
}
</style>
