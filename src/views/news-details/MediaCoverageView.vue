<script setup>
  import { ref, computed, watch, onMounted } from 'vue';
  
  // 分页相关数据
  const currentPage = ref(1);
  const itemsPerPage = ref(8);
  
  const mediaReports = ref([
    {
      id: 1,
      date: '2024/2/18',
      post: 'CityUHK survey on the impact of Japan’s nuclear wastewater discharge on Hong Kong citizens’ travel to Japan',
      mediaoutlet: 'CityU CIRO',
      link: 'https://www.cityu.edu.hk/media/press-release/2024/02/18/cityuhk-survey-impact-japans-nuclear-wastewater-discharge-hong-kong-citizens-travel-japan',
    },
    {
      id: 2,
      date: '2024/2/18',
      post: '城大調查日本排放核廢水與香港市民赴日旅遊的關聯',
      mediaoutlet: 'CityU CIRO',
      link: 'https://www.cityu.edu.hk/zh-hk/media/press-release/2024/02/18/cityuhk-survey-impact-japans-nuclear-wastewater-discharge-hong-kong-citizens-travel-japan',
    },
    {
      id: 3,
      date: '2024/2/18',
      post: '日本核污水｜城大調查：六成受訪者憂健康問題　四分一稱減少遊日',
      mediaoutlet: 'HK01',
      link: 'https://www.hk01.com/%E7%A4%BE%E6%9C%83%E6%96%B0%E8%81%9E/991925/%E6%97%A5%E6%9C%AC%E6%A0%B8%E6%B1%A1%E6%B0%B4-%E5%9F%8E%E5%A4%A7%E8%AA%BF%E6%9F%A5-%E5%85%AD%E6%88%90%E5%8F%97%E8%A8%AA%E8%80%85%E6%86%82%E5%81%A5%E5%BA%B7%E5%95%8F%E9%A1%8C-%E5%9B%9B%E5%88%86%E4%B8%80%E7%A8%B1%E6%B8%9B%E5%B0%91%E9%81%8A%E6%97%A5',
    },
    {
      id: 4,
      date: '2024/2/18',
      post: '城大調查：6成人指日排核污水影響健康',
      mediaoutlet: '星島網',
      link: 'https://std.stheadline.com/daily/article/2571910/%E6%97%A5%E5%A0%B1-%E6%95%99%E8%82%B2-%E5%9F%8E%E5%A4%A7%E8%AA%BF%E6%9F%A5-6%E6%88%90%E4%BA%BA%E6%8C%87%E6%97%A5%E6%8E%92%E6%A0%B8%E6%B1%A1%E6%B0%B4%E5%BD%B1%E9%9F%BF%E5%81%A5%E5%BA%B7',
    },
    {
      id: 5,
      date: '2024/2/19',
      post: '城大調查：6成人指日排核污水影響健康',
      mediaoutlet: '星島頭條',
      link: 'https://www.stheadline.com/tertiary-edu/3318101/%E5%9F%8E%E5%A4%A7%E8%AA%BF%E6%9F%A56%E6%88%90%E4%BA%BA%E6%8C%87%E6%97%A5%E6%8E%92%E6%A0%B8%E6%B1%A1%E6%B0%B4%E5%BD%B1%E9%9F%BF%E5%81%A5%E5%BA%B7',
    },
    {
      id: 6,
      date: '2024/2/19',
      post: '城大調查：6成人指日排核污水影響健康',
      mediaoutlet: '星島網',
      link: 'https://std.stheadline.com/education/article/1981987/%E6%95%99%E8%82%B2-%E5%A4%A7%E5%B0%88-%E5%9F%8E%E5%A4%A7%E8%AA%BF%E6%9F%A5-6%E6%88%90%E4%BA%BA%E6%8C%87%E6%97%A5%E6%8E%92%E6%A0%B8%E6%B1%A1%E6%B0%B4%E5%BD%B1%E9%9F%BF%E5%81%A5%E5%BA%B7',
    },
    {
      id: 7,
      date: '2024/2/19',
      post: '城大調查：6成人指日排核污水影響健康',
      mediaoutlet: 'TVB報章要問_星島日報',
      link: 'https://news.tvb.com/tc/local/65d29eac36b98b72b0db6ecf/%E6%B8%AF%E6%BE%B3-2%E6%9C%8819%E6%97%A5-%E5%A0%B1%E7%AB%A0%E8%A6%81%E8%81%9E%E4%BA%8C',
    },
    {
      id: 8,
      date: '2024/2/18',
      post: '核污水｜調查指6成人憂增患病風險 惟僅兩成半人會減少到日本旅遊',
      mediaoutlet: '星島日報',
      link: 'https://www.singtaousa.com/2024-02-18/%E6%A0%B8%E6%B1%A1%E6%B0%B4%EF%BD%9C%E8%AA%BF%E6%9F%A5%E6%8C%876%E6%88%90%E4%BA%BA%E6%86%82%E5%A2%9E%E6%82%A3%E7%97%85%E9%A2%A8%E9%9A%AA-%E6%83%9F%E5%83%85%E5%85%A9%E6%88%90%E5%8D%8A%E4%BA%BA/4764734#page6',
    },
    { 
      id: 9,
      date: '2024/2/18',
      post: '核污水｜調查指6成人憂增患病風險 惟僅兩成半人會減少到日本旅遊',
      mediaoutlet: '星島',
      link: 'https://www.singtao.ca/6572040/2024-02-18/news-%E6%A0%B8%E6%B1%A1%E6%B0%B4%EF%BD%9C%E8%AA%BF%E6%9F%A5%E6%8C%876%E6%88%90%E4%BA%BA%E6%86%82%E5%A2%9E%E6%82%A3%E7%97%85%E9%A2%A8%E9%9A%AA++%E6%83%9F%E5%83%85%E5%85%A9%E6%88%90%E5%8D%8A%E4%BA%BA%E6%9C%83%E6%B8%9B%E5%B0%91%E5%88%B0%E6%97%A5%E6%9C%AC%E6%97%85%E9%81%8A/?variant=zh-hk',
    },
    { 
      id: 10,
      date: '2024/2/18',
      post: '核污水｜調查指6成人憂增患病風險 惟僅兩成半人會減少到日本旅遊',
      mediaoutlet: 'headline4hk | 星島',
      link: 'https://www.headline4hk.com/article/20240218/stheadline/1981885/',
    },
    { 
      id: 11,
      date: '2024/2/18',
      post: '調查：逾6成人認為排放核污水影響健康　7成稱不減日本旅遊次數',
      mediaoutlet: 'RTHK',
      link: 'https://news.rthk.hk/rthk/ch/component/k2/1740822-20240218.htm',
    },
    { 
      id: 12,
      date: '2024/2/18',
      post: '調查：逾6成人認為排放核污水影響健康　7成稱不減日本旅遊次數',
      mediaoutlet: 'RTHK',
      link: 'https://portal.sina.com.hk/news-hongkong/news-realtime/rthk/2024/02/18/747040/%E8%AA%BF%E6%9F%A5%EF%BC%9A%E9%80%BE6%E6%88%90%E4%BA%BA%E8%AA%8D%E7%82%BA%E6%8E%92%E6%94%BE%E6%A0%B8%E6%B1%A1%E6%B0%B4%E5%BD%B1%E9%9F%BF%E5%81%A5%E5%BA%B7%E3%80%807%E6%88%90%E7%A8%B1%E4%B8%8D%E6%B8%9B/',
    },
    { 
      id: 13,
      date: '2024/2/19',
      post: '城大月前核污水調查 25%港人將減遊日本 年輕人多冇有怕',
      mediaoutlet: '明報新聞網',
      link: 'https://news.mingpao.com/pns/%E8%A6%81%E8%81%9E/article/20240219/s00001/1708278546799/%E5%9F%8E%E5%A4%A7%E6%9C%88%E5%89%8D%E6%A0%B8%E6%B1%A1%E6%B0%B4%E8%AA%BF%E6%9F%A5-25-%E6%B8%AF%E4%BA%BA%E5%B0%87%E6%B8%9B%E9%81%8A%E6%97%A5%E6%9C%AC-%E5%B9%B4%E8%BC%95%E4%BA%BA%E5%A4%9A%E5%86%87%E6%9C%89%E6%80%95',
    },
    { 
      id: 14,
      date: '2024/2/19',
      post: '城大月前核污水調查 25%港人將減遊日本 年輕人多冇有怕',
      mediaoutlet: '明報教育網',
      link: 'https://life.mingpao.com/general/article?issue=20240219&nodeid=1708279312464',
    },
    { 
      id: 15,
      date: '2024/2/19',
      post: '城大月前核污水调查 25%港人将减游日本 年轻人多冇有怕(图)',
      mediaoutlet: '明聲報',
      link: 'http://www.mingshengbao.com/tor/article.php?aid=906486',
    },
    { 
      id: 16,
      date: '2024/2/18',
      post: '福島核污水｜城大調查：6成受訪者憂污水排放 但遊日意欲未減 逾半支持進口管制',
      mediaoutlet: 'AM730',
      link: 'https://www.am730.com.hk/%E6%9C%AC%E5%9C%B0/%E7%A6%8F%E5%B3%B6%E6%A0%B8%E6%B1%A1%E6%B0%B4-%E5%9F%8E%E5%A4%A7%E8%AA%BF%E6%9F%A5-6%E6%88%90%E5%8F%97%E8%A8%AA%E8%80%85%E6%86%82%E6%B1%A1%E6%B0%B4%E6%8E%92%E6%94%BE-%E4%BD%86%E9%81%8A%E6%97%A5%E6%84%8F%E6%AC%B2%E6%9C%AA%E6%B8%9B-%E9%80%BE%E5%8D%8A%E6%94%AF%E6%8C%81%E9%80%B2%E5%8F%A3%E7%AE%A1%E5%88%B6/430517',
    },
    { 
      id: 17,
      date: '2024/2/18',
      post: '福島核污水|城大調查：七成20至29歲受訪者稱不會減少遊日',
      mediaoutlet: 'AM730',
      link: 'https://www.facebook.com/story.php/?story_fbid=820722126762058&id=100064728337358&paipv=0&eav=AfbaBCAQlI1Fr0rL0uJwQf66Y88Ic-wYG5NxyknEW3nd31v1Qu435IDDzdwYS7PifVM&_rdr',
    },
    { 
      id: 18,
      date: '2024/2/18',
      post: '福島核污水|城大調查：七成20至29歲受訪者稱不會減少遊日',
      mediaoutlet: 'headline4hk | AM730',
      link: 'https://www.headline4hk.com/article/20240218/am730/430517/',
    },
    { 
      id: 19,
      date: '2024/2/18',
      post: '福島排放核污水 77%港人續遊日',
      mediaoutlet: '信報',
      link: 'https://www1.hkej.com/dailynews/views/article/3685732/%E7%A6%8F%E5%B3%B6%E6%8E%92%E6%94%BE%E6%A0%B8%E6%B1%A1%E6%B0%B4++77+%E6%B8%AF%E4%BA%BA%E7%BA%8C%E9%81%8A%E6%97%A5',
    },
    { 
      id: 20,
      date: '2024/2/18',
      post: '調查指逾6成港人認為核污水影響健康 逾7成人不減遊日次數',
      mediaoutlet: '巴士的報',
      link: 'https://www.bastillepost.com/hongkong/article/13842044-%E8%AA%BF%E6%9F%A5%E6%8C%87%E9%80%BE6%E6%88%90%E6%B8%AF%E4%BA%BA%E8%AA%8D%E7%82%BA%E6%A0%B8%E6%B1%A1%E6%B0%B4%E5%BD%B1%E9%9F%BF%E5%81%A5%E5%BA%B7-%E9%80%BE7%E6%88%90%E4%BA%BA%E4%B8%8D%E6%B8%9B',
    },
    { 
      id: 21,
      date: '2024/2/19',
      post: '福島排放核污水 港人減遊日意願',
      mediaoutlet: '大公報',
      link: 'https://www.tkww.hk/epaper/view/newsDetail/1759286760443088896.html',
    },
    { 
      id: 22,
      date: '2024/2/19',
      post: '逾半港人憂核處理水損健康 僅少數稱減少遊日',
      mediaoutlet: '大紀元新聞網',
      link: 'https://www.epochtimes.com/b5/24/2/19/n14184016.htm',
    },
    { 
      id: 23,
      date: '2024/2/19',
      post: '福島排放核污水 港人減遊日意願',
      mediaoutlet: '大公網',
      link: 'https://www.takungpao.com/news/232109/2024/0219/943404.html',
    },
    { 
      id: 24,
      date: '2024/2/19',
      post: '福島排放核污水 港人減遊日意願',
      mediaoutlet: '大公網',
      link: 'http://www.takungpao.com.hk/news/232109/2024/0219/943404.html',
    },
    
  ]);
  
  // 计算属性：总页数
  const totalPages = computed(() => {
    return Math.ceil(mediaReports.value.length / itemsPerPage.value);
  });
  
  // 计算属性：当前页显示的数据
  const paginatedReports = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return mediaReports.value.slice(start, end);
  });
  
  // 分页方法
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };
  
  const previousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };
  
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };
</script>

