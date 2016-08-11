/******************************** 控制器
**** admin :Sunny
**** create time:2016/8/5
********************************/
var testapp = angular.module("pageApp",[]);
testapp.controller('pageCtrl', ['$scope', function($scope) {
	//在异步动态获取data之前，事先初始化common（指令的commonConfig属性）
	//angular监听totalNum，perNum,currentPage。即总信息数，每页显示的消息数，当前页，
	//发生变化时，调用getPageList函数，刷新页码列表(注意：不能仅仅监听当前页，因为totalNum，perNum发生变化时，可能当前页不变)
	$scope.common = {
		totalNum:27,
		currentPage:1,
		pageSumNum: 5,
		perNum:2,
		perPageNum:[2,3,4,5]
	};
}]);
			