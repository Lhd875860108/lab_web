<script setup>
import { ref } from 'vue';

import img1 from '../assets/JoinUs/1.png';
</script>

<template>
  <div class="img">
    <h2 class="join-title">Join Us</h2>
    <div class="image-container">
      <img :src="img1" alt="" class="contentimg">
    </div>
  </div>
  <div class="trust">
    <p>Join Us at TRUST Lab!</p>
    <p>Are you passionate about exploring the dynamics of trust, risk, and media in times of crisis? The TRUST Lab at the City University of Hong Kong is seeking motivated Research Assistants and Postdoctoral Fellows to join our team.</p>
    <p>Be part of groundbreaking research on trust-building, media interventions, and societal resilience in areas like health, technology, and environmental crises. Collaborate with an interdisciplinary team, contribute to impactful publications, and help shape the future of trust research.</p>
    <p>Apply for our Research Assistant and Postdoctoral positions to elevate your career and contribute to advancing the understanding and management of trust during critical times.</p>
    <p>For inquiries, please contact: comhead@cityu.edu.hk.</p>
  </div>
</template>

<style scoped>
.img {
  width: 100%;
  padding: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.join-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #e65035;
  margin-bottom: 2rem;
  text-align: left;
}

.image-container {
  width: 700px;
  height: 300px;
  background-color: #ccc;
  align-self: flex-end;
  /* border-radius: 8px; */
}

.contentimg{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.trust {
  width: 100%;
  padding: 2rem 10rem 4rem 10rem;
}

.trust p:first-child {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.trust p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  text-align: justify;
}

.trust p:last-child {
  margin-top: 1.5rem;
  font-weight: 500;
}

/* 响应式布局 - 平板端 */
@media screen and (max-width: 1024px) {
  .img {
    padding: 3rem 5rem;
  }
  
  .join-title {
    font-size: 2.2rem;
  }
  
  .image-container {
    width: 600px;
    height: 250px;
  }
  
  .trust {
    padding: 2rem 5rem 3rem 5rem;
  }
  
  .trust p:first-child {
    font-size: 1.6rem;
  }
  
  .trust p {
    font-size: 0.95rem;
  }
}

/* 响应式布局 - 移动端 */
@media screen and (max-width: 768px) {
  .img {
    padding: 2rem;
  }
  
  .join-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .image-container {
    width: 300px;
    height: 200px;
    align-self: center;
  }
  
  .trust {
    padding: 1.5rem 2rem 3rem 2rem;
  }
  
  .trust p:first-child {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
  
  .trust p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
}

/* 响应式布局 - 小屏幕移动端 */
@media screen and (max-width: 480px) {
  .img {
    padding: 1.5rem;
  }
  
  .join-title {
    font-size: 1.8rem;
  }
  
  .image-container {
    width: 250px;
    height: 180px;
  }
  
  .trust {
    padding: 1rem 1.5rem 2.5rem 1.5rem;
  }
  
  .trust p:first-child {
    font-size: 1.2rem;
  }
  
  .trust p {
    font-size: 0.85rem;
    line-height: 1.5;
  }
}
</style> 