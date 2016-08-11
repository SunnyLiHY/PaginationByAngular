使用组件时，在获取数据库数据之前，要初始化组件参数
$scope.common = {
	totalNum:27,
	currentPage:1,
	pagesLength: 5,
	perNum:2,
	perPageNum:[2,3,4,5]
};


/**思路：当前页显示在页码列表的中间，页码长度固定且页码列表的长度先要判断其奇偶性**/
/**具体细节代码看oacontroller.js**/
/******************************** 变量说明
**** pagesLength:页码长度
**** pageList:页码列表
**** totalPage:总页码数
**** currentPage:当前页
**** totalNum:数据库信息总数
**** perNum:每页显示的信息数
**** perPageNum:切换perNum
********************************/

/**结合django框架的后台实现实例参看“OATest”工程,git源码链接：
	https://github.com/SunnyLiHY/OATest.git
**/