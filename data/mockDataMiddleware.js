const Mock = require('mockjs');
const url = require('url');

let map = {
  '/api/jobs/list'(response){
    let obj = Mock.mock({
      message: 'ok',
      status: 0,
      'data|10': [
        {
          'id|+1': 1,
           'company': '@ctitle',
           'companyPic': '@image(100x100)',
           'job|1': ['前端开发工程师', 'PHP开发工程师', '产品经理开发工程师'],
           'city': '@city',
           'minSalary|10-15': 0, 
           'maxSalary|15-50': 0, 
           'publish': '@date'
        }
      ]
    });
    let result = JSON.stringify(obj);

    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(result);
  },
  '/api/jobs/detail'(response){
    let obj = Mock.mock({
      message: 'ok',
      status: 0,
      'data':{
           'companyPic': '@image(100x100)',
           'city': '@city',
           'minSalary|10-15': 0, 
           'maxSalary|15-50': 0, 
           'jobyou':'@csentence(3,7)',
           'jobdec':'@cparagraph( 6, 10 )',
           'minyear|0-3': 0, 
           'maxyear|3-5': 0,
           'xueli|1': ['大专及以上', '本科及以上', '硕士'],
           'jobtime|1': ['全职', '兼职', '实习']
        }
    });
    let result = JSON.stringify(obj);

    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(result);
  },
  '/api/citylist'(response){
    const result = require('./cities.json');
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  },
  '/api/user/get_code'(response){
    const result = {
      message: 'ok',
      status: 0,
      data: null
    };
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  },
  '/api/user/regiester/confirm_code'(response){
    const result = {
      message: 'ok',
      status: 0,
      data: null
    };
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  },
  '/api/user/regiester/confirm_code'(response){
    const result = {
      message: 'ok',
      status: 0,
      data: null
    };
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  },
  '/api/user/delive/resume'(response){
    const result = {
      message: 'ok',
      status: 0,
      data: null
    };
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  },
  '/api/user/resume/edit'(response){
    let obj = Mock.mock({
      message: 'ok',
      status: 0,
      'data':{
        'tel':/1[358][1-9]\d{8}/,
        'email':'@email',
        'year|0-3': 0, 
        'xueli|1': ['大专', '本科', '硕士']
     }
    });
    let result = JSON.stringify(obj);
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(result);
  },
  '/api/user/delive/list'(response){
    const result = {
      message: 'ok',
      status: 0,
      data: null
    };
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  },
  '/api/user/collect'(response){
    const result = {
      message: 'ok',
      status: 0,
      data: null
    };
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  },
  '/api/user/collect_list'(response){
    const result = {
      message: 'ok',
      status: 0,
      data: null
    };
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  },
  '/api/user/login_out'(response){
    const result = {
      message: 'ok',
      status: 0,
      data: null
    };
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  },
  '/api/jobs/search'(response){
    let obj = Mock.mock({
      message: 'ok',
      status: 0,
      'data|10': [
        {
          'id|+1': 1,
           'company': '@ctitle',
           'companyPic': '@image(100x100)',
           'job|1': ['前端开发工程师', 'PHP开发工程师', '产品经理开发工程师'],
           'city': '@city',
           'minSalary|10-15': 0, 
           'maxSalary|15-50': 0, 
           'publish': '@date'
        }
      ]
    });
    let result = JSON.stringify(obj);

    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(result);
  }
  
}


function mockDataMiddleware(request, response, next){

  // 解析请求的url路径，取得请求url中的pathname
  let result = url.parse(request.url, true);

  let {pathname, query} = result;
  

  // 判断请求是否是需要拦截请求
  map[pathname] ? map[pathname](response) : next();
  
}

// 向外输出
module.exports = mockDataMiddleware;