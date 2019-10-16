var HOST = 'http://localhost:8000';

//首页的职位列表
var HOME_JOBS_API = HOST + '/api/jobs/list';

// 职位详情数据的接口
var JOB_DETAIL_API = HOST + '/api/jobs/detail';

// 发送验证码的api
var SEND_CODE_API = HOST + '/api/user/get_code';

// 注册的api
var REGIESTER_API = HOST + '/api/user/regiester/confirm_code';

//登录的api
var LOGIN_API = HOST + '/api/user/login/confirm_code';

//退出的api
var LOGOUT_API = HOST + '/api/user/login_out';

//城市的api
var CITYLIST_API = HOST + '/api/citylist';

//搜索职位的api
var SEARCH_JOBS_API = HOST + '/api/jobs/search';

//投递列表的api
var DELIVE_API = HOST + '/api/user/delive/list';

//收藏列表的api
var COLLECT_LIST_API = HOST + '/api/user/collect_list';

//收藏请求的api
var COLLECT_API = HOST + '/api/user/collect';

//投递简历的api
var DELIVE_RESUME_API = HOST + '/api/user/delive/resume';

//编辑简历的api
var EDIT_RESUME_API = HOST + '/api/user/resume/edit';


