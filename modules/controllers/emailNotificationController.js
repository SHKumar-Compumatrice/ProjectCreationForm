angular.module('ProjectCreation').controller('emailNotification_Ctrl',['$scope',function($scope){
	
	console.log("email controller called");
	$scope.$emit('showButtons');
	
   // this.countries = ['Albania','Andorra','Antarctica','Armenia','Azerbaijan'];
	this.sendNotification = function (){
		console.log("notification changed");
		/*if(!$scope.main.parentEmailNotification.sendMail){
			$scope.main.parentEmailNotification.to = "";
			$scope.main.parentEmailNotification.CC = "";
			$scope.main.parentEmailNotification.message = "";
		}*/
	}
	
	this.emailTo = function(form){
		console.log("change");
		if(form.To.$error.email){
			$('#divEmailTo').addClass('has-error');
			console.log("email error");
		}
		else{
			$('#divEmailTo').removeClass('has-error');
			console.log("no email error");
		}
	}
	
	this.emailCC = function(form){
		console.log("change");
		if(form.CC.$error.email){
			$('#divEmailCC').addClass('has-error');
			console.log("email error");
		}
		else{
			$('#divEmailCC').removeClass('has-error');
			console.log("no email error");
		}
	}

}]);