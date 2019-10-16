module.exports = {
  // 每一个页面都要用的css
  style: [
    './src/css/**/*.css'
  ],
  home: [
    // 需要调用公共组件的样式
    './src/components/header/header.css',
    './src/components/refresh-loadmore/scroll.css',
    './src/components/tabbar/tabbar.css',
    './src/components/loading/loading.css',
    // 自己的样式
    './src/views/home/**/*.css'
  ],
  detail: [
    './src/components/header/header.css',
    // 自己的样式
    './src/views/detail/**/*.css'
  ],
  login: [
    './src/components/header/header.css',
    './src/views/login/**/*.css'
  ],
  mine: [
    './src/components/tabbar/tabbar.css',
    './src/components/header/header.css',
    './src/views/mine/**/*.css'
  ],
  regiester: [
    './src/components/header/header.css',
    './src/views/regiester/**/*.css'
  ],
  search: [
    './src/components/header/header.css',
    './src/components/citylist/citylist.css',
    './src/components/tabbar/tabbar.css',
    './src/components/loading/loading.css',
    './src/views/search/**/*.css'
  ],
  edit: [
    './src/components/header/header.css',
    './src/views/edit/**/*.css'
  ],
  jobName: [
    './src/components/header/header.css',
    './src/views/jobName/**/*.css'
  ],
  addressName: [
    './src/components/header/header.css',
    './src/components/citylist/citylist.css',
    './src/views/addressName/**/*.css'
  ],
  salaryName: [
    './src/components/header/header.css',
    './src/views/salaryName/**/*.css'
  ],
  companyName: [
    './src/components/header/header.css',
    './src/views/companyName/**/*.css'
  ],
  like: [
    './src/components/header/header.css',
    './src/views/like/**/*.css'
  ],
  deliver: [
    './src/components/header/header.css',
    './src/views/deliver/**/*.css'
  ],
  interview: [
    './src/components/header/header.css',
    './src/views/interview/**/*.css'
  ],
  resume: [
    './src/components/header/header.css',
    './src/views/resume/**/*.css'
  ]
}