<template>
  <div class="media-coverage-exhibit">
    <h1 class="media-title">Media Coverage</h1>
    <div class="media-content">
      <table class="media-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Post or Repost</th>
            <th>Media outlet</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in paginatedReports" :key="report.id">
            <td>{{ report.date }}</td>
            <td>{{ report.post }}</td>
            <td>{{ report.mediaoutlet }}</td>
            <td>
              <a :href="report.link" target="_blank" class="link-button">Link</a>
            </td>
          </tr>
        </tbody>
      </table>
      
      <!-- 分页控件 -->
      <div class="pagination-container">
        <div class="pagination-info">
          显示第 {{ (currentPage - 1) * itemsPerPage + 1 }} - {{ Math.min(currentPage * itemsPerPage, mediaReports.length) }} 条，共 {{ mediaReports.length }} 条记录
        </div>
        <div class="pagination-controls">
          <button 
            @click="previousPage" 
            :disabled="currentPage === 1"
            class="pagination-btn"
          >
            上一页
          </button>
          
          <span class="pagination-numbers">
            <button 
              v-for="page in totalPages" 
              :key="page"
              @click="goToPage(page)"
              :class="['pagination-number', { active: page === currentPage }]"
            >
              {{ page }}
            </button>
          </span>
          
          <button 
            @click="nextPage" 
            :disabled="currentPage === totalPages"
            class="pagination-btn"
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.media-coverage-exhibit {
  padding: 2rem;
}
.media-title {
  color: #e65035;
  margin-bottom: 8rem;
}
.media-content {
  margin-top: 2rem;
}

