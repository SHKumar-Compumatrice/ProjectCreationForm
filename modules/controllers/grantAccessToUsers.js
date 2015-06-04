angular.module('ProjectCreation').controller('grantAccess_Ctrl',['$scope',function($scope){
	
	console.log("propertyinfo controller called");
	
	this.offices = $scope.main.obj[1][0].offices;
	this.teams = $scope.main.obj[4][0].teams;
	this.relatedcompanies = $scope.main.obj[3][0].companies;

	//this.organizations = ['Everyone in the test appraisal company','Everyone in the appraisal office','Yourself'];
   // this.countries = ['Albania','Andorra','Antarctica','Armenia','Azerbaijan'];
	//this.clients = ['CBRE End-User','CBRE,Inc.','EDR Applications Development Group','test Assest Management Compamny'];
}]);