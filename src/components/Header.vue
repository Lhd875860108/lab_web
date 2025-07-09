<template>
  <header class="header">
    <div class="header-logo">
      <div class="header-logo-img">
        <img src="../assets/img/CityU_Vertical_Logo.svg" alt="" height="100%">
      </div>
      <div class="header-logo-text">
        <p class="header-logo-text-title">TRUST Lab</p>
        <p class="header-logo-text-subtitle">Trust,Risk,Understanding,Strategies,and Technology</p>
      </div>
    </div>
    <div class="header-bar" :class="{ 'is-open': isMobileMenuOpen }">
      <nav class="nav-menu">
        <RouterLink to="/" class="nav-item" @click="closeMobileMenu">Home</RouterLink>
        <RouterLink to="/people" class="nav-item" @click="closeMobileMenu">People</RouterLink>
        <div class="nav-item-dropdown" :class="{ 'is-open': openDropdown === 'research' }">
          <RouterLink to="/research" class="nav-item" @click="toggleDropdown('research')">Research</RouterLink>
          <div class="dropdown-menu">
            <RouterLink to="/research/trust" class="dropdown-item" @click="closeMobileMenu">Trust</RouterLink>
            <RouterLink to="/research/risk" class="dropdown-item" @click="closeMobileMenu">Risk</RouterLink>
            <RouterLink to="/research/information-behavior" class="dropdown-item" @click="closeMobileMenu">Information Behavior</RouterLink>
            <RouterLink to="/research/strategic-com-culture" class="dropdown-item" @click="closeMobileMenu">Strategic Com & Culture</RouterLink>
          </div>
        </div>
        <div class="nav-item-dropdown" :class="{ 'is-open': openDropdown === 'project' }">
          <RouterLink to="/project" class="nav-item" @click="toggleDropdown('project')">Project</RouterLink>
          <div class="dropdown-menu">
            <RouterLink to="/project/fukushima-nuclear-waste" class="dropdown-item" @click="closeMobileMenu">Fukushima Nuclear Waste Water Crisis</RouterLink>
            <RouterLink to="/project/dynamics-of-trust" class="dropdown-item" @click="closeMobileMenu">Dynamics of Trust</RouterLink>
            <RouterLink to="/project/trust-in-ai" class="dropdown-item" @click="closeMobileMenu">Trust in Artificial Intelligence</RouterLink>
            <RouterLink to="/project/covid-19" class="dropdown-item" @click="closeMobileMenu">COVID-19</RouterLink>
          </div>
        </div>
        <div class="nav-item-dropdown" :class="{ 'is-open': openDropdown === 'news' }">
          <RouterLink to="/news" class="nav-item" @click="toggleDropdown('news')">News & Media</RouterLink>
          <div class="dropdown-menu">
            <RouterLink to="/news/news-details" class="dropdown-item" @click="closeMobileMenu">News</RouterLink>
            <RouterLink to="/news/media-coverage" class="dropdown-item" @click="closeMobileMenu">Media Coverage</RouterLink>
          </div>
        </div>
        <RouterLink to="/join" class="nav-item" @click="closeMobileMenu">Join Us</RouterLink>
      </nav>
    </div>
    <div class="menu-icon" @click="toggleMobileMenu">
      <svg t="1749212522786" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2499" width="200" height="200"><path d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z" fill="#ffffff" p-id="2500"></path></svg>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
const openDropdown = ref(null); // 用于控制移动端子菜单展开

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // 关闭菜单时重置子菜单状态
  if (!isMobileMenuOpen.value) {
    openDropdown.value = null;
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  openDropdown.value = null;
};