.media-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  table-layout: fixed;
}

.media-table th {
  text-align: left;
  padding: 1rem 0 1.5rem 2rem;
  font-weight: bold;
  color: #333;
  border-bottom: 1px solid #ccc;
  font-size: larger;
}

.media-table td{
  padding: 2rem;
}

.media-table th:nth-child(1) {
  width: 10%;
}

.media-table th:nth-child(2) {
  width: 55%;
}

.media-table th:nth-child(3) {
  width: 20%;
}

.media-table th:nth-child(4) {
  width: 15%;
}

.media-table tr {
  padding: 1rem;
  vertical-align: top;
  border-bottom: 2px solid #dcdcdc;
}

.media-table tr:last-child {
  border-bottom: none;
}

.link-button {
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.link-button:hover {
  text-decoration: none;
  background-color: #e0e0e0;
  color: #e65035;
}

/* 移动端响应式样式 */
@media screen and (max-width: 768px) {
  .media-coverage-exhibit {
    padding: 1rem;
  }
  
  .media-title {
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
  
  /* 隐藏原始表格 */
  .media-table {
    display: none;
  }
  
  /* 创建卡片式布局 */
  .media-content::after {
    content: '';
    display: block;
  }
  
  .media-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

/* 移动端卡片样式 - 通过伪元素实现 */
@media screen and (max-width: 768px) {
  .media-table tbody {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .media-table thead {
    display: none;
  }
  
  .media-table {
    display: block;
    border: none;
  }
  
  .media-table tr {
    display: block;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 1rem;
  }
  
  .media-table td {
    display: block;
    padding: 0.5rem 0;
    border: none;
    position: relative;
    padding-left: 40%;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  .media-table td:before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 35%;
    font-weight: bold;
    color: #e65035;
    font-size: 0.9rem;
  }
  
  .media-table td:nth-child(1):before {
    content: "Date:";
  }
  
  .media-table td:nth-child(2):before {
    content: "Post or Repost:";
  }
  
  .media-table td:nth-child(3):before {
    content: "Media outlet:";
  }
  
  .media-table td:nth-child(4):before {
    content: "Link:";
  }
  
  .link-button {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    background-color: #e65035;
    color: white;
    border-radius: 4px;
    text-decoration: none;
  }
  
  .link-button:hover {
    background-color: #d44428;
    color: white;
  }
}

/* 分页样式 */
.pagination-container {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.pagination-info {
  color: #666;
  font-size: 0.9rem;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #333;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-btn:hover:not(:disabled) {
  background-color: #e65035;
  color: white;
  border-color: #e65035;
}

.pagination-btn:disabled {
  background-color: #f5f5f5;
  color: #ccc;
  cursor: not-allowed;
  border-color: #e0e0e0;
}

.pagination-numbers {
  display: flex;
  gap: 0.25rem;
}

.pagination-number {
  padding: 0.5rem 0.75rem;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #333;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 40px;
  text-align: center;
}

.pagination-number:hover {
  background-color: #f0f0f0;
  border-color: #ccc;
}

.pagination-number.active {
  background-color: #e65035;
  color: white;
  border-color: #e65035;
}

/* 小屏幕移动端优化 */
@media screen and (max-width: 480px) {
  .media-coverage-exhibit {
    padding: 0.5rem;
  }
  
  .media-title {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  
  .media-table tr {
    padding: 0.8rem;
  }
  
  .media-table td {
    padding: 0.4rem 0;
    padding-left: 35%;
  }
  
  .media-table td:before {
    width: 30%;
    font-size: 0.8rem;
  }
  
  .link-button {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
  
  .pagination-container {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .pagination-controls {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .pagination-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
  
  .pagination-number {
    padding: 0.4rem 0.6rem;
    font-size: 0.9rem;
    min-width: 35px;
  }
}
</style>