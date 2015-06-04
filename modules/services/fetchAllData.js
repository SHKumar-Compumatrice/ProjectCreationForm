angular.module('ProjectCreation').factory('fetchData_svc',['$http','$q','Urls', function($http,$q,Urls){
	
	var fetchData  = {};
	//var staticPath = 'static_data/';
	return {
		
		getPreFormRenderData : function(){
			console.log("reached factory");
			/*getLibrariesUrl  = staticPath + 'getLibraries.js';
			getOfficesUrl = staticPath + 'getOffices.js';
			getPropertyTypesUrl = staticPath + 'getPropertyTypes.js';
			getRelatedCompaniesUrl = staticPath + 'getRelatedCompanies.js';
			getTeamsUrl = staticPath + 'getTeams.js';
			getTemplatesUrl = staticPath + 'getTemplates.js';
			getTransactionTypesUrl = staticPath + 'getTransactionTypes.js';*/
			
			getLibrariesUrl  = Urls.getLibraries;
			getOfficesUrl = Urls.getOffices;
			getPropertyTypesUrl = Urls.getPropertyTypes;
			getRelatedCompaniesUrl = Urls.getRelatedCompanies;
			getTeamsUrl = Urls.getTeams;
			getTemplatesUrl = Urls.getTemplates;
			getTransactionTypesUrl = Urls.getTransactionTypes;
			
			
			var promiseA = $http.get(getLibrariesUrl).then(function(result){
				return result.data;
			});
			
			var promiseB = $http.get(getOfficesUrl).then(function(result){
				return result.data;
			});
			
			var promiseC = $http.get(getPropertyTypesUrl).then(function(result){
				return result.data;
			});
			
			var promiseD = $http.get(getRelatedCompaniesUrl).then(function(result){
				return result.data;
			});
			
			var promiseE = $http.get(getTeamsUrl).then(function(result){
				return result.data;
			});
			
			var promiseF = $http.get(getTemplatesUrl).then(function(result){
				return result.data;
			});
			
			var promiseG = $http.get(getTransactionTypesUrl).then(function(result){
				return result.data;
			});
			
			this.promise = $q.all([promiseA, promiseB, promiseC, promiseD, promiseE, promiseF, promiseG]).then(function (data) {               
                return data;

            });
			
			return this.promise;
			
		}
	}
	
	return fetchData;
	
}]);