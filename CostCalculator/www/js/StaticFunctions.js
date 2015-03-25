
function StaticFunctions($scope,$rootScope,$ionicLoading,$ionicModal,$filter) {
    
    $rootScope.BASE_URL='http://192.168.1.11:3000/api/';
    //$rootScope.BASE_URL='http://192.168.0.19:3000/api/';
    $rootScope.USER_ID='';
    $rootScope.USER_PASSWORD='';
    $rootScope.ORG_ID='';
    $rootScope.DEVICE_ID='';

	$rootScope.showLoading = function() {
        $ionicLoading.show({
          template: 'Loading...'
        });
     };
    $rootScope.hideLoading = function(){
        $ionicLoading.hide();
    };
    
    $rootScope.isValidEmail= function(stremail) {
        var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (filter.test(stremail)){
            return true;
        }else{
            return false;
        }
    };  
    
    /*$ionicModal.fromTemplateUrl('templates/intro/popup.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });*/
    
      $scope.hidePhotoSource = function() {
        $scope.modal.hide();
      };
    
     
      $scope.showPhotoSource = function() {
        $scope.modal.show();
      };
    
      $scope.cameraSource = function() {
          $scope.modal.hide();
          $rootScope.photoSource(1);
     };
      $scope.gallarySource = function() {
          $scope.modal.hide();
          $rootScope.photoSource(0);
     };
     
    
    
     /*
     $rootScope.inoviceObject={
                    clientName:'Sajid Ali',
                    clientAddress:'Al-Hafeez Shopping Mall Jehlum',
                    yourName:'Akmal Javed',
                    yourAddress:'Al-Hafeez Shopping Mall Lahore',
                    inoviceNo:'00001',
                    inoviceDate:$filter('date')(new Date(), 'dd/MM/yyyy'),
                    inoviceDueDate:$filter('date')(new Date(), 'dd/MM/yyyy'),
                    currencyType:'USD',
                    unitPrice:'',
                    quantity:'',
                    amount:0,
                    item_detail:[],
                    subTotal:'',
                    tax:'',
                    totalTax:0,
                    totalAmount:0,
                    paidAmount:'',
                    balenceAmount:'',
                    description:'This is inovice for Mobile Developmen '
                };*/
     
  
   
    $rootScope.inoviceObject={
            clientName:'',
            clientAddress:'',
            yourName:'',
            yourAddress:'',
            inoviceNo:'',
            inoviceDate:$filter('date')(new Date(), 'dd/MM/yyyy'),
            inoviceDueDate:$filter('date')(new Date(), 'dd/MM/yyyy'),
            currencyType:'USD',
            item:'Service',
            unitPrice:'',
            quantity:'',
            amount:0,
            filePath:'',
            item_detail:[],
            subTotal:'',
            tax:'',
            totalTax:0,
            totalAmount:0,
            paidAmount:0,
            balenceAmount:'',
            description:''
        };
   
  
     
}