angular.module('ProjectCreation').controller('attachments_Ctrl',['$scope',function($scope){
	
	console.log("propertyinfo controller called");
	$scope.fileUploadClicked = function () {
        
        $scope.uploadDisable = false;
    }
   // this.countries = ['Albania','Andorra','Antarctica','Armenia','Azerbaijan'];
	

}]);