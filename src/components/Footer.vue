<template>
  <footer class="footer">
    <div class="footer-left">
      <div class="footer-left-logo">
        <img src="../assets/img/CityU_Vertical_Logo_white.png" alt="" height="100%">
      </div>
      <div class="footer-left-text">
        <p class="footer-left-text-title">City University of Hong Kong</p>
        <div class="footer-left-text-address">
          <p>Tat Chee Avenue</p>
          <p>Kowloon,Hong Kong</p>
        </div>
      </div>
    </div>
    <div class="footer-right">
      <div class="footer-links-column">
        <RouterLink to="/join" class="footer-link">Contact-Join Us</RouterLink>
       
      </div>
      <div class="footer-links-column">
       
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer组件逻辑
</script>

<style scoped>
.footer {
  width: 100%;
  height: 18rem;
  background-color: #2d3748;
  background-image: url('../assets/img/Home_midfi.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  margin-top: auto;
}

.footer-left {
  width: 50%;
  height: 100%;
  padding: 5rem;
  display: flex;
}

.footer-left-logo {
  width: 10rem;
  height: 5rem;
}

.footer-left-text {
  width: 20rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-left-text-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
}

.footer-left-text-address {
  font-size: 0.8rem;
  color: white;
}

.footer-right {
  width: 50%;
  height: 100%;
  padding: 4rem;
  display: flex;
  gap: 4rem;
}

.footer-links-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 0.8;
}

/* 响应式布局 - 平板端 */
@media screen and (max-width: 1024px) {
  .footer-left {
    padding: 3rem;
  }
  
  .footer-left-logo {
    width: 8rem;
    height: 4rem;
  }
  
  .footer-left-text {
    width: 16rem;
    height: 4rem;
  }
  
  .footer-left-text-title {
    font-size: 1rem;
  }
  
  .footer-left-text-address {
    font-size: 0.7rem;
  }
  
  .footer-right {
    padding: 3rem;
    gap: 2rem;
  }
  
  .footer-link {
    font-size: 0.8rem;
  }
}

/* 响应式布局 - 移动端 */
@media screen and (max-width: 768px) {
  .footer {
    flex-direction: column;
    height: auto;
    min-height: 20rem;
  }
  
  .footer-left {
    width: 100%;
    padding: 2rem;
    justify-content: center;
  }
  
  .footer-left-logo {
    width: 6rem;
    height: 3rem;
    margin-right: 1rem;
  }
  
  .footer-left-text {
    width: auto;
    height: auto;
  }
  
  .footer-left-text-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .footer-left-text-address {
    font-size: 0.8rem;
  }
  
  .footer-right {
    width: 100%;
    padding: 2rem;
    justify-content: center;
    gap: 3rem;
  }
  
  .footer-link {
    font-size: 0.9rem;
  }
}

/* 响应式布局 - 小屏幕移动端 */
@media screen and (max-width: 480px) {
  .footer-left {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  
  .footer-left-logo {
    margin-right: 0;
    margin-bottom: 1rem;
    align-self: center;
  }
  
  .footer-left-text-title {
    font-size: 0.9rem;
  }
  
  .footer-left-text-address {
    font-size: 0.7rem;
  }
  
  .footer-right {
    flex-direction: row;
    gap: 1.5rem;
    padding: 1.5rem;
    justify-content: space-between;
  }
  
  .footer-links-column {
    text-align: center;
  }
  
  .footer-link {
    font-size: 0.8rem;
  }
}
</style>