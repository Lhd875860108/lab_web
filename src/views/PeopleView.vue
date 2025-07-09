<script setup>
  import { ref } from 'vue'
  import YiHui  from '../assets/People/01.png'
  import Cai from '../assets/People/05.png'
  import Qinhui from '../assets/People/04.png'
  import Liu from '../assets/People/Liu_Haodong.jpg'
  import ChangBo  from '../assets/People/Chang_Bo.jpg'
  import Ruoheng from '../assets/People/02.png'
  import Shuang from '../assets/People/shuangao3_2024.jpg'
  import Zhang from '../assets/People/06.png'
</script>

<template>
  <div class="people-page">
    <div class="professor-section">
      <h2 class="professor-section-title">Head And Chair Professor</h2>
      <div class="professor-content">
        <div class="professor-card">
          <div class="professor-image">
            <img :src="YiHui" alt="Professor" class="professor-photo">
          </div>
          <div class="professor-info">
            <h3 class="professor-name">Yi-Hui Christine Huang</h3>
            <p class="professor-title">Head and Chair Professor</p>
          </div>
        </div>
        <div class="professor-description">
          <p class="professor-text"> <span>Yi-Hui Christine Huang</span> (Ph.D., University of Maryland) is Head and Chair Professor of the Department of Communication and Media at City University of Hong Kong. She was elected as International Communication Association (ICA) Fellow in 2021 and was conferred as Senior Research Fellow by Hong Kong Research Grants Council (RGC) in 2024. She has been committed to research on strategic communication, risk communication in health and technology, crisis communication, relationship management and conflict resolution, and cross-cultural communication. She currently serves as Editor for Communication and the Public (ESCI) and Communication and Society (TSSCI). She have also been a founding editorial board member for the Journal of International Crisis and Risk Communication. In addition, she serves as an editorial board member for more than 10 major international SSCI journals, such as Journal of Communication, Journal of Public Relations Research, and Public Relations Review.</p>
        </div>
      </div>
    </div>
    <div class="member">
      <h2 class="member-section-title">Member</h2>
      <div class="member-grid">
        <div class="member-card">
          <div class="member-image">
            <img :src="Cai" alt="Qinxian Cai" class="member-photo">
          </div>
          <div class="member-info">
            <h3 class="member-name">Qinxian Cai</h3>
            <p class="member-title">Ph.D. candidate</p>
          </div>
        </div>
        
        <div class="member-card">
          <div class="member-image">
            <a :href="'https://www.cityu.edu.hk/com/Profile2.aspx?u=bchang9'" target="_blank">
              <img :src="ChangBo" alt="Bo Chang" class="member-photo">
            </a>
          </div>
          <div class="member-info">
            <h3 class="member-name">Bo Chang</h3>
            <p class="member-title">Ph.D. Student</p>
          </div>
        </div>
        
        <div class="member-card">
          <div class="member-image">
            <a :href="'https://www.cityu.edu.hk/com/Profile2.aspx?u=haodonliu2'" target="_blank">
              <img :src="Liu" alt="Bo Chang" class="member-photo">
            </a>
          </div>
          <div class="member-info">
            <h3 class="member-name">Haodong Liu</h3>
            <p class="member-title">Ph.D. Student</p>
          </div>
        </div>
        
        <div class="member-card">
          <div class="member-image">
            <img :src="Ruoheng" alt="Bo Chang" class="member-photo">
          </div>
          <div class="member-info">
            <h3 class="member-name">Ruoheng Liu</h3>
            <p class="member-title">Ph.D. Student</p>
          </div>
        </div>
        
        <div class="member-card">
          <div class="member-image">
            <a :href="'https://www.cityu.edu.hk/com/Profile2.aspx?u=shuangao3'" target="_blank">
              <img :src="Shuang" alt="Bo Chang" class="member-photo">
            </a>
          </div>
          <div class="member-info">
            <h3 class="member-name">Shuang GAO</h3>
            <p class="member-title">Ph.D. Student</p>
          </div>
        </div>
        
        <div class="member-card">
          <div class="member-image">
            <img :src="Qinhui" alt="Bo Chang" class="member-photo">
          </div>
          <div class="member-info">
            <h3 class="member-name">Qinhui Zhan</h3>
            <p class="member-title">Research Assistant</p>
          </div>
        </div>
        
        <div class="member-card">
          <div class="member-image">
            <img :src="Zhang" alt="Bo Chang" class="member-photo">
          </div>
          <div class="member-info">
            <h3 class="member-name">Le-Yi Zhang</h3>
            <p class="member-title">Ph.D. candidate</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.people-page {
  width: 100%;
  min-height: 100vh;
  padding: 4rem 10rem;
}

.professor-section {
  margin-bottom: 4rem;
}

