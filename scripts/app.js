angular.module('ProjectCreation', ['ui.router.state','ui.bootstrap']);

angular.module('ProjectCreation').config([
  '$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');
      $stateProvider.state('Form', {
          'url' : '/',
          'controller': 'form_Ctrl as main',         
          'templateUrl': 'views/form.html',
           'resolve': {
              'synchronousObj' : ['fetchData_svc',
                  function(fetchData_svc) {

                  return fetchData_svc.getPreFormRenderData();
              }]
             
          }
      })
  }
]);

angular.module('ProjectCreation').directive('fileInput', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {

            elm.bind('change', function () {
                $('#filetag').hide();
                $('#successdiv').hide();
                $('#errordiv').hide();
                $('#incorrectformatdiv').hide();





                $parse(attrs.fileInput).assign(scope, elm[0].files);


                scope.$apply();



            })
        }
    };
}]);


angular.module('ProjectCreation').directive('findContact', [function () {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {

            elm.on('click',function(){
            	window.open('http://test3.parcelplatform.com/workOrder/express.php#','mywindow','width=800,height=500');
            })
        }
    };
}]);


angular.module('ProjectCreation').directive('showErrors',['$timeout',function($timeout){
	
	return{
		restrict : 'A',
		require : '^form',
		link : function(scope,el,attrs,formCtrl){
			
			var inputEl = el[0].querySelector("[name]");
			var inputNgEl = angular.element(inputEl);
			
			var inputName = inputNgEl.attr('name');
			var blurred = false;
			
			inputNgEl.bind('blur',function(elem){
				console.log("blur event");
				if(inputName == "dateDraftDue"){
					$timeout(function(){
						console.log("model value " + scope.main.parentProjectInfo.dateDraftDue);
						if(scope.main.parentProjectInfo.dateDraftDue != undefined || scope.main.parentProjectInfo.dateDraftDue != null){
							el.removeClass('has-error');
						}
						else{
							el.addClass('has-error');
						}
					},200);
				
				
				}
				if(inputName == "dateFinalDue"){
					$timeout(function(){
						console.log("model value " + scope.main.parentProjectInfo.dateFinalDue);
						if(scope.main.parentProjectInfo.dateFinalDue != undefined || scope.main.parentProjectInfo.dateFinalDue != null){
							el.removeClass('has-error');
						}
						else{
							el.addClass('has-error');
						}
					},200);
				
				
				}
				el.toggleClass('has-error', formCtrl[inputName].$invalid);
			});
			
			scope.$on('show-errors-check-validity',function(){
				el.toggleClass('has-error', formCtrl[inputName].$invalid);
			})
			
			
			scope.$on('show-errors-reset', function() {
				  $timeout(function() {
				    el.removeClass('has-error');
				  }, 0, false);
				});
		}
	}
		
	
	
}]);












