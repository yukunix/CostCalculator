function HomeControllar($scope, $rootScope, $location, $timeout) {

	$(function() {
		var windowWidth = '';
		var windowHeight = '';
		$(document).ready(function() {
			windowWidth = $(window).width();
			windowHeight = window.innerHeight;

			if (windowWidth >= 768) {
				$('#Page2').show();
				$('#Page1').show();
			} else {
				var nextstatus = parseInt($('#nextstatus').val());
				if (nextstatus > 0) {
					$('#Page2').show();
					$('#Page1').hide();
					$('#backbutton').show();
				} else {
					$('#Page2').hide();
					$('#Page1').show();
					$('#backbutton').hide();
				}
			}

		});

		$(window).resize(function() {
			windowWidth = $(window).width();
			windowHeight = window.innerHeight;

			if (windowWidth >= 768) {
				$('#Page2').show();
				$('#Page1').show();
			} else {
				var nextstatus = parseInt($('#nextstatus').val());
				if (nextstatus > 0) {
					$('#Page2').show();
					$('#Page1').hide();
					$('#backbutton').show();
					document.getElementById("nextstatus").value = "1";
				} else {
					$('#Page2').hide();
					$('#Page1').show();
					$('#backbutton').hide();
					document.getElementById("nextstatus").value = "0";
				}
			}
		});

	});

	$scope.onOption1Change = function() {
		if ($scope.callculationObject.option1 == 'D 1') {
			$scope.valueOption1 = 1;
		} else {
			$scope.valueOption1 = 2;
		}
	};
	
	$scope.onOption1Change = function() {
		if ($scope.callculationObject.option1 == 'D 1') {
			$scope.valueOption1 = 1;
		} else {
			$scope.valueOption1 = 2;
		}
	};

	$scope.onOption2Change = function() {
		if ($scope.callculationObject.option2 == 'S 1') {
			$scope.valueOption2 = 3;
		} else {
			$scope.valueOption2 = 4;
		}
	};
	
	$scope.onTaxChange = function() {
		
		if($scope.callculationObject.taxOption=="100%"){
			$scope.callculationObject.taxValue=1.0;
		}else if($scope.callculationObject.taxOption=="90%"){
			$scope.callculationObject.taxValue=0.9;
		}else if($scope.callculationObject.taxOption=="80%"){
			$scope.callculationObject.taxValue=0.8;
		}else if($scope.callculationObject.taxOption=="70%"){
			$scope.callculationObject.taxValue=0.7;
		}else if($scope.callculationObject.taxOption=="60%"){
			$scope.callculationObject.taxValue=0.6;
		}else if($scope.callculationObject.taxOption=="50%"){
			$scope.callculationObject.taxValue=0.5;
		}else if($scope.callculationObject.taxOption=="40%"){
			$scope.callculationObject.taxValue=0.4;
		}else if($scope.callculationObject.taxOption=="30%"){
			$scope.callculationObject.taxValue=0.3;
		}else if($scope.callculationObject.taxOption=="20%"){
			$scope.callculationObject.taxValue=0.2;
		}else {
			$scope.callculationObject.taxValue=0.1;	
		}
	};
	
	$scope.onListIchange = function() {
		if($scope.callculationObject.listOptions=='I - 1'){
			$scope.callculationObject.listOptionsValue= 2;
		}else{
			$scope.callculationObject.listOptionsValue= 3;
		}
	};

	document.getElementById("backbutton").style.display = "none";
	$scope.goToNextPage = function() {
		document.getElementById("Page1").style.display = "none";
		document.getElementById("Page2").style.display = "block";
		document.getElementById("nextstatus").value = "1";
		document.getElementById("backbutton").style.display = "block";
		$scope.expanceObject.nextaAmout = $scope.expanceObject.amount;
	};
	$scope.goToBack = function() {
		document.getElementById("Page1").style.display = "block";
		document.getElementById("Page2").style.display = "none";
		document.getElementById("nextstatus").value = "0";
		document.getElementById("backbutton").style.display = "none";
	};

	$scope.addTickedBtn = function() {
		$(document).ready(function() {
			windowWidth = $(window).width();
			windowHeight = window.innerHeight;
			if (windowWidth >= 768) {
				$('#Page2').show();
				$('#Page1').show();
			} else {
				var nextstatus = parseInt($('#nextstatus').val());
				if (nextstatus > 0) {
					$('#Page2').show();
					$('#Page1').hide();
					$('#backbutton').show();
				} else {
					$('#Page2').hide();
					$('#Page1').show();
					$('#backbutton').hide();
				}
			}
		});
	};
	$scope.addNewTicket = function() {
		$scope.amount = {
			amoutName : 'Amount- 2.',
			amount : '',
			checkBox : false
		};
		$scope.amounts1.push($scope.amount);
	};

	$scope.invoice_sub_total = function() {
		var total = 0;
		angular.forEach($scope.amounts1, function(item, key) {
			var temp = item.amount;

			if (isNaN(parseInt(temp)) || temp == '' || temp == null) {
				temp = 0;
			}
			if (item.checkBox) {
				total += parseInt(temp);
			}
		});

		if ($scope.callculationObject.resultMountCheckBox) {
			total += parseInt($scope.callculationObject.resultMount);
		}
		return total;
	};

	$scope.selected = 1;
	$scope.loadAmount2Data = function() {
		$scope.amounts2 = [];
		$scope.amount4 = {
			amoutName : 'Amount- 2.',
			amount : '',
			selected : 'Per-Annum'
		};
		$scope.amount22 = {
			amoutName : 'Amount- 2.',
			amount : '',
			selected : 'Per-Annum',
			changesAmount :0,
		};
		$scope.amount23 = {
			amoutName : 'Amount- 2.',
			amount : '',
			selected : 'Per-Annum',
			changesAmount :0,
		};
		$scope.amount24 = {
			amoutName : 'Amount- 2.',
			amount : '',
			selected : 'Per-Annum',
			changesAmount :0,
		};
		$scope.amounts2.push($scope.amount22);
		$scope.amounts2.push($scope.amount23);
		$scope.amounts2.push($scope.amount24);
		
	};

	$scope.addAmount2 = function() {
		$scope.amount = {
			amoutName : 'Amount- 7.',
			amount : '',
			selected : 'Per-Annum'
		};
		$scope.amounts2.push($scope.amount);

	};

	$scope.resetValues = function() {
		$scope.loadAmount2Data();
		$scope.amounts1 = [];
		$scope.amount = {
			amoutName : 'Amount- 2',
			amount : '',
			checkBox : false
		};
		$scope.valueOption1 = 1;
		$scope.valueOption2 = 3;
		$scope.amounts1.push($scope.amount);
		$scope.expanceObject = {
			amount : '',
			nextaAmout : ''
		};
		$scope.callculationObject = {
			firstAmount : '',
			resultMount : 0,
			resultMountCheckBox : false,
			taxOption:'100%',
			taxValue:1.0,
			option1 : 'D 1',
			option2 : 'S 1',
			listOptions : 'I - 1',
			listOptionsValue : 2,
			amount3:0,
			percentage:'',
			integer:'',
			amount4:0,
			amount5:0,
			amount6:0,
			amount7:0,
			nagativeAmoutOption:'Per-Annum',
			nagativeOptionAmount:1,
			nagativeAmout:'',
			netAmoutOption:'Per-Annum',
			netOptionAmount:1,
			netAmout:''
		};
	};
	$scope.resetValues();
	$scope.parseInt = parseInt;
	$scope.convertBasedOnFrequency5=function(amount,frequency) {
		var ret = amount;
		if (frequency == "Per-Quarter"){
			ret = amount* 4;
		}else if (frequency == "Per-Month"){
			ret = amount * 12;
		}else if (frequency == "Per-Fornight"){
			ret = amount *26;
		}else if (frequency == "Per-Week"){
			ret = amount *52;
		}
		return ret;
	};
	
	$scope.convertBasedOnFrequency=function(amount,frequency) {
		var ret = amount;
		if (frequency == "Per-Quarter"){
			ret = amount/ 4;
		}else if (frequency == "Per-Month"){
			ret = amount / 12;
		}else if (frequency == "Per-Fornight"){
			ret = amount /26;
		}else if (frequency == "Per-Week"){
			ret = amount /52;
		}
		return ret;
	};
	$scope.calculateAmount4=function() {
		$scope.value1=$scope.callculationObject.amount3;
		$scope.value2=$scope.callculationObject.percentage;
		$scope.value3=$scope.callculationObject.integer;
		if (isNaN(parseInt($scope.value1)) || $scope.value1 == '' || $scope.value1 == null) {
				$scope.value1 = 0;
		}
		if (isNaN(parseInt($scope.value2)) || $scope.value2 == '' || $scope.value2 == null) {
				$scope.value2 = 0;
		}
		if (isNaN(parseInt($scope.value3)) || $scope.value3 == '' || $scope.value3 == null) {
				$scope.value3 = 1;
		}
		var ret = $scope.value1*(1+($scope.value2/(100* $scope.value3)));
		if ($scope.callculationObject.listOptions == 'I - 1'){
			ret = ret / 2;
		}else{
			ret = ret / 3;
		} 
		ret = $scope.convertBasedOnFrequency(ret, $scope.amount4.selected);
		return parseInt(ret);
	};
	
	
	$scope.calculateNetAmount = function() {
		var total = 0;
		angular.forEach($scope.amounts2, function(item, key) {
			var temp = item.amount;
			if (isNaN(parseInt(temp)) || temp == '' || temp == null) {
				temp = 0;
			}
			
			item.changesAmount=$scope.convertBasedOnFrequency(temp, item.selected);
			total+=$scope.convertBasedOnFrequency5(temp, item.selected);
		});
		total+=$scope.amount4.amount;
		return parseInt(total);
	};
	
	$scope.onNagativeAmountChange = function() {
		if($scope.callculationObject.nagativeAmoutOption=='Per-Annum'){
			$scope.callculationObject.nagativeOptionAmount=1;
		}else if($scope.callculationObject.nagativeAmoutOption=='Per-Month'){
			$scope.callculationObject.nagativeOptionAmount=12;
		}else if($scope.callculationObject.nagativeAmoutOption=='Per-Quarter'){
			$scope.callculationObject.nagativeOptionAmount=4;
		}else if($scope.callculationObject.nagativeAmoutOption=='Per-Fornight'){
			$scope.callculationObject.nagativeOptionAmount=26;
		}else if($scope.callculationObject.nagativeAmoutOption=='Per-Week'){
			$scope.callculationObject.nagativeOptionAmount=52;
		}
	};
	
	
	$scope.onNetAmountChange = function() {
		if($scope.callculationObject.netAmoutOption=='Per-Annum'){
			$scope.callculationObject.netOptionAmount=1;
		}else if($scope.callculationObject.netAmoutOption=='Per-Month'){
			$scope.callculationObject.netOptionAmount=12;
		}else if($scope.callculationObject.netAmoutOption=='Per-Quarter'){
			$scope.callculationObject.netOptionAmount=4;
		}else if($scope.callculationObject.netAmoutOption=='Per-Fornight'){
			$scope.callculationObject.netOptionAmount=26;
		}else if($scope.callculationObject.netAmoutOption=='Per-Week'){
			$scope.callculationObject.netOptionAmount=52;
		}
	};
	
	
	
	$scope.netAmountCalculator = function() {
		return parseInt(($scope.calculateNetAmount()/$scope.callculationObject.netOptionAmount)-$scope.callculationObject.nagativeAmout*$scope.callculationObject.nagativeOptionAmount);
	};
	
	$scope.onPercentageChange = function() {
		var temp2='';
			var temp=''+$scope.callculationObject.percentage;
			if(temp==''||temp==undefined||temp=='undefined'||temp==null||temp=='null'){
				$scope.callculationObject.percentage='';
			}
			console.log('temp value = '+temp);
				var tempArray=temp.split(".");
				if(tempArray.length==2){
					checkDot=1;
					var temp1=tempArray[1];
					if(temp1!=''){
						if(temp1.length>2){
							temp2=temp1.substring(0,2);
						}else{
							temp2=temp1;		
						}
					}		
					$scope.callculationObject.percentage=parseFloat(tempArray[0]+'.'+temp2);
				}
				
				//$scope.callculationObject.percentage=parseInt($scope.callculationObject.percentage);
				
		};	
}


function isNumberForInteger(evt){
	var temp ='1'+document.getElementById('IntegerTest').value+'1';
	console.log(temp);
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if(temp.indexOf('.')>0 && charCode==46){
    	return false;
    }
    if (charCode > 31 && (charCode < 45 || charCode > 57))
        return false;
    return true;
}   



function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}   

function NextPageControllar($scope, $rootScope, $location) {
	$scope.goToBack = function() {
		$location.path("/Home");
	};

}