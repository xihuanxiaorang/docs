import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  "/技术碎片/": [
    { text: "技术碎片", link: "/技术碎片/README" },
    { text: "搞定UML类图！", link: "/技术碎片/搞定UML类图！" },
    { text: "正则表达式", link: "/技术碎片/正则表达式" },
    { text: "MapStruct", link: "/技术碎片/MapStruct" },
    { text: "Git", link: "/技术碎片/Git" },
    { text: "Uniapp工程化模板搭建", link: "/技术碎片/Uniapp工程化模板搭建" },
    {
      text: "Vue3工程化模板搭建",
      link: "/技术碎片/Vue3工程化模板搭建",
    },
    { text: "DevIssues", link: "/技术碎片/DevIssues" },
    { text: "代码片段", link: "/技术碎片/代码片段" },
    { text: "学习资源合集", link: "/技术碎片/学习资源合集" },
    {
      text: "ORM框架",
      base: "/技术碎片/ORM框架",
      items: [
        { text: "JDBC", link: "/JDBC" },
        { text: "Mybatis", link: "/Mybatis" },
        { text: "MybatisPlus", link: "/MybatisPlus" },
      ],
    },
    {
      text: "Logback",
      base: "/技术碎片/Logback",
      items: [
        { text: "介绍", link: "/README" },
        { text: "架构", link: "/架构" },
      ],
    },
  ],
  "/源码剖析/": [
    {
      text: "集合",
      base: "/源码剖析/集合",
      collapsed: false,
      items: [
        { text: "HashMap源码分析", link: "/HashMap源码分析" },
        { text: "ArrayList源码分析", link: "/ArrayList源码分析" },
      ],
    },
    {
      text: "开源项目",
      base: "/源码剖析/开源项目",
      collapsed: false,
      items: [
        {
          text: "Spring",
          base: "/源码剖析/开源项目/Spring",
          collapsed: false,
          items: [{ text: "导读", link: "/README" }],
        },
        {
          text: "RuoYi-Vue-Plus",
          base: "/源码剖析/开源项目/RuoYi-Vue-Plus",
          collapsed: false,
          items: [{ text: "导读", link: "/README" }],
        },
      ],
    },
  ],
  "/前端开发/HTML+CSS奇幻之旅/": [
    {
      text: "CSS",
      base: "/前端开发/HTML+CSS奇幻之旅/CSS",
      collapsed: false,
      items: [{ text: "Grid网格布局", link: "/Grid网格布局" }],
    },
  ],
  "/前端开发/Vue3学习之旅/": [
    {
      text: "官方文档阅读",
      base: "/前端开发/Vue3学习之旅/官方文档阅读",
      collapsed: false,
      items: [
        {
          text: "基础",
          base: "/前端开发/Vue3学习之旅/官方文档阅读/基础",
          collapsed: false,
          items: [
            { text: "创建一个应用", link: "/创建一个应用" },
            { text: "模板语法", link: "/模板语法" },
            { text: "计算属性", link: "/计算属性" },
            { text: "类与样式绑定", link: "/类与样式绑定" },
            { text: "条件渲染", link: "/条件渲染" },
            { text: "列表渲染", link: "/列表渲染" },
            { text: "事件处理", link: "/事件处理" },
            { text: "表单输入绑定", link: "/表单输入绑定" },
            { text: "生命周期", link: "/生命周期" },
            { text: "侦听器", link: "/侦听器" },
            { text: "模板引用", link: "/模板引用" },
            { text: "组件基础", link: "/组件基础" },
          ],
        },
        {
          text: "深入组件",
          base: "/前端开发/Vue3学习之旅/官方文档阅读/深入组件",
          collapsed: false,
          items: [
            { text: "注册", link: "/注册" },
            { text: "Props", link: "/Props" },
            { text: "事件", link: "/事件" },
            { text: "组件 v-model", link: "/组件v-model" },
            { text: "透传 Attributes", link: "/透传Attributes" },
            { text: "插槽", link: "/插槽" },
            { text: "依赖注入", link: "/依赖注入" },
            { text: "异步组件", link: "/异步组件" },
          ],
        },
        {
          text: "逻辑复用",
          base: "/前端开发/Vue3学习之旅/官方文档阅读/逻辑复用",
          collapsed: false,
          items: [
            { text: "组合式函数", link: "/组合式函数" },
            { text: "自定义指令", link: "/自定义指令" },
            { text: "插件", link: "/插件" },
          ],
        },
      ],
    },
  ],
  "/前端开发/TypeScript从入门到放弃/": [
    {
      text: "学习环境搭建",
      link: "/前端开发/TypeScript从入门到放弃/TypeScript学习环境搭建",
    },
    {
      text: "TypeScript教程-阮一峰",
      base: "/前端开发/TypeScript从入门到放弃/TypeScript教程-阮一峰",
      collapsed: false,
      items: [{ text: "any 类型", link: "/any类型" }],
    },
  ],
  "/前端开发/玩转微信小程序/": [
    {
      text: "尚硅谷2024微信小程序开发教程+项目实战（慕尚花坊）",
      base: "/前端开发/玩转微信小程序/尚硅谷2024最新版微信小程序开发教程+项目实战（慕尚花坊）",
      collapsed: false,
      items: [
        { text: "邂逅微信小程序", link: "/邂逅微信小程序" },
        {
          text: "小程序代码构成",
          link: "/小程序代码构成",
          items: [
            { text: "小程序配置", link: "/小程序配置" },
            { text: "基础组件", link: "/基础组件" },
            { text: "WXML语法", link: "/WXML语法" },
            { text: "WXSS样式", link: "/WXSS样式" },
            { text: "事件系统", link: "/事件系统" },
            { text: "自定义组件", link: "/自定义组件" },
          ],
        },
        { text: "字体图标与背景图片", link: "/字体图标与背景图片" },
      ],
    },
    {
      text: "其他",
      base: "/前端开发/玩转微信小程序",
      collapsed: false,
      items: [
        { text: "简易双向绑定", link: "/简易双向绑定" },
        { text: "代码片段", link: "/代码片段" },
        {
          text: "手摸手带你跑通微信小程序官方示例",
          link: "/手摸手带你跑通微信小程序官方示例",
        },
      ],
    },
  ],
  "/项目/": [
    {
      text: "vue3",
      base: "/项目/vue3",
      collapsed: false,
      items: [
        { text: "待办清单", link: "/待办清单" },
        { text: "待办清单 v2.0", link: "/待办清单v2" },
      ],
    },
    {
      text: "后台管理系统",
      base: "/项目/后台管理系统",
      collapsed: false,
      items: [
        {
          text: "simple前后端分离后台管理系统",
          items: [
            { text: "前端篇", link: "/simple后台管理系统(前端篇)" },
            { text: "后端篇", link: "/simple后台管理系统(后端篇)" },
          ],
        },
      ],
    },
    {
      text: "微信公众号开发",
      link: "/项目/微信公众号开发"
    },
  ],
  "/后端开发/java": [
    {
      text: "基础",
      base: "/后端开发/java",
      collapsed: false,
      items: [
        { text: "泛型", link: "/泛型" },
        {
          text: "嵌套类",
          link: "/嵌套类",
        },
      ],
    },
  ],
  "/后端开发/设计模式": [
    { text: "导读", link: "/后端开发/设计模式/README" },
    { text: "七大设计原则", link: "/后端开发/设计模式/七大设计原则" },
    {
      text: "创建型",
      base: "/后端开发/设计模式/创建型",
      collapsed: false,
      items: [],
    },
    {
      text: "结构型",
      base: "/后端开发/设计模式/结构型",
      collapsed: false,
      items: [],
    },
    {
      text: "行为型",
      base: "/后端开发/设计模式/行为型",
      collapsed: false,
      items: [{ text: "策略模式", link: "/策略模式" }],
    },
  ],
  "/后端开发/Spring全家桶": [
    {
      text: "Spring",
      base: "/后端开发/Spring全家桶/Spring",
      collapsed: false,
      items: [
        { text: "IoC", link: "/IoC" },
        { text: "AOP", link: "/AOP" },
        { text: "事务", link: "/事务" },
        { text: "注解驱动开发", link: "/注解驱动开发" },
      ],
    },
    {
      text: "SpringBoot",
      base: "/后端开发/Spring全家桶/SpringBoot",
      collapsed: false,
      items: [
        {
          text: "导读",
          link: "/README",
        },
        {
          text: "响应结果统一封装",
          link: "/SpringBoot-响应结果统一封装",
        },
        {
          text: "统一参数校验",
          link: "/SpringBoot-统一参数校验",
        },
      ],
    },
    {
      text: "SpringCloud",
      base: "/后端开发/Spring全家桶/SpringCloud",
      collapsed: false,
      items: [
        {
          text: "Nacos-Discovery&Config",
          link: "/Nacos-Discovery&Config",
        },
      ],
    },
    {
      text: "SpringSecurity",
      base: "/后端开发/Spring全家桶/SpringSecurity",
      collapsed: false,
      items: [
        {
          text: "导读",
          link: "/README",
        },
        {
          text: "SpringSecurity 初体验",
          link: "/SpringSecurity初体验",
        },
      ],
    },
  ],
  "/后端开发/juc": [{ text: "导读", link: "/后端开发/juc/README" }],
  "/后端开发/MySQL": [
    { text: "通用表表达式", link: "/后端开发/MySQL/通用表表达式" },
    { text: "窗口函数", link: "/后端开发/MySQL/窗口函数" },
    {
      text: "刷题集",
      base: "/后端开发/MySQL/刷题集",
      items: [{ text: "LeetCode", link: "/LeetCode" }],
    },
  ],
  "/数据结构与算法": [
    {
      text: "数组与链表",
      base: "/数据结构与算法/数据结构",
      collapsed: false,
      items: [
        { text: "数组", link: "/数组" },
        { text: "链表", link: "/链表" },
        { text: "列表", link: "/列表" },
      ],
    },
    {
      text: "栈与队列",
      collapsed: false,
      base: "/数据结构与算法/数据结构",
      items: [
        { text: "栈", link: "/栈" },
        { text: "队列", link: "/队列" },
        { text: "双向队列", link: "/双向队列" },
      ],
    },
  ],
  "/刷题/LeetCode全解": [
    {
      base: "/刷题/LeetCode全解",
      items: [
        { text: "1.两数之和", link: "/1.两数之和" },
        { text: "175.组合两个表", link: "/175.组合两个表" },
        { text: "176.第二高的薪水", link: "/176.第二高的薪水" },
        { text: "177.第N高的薪水", link: "/177.第N高的薪水" },
        { text: "178.分数排名", link: "/178.分数排名" },
        { text: "180.连续出现的数字", link: "/180.连续出现的数字" },
        { text: "181.超过经理收入的员工", link: "/181.超过经理收入的员工" },
        { text: "182.查找重复的电子邮箱", link: "/182.查找重复的电子邮箱" },
        { text: "183.从不订购的客户", link: "/183.从不订购的客户" },
        { text: "184.部门工资最高的员工", link: "/184.部门工资最高的员工" },
        { text: "196.删除重复的电子邮箱", link: "/196.删除重复的电子邮箱" },
      ],
    },
  ],
  "/刷题/NowCoder全解": [
    {
      base: "/刷题/NowCoder全解",
      text: "SQL大厂面试真题",
      collapsed: false,
      items: [
        {
          text: "SQL156 各个视频的平均完播率",
          link: "/SQL156 各个视频的平均完播率",
        },
        {
          text: "SQL157 平均播放进度大于60%的视频类别",
          link: "/SQL157 平均播放进度大于百分之60的视频类别",
        },
        {
          text: "SQL158 每类视频近一个月的转发量&率",
          link: "/SQL158 每类视频近一个月的转发量&率",
        },
        {
          text: "SQL159 每个创作者每月的涨粉率及截止当前的总粉丝量",
          link: "/SQL159 每个创作者每月的涨粉率及截止当前的总粉丝量",
        },
        {
          text: "SQL160 国庆期间每类视频点赞量和转发量",
          link: "/SQL160 国庆期间每类视频点赞量和转发量",
        },
        {
          text: "SQL161 近一个月发布的视频中热度最高的top3视频",
          link: "/SQL161 近一个月发布的视频中热度最高的top3视频",
        },
        {
          text: "SQL162 2021年11月每天的人均浏览文章时长",
          link: "/SQL162 2021年11月每天的人均浏览文章时长",
        },
        {
          text: "SQL163 每篇文章同一时刻最大在看人数",
          link: "/SQL163 每篇文章同一时刻最大在看人数",
        },
        {
          text: "SQL164 2021年11月每天新用户的次日留存率",
          link: "/SQL164 2021年11月每天新用户的次日留存率",
        },
        {
          text: "SQL165 统计活跃间隔对用户分级结果",
          link: "/SQL165 统计活跃间隔对用户分级结果",
        },
        {
          text: "SQL166 每天的日活数及新用户占比",
          link: "/SQL166 每天的日活数及新用户占比",
        },
        { text: "SQL167 连续签到领金币", link: "/SQL167 连续签到领金币" },
        {
          text: "SQL168 计算商城中2021年每月的GMV",
          link: "/SQL168 计算商城中2021年每月的GMV",
        },
        {
          text: "SQL169 统计2021年10月每个退货率不大于0.5的商品各项指标",
          link: "/SQL169 统计2021年10月每个退货率不大于0.5的商品各项指标",
        },
        {
          text: "SQL170 某店铺的各商品毛利率及店铺整体毛利率",
          link: "/SQL170 某店铺的各商品毛利率及店铺整体毛利率",
        },
        {
          text: "SQL171 零食类商品中复购率top3高的商品",
          link: "/SQL171 零食类商品中复购率top3高的商品",
        },
        {
          text: "SQL172 10月的新户客单价和获客成本",
          link: "/SQL172 10月的新户客单价和获客成本",
        },
        {
          text: "SQL173 店铺901国庆期间的7日动销率和滞销率",
          link: "/SQL173 店铺901国庆期间的7日动销率和滞销率",
        },
        {
          text: "SQL174 2021年国庆在北京接单3次及以上的司机统计信息",
          link: "/SQL174 2021年国庆在北京接单3次及以上的司机统计信息",
        },
        {
          text: "SQL175 有取消订单记录的司机平均评分",
          link: "/SQL175 有取消订单记录的司机平均评分",
        },
        {
          text: "SQL176 每个城市中评分最高的司机信息",
          link: "/SQL176 每个城市中评分最高的司机信息",
        },
        {
          text: "SQL177 国庆期间近7日日均取消订单量",
          link: "/SQL177 国庆期间近7日日均取消订单量",
        },
        {
          text: "SQL178 工作日各时段叫车量、等待接单时间和调度时间",
          link: "/SQL178 工作日各时段叫车量、等待接单时间和调度时间",
        },
        {
          text: "SQL179 各城市最大同时等车人数",
          link: "/SQL179 各城市最大同时等车人数",
        },
        { text: "SQL180 某宝店铺的SPU数量", link: "/SQL180 某宝店铺的SPU数量" },
        {
          text: "SQL181 某宝店铺的实际销售额与客单价",
          link: "/SQL181 某宝店铺的实际销售额与客单价",
        },
        { text: "SQL182 某宝店铺折扣率", link: "/SQL182 某宝店铺折扣率" },
        {
          text: "SQL183 某宝店铺动销率与售罄率",
          link: "/SQL183 某宝店铺动销率与售罄率",
        },
        {
          text: "SQL184 某宝店铺连续2天及以上购物的用户及其对应的天数",
          link: "/SQL184 某宝店铺连续2天及以上购物的用户及其对应的天数",
        },
        { text: "SQL185 牛客直播转换率", link: "/SQL185 牛客直播转换率" },
        {
          text: "SQL186 牛客直播开始时各直播间在线人数",
          link: "/SQL186 牛客直播开始时各直播间在线人数",
        },
        {
          text: "SQL187 牛客直播各科目平均观看时长",
          link: "/SQL187 牛客直播各科目平均观看时长",
        },
        {
          text: "SQL188 牛客直播各科目出勤率",
          link: "/SQL188 牛客直播各科目出勤率",
        },
        {
          text: "SQL189 牛客直播各科目同时在线人数",
          link: "/SQL189 牛客直播各科目同时在线人数",
        },
        {
          text: "SQL190 某乎问答11月份日人均回答量",
          link: "/SQL190 某乎问答11月份日人均回答量",
        },
        {
          text: "SQL191 某乎问答高质量的回答中用户属于各级别的数量",
          link: "/SQL191 某乎问答高质量的回答中用户属于各级别的数量",
        },
        {
          text: "SQL192 某乎问答单日回答问题数大于等于3个的所有用户",
          link: "/SQL192 某乎问答单日回答问题数大于等于3个的所有用户",
        },
        {
          text: "SQL193 某乎问答回答过教育类问题的用户里有多少用户回答过职场类问题",
          link: "/SQL193 某乎问答回答过教育类问题的用户里有多少用户回答过职场类问题",
        },
        {
          text: "SQL194 某乎问答最大连续回答问题天数大于等于3天的用户及其对应等级",
          link: "/SQL194 某乎问答最大连续回答问题天数大于等于3天的用户及其对应等级",
        },
      ],
    },
    {
      base: "/刷题/NowCoder全解",
      items: [
        {
          text: "SQL195 查找最晚入职员工的所有信息",
          link: "/SQL195 查找最晚入职员工的所有信息",
        },
        {
          text: "SQL196 查找入职员工时间排名倒数第三的员工所有信息",
          link: "/SQL196 查找入职员工时间排名倒数第三的员工所有信息",
        },
        {
          text: "SQL198 查找所有已经分配部门的员工的last_name和first_name以及dept_no",
          link: "/SQL198 查找所有已经分配部门的员工的last_name和first_name以及dept_no",
        },
        {
          text: "SQL201 查找薪水记录超过15条的员工号emp_no以及其对应的记录次数t",
          link: "/SQL201 查找薪水记录超过15条的员工号emp_no以及其对应的记录次数t",
        },
        {
          text: "SQL202 找出所有员工当前薪水salary情况",
          link: "/SQL202 找出所有员工当前薪水salary情况",
        },
        {
          text: "SQL204 获取所有非manager的员工emp_no",
          link: "/SQL204 获取所有非manager的员工emp_no",
        },
        {
          text: "SQL209 查找employees表emp_no与last_name的员工信息",
          link: "/SQL209 查找employees表emp_no与last_name的员工信息",
        },
        {
          text: "SQL211 获取当前薪水第二多的员工的emp_no以及其对应的薪水salary",
          link: "/SQL211 获取当前薪水第二多的员工的emp_no以及其对应的薪水salary",
        },
        {
          text: "SQL226 将employees表的所有员工的last_name和first_name拼接起来作为Name",
          link: "/SQL226 将employees表的所有员工的last_name和first_name拼接起来作为Name",
        },
        { text: "SQL228 批量插入数据", link: "/SQL228 批量插入数据" },
        {
          text: "SQL236 删除emp_no重复的记录，只保留最小的id对应的记录",
          link: "/SQL236 删除emp_no重复的记录，只保留最小的id对应的记录",
        },
        {
          text: "SQL237 将所有to_date为9999-01-01的全部更新为NULL",
          link: "/SQL237 将所有to_date为9999-01-01的全部更新为NULL",
        },
        {
          text: "SQL238 将id=5以及emp_no=10001的行数据替换成id=5以及emp_no=10005",
          link: "/SQL238 将id=5以及emp_no=10001的行数据替换成id=5以及emp_no=10005",
        },
        {
          text: "SQL239 将titles_test表名修改为titles_2017",
          link: "/SQL239 将titles_test表名修改为titles_2017",
        },
        {
          text: "SQL256 出现三次以上相同积分的情况",
          link: "/SQL256 出现三次以上相同积分的情况",
        },
        { text: "SQL258 找到每个人的任务", link: "/SQL258 找到每个人的任务" },
        {
          text: "SQL260 牛客每个人最近的登录日期(一)",
          link: "/SQL260 牛客每个人最近的登录日期(一)",
        },
        { text: "SQL266 考试分数(一)", link: "/SQL266 考试分数(一)" },
        {
          text: "SQL271 牛客的课程订单分析(一)",
          link: "/SQL271 牛客的课程订单分析(一)",
        },
        {
          text: "SQL278 实习广场投递简历分析(一)",
          link: "/SQL278 实习广场投递简历分析(一)",
        },
      ],
    },
  ],
  "/杂记/": [
    {
      text: "开发者工具",
      base: "/杂记/工具/开发者工具",
      collapsed: false,
      items: [
        { text: "IDEA", link: "/IDEA" },
        { text: "内网穿透工具", link: "/内网穿透工具" },
      ],
    },
    {
      text: "其他工具",
      base: "/杂记/工具/其他工具",
      collapsed: false,
      items: [
        { text: "视频下载工具", link: "/视频下载工具" },
        { text: "Office部署激活工具", link: "/Office部署激活工具" },
        { text: "篡改猴(Tampermonkey)", link: "/篡改猴(Tampermonkey)" },
        {
          text: "PicList+Github搭建个人云图床",
          link: "/PicList+Github搭建个人云图床",
        },
      ],
    },
    {
      text: "其他",
      base: "/杂记/其他",
      collapsed: false,
      items: [
        { text: "如何选择开源协议", link: "/如何选择开源协议" },
        {
          text: "手绘风格的开源白板Excalidraw搭建教程",
          link: "/手绘风格的开源白板Excalidraw搭建教程",
        },
        {
          text: "手摸手教你搭建部署Vitepress博客",
          link: "/手摸手教你搭建部署Vitepress博客",
        },
        {
          text: "Windows-Terminal美化",
          link: "/Windows-Terminal美化",
        },
        {
          text: "Windows11中安装Linux教程 | WLS2的使用",
          link: "/Windows11中安装Linux教程之WLS2的使用",
        },
        {
          text: "美化Github个人主页",
          link: "/美化Github个人主页",
        },
        {
          text: "更换Windows默认字体",
          link: "/更换Windows默认字体",
        },
      ],
    },
  ],
};
