(function(){

  // 构建tabbar
  function initTabBar(list){
    //每个item模版
    var tabItemTemplate = '<a href="{{href}}" class="tab-item text-center {{active}}">\
                              <span class="iconfont {{icon}}"></span>\
                              <span class="text">{{name}}</span>\
                            </a>';
    var tabItemDOM = '';

    // 找到当前选中tab的值，即当前所在页面
    var tmpArr = window.location.href.split('/');
    var currentPath = tmpArr[tmpArr.length-1].split('.')[0];

    // 遍历每个item的数据
    for(var i = 0, count = list.length; i < count; i++){
      // 取得每个item
      var item = list[i];
      // 替换数据
      var tabItem = tabItemTemplate.replace(/{{name}}/, item.name);
      tabItem = tabItem.replace(/{{icon}}/, item.icon);
      tabItem = tabItem.replace(/{{href}}/, item.href);


      // 判断是否是当前的页面
      tabItem = tabItem.replace(/{{active}}/, (currentPath === item.id ? 'active': ''));

      // 拼接每一个tab
      tabItemDOM += tabItem;


    }
    // 插入dom
    $('.tab-bar').append(tabItemDOM);
  };

  // tab栏的数据
  var tabsData = [
    {id: 'home', name: '职位', icon: 'icon-shouye', href: './home.html'},
    {id: 'search', name: '搜索', icon: 'icon-sousuo', href: './search.html'},
    {id: 'mine', name: '我的', icon: 'icon-wode', href: './mine.html'}
  ];

  initTabBar(tabsData);





})();