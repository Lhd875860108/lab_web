import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeopleView from '../views/PeopleView.vue'
import ResearchView from '../views/ResearchView.vue'
import ProjectView from '../views/ProjectView.vue'
import NewsView from '../views/NewsView.vue'
import JoinView from '../views/JoinView.vue'
import TrustMediatedCommunicationView from '../views/research-details/TrustMediatedCommunicationView.vue'
import TrustParadoxView from '../views/research-details/TrustParadoxView.vue'
import RiskCommunicationFrameworkView from '../views/research-details/RiskCommunicationFrameworkView.vue'
import RiskPerceptionAnalysisView from '../views/research-details/RiskPerceptionAnalysisView.vue'
import DigitalMediaBehaviorView from '../views/research-details/DigitalMediaBehaviorView.vue'
import HealthInformationLiteracyView from '../views/research-details/HealthInformationLiteracyView.vue'
import CulturalCommunicationStrategiesView from '../views/research-details/CulturalCommunicationStrategiesView.vue'
import OrganizationalCultureCommunicationView from '../views/research-details/OrganizationalCultureCommunicationView.vue'

// 项目详情页面
import FukushimaNuclearWasteView from '../views/project-details/FukushimaNuclearWasteView.vue'
import DynamicsOfTrustView from '../views/project-details/DynamicsOfTrustView.vue'
import TrustInAIView from '../views/project-details/TrustInAIView.vue'
import Covid19View from '../views/project-details/Covid19View.vue'

// 新闻详情页面
import NewsDetailsView from '../views/news-details/NewsDetailsView.vue'
import MediaCoverageView from '../views/news-details/MediaCoverageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/people',
      name: 'people',
      component: PeopleView,
    },
    {
      path: '/research',
      name: 'research',
      component: ResearchView,
    },
    {
      path: '/research/trust',
      name: 'trust',
      component: ResearchView,
    },
    {
      path: '/research/risk',
      name: 'risk',
      component: ResearchView,
    },
    {
      path: '/research/information-behavior',
      name: 'information-behavior',
      component: ResearchView,
    },
    {
      path: '/research/strategic-com-culture',
      name: 'strategic-com-culture',
      component: ResearchView,
    },
    {
      path: '/research/trust/trust-mediated-communication',
      name: 'trust-mediated-communication',
      component: TrustMediatedCommunicationView,
    },
    {
      path: '/research/trust/trust-paradox',
      name: 'trust-paradox',
      component: TrustParadoxView,
    },
    {
      path: '/research/risk/risk-communication-framework',
      name: 'risk-communication-framework',
      component: RiskCommunicationFrameworkView,
    },
    {
      path: '/research/risk/risk-perception-analysis',
      name: 'risk-perception-analysis',
      component: RiskPerceptionAnalysisView,
    },
    {
      path: '/research/information-behavior/digital-media-behavior',
      name: 'digital-media-behavior',
      component: DigitalMediaBehaviorView,
    },
    {
      path: '/research/information-behavior/health-information-literacy',
      name: 'health-information-literacy',
      component: HealthInformationLiteracyView,
    },
    {
      path: '/research/strategic-com-culture/cultural-communication-strategies',
      name: 'cultural-communication-strategies',
      component: CulturalCommunicationStrategiesView,
    },
    {
      path: '/research/strategic-com-culture/organizational-culture-communication',
      name: 'organizational-culture-communication',
      component: OrganizationalCultureCommunicationView,
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView,
    },
    {
      path: '/project/fukushima-nuclear-waste',
      name: 'fukushima-nuclear-waste',
      component: FukushimaNuclearWasteView,
    },
    {
      path: '/project/dynamics-of-trust',
      name: 'dynamics-of-trust',
      component: DynamicsOfTrustView,
    },
    {
      path: '/project/trust-in-ai',
      name: 'trust-in-ai',
      component: TrustInAIView,
    },
    {
      path: '/project/covid-19',
      name: 'covid-19',
      component: Covid19View,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/news/news-details',
      name: 'news-details',
      component: NewsView,
    },
    {
      path: '/news/media-coverage',
      name: 'media-coverage',
      component: NewsView,
    },
    {
      path: '/join',
      name: 'join',
      component: JoinView,
    },
  ],
  // 添加scrollBehavior配置，使页面在每次导航时自动滚动到顶部
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
