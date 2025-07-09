<script setup>
// News详情页面组件逻辑
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Image01 from '../../assets/News/01.png';
import Image02 from '../../assets/News/02.png';
import Image03 from '../../assets/News/03.png';
import Image04 from '../../assets/News/04.png';
import Image05 from '../../assets/News/05.png';
import Image06 from '../../assets/News/06.png';
import Image07 from '../../assets/News/07.png';
import Image08 from '../../assets/News/08.png';
import Image09 from '../../assets/News/09.png';
import Image10 from '../../assets/News/10.png';
import Image11 from '../../assets/News/11.png';
import Image12 from '../../assets/News/12.png';
import Image13 from '../../assets/News/13.png';
import Image14 from '../../assets/News/14.png';
import Image15 from '../../assets/News/15.png';
import Image16 from '../../assets/News/16.png';
import Image17 from '../../assets/News/17.png';
import Image18 from '../../assets/News/18.png';
import Image19 from '../../assets/News/19.png';
import Image20 from '../../assets/News/20.png';
import Image21 from '../../assets/News/21.png';
import Image22 from '../../assets/News/22.png';

const route = useRoute();
const newsId = route.params.id;

// 新闻列表数据
const newsList = ref([
  { 
    id: 1, 
    time: 'April 15, 2024',
    title: 'Director Huang Visited The School of Journalism and Communication at Peking University', 
    contents: [
      {id: 1, content: "On April 15, Professor Huang Yihui, Chair and Chair Professor of the Department of Media and Communication at City University of Hong Kong, visited the School of Journalism and Communication at Peking University for an exchange. The meeting was attended by Dean Chen Gang, Party Secretary Tang Jinnan, Vice Deans Chen Kaihe and Wang Weijia, as well as Xu Jing, the program leader of the Master's in Health Communication. Both parties held an in-depth discussion on cooperation in areas such as academic development, talent cultivation, and exchange visits."},
      {id: 2, content: "Dean Chen Gang warmly welcomed the visit of Professor Huang Yihui, Chair of the Department. Following the welcome, both parties introduced the history, research focus, faculty strength, and student development of their respective institutions, expressing hopes for increased future exchanges and collaboration."},
      {id: 3, content: "During the seminar, both parties engaged in an in-depth discussion about the current international exchange programs for students at the two institutions, exploring potential opportunities for future exchange visits."},
      {id: 4, content: "After the seminar, Professor Huang Yihui also participated in an interview with students from our department, focusing on topics such as health communication and risk communication. During the interview, Professor Huang encouraged students to maintain their original academic curiosity and passion in the rapidly changing environment, while also emphasizing the importance of building resilience and cultivating inner strength."},
      {id: 5, content: "Professor Huang Yihui is currently the Chair and Chair Professor of the Department of Media and Communication at City University of Hong Kong, and an Emeritus Professor at the School of Journalism and Communication at The Chinese University of Hong Kong. She holds a PhD from the Philip Merrill College of Journalism at the University of Maryland, USA, and has previously served as a professor at both The Chinese University of Hong Kong and National Chengchi University in Taiwan. Her research interests include strategic communication, risk communication in health and technology issues, crisis communication, relationship management, and conflict resolution. She has published over 200 articles in top-tier journals, delivered 26 keynote speeches, and participated in more than 100 academic conferences. Professor Huang serves as the editor of *Communication and the Public* (SCOPUS and ESCI indexed) and *Communication and Society* (TSSCI indexed), and is a member of the editorial boards of several international SSCI journals. In 2021, she was elected as a Fellow of the International Communication Association (ICA), becoming the first Chinese woman from the Greater China region to receive this honor and the eighth Chinese member ever elected since the association's establishment."},
      {id: 6, content: "（转载并翻译自北京大学新闻与传播学院微信公众号Reposted and translated from the Peking University WeChat Official Account:https://mp.weixin.qq.com/s/EWAwJwjh0U7pqvUDeCbw_g"},
      {id: 7, content: "2024 云南大学 https://mp.weixin.qq.com/s/EEQJlLrJ0wNWVSEAMnQ_YQ"},
      {id: 8, content: "2024 南京大学 https://mp.weixin.qq.com/s/gxp7OT_BlpnmAUDePvbvCA"},
    ], 
    images:[
      {id: 1, src: Image01, annotation: '双方在北大新闻与传播学院进行座谈'},
      {id: 2, src: Image02, annotation: '黄懿慧在座谈会上对香港城市大学媒体与传播系情况进行介绍'},
      {id: 3, src: Image03, annotation: '陈刚对我院情况进行介绍'},
      {id: 4, src: Image04, annotation: '双方在北京大学新闻与传播学院合影留念'},
    ]
  },
  { id: 2, 
    time: 'November 27, 2024',
    title: 'Director Huang gave a lecture at Nanjing University titled "Dynamic Trust in Health Risks: Trajectory Evolution Analysis."', 
    content:[
      {id: 1, content: "On the morning of November 27, 2024, Professor Huang Yihui, Chair and Chair Professor of the Department of Media and Communication at City University of Hong Kong, was invited by the School of Journalism and Communication at Nanjing University to give a lecture titled 'Dynamic Trust in Health Risks: Trajectory Evolution Analysis.' Drawing on her extensive academic experience and unique insights, Professor Huang delivered an enriching session for the faculty and students. The lecture was chaired by Professor Zhang Hongjun, Executive Dean of the School of Journalism and Communication at Nanjing University. Also attending were Liu Yuan, Party Secretary, and Ji Xiaomin, Party Deputy Secretary of the School."},
      {id: 2, content: " At the beginning of the lecture, Professor Zhang Hongjun, Executive Dean of the School of Journalism and Communication at Nanjing University, warmly welcomed Professor Huang Yihui and briefly introduced her academic achievements and research areas to the faculty and students in attendance. Professor Huang holds a PhD from the Philip Merrill College of Journalism at the University of Maryland, USA, and has previously taught at The Chinese University of Hong Kong and National Chengchi University in Taiwan. Her primary research interests include strategic communication, risk communication in health, crisis communication, relationship management and conflict resolution, as well as intercultural communication. She has published over 200 papers in authoritative journals in both Chinese and English. In 2021, Professor Huang was elected as a Fellow of the International Communication Association (ICA), becoming the first Chinese woman to receive this honor. In 2024, she was also awarded the title of Senior Research Fellow by the Hong Kong Research Grants Council (RGC), becoming the first scholar from the humanities and social sciences at City University of Hong Kong to receive this distinction. "},
      {id: 3, content: " In the lecture, Professor Huang Yihui first shared her research findings on the dynamic trust trajectory analysis in risk societies, noting that past studies have primarily focused on Chinese societies, with the core of her work centered around the trust-centered communication model in these societies. She emphasized the importance of 'trust' in crisis management and proposed three key dimensions of institutional trust: competence, benevolence, and integrity. Professor Huang then explained dynamic trust trajectories through her team's research on changes in attitudes toward COVID-19 vaccination during the pandemic, as well as their study on 'contextual trust in crisis situations in Chinese and Western societies.' She shared research findings on changes in vaccine acceptance, highlighting that public trust in institutions and confidence in vaccines were key factors in determining vaccination behavior."},
      {id: 4, content: " In addition, Professor Huang asked the faculty and students present whether they would be willing to ride in autonomous vehicles and shared her recent research on the 'trust in autonomous vehicles.' She pointed out that the acceptance of autonomous vehicles in Wuhan is around 90%, while in Hong Kong, it is only about 49%. This comparison between the two regions led her back to the issue of risk perception. Furthermore, Professor Huang discussed future research directions, including the tracking of institutional trust, multidimensional analysis of institutional trust, and cross-cultural comparisons. "},
      {id: 5, content: "Finally, Professor Huang Yihui introduced the educational programs offered by the Department of Media and Communication at City University of Hong Kong, including undergraduate, master’s, and PhD courses. She emphasized that City University of Hong Kong places great importance on talent cultivation and is committed to providing students with an international educational environment. For Mainland Chinese students, the university offers a variety of scholarship programs to encourage outstanding individuals to apply."},
      {id: 6, content: "During the interactive session of the lecture, students actively asked questions and engaged in in-depth discussions with Professor Huang. They inquired about topics such as research methodology, application standards for graduate schools, and personal research directions. Professor Huang patiently answered their questions, offering advice based on her own experiences, combining theoretical insights with practical suggestions. Her rigorous academic approach and the accessible, engaging nature of the lecture were widely praised by both faculty and students, creating a lively and vibrant atmosphere at the event."},
      {id: 7, content: "After the lecture, Dean Zhang Hongjun highly praised the academic event, stating that Professor Huang's insightful answers not only clarified students' doubts but also provided new perspectives for the academic research at the school. He expressed hope that the faculty and students could draw inspiration from the lecture to continually enhance their academic abilities. He also expressed a strong desire for Professor Huang to visit Nanjing University more often for further exchanges."},
      {id: 8, content: "The successful holding of this lecture not only deepened the academic exchange between our school and City University of Hong Kong, but also provided a valuable opportunity for our faculty and students to engage in face-to-face communication with a leading scholar. It further broadened our research perspectives and sparked enthusiasm for academic discussions."},
    ],
    images:[
      {id: 5, src: Image05, annotation: ''},
      {id: 6, src: Image06, annotation: ''},
      {id: 7, src: Image07, annotation: ''},
      {id: 8, src: Image08, annotation: ''},
      {id: 9, src: Image09, annotation: ''},
      {id: 10, src: Image10, annotation: ''},
      {id: 11, src: Image11, annotation: ''},
      {id: 12, src: Image12, annotation: ''},
      {id: 13, src: Image13, annotation: ''},
      {id: 14, src: Image14, annotation: ''},
      {id: 15, src: Image15, annotation: ''},
      {id: 16, src: Image16, annotation: ''},
    ]
  },
  {
    id: 3, 
    time: 'November 27, 2024',
    title: 'Lecture on "Longitudinal Research Exploration of Cross - cultural Risk Communication" Successfully Held', 
    content: [
      {id: 1, content:"From 2:00 pm to 4:00 pm on May 21, 2025, the lecture \"Longitudinal Research Exploration of Cross - cultural Risk Communication\" of Maxin Guan Learned Lecture Hall, hosted by the School of Literature and Journalism of Sichuan University, was successfully held in Conference Room 526, Area 1, Wenke Building, Jiang'an Campus. The keynote speaker of this lecture was Professor Huang Yihui, Chair Professor and Head of the School of Media and Communication at City University of Hong Kong, and it was chaired by Professor Huang Shunming." },
      {id: 2, content:"Professor Huang Yihui, as a Fellow of the International Communication Association (ICA Fellow), has made remarkable achievements in the fields of risk communication and crisis communication. During the lecture, based on multiple longitudinal surveys and trajectory analysis methods, she deeply analyzed the path of the public's attitude change when facing risk issues such as public health and environmental pollution. The research spans the cultural contexts of Chinese and Western societies, bringing new perspectives and methodological inspirations for the construction of risk communication theory and public policy practice." },
    ],
    images:[
      {id: 17, src: Image17, annotation: ''},
      {id: 18, src: Image18, annotation: ''},
    ]
  },
  {
    id: 4, 
    time: 'November 27, 2024',
    title: "Lab director Yihui Christine Huang listed among Stanford University’s 2024 World's Top 2% Scientists",
    content: [
      {id: 1, content: "Two faculty members from CityU's media and communication department are listed among Stanford University’s 2024 World's Top 2% Most-Cited Scientists. —Professor Yihui Christine Huang is one of them."},
      {id: 2, content: "The Department of Media and Communication at City University of Hong Kong is proud to announce that Professor Yihui Huang (Department Head and Chair Professor) and Associate Professor Ki Joon KIM have been named among Stanford University’s 2024 World's Top 2% Most-Cited Scientists. This recognition affirms their outstanding academic achievements and contributions to their respective research fields."},
      {id: 3, content: "Stanford University’s list of the World’s Top 2% Most-Cited Scientists is based on citation data from the Scopus database as of the end of 2023. Using a range of citation metrics, the list ranks scholars across various scientific disciplines and subfields, identifying top researchers with multiple highly cited publications. Selection criteria include the top 100,000 scientists by c-score (with or without self-citations) or those ranked in the top 2% of their subfield."},
      {id: 4, content: "We extend our warmest congratulations to both professors on this remarkable achievement!"},
    ],
    images:[
      {id: 19, src: Image19, annotation: ''},
    ]
  },
  {
    id: 5, 
    time: 'November 27, 2024',
    title: 'Thematic Lecture on “Multiple Research Methods in Communication Studies: Case Analysis, Survey Research, and Empirical Model Building” Successfully Held at Yunnan University',
    content: [
      {id: 1, content: "Yihui Christine Huang Professor at City University of Hong Kong; Emeritus Professor at The Chinese University of Hong Kong"},
      {id: 2, content: "Professor Yihui Christine Huang delivered a lecture titled “Multiple Research Methods in Communication Studies: Case Analysis, Survey Research, and Empirical Model Building,” drawing on her research in strategic communication and public relations models in Chinese societies to introduce key aspects and interrelations of communication research methods."},
      {id: 3, content: "In this lecture, Professor Huang focused on the relationship between research methods and theory building, emphasizing that theoretical construction serves to describe, explain, and predict facts—thereby enhancing researchers’ capacity for observation, interpretation, and forecasting."},
      {id: 4, content: "Using specific research examples, Professor Huang elaborated on how case study and survey methods relate to theory development. In her discussion of case studies, she introduced organizational response models through the lens of crisis management, questioned the applicability of Western theories to Chinese societies, and selected three representative and context-sensitive crises from mainland China. She analyzed four key factors affecting crisis communication outcomes and used shared contextual elements to extend, test, challenge, and revise theories—exploring the potential to adapt Western models. She also addressed the strengths and limitations of comparative multi-case research."},
      {id: 5, content: "Regarding survey methods, Professor Huang introduced both cross-sectional and longitudinal data analysis, comparing their advantages and limitations. She presented survey research conducted during the COVID-19 pandemic among Chinese communities, which explored the link between trust-building and vaccine word-of-mouth, the paradoxical effects of institutional trust on risk perception, and changes in vaccination attitudes over time. These studies helped develop a trust-oriented communication model and led to the identification of four distinct institutional trust trajectories."},
      {id: 6, content: "Professor Huang emphasized the importance of focusing on the problems we aim to solve and the theoretical models we seek to construct. She encouraged critical reflection on existing theories, and the courage to extend or challenge them, in order to build new theoretical frameworks that better reflect societal and temporal changes."},
      {id: 7, content: "（转载并翻译自云南大学新闻学院微信公众号Reprinted and translated from the WeChat public account of the School of Journalism of Yunnan University）"},
    ],
    images:[
      {id: 20, src: Image20, annotation: ''},
    ]
  },
  {
    id: 6, 
    time: 'November 27, 2024',
    title: 'Zhejiang University Communication Forum, titled “Trust and Health Risk Management: The Trust-Centered Communication Model in Chinese Societies,” was successfully held.',
    content: [
      {id: 1, content: "On the morning of October 26, 2023, Professor Yihui Christine Huang, Chair and Chair Professor of the Department of Media and Communication at City University of Hong Kong, visited the College of Media and International Culture at Zhejiang University. She gave a talk titled “Trust and Health Risk Management: The Trust-Centered Communication Model in Chinese Societies,” introducing a series of empirical studies on trust during the COVID-19 pandemic and the resulting model. The lecture was chaired by Professor Huang Qing, a \"Hundred Talents Program\" researcher of the college, and attended by several faculty members and students."},
      {id: 2, content: "Professor Huang’s research focuses on strategic communication management in Chinese societies, covering topics such as health risks, crisis communication, relationship management, and conflict mediation. Her core research agenda centers on building a “Chinese Strategic Communication/Public Relations Model,” extending into subtopics such as the organization-public relationship scale, Chinese relationalism, crisis communication strategies and their effectiveness in Chinese societies, and the Trust-Centered Communication Model. This lecture focused on the Trust-Centered Communication Model, beginning with a discussion on the paradigm shift in Chinese public relations, then delving into the dimensions of trust, their varying impacts and cross-cultural applicability, factors that enhance trust, the psychological mechanisms through which trust influences public decision-making, and its paradoxical effect as a form of “risk-taking.”"},
      {id: 3, content: "I. The Paradigm Shift in Chinese Public Relations Management and the Emergence of \"Trust\""},
      {id: 4, content: "Public relations management in Chinese societies has undergone a paradigm shift—from the communication management paradigm of the 1990s, to the relationship management paradigm of the 2000s, and to the trust management paradigm of the 2020s. The traditional communication paradigm emphasized indicators such as awareness, media exposure, recognition, and reputation, but “communication” does not equate to “relationship,” making those metrics inadequate under the relationship paradigm. Therefore, Professor Huang began constructing relationship effectiveness indicators. Drawing from law, sociology, and other disciplines, she proposed a five-dimensional measurement framework consisting of trust, satisfaction, commitment, mutual control, and the relational concepts of renqing and face. With “trust” as the core concept, she further developed the Trust-Centered Communication Model, marking a paradigm shift from relationship to trust management in public relations."},
      {id: 5, content: "II. Trust-Centered Communication Model"},
      {id: 6, content: "What is trust? How can we deconstruct its dimensions? Professor Huang focused on the dialectical relationship between trust and risk—trusting a relational partner implies a willingness to take risks. She proposed three key dimensions of institutional trust: Ability, Benevolence, and Integrity. Only when the public believes in an institution’s competence, goodwill, and honesty can institutional trust be established."},
      {id: 7, content: "Centering on institutional trust, Professor Huang posed two research questions: “What are the key predictors of institutional trust?” and “What are its effects?” Drawing on large-scale empirical studies conducted during the COVID-19 pandemic across mainland China, Taiwan, Hong Kong, the U.S., and the U.K., she collected and analyzed data from over 28,000 samples. The resulting Trust-Centered Communication Model integrates both predictors and effects of institutional trust. Predictors include perceived responsiveness, media attention to COVID-19 information, and authoritarian orientation; effects include vaccination word-of-mouth (WOM) intention and actual vaccine uptake. The model also reveals a paradoxical effect of institutional trust in the context of risk perception and vaccination decisions."},
      {id: 8, content: "Through a logically organized and structured presentation of a series of empirical studies, Professor Huang gradually unfolded a comprehensive research map on trust-based communication. Her work ultimately pointed to a shift in communication dynamics in Chinese societies, demonstrating her keen scholarly insight and profound understanding of societal issues."},
      {id: 9, content: "The lecture concluded with a lively Q&A session between students and Professor Huang."},
      {id: 10, content: "The first student asked about research methods for reaching marginalized social groups, such as the elderly. Professor Huang acknowledged that quantitative research has created significant business opportunities for commercial survey firms. However, for qualitative studies with smaller sample size requirements, common approaches like snowball sampling remain applicable. To address concerns over sample representativeness, she recommended supplementing with theoretical sampling to enhance methodological rigor."},
      {id: 11, content: "Another student raised a critical question: given today’s notion that “even bad publicity is still publicity,” has trust ceased to be the goal for organizations, with public visibility taking its place? In response, Professor Huang explained that traditional communication metrics such as awareness and reputation still apply and now coexist alongside relationship and trust management paradigms. However, for organizations that seek exposure through controversy, such fame is often short-lived and lacks sustainable value. Today, ESG (Environmental, Social, and Governance) standards are becoming the core benchmarks for evaluating corporate sustainability, and academic research should likewise be grounded in the assumption that “communication effects are long-term.”"},
      {id: 12, content: "The final question came from a student who asked whether the concept of “institutional trust” might evolve new dimensions as algorithmic systems become increasingly central to major corporations and more visible to the public. Professor Huang responded that while technology evolves, human nature remains constant. The existing dimensions of institutional trust—ability, benevolence, and integrity—still apply in the age of technology and have already been validated through longitudinal and cross-cultural studies. What we should reflect on, she emphasized, is the extent to which algorithmic systems influence public trust. For instance, can platform algorithms manipulate trust by selectively feeding users positive content about institutions?"},
      {id: 13, content: "Professor Huang’s Trust-Centered Communication Model and the research mindset behind it undoubtedly inspired the attendees—and perhaps you, the reader as well. The lecture concluded in a warm and enthusiastic atmosphere, reminding us that the map of communication research continues to be explored and expanded by scholars in the field."},
    ],
    images:[
      {id: 21, src: Image21, annotation: ''},
      {id: 22, src: Image22, annotation: ''},
    ]
  }
]);
const keynoteSeechs = ref([
  {id:1, content: "Huang, Y. H. (April 23, 2024). Keynote speech on “Marketing Communication, Crisis Management and Conflict Resolution in Strategic Communication：Theoretical Model Construction and Sharing (策略傳播中的行銷管理、危機溝通與衝突調解: 理論模型建構與分享),” International Academic Forum on Brian, Linguistics, and Communication, School of Journalism, Yunnan University, Kunming, China."},
  {id:2, content: "Huang, Y. H. (October 28, 2023). Keynote speech on “From Engagement to Co-Creation: Paradigm Shift in Strategic Communication (從涉入到共創：策略傳播的範式轉變),” The Future of Emerging Media Forum, School of Media and Communication, Shanghai Jiao Tong University, Shanghai, China."},
  {id:3, content: "Huang, Y. H. (October 22, 2023). Keynote speech on “The Paradigm of Strategic Communication/Public Relations Campaign: High Quality, New Development, Towards the Future (策略傳播/公共關係策劃之範式：高質量、新發展、向未來)”, The 9th China University Students Public Relations Planning and Entrepreneurship Competition (第九屆中國大學生公共關係策劃創業大賽), China International Public Relations Association (CIPRA), Shanghai, China."},
  {id:4, content: "Huang, Y. H. (August 19, 2023). Keynote speech on “Crisis/Risk Communication and Trust Research: A Cross-cultural Perspective (危機/風險溝通與信任研究：跨文化視角),” Public Relations Society of China 7th Annual Conference, Lanzhou, China."},
  {id:5, content: "Huang, Y. H. (May 24, 2023). Keynote speech on “Navigating Culture-Based Communication: Exploring Four Approaches with Case Illustration,” Digital Communication in Global China: Creativity, Authenticity, and Sustainability, International Communication Association Preconference, Toronto, Canada."},
  {id:6, content: "Huang, Y. H. (December 2, 2022). Keynote speech on “Technology, Engagement, and Strategic Communication: Cultural Implications and Case Illustrations,” Cross-border between virtual and real reality: New Media studies and their applications, National Yang Ming Chiao Tung University, Taiwan."},
  {id:7, content: "Huang, Y. H. (July 5, 2021). Keynote speech on “Engagement, Emergency, and Communication Management in COVID-19 Crisis” (新冠疫情下之涉入（捲入）、應急與傳播管理), The 13th 'International Frontier Communication Theory and Research Method' Advanced Seminar (2021): Research Innovation in Digital Communication: Theory and Methodology, Zhejiang University, Hangzhou, China."},
  {id:8, content: "Huang, Y. H. (December 26, 2020). Keynote speech on “Engagement and Culture: Theoretical Model and Case Study” (涉入/捲入與文化：理論模型與個案探討), The 6th China Intercultural Communication Forum (2020), Sichuan International Studies University, Sichuan, China."},
  {id:9, content: "Huang, Y. H. (July 21, 2020). Keynote speech on “Paradigm Shift in Strategic Communication,” Foreign Expert Series, Zhejiang University, Hangzhou, China."},
  {id:10, content: "Huang, Y. H. (January 8, 2020). Keynote speech on “Branding, corporate core values, and public relations,” presented at the annual conference of China International Public Relations Association (CIPRA), Hainan, China."},
  {id:11, content: "Huang, Y. H. (January 10, 2019). Keynote speech on “corporate reputation and business model,” the Research Center of Corporate Reputation in Greater Bay area."},
  {id:12, content: "Huang, Y. H. (Oct, 2018). Keynote speech on “Stakeholder engagement and emergency communication: Cross-cultural lessons” at the International Symposium on Communicating Nuclear and Radiological Emergencies to the Public, organized by the International Atomic Energy Agency (IAEA). October 1-5, Vienna, Austria."},
  {id:13, content: "Huang, Y. H. (March, 2018). Keynote speech on “bridging the culture gap in crisis and risk communication” to be presented at the annual International Crisis and Risk Communication Conference. Florida, USA."},
  {id:14, content: "Huang, Y. H. (August 18, 2017). Keynote speech on “The development of public relations discipline and paradigm in digital era: Prospective and challenges,” presented at the international conference of Chinese Journalism. Zhengzhou, China."},
  {id:15, content: "Huang, Y. H. (April 27, 2017). Keynote speech (one among three) on “Communications and Chinese culture,” presented at the International conference held by International Association of Business Communicators (IABC), April, 27, Hong Kong, SAR."},
  {id:16, content: "Huang, Y. H. (Dec. 28, 2016). Keynote speech on “The paradigm shift of public relations: Presence, challenges, and prospects from the perspective of legitimacy,” presented at the Asia Pacific Chinese public relations awards and convention, Taiwan/Taipei International public relations Association, December 28-31, 2016."},
  {id:17, content: "Huang, Y. H. (Nov. 28, 2014). Keynote speech on 'Paradigm shift of public relation: Trust management in a risk society,' keynote speech presented at an International Conference held by Korean Academic Society for Public Relations (KASPR), Seoul, Korea."},
  {id:18, content: "Huang, Y. H. (Oct. 1, 2014). Keynote speech on 'Crisis Communication in Chinese Context,' presented to the International Communication Association Regional Conference in Queensland University of Technology, Australia."},
  {id:19, content: "Huang, Y. H. (Feb. 25h, 2014), Keynote speech on 'Governing with the Media in the Risk Society,' delivered in a public lecture in School of Journalism and Communication in Tsinghua University, Beijing, China."},
  {id:20, content: "Huang, Y. H. (Nov. 10, 2012), Keynote speech on 'Internet, crisis communication, and theoretical challenges,' presented to the bi-annual conference of the Taiwan Academy for Information Society, Taiwan."},
])

