angular.module('ProjectCreation').controller('projectinfo_Ctrl',['$scope',function($scope){
	console.log("main object json " + $scope.main.obj);
	//this.data = synchronousObj[3].companies.companyID;
//	console.log("projectinfo controller called " + main.result);
	
   this.draftDue = function(){
	   console.log("scope draft date ");
   }
	
   this.finalDue = function(){
	   console.log("scope final date ");
   }

}]);