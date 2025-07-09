<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NewsDetailsView from './news-details/NewsDetailsView.vue'
import MediaCoverageView from './news-details/MediaCoverageView.vue'

const route = useRoute()
const router = useRouter()

// 当前激活的组件
const activeComponent = ref('NewsDetailsView')

// 导航项配置
const navItems = [
  { name: 'News', component: 'NewsDetailsView', path: '/news/news-details' },
  { name: 'Media Coverage', component: 'MediaCoverageView', path: '/news/media-coverage' }
]

// 组件映射
const components = {
  NewsDetailsView,
  MediaCoverageView
}

// 根据路由设置激活组件
const setActiveComponentFromRoute = () => {
  const path = route.path
  const foundItem = navItems.find(item => item.path === path)
  if (foundItem) {
    activeComponent.value = foundItem.component
  } else {
    // 默认显示News
    activeComponent.value = 'NewsDetailsView'
  }
}

// 切换组件
const switchComponent = (componentName, path) => {
  activeComponent.value = componentName
  // 更新URL但不重新加载页面
  if (route.path !== path) {
    router.push(path)
  }
}

// 监听路由变化
watch(() => route.path, () => {
  setActiveComponentFromRoute()
})

// 页面加载时设置激活组件
onMounted(() => {
  setActiveComponentFromRoute()
})
</script>

<template>
  <div class="news-page">
    <div class="news-content">
      <div class="news-main">
        <component :is="components[activeComponent]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-page {
  width: 100%;
  min-height: 100vh;
  padding: 4rem 10rem;
}

.news-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #e65035;
  margin-bottom: 3rem;
  text-align: left;
}

.news-content {
  display: flex;
  gap: 3rem;
  min-height: 70vh;
}

.news-nav {
  flex: 0 0 250px;
  background-color: white;
  border-right: 1px solid #e0e0e0;
  padding-right: 2rem;
}

.nav-item {
  padding: 1rem 0;
  color: #333;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-item:hover {
  color: #ec5a2e;
  padding-left: 0.5rem;
}

.nav-item.active {
  color: #ec5a2e;
  font-weight: bold;
  padding-left: 0.5rem;
  border-left: 3px solid #ec5a2e;
}

.news-main {
  flex: 1;
  background-color: white;
  overflow: hidden;
}

/* 重置子组件的样式 */
.news-main :deep(.news-details-exhibit),
.news-main :deep(.media-coverage-exhibit) {
  padding: 3rem;
  min-height: auto;
}

.news-main :deep(h1) {
  margin-top: 0;
  font-size: 2rem;
}

/* 响应式布局 - 平板端 */
@media screen and (max-width: 1024px) {
  .news-page {
    padding: 3rem 5rem;
  }
  
  .news-title {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }
  
  .news-content {
    gap: 2rem;
  }
  
  .news-nav {
    flex: 0 0 200px;
    padding-right: 1.5rem;
  }
  
  .nav-item {
    padding: 0.8rem 0;
    font-size: 0.9rem;
  }
  
  .news-main :deep(.news-details-exhibit),
  .news-main :deep(.media-coverage-exhibit) {
    padding: 2rem;
  }
  
  .news-main :deep(h1) {
    font-size: 1.8rem;
  }
}

/* 响应式布局 - 移动端 */
@media screen and (max-width: 768px) {
  .news-page {
    padding: 2rem;
  }
  
  .news-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .news-content {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .news-nav {
    flex: none;
    padding-right: 0;
    display: flex;
    overflow-x: auto;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 1rem;
  }
  
  .nav-item {
    white-space: nowrap;
    padding: 0.6rem 1rem;
    margin-right: 1rem;
    border-bottom: none;
    border-radius: 4px;
    background-color: #f8f9fa;
  }
  
  .nav-item.active {
    background-color: #ec5a2e;
    color: white;
    border-left: none;
    padding-left: 1rem;
  }
  
  .nav-item:hover {
    padding-left: 1rem;
  }
  
  .news-main :deep(.news-details-exhibit),
  .news-main :deep(.media-coverage-exhibit) {
    padding: 1.5rem;
  }
  
  .news-main :deep(h1) {
    font-size: 1.6rem;
  }
}

/* 响应式布局 - 小屏幕移动端 */
@media screen and (max-width: 480px) {
  .news-page {
    padding: 1.5rem;
  }
  
  .news-title {
    font-size: 1.8rem;
  }
  
  .nav-item {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .news-main :deep(.news-details-exhibit),
  .news-main :deep(.media-coverage-exhibit) {
    padding: 1rem;
  }
  
  .news-main :deep(h1) {
    font-size: 1.4rem;
  }
}
</style>