// 移动端子菜单切换函数
const toggleDropdown = (dropdownName) => {
  // 在移动端才处理子菜单展开逻辑
  if (window.innerWidth <= 768) {
    event.preventDefault(); // 阻止默认导航行为
    openDropdown.value = openDropdown.value === dropdownName ? null : dropdownName;
  }
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 17rem;
  background-image: linear-gradient(271deg, #ffa72b, #e65035, #bf175e);
  position: relative; /* Added for menu-icon positioning */
}

.header-logo {
  width: 100%;
  height: 70%;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 10rem;
}

.header-logo-img {
  width: 15rem;
  height: 8rem;
}

.header-logo-text {
  width: 40rem;
  height: 8rem;
  margin-left: 1rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.header-logo-text-title {
  font-size: 1.7rem;
  font-weight: bold;
}

.header-logo-text-subtitle {
  font-weight: bold;
}

.header-bar {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10rem;
  transition: transform 0.3s ease-in-out; /* Added for mobile menu animation */
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 0;
}

.nav-item {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  position: relative;
  border-right: 2px solid white;
  transition: all 0.3s ease;
}

.nav-item:last-child {
  border-right: none;
}

.nav-item:hover::after {
  width: 100%;
}

.nav-item.router-link-active::after {
  width: 100%;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
}

/* 下拉菜单样式 */
.nav-item-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.nav-item-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 0.8rem 1.2rem;
  color: #ec5a2e;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
  border-bottom: 1px solid #f0f0f0;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
  color: #bf165e;
}

.dropdown-item.router-link-active {
  background-color: #f0f0f0;
  color: #bf165e;
  font-weight: bold;
}

.menu-icon {
  display: none; /* Hidden by default, shown on mobile/tablet */
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1001;
}

.menu-icon svg {
  width: 2rem;
  height: 2rem;
  fill: white;
}

/* 响应式布局 - 平板端 */
@media screen and (max-width: 1024px) {
  .header-logo {
    padding: 0 5rem;
  }
  
  .header-logo-img {
    width: 12rem;
    height: 6rem;
  }
  
  .header-logo-text {
    width: 30rem;
    height: 6rem;
  }
  
  .header-logo-text-title {
    font-size: 1.5rem;
  }
  
  .header-logo-text-subtitle {
    font-size: 0.9rem;
  }
  
  .header-bar {
    padding: 0 5rem;
  }
  
  .nav-item {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .dropdown-item {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
  }
}

/* 响应式布局 - 移动端 */
@media screen and (max-width: 768px) {
  .header {
    height: auto;
    min-height: 4rem; /* Adjusted min-height for mobile */
    flex-direction: row; /* Changed to row for mobile layout */
    justify-content: space-between; /* Space between logo and menu icon */
    align-items: center; /* Align items vertically */
    padding: 1rem 2rem; /* Added padding for mobile */
  }
  
  .header-logo {
    flex-direction: row; /* Changed to row for mobile layout */
    padding: 0; /* Removed padding */
    text-align: left; /* Aligned text to left */
    height: auto; /* Adjusted height */
    width: auto; /* Adjusted width */
    display: flex; /* Ensure it's displayed */
    justify-content: flex-start; /* Align items to the start */
    align-items: center; /* Center items vertically */
    background-color: transparent; /* 取消背景色 */
  }
  
  .header-logo-img {
    width: 6rem; /* Smaller logo */
    height: 3rem; /* Smaller logo */
    margin-bottom: 0; /* Removed margin */
    margin-right: 0.5rem; /* Added right margin */
  }
  
  .header-logo-text {
    display: none; /* 隐藏 header-logo-text */
    width: auto; /* Adjusted width */
    height: auto; /* Adjusted height */
    margin-left: 0; /* Removed margin */
    padding: 0; /* Removed padding */
    align-items: flex-start; /* Aligned text to start */
  }
  
  .header-logo-text-title {
    font-size: 1rem; /* Smaller font size */
    margin-bottom: 0.2rem; /* Smaller margin */
  }
  
  .header-logo-text-subtitle {
    font-size: 0.7rem; /* Smaller font size */
    text-align: left; /* Aligned text to left */
  }
  
  .header-bar {
    position: fixed; /* Fixed position for slide-in menu */
    top: 0;
    right: -100%; /* Off-screen by default */
    width: 70%; /* Occupy 70% of screen width */
    height: 100vh; /* Full height */
    background-color: rgba(255, 255, 255, 0.95); /* 白色半透明背景 */
    flex-direction: column; /* Stack menu items vertically */
    justify-content: flex-start; /* 改为从顶部开始排列 */
    padding: 4rem 2rem 2rem; /* 增加顶部内边距 */
    z-index: 1000; /* Ensure it's above other content */
    transition: right 0.3s ease-in-out; /* Slide animation */
    overflow-y: auto; /* 允许滚动 */
  }

  .header-bar.is-open {
    right: 0; /* Slide in */
  }
  
  .nav-menu {
    flex-direction: column; /* Stack menu items vertically */
    gap: 0; /* 移除间距，让子菜单紧贴 */
    width: 100%;
  }
  
  .nav-item {
    padding: 1rem 0; /* 增加内边距 */
    font-size: 1.2rem; /* Larger font size for readability */
    border-right: none; /* Removed border */
    border-bottom: 1px solid rgba(236, 90, 46, 0.2); /* 添加底部边框 */
    width: 100%; /* Full width */
    text-align: left; /* 左对齐 */
    color: #ec5a2e; /* 设置字体颜色 */
    display: block;
    transition: all 0.3s ease;
  }
  
  .nav-item:hover {
    background-color: rgba(236, 90, 46, 0.1); /* 悬停效果 */
    color: #bf165e;
  }
  
  .nav-item:nth-child(3n) {
    border-right: none;
  }
  
  .nav-item:last-child {
    border-right: none;
  }
  
  /* 移动端下拉菜单 */
  .nav-item-dropdown {
    width: 100%;
  }
  
  .dropdown-menu {
    position: static;
    box-shadow: none;
    background-color: rgba(236, 90, 46, 0.05); /* 浅色背景 */
    border-radius: 0;
    min-width: auto;
    width: 100%;
    margin: 0;
    max-height: 0; /* 默认隐藏 */
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .nav-item-dropdown.is-open .dropdown-menu {
    max-height: 300px; /* 展开时的最大高度 */
    opacity: 1;
    visibility: visible;
  }
  
  .nav-item-dropdown:hover .dropdown-menu {
    /* 移动端不使用hover效果 */
  }
  
  .dropdown-item {
    padding: 0.8rem 1.5rem; /* 增加左内边距 */
    font-size: 1rem; /* Adjusted font size */
    border-bottom: 1px solid rgba(236, 90, 46, 0.1); /* 浅色边框 */
    color: #ec5a2e; /* 设置字体颜色 */
    text-align: left; /* 左对齐 */
    display: block;
    transition: all 0.3s ease;
  }

  .dropdown-item:hover {
    background-color: rgba(236, 90, 46, 0.1); /* 悬停效果 */
    color: #bf165e;
  }
  
  .dropdown-item:last-child {
    border-bottom: none;
  }
  
  .dropdown-item.router-link-active {
    background-color: #f0f0f0;
    color: #bf165e;
    font-weight: bold;
  }
  
  .menu-icon {
    display: block; /* Show menu icon on mobile */
    position: static; /* Adjusted position */
    transform: none; /* Removed transform */
  }
}

/* 响应式布局 - 小屏幕移动端 */
@media screen and (max-width: 480px) {
  .header {
    padding: 0.8rem 1.5rem; /* Further adjusted padding */
  }
  
  .header-logo-img {
    width: 5rem;
    height: 2.5rem;
  }
  
  .header-logo-text-title {
    font-size: 0.9rem;
  }
  
  .header-logo-text-subtitle {
    font-size: 0.6rem;
  }
  
  .header-bar {
    width: 80%; /* Occupy more width on smaller screens */
  }

  .nav-item {
    font-size: 1rem;
  }
  
  .dropdown-item {
    font-size: 0.9rem;
  }

  .menu-icon svg {
    width: 1.8rem;
    height: 1.8rem;
  }
}
</style>