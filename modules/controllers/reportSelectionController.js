angular.module('ProjectCreation').controller('reportSelection_Ctrl',['$scope',function($scope){
	//console.log("reportselection called " + $scope.main.obj[5][0].templates);
	
	var templateReportTypes = [];
	var outputArrayForReportTpes = [];
	var x = {};
	this.obj = {};
	this.template = {};
	$scope.object = {};
	
	this.langLibrary = $scope.main.obj[0].libraries;
	this.templates = $scope.main.obj[5][0].templates;
	
	
	init();
	
	function init(){		
		getReportsTypes($scope.main.obj[5][0].templates,getUniqueReportTypes);
			
	}
	
	function getReportsTypes ()
	{
		//console.log("callback");
		for(var i = 0 ; i < $scope.main.obj[5][0].templates.length ; i ++){			
			templateReportTypes.push($scope.main.obj[5][0].templates[i].reportType);			
		}		
		$scope.reportTypes = 	getUniqueReportTypes(templateReportTypes);		
		//console.log("final output " + JSON.stringify(this.reportTypes));
	}
	
	function getUniqueReportTypes (inputArray){
        for (var i = 0; i < inputArray.length; i++) {
            if ((jQuery.inArray(inputArray[i], outputArrayForReportTpes)) == -1) {
            	outputArrayForReportTpes.push(inputArray[i]);
            }
        }        
        //console.log("outputarray " + JSON.stringify(outputArrayForReportTpes));
        return outputArrayForReportTpes;		
	}

	

	
	this.chkboxName = [];
	
	this.chkboxChecked = function (template,index){
		console.log("id bvbvbvbv" + template.templateID);
		//console.log("item " + JSON.stringify($scope.main.parentReportSelection.template));
		if($scope.main.parentReportSelection.template[template.templateID])
		$scope.main.parentReportSelection.indexArr.push(template.templateID);
		else{
			 //console.log("in false");
			for(var i = 0 ; i < $scope.main.parentReportSelection.indexArr.length ; i ++ ){
				 //console.log("in false 11 " + $scope.main.parentReportSelection.indexArr[i]);
				 //console.log("in false  22 " + template.templateID);
				 if($scope.main.parentReportSelection.indexArr[i] == template.templateID){
					 //console.log("in false 11 removing" );
				 $scope.main.parentReportSelection.indexArr.splice(i,1);
				 }
			}
			
			//console.log("item in else " + JSON.stringify( $scope.main.parentReportSelection.indexArr));
		}
		
		//console.log("item after all " + JSON.stringify( $scope.main.parentReportSelection.indexArr));	
		
	}
    
	this.langChanged = function(value){
		
		//console.log("value " + JSON.stringify(value));
	}
}]);