// 当前选中的新闻ID
const selectedNewsId = ref(null);

// 显示新闻详情
const showNewsDetail = (id) => {
  selectedNewsId.value = id;
  window.scrollTo(0, 0); // 滚动到页面顶部
};

// 获取当前选中的新闻详情
const selectedNews = ref(null);
const updateSelectedNews = () => {
  if (selectedNewsId.value) {
    selectedNews.value = newsList.value.find(item => item.id === selectedNewsId.value);
  } else {
    selectedNews.value = null;
  }
};

// 监听selectedNewsId变化，更新selectedNews
watch(selectedNewsId, () => {
  updateSelectedNews();
});

// 初始化时更新selectedNews
onMounted(() => {
  updateSelectedNews();
});
</script>

<template>
  <div class="news-details-exhibit">
    <h1 class="news-title" @click="selectedNewsId = null">News</h1>
    <div class="news-content">
      <h2 class="keynote-title">Recent Activities</h2>
      <!-- 新闻详情页面 -->
      <div v-if="selectedNewsId" class="news-detail">
        <div class="news-detail-header">
          <h2 class="news-detail-title">{{ selectedNews.title }}</h2>
          <p class="news-detail-time">{{ selectedNews.time }}</p>
        </div>
        <div class="news-detail-content">
          <!-- 处理 contents 数组结构 -->
          <div v-if="selectedNews.contents" v-for="(content, index) in selectedNews.contents" :key="'contents-'+index" class="news-detail-paragraph">
            <!-- 在第一段内容前插入Image01 -->
            <div v-if="content.id === 1 && selectedNews.id === 1" class="news-image-container">
              <img :src="selectedNews.images[0].src" :alt="selectedNews.images[0].annotation" class="news-detail-image" />
              <p class="image-annotation">{{ selectedNews.images[0].annotation }}</p>
            </div>
            <!-- 在第二段内容前插入Image02 -->
            <div v-if="content.id === 2 && selectedNews.id === 1" class="news-image-container">
              <img :src="selectedNews.images[1].src" :alt="selectedNews.images[1].annotation" class="news-detail-image" />
            </div>
            <!-- 在第三段内容前插入Image03 -->
            <div v-if="content.id === 3 && selectedNews.id === 1" class="news-image-container">
              <img :src="selectedNews.images[2].src" :alt="selectedNews.images[2].annotation" class="news-detail-image" />
            </div>
            <!-- 在第四段内容前插入Image04 -->
            <div v-if="content.id === 4 && selectedNews.id === 1" class="news-image-container">
              <img :src="selectedNews.images[3].src" :alt="selectedNews.images[3].annotation" class="news-detail-image" />
            </div>
            <p>{{ content.content }}</p>
          </div>
          <!-- 处理 content 数组结构 -->
          <div v-else-if="selectedNews.content" v-for="(content, index) in selectedNews.content" :key="'content-'+index" class="news-detail-paragraph">
            <!-- 在id=2段落前插入Image05和Image06 -->
            <div v-if="content.id === 2 && selectedNews.id === 2" class="news-image-container">
              <img :src="selectedNews.images[0].src" :alt="selectedNews.images[0].annotation" class="news-detail-image" />
              <img :src="selectedNews.images[1].src" :alt="selectedNews.images[1].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=3段落前插入Image07 -->
            <div v-if="content.id === 3 && selectedNews.id === 2" class="news-image-container">
              <img :src="selectedNews.images[2].src" :alt="selectedNews.images[2].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=4段落前插入Image08 -->
            <div v-if="content.id === 4 && selectedNews.id === 2" class="news-image-container">
              <img :src="selectedNews.images[3].src" :alt="selectedNews.images[3].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=5段落前插入Image09和Image10 -->
            <div v-if="content.id === 5 && selectedNews.id === 2" class="news-image-container">
              <img :src="selectedNews.images[4].src" :alt="selectedNews.images[4].annotation" class="news-detail-image" />
              <img :src="selectedNews.images[5].src" :alt="selectedNews.images[5].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=6段落前插入Image11 -->
            <div v-if="content.id === 6 && selectedNews.id === 2" class="news-image-container">
              <img :src="selectedNews.images[6].src" :alt="selectedNews.images[6].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=7段落前插入Image12、Image13、Image14 -->
            <div v-if="content.id === 7 && selectedNews.id === 2" class="news-image-container">
              <img :src="selectedNews.images[7].src" :alt="selectedNews.images[7].annotation" class="news-detail-image" />
              <img :src="selectedNews.images[8].src" :alt="selectedNews.images[8].annotation" class="news-detail-image" />
              <img :src="selectedNews.images[9].src" :alt="selectedNews.images[9].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=8段落前插入Image15和Image16 -->
            <div v-if="content.id === 8 && selectedNews.id === 2" class="news-image-container">
              <img :src="selectedNews.images[10].src" :alt="selectedNews.images[10].annotation" class="news-detail-image" />
              <img :src="selectedNews.images[11].src" :alt="selectedNews.images[11].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=3新闻的第一段前插入Image17 -->
            <div v-if="content.id === 1 && selectedNews.id === 3" class="news-image-container">
              <img :src="selectedNews.images[0].src" :alt="selectedNews.images[0].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=3新闻的第二段前插入Image18 -->
            <div v-if="content.id === 2 && selectedNews.id === 3" class="news-image-container">
              <img :src="selectedNews.images[1].src" :alt="selectedNews.images[1].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=4新闻的第一段前插入Image19 -->
            <div v-if="content.id === 1 && selectedNews.id === 4" class="news-image-container">
              <img :src="selectedNews.images[0].src" :alt="selectedNews.images[0].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=5新闻的第一段前插入Image20 -->
            <div v-if="content.id === 1 && selectedNews.id === 5" class="news-image-container">
              <img :src="selectedNews.images[0].src" :alt="selectedNews.images[0].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=6新闻的第一段前插入Image21 -->
            <div v-if="content.id === 1 && selectedNews.id === 6" class="news-image-container">
              <img :src="selectedNews.images[0].src" :alt="selectedNews.images[0].annotation" class="news-detail-image" />
            </div>
            <!-- 在id=6新闻的第二段前插入Image22 -->
            <div v-if="content.id === 2 && selectedNews.id === 6" class="news-image-container">
              <img :src="selectedNews.images[1].src" :alt="selectedNews.images[1].annotation" class="news-detail-image" />
            </div>
            <p>{{ content.content }}</p>
          </div>
          <!-- 如果没有内容数据，显示提示信息 -->
          <div v-else class="news-detail-paragraph">
            <p>No content available for this news.</p>
          </div>
        </div>
      </div>
      
      <!-- 新闻列表 -->
      <div v-else>
        <div class="newslist">
          <div v-for="item in newsList" :key="item.id" class="news-item">
            <div class="news-item-content" @click="showNewsDetail(item.id)">
              <div class="news-item-text">
                <h3 class="news-item-title">{{ item.title }}</h3>
                <p class="news-item-time">{{ item.time }}</p>
              </div>
              <div class="news-item-image">
                <img v-if="item.images && item.images.length > 0" :src="item.images[0].src" :alt="item.images[0].annotation" class="news-list-image" />
              </div>
            </div>
          </div>
        </div>
        <div class="news-keynote">
          <h2 class="keynote-title">Keynote Speech</h2>
          <ul class="keynote-list">
            <li v-for="item in keynoteSeechs" :key="item.id" class="keynote-item">
              <p class="keynote-item-content">{{ item.content }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-details-exhibit {
  padding: 2rem;
}
.news-title {
  color: #e65035;
  cursor: pointer; 
  transition: all 0.3s ease; 
  display: inline-block; 
  margin-bottom: 5rem;
}

.news-title:hover {
  transform: translateY(-2px); 
}

.news-title:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(230, 80, 53, 0.2); 
}
.news-content {
  margin-top: 2rem;
}

