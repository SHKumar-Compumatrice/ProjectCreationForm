angular.module('ProjectCreation').controller('addpropertyinfo_Ctrl',['$scope',function($scope){
	
	//console.log("additional propertyinfo controller called");	
    //console.log("prop type " + JSON.stringify($scope.main.obj[2][0].propertyTypes));
	this.propertyTypes = $scope.main.obj[2][0].propertyTypes;
	this.transactionTypes = $scope.main.obj[6][0].transactionTypes;
    this.propTypeChanged = function(propTypeChanged){
    	
    	console.log("option changed " + propTypeChanged);
    	propTypeChanged === "Other..." ? this.showOption = true : this.showOption = false;
    }
}]);