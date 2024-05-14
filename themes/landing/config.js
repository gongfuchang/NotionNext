import BLOG from '@/blog.config'

const CONFIG = {

  LANDING_HEADER_BUTTON_1_TITLE: '浏览文档',
  LANDING_HEADER_BUTTON_1_URL: BLOG.DOCS,

  LANDING_HEADER_BUTTON_2_TITLE: '作者博客',
  LANDING_HEADER_BUTTON_2_URL: '/',

  // 首页大图英雄板块
  LANDING_HERO_TITLE_1: 'Quick Mind',
  LANDING_HERO_P_1: '基于 RAG 的企业级知识库解决方案',
  LANDING_HERO_P_2: '开箱即用的 SaaS / 私有化部署',

  LANDING_HERO_BUTTON_1_TEXT: '免费体验',
  LANDING_HERO_BUTTON_1_LINK: '/article/apply',
  LANDING_HERO_BUTTON_2_TEXT: '了解客户案例',
  LANDING_HERO_BUTTON_2_LINK: '/article/custom-stories',
  LANDING_HERO_VIDEO_IMAGE: '/images/rag.jpg',
  //   HERO_VIDEO_URL: '/videos/video.mp4',
  LANDING_HERO_VIDEO_IFRAME: '//player.bilibili.com/player.html?aid=913088616&bvid=BV1fM4y1L7Qi&cid=1187218697&page=1&&high_quality=1',
  LANDING_HERO_VIDEO_TIPS: 'Watch the full video (2 min)',

  // 特性介绍
  LANDING_FEATURES_HEADER_1: '大模型（LLM）时代的革新型知识管理',
  LANDING_FEATURES_HEADER_1_P: '企业如何在知识加工、提取、检索、生成各环节使用 LLM 助力？Quick Mind 的三个产品借助 RAG 技术的精准洞察力实现了真正的智能化知识管理。',
  LANDING_FEATURES_HEADER_2: 'Quick Mind 方案的组成和优势',
  LANDING_FEATURES_HEADER_2_P: '相比较传统方案，Quick Mind 通过三个可以独立运行的产品，来成倍提升生产效率与决策质量',
  LANDING_FEATURES_CARD_1_TITLE: 'Quick Assistant | 知识助理',
  LANDING_FEATURES_CARD_1_P: '多轮对话机器人，打造数字分身',
  LANDING_FEATURES_CARD_2_TITLE: 'Quick Search | 知识搜索',
  LANDING_FEATURES_CARD_2_P: '全面、精准、快速找到，在理解后生成需要的答案',
  LANDING_FEATURES_CARD_3_TITLE: 'Quick Analyser | 智能解数',
  LANDING_FEATURES_CARD_3_P: '智能的数据分析',

  // 特性介绍2
  LANDING_FEATURES_BLOCK_HEADER: '解决方案',
  LANDING_FEATURES_BLOCK_P: '人人自媒体的时代，一个网站将帮您链接更多的人，带给你无限的机会和客户。<br/>您还在等什么呢？',
  LANDING_FEATURES_BLOCK_1_TITLE: '用网站来展示品牌',
  LANDING_FEATURES_BLOCK_1_P: '比起线下渠道、一个公开域名和网站更有说服力',
  LANDING_FEATURES_BLOCK_2_TITLE: 'SEO带来更多流量',
  LANDING_FEATURES_BLOCK_2_P: '借助搜索引擎，精准定位您的受众',
  LANDING_FEATURES_BLOCK_3_TITLE: '网站的性能很重要',
  LANDING_FEATURES_BLOCK_3_P: '更快的响应，更好的用户体验',
  LANDING_FEATURES_BLOCK_4_TITLE: '打造您的个人品牌',
  LANDING_FEATURES_BLOCK_4_P: '继马斯克、乔布斯之后，您将是下一个传奇',
  LANDING_FEATURES_BLOCK_5_TITLE: '写作表达是核心技能',
  LANDING_FEATURES_BLOCK_5_P: '比起只阅读输入，更重要的是反思和输出',
  LANDING_FEATURES_BLOCK_6_TITLE: '开始写博客吧',
  LANDING_FEATURES_BLOCK_6_P: 'NotionNext，助您轻松开始写作',

  // 感言
  LANDING_TESTIMONIALS_HEADER: '已搭建超7000个网站、总浏览量突破100,000,000+',
  LANDING_TESTIMONIALS_P: '网站内容涵盖地产、教育、建筑、医学、机械、IT、电子、软件、自媒体、数位游民、短视频、电商、学生、摄影爱好者、旅行爱好者等等各行各业',

  LANDING_TESTIMONIALS_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
  LANDING_TESTIMONIALS_NICKNAME: 'Ryan_G',
  LANDING_TESTIMONIALS_ID: 'Ryan`Log 站长',
  LANDING_TESTIMONIALS_SOCIAL_NAME: '@Gaoran',
  LANDING_TESTIMONIALS_SOCIAL_URL: 'https://blog.gaoran.xyz/',
  LANDING_TESTIMONIALS_WORD: '“ 感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ “',

  LANDING_POST_REDIRECT_ENABLE: process.env.NEXT_PUBLIC_POST_REDIRECT_ENABLE || false, // 是否开启文章地址重定向 ； 用于迁移旧网站域名
  LANDING_POST_REDIRECT_URL: process.env.NEXT_PUBLIC_POST_REDIRECT_URL || 'https://blog.tangly1024.com', // 重定向网站地址

  LANDING_PRICING_TITLE: '价格表',
  LANDING_PRICING_P: 'NotionNext开源免费，此处仅演示订阅付费功能！请勿购买！',

  LANDING_PRICING_1_TITLE: '个人版',
  LANDING_PRICING_1_PRICE: '免费',
  LANDING_PRICING_1_CONTENT: '项目源代码,部署教程,不定时技术答疑',
  LANDING_PRICING_1_BUTTON: '开始体验',
  LANDING_PRICING_1_URL: '/apply',

  LANDING_PRICING_2_TITLE: '捐赠版',
  LANDING_PRICING_2_PRICE: '$9.9/月',
  LANDING_PRICING_2_CONTENT: '项目源代码,部署教程,长期技术答疑,代码升级合并,内部社群',
  LANDING_PRICING_2_BUTTON: '立即购买',
  LANDING_PRICING_2_URL: '/buy',

  LANDING_PRICING_3_TITLE: '企业版',
  LANDING_PRICING_3_PRICE: '$59/月',
  LANDING_PRICING_3_CONTENT: '项目源代码,部署教程,VIP技术咨询,代码升级合并,内部社群,定制功能开发,SEO优化',
  LANDING_PRICING_3_BUTTON: '立即购买',
  LANDING_PRICING_3_URL: '/buy-enterprise',

  LANDING_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_LANDING_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
