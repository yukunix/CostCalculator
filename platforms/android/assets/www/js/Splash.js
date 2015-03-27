
function SplashControllar($rootScope,$timeout,$location) {
	$timeout(function(){
		$location.path('/Home');
	},2000);
}