.professor-section-title {
  font-size: 2rem;
  font-weight: bold;
  color: #e65035;
  margin-bottom: 2rem;
  text-align: left;
}

.professor-content {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.professor-card {
  flex: 0 0 250px;
  text-align: center;
}

.professor-image {
  
  width: 150px;
  height: 180px;
  object-fit: cover;
  background-color: #ccc;
  margin: 0 auto;
  margin-bottom: 1.5rem;
}

.professor-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #ccc;
}

.professor-info {
  text-align: center;
}

.professor-name {
  font-size: 1rem;
  font-weight: bold;
  color: #bf165e;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.professor-title {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.professor-description {
  flex: 1;
}

.professor-text {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.6;
  text-align: justify;
  span{
    font-weight: bold;
  }
}

/* 响应式布局 - 平板端 */
@media screen and (max-width: 1024px) {
  .people-page {
    padding: 3rem 5rem;
  }
  
  .professor-section-title {
    font-size: 1.8rem;
  }
  
  .professor-content {
    gap: 2rem;
  }
  
  .professor-card {
    flex: 0 0 220px;
    padding: 1.5rem;
  }
  
  .professor-photo {
    width: 100%;
    height: 100%;
  }
  
  .professor-name {
    font-size: 1.1rem;
  }
  
  .professor-text {
    font-size: 0.9rem;
  }
}

/* 响应式布局 - 移动端 */
@media screen and (max-width: 768px) {
  .people-page {
    padding: 2rem;
  }
  
  .professor-section-title {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
  
  .professor-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .professor-card {
    flex: none;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .professor-photo {
    width: 100%;
    height: 100%;
  }
  
  .professor-name {
    font-size: 1rem;
  }
  
  .professor-title {
    font-size: 0.85rem;
  }
  
  .professor-text {
    font-size: 0.85rem;
  }
}

/* 响应式布局 - 小屏幕移动端 */
@media screen and (max-width: 480px) {
  .people-page {
    padding: 1.5rem;
  }
  
  .professor-section-title {
    font-size: 1.4rem;
  }
  
  .professor-card {
    padding: 1rem;
  }
  
  .professor-photo {
    width: 100%;
    height: 100%;
  }
  
  .professor-name {
    font-size: 0.9rem;
  }
  
  .professor-title {
    font-size: 0.8rem;
  }
  
  .professor-text {
    font-size: 0.8rem;
    line-height: 1.5;
  }
}

.member {
  margin-bottom: 4rem;
  position: relative;
  padding: 4rem 0;
  overflow: hidden;
}

.member::before {
  content: '';
  position: absolute;
  top: -30%;
  left: 0%;
  width: 120%;
  height: 180%;
  background-color: #fafafa;
  clip-path: polygon(0% 86.6%, 50% 0%, 100% 86.6%);
  transform: rotate(50deg);
  transform-origin: center;
  z-index: -1;
}

.member-section-title {
  font-size: 2rem;
  font-weight: bold;
  color: #e65035;
  margin-bottom: 2rem;
  text-align: left;
  position: relative;
  z-index: 1;
}

.member-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 100%;
  position: relative;
  z-index: 1;
}

.member-card {
  text-align: center;
}

.member-image {
  width: 150px;
  height: 180px;
  object-fit: cover;
  background-color: #ccc;
  margin: 0 auto;
  margin-bottom: 1.5rem;
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #ccc;
}

.member-info {
  text-align: center;
}

.member-name {
  font-size: 1rem;
  font-weight: bold;
  color: #bf165e;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.member-title {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

/* 响应式布局 - 平板端 */
@media screen and (max-width: 1024px) {
  .member-section-title {
    font-size: 1.8rem;
  }
  
  .member-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  .member-image {
    width: 120px;
    height: 150px;
  }
  
  .member-photo {
    width: 120px;
    height: 150px;
  }
  
  .member-name {
    font-size: 0.9rem;
  }
  
  .member-title {
    font-size: 0.8rem;
  }
}

/* 响应式布局 - 移动端 */
@media screen and (max-width: 768px) {
  .member-section-title {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
  
  .member-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .member-image {
    width: 100px;
    height: 120px;
  }
  
  .member-photo {
    width: 100px;
    height: 120px;
  }
  
  .member-name {
    font-size: 0.85rem;
  }
  
  .member-title {
    font-size: 0.75rem;
  }
}

/* 响应式布局 - 小屏幕移动端 */
@media screen and (max-width: 480px) {
  .member-section-title {
    font-size: 1.4rem;
  }
  
  .member-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .member-image {
    width: 80px;
    height: 100px;
  }
  
  .member-photo {
    width: 80px;
    height: 100px;
  }
  
  .member-name {
    font-size: 0.8rem;
  }
  
  .member-title {
    font-size: 0.7rem;
  }
}
</style>