.newslist {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.news-item {
  border-bottom: 1px solid #eee;
  padding-bottom: 2rem;
}

.news-item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  cursor: pointer; /* 添加指针样式，表示可点击 */
  transition: transform 0.2s; /* 添加过渡效果 */
}

.news-item-content:hover {
  transform: translateY(-3px); /* 鼠标悬停时轻微上移，增强交互感 */
}

.news-item-text {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.news-item-title {
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: #333;
}

.news-item-time {
  font-size: 0.9rem;
  color: #666;
}

.news-item-image {
  width: 220px;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.news-list-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

/* Keynote Speech 样式 */
.news-keynote {
  margin-top: 3rem;
}

.keynote-title {
  color: #333;
  margin-bottom: 6rem;
  font-size: 1.8rem;
  text-align: left;
}

.keynote-list {
  /* list-style-type: none; */
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.keynote-item {
  /* border-bottom: 1px solid #eee; */
  padding-bottom: 2rem;
}

.keynote-item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.keynote-item-text {
  width: 50%;
  height: 100%;
}

.keynote-item-content {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

.keynote-item-image {
  width: 220px;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 4px;
}

/* 新闻详情页面样式 */
.news-detail {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.news-detail-header {
  margin-bottom: 2rem;
  border-bottom: 2px solid #eee;
}

.news-detail-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.news-detail-time {
  font-size: 1rem;
  color: #e65035;
  margin-bottom: 3rem;
}

.news-detail-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.news-image-container {
  margin: 2rem 0;
  text-align: center;
}

.image-annotation {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.news-detail-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.news-detail-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.back-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #e65035;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 2rem;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #d44328;
}

@media (max-width: 768px) {
  .news-item-content,
  .keynote-item-content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .news-item-image,
  .keynote-item-image {
    width: 100%;
    margin-top: 1rem;
  }
  
  .news-item-text,
  .keynote-item-text {
    width: 100%;
  }
  
  .news-detail-title {
    font-size: 1.5rem;
  }
  
  .news-detail-image {
    height: 200px;
  }
  
  .news-detail-paragraph {
    font-size: 1rem;
  }
}
</style>