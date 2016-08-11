使用组件时，在获取数据库数据之前，要初始化组件参数<br/>
$scope.common = {<br/>
	totalNum:27,<br/>
	currentPage:1,<br/>
	pageSumNum: 5,<br/>
	perNum:2,<br/>
	perPageNum:[2,3,4,5]<br/>
};<br/>


/***思路：当前页显示在页码列表的中间，页码长度固定且页码列表的长度先要判断其奇偶性***/<br/>
/***具体细节代码看oacontroller.js***/<br/>
/******************************** 变量说明<br/>
**** pageSumNum:页码长度<br/>
**** pageList:页码列表<br/>
**** totalPage:总页码数<br/>
**** currentPage:当前页<br/>
**** totalNum:数据库信息总数<br/>
**** perNum:每页显示的信息数<br/>
**** perPageNum:切换perNum<br/>
********************************/<br/>

/**结合django框架的后台实现实例参看“OATest”工程,git源码链接：<br/>
	https://github.com/SunnyLiHY/OATest.git<br/>
**/
