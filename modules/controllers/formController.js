angular.module('ProjectCreation')
	.controller(
	'form_Ctrl', [
	'$scope','$timeout',
	'synchronousObj',

function($scope,$timeout, synchronousObj) {
	
	this.countries = ['Albania', 'Andorra',
		'Antarctica', 'Armenia', 'Azerbaijan'];
	this.obj = synchronousObj;
	
	console.log("sync object " + JSON.stringify(synchronousObj));
	
	this.submitDataSample = {};
	this.parentAddpropInfo = {};
	this.fileAttachment = {};
	this.parentClientInfo = {};
	this.parentEmailNotification = {};
	this.parentGrantAccess = {};
	this.parentProjectInfo = {};
	this.parentPropertyInfo = {};
	this.parentReportSelection = {};
	this.parentSiteContactInfo = {};
	this.reports = [];

	this.parentReportSelection.indexArr = [];
	this.parentReportSelection.project = {};
	this.parentReportSelection.po = {};
	this.parentReportSelection.template = {};
	this.parentReportSelection.langlib = {};
	this.parentReportSelection.fee = {}; 
	
	var templateIDArray = [];

	$scope.$on('showButtons', function() {
		console.log("function called");
		$scope.lastDivLoaded = true;
	});

	this.CreateProject = function() {
		this.reports.length = 0;

		$scope.$broadcast('show-errors-check-validity');
		if ($scope.userForm.$invalid) {
			this.createProjectFailed = true;
			
			console.log("invalid");
			return;
		} else {
			console.log("fee value " + JSON.stringify(this.parentGrantAccess.drpdownRelatedCompanies));
			console.log("fee value " + JSON.stringify(this.parentReportSelection.indexArr));
			/*for (property in this.parentReportSelection.template) {
				  //console.log("property " + property[value]);
				  templateIDArray.push(property);
				} */
			
			//console.log("property 111111 " + JSON.stringify(templateIDArray));
			for (var i = 0; i < this.parentReportSelection.indexArr.length; i++) {
				console.log("we are here");
				var obj = {};
				obj = {
					"templateID": this.parentReportSelection.indexArr[i],  
					"libraryID" : this.parentReportSelection.langlib[this.parentReportSelection.indexArr[i]] == undefined ? "" : this.parentReportSelection.langlib[this.parentReportSelection.indexArr[i]].libraryID,
					"projectNumber":  this.parentReportSelection.project[this.parentReportSelection.indexArr[i]],
					"poNumber": this.parentReportSelection.po[this.parentReportSelection.indexArr[i]],
					"fee": this.parentReportSelection.fee[this.parentReportSelection.indexArr[i]]
				}
				this.reports.push(obj);

			}
			
			

			this.submitDataSample = {
				"project": {
					"name": this.parentProjectInfo.projectName,
					"finalDueDate": this.parentProjectInfo.dateDraftDue,
					"draftDueDate": this.parentProjectInfo.dateFinalDue,
					"client": {
						"companyName": this.parentClientInfo.companyName,
						"contactName": this.parentClientInfo.contact,
						"address": this.parentClientInfo.address,
						"city": this.parentClientInfo.city,
						"country": this.parentClientInfo.country,
						"state": this.parentClientInfo.state,
						"zip": this.parentClientInfo.zip
					},
					"locations": [{
						"propertyNumber": this.parentPropertyInfo.clientPropNum,
						"name": this.parentPropertyInfo.propName,
						"address1": this.parentPropertyInfo.address1,
						"address2": this.parentPropertyInfo.address2,
						"address3": this.parentPropertyInfo.address3,
						"city": this.parentPropertyInfo.city,
						"country": this.parentPropertyInfo.country,
						"state": this.parentPropertyInfo.state,
						"zip": this.parentPropertyInfo.zip,
						"propertyType": this.parentAddpropInfo.propType == "Other..." ? main.parentAddpropInfo.otherPropType : this.parentAddpropInfo.propType,
						"county": this.parentAddpropInfo.county,
						"latitude": this.parentAddpropInfo.latitude,
						"longitude": this.parentAddpropInfo.longitude,
						"acreage": this.parentAddpropInfo.acerage,
						"numBuildings": this.parentAddpropInfo.buildings,
						"transactionType": this.parentAddpropInfo.transactionType,
						"reports": this.reports
					}],
					"siteContact": {
						"name": this.parentSiteContactInfo.contactName,
						"phone": this.parentSiteContactInfo.contactPhone,
						"fax": this.parentSiteContactInfo.contactFax,
						"email": this.parentSiteContactInfo.contactEmail
					},
					"accessParties": [{
						"accessType": "company",
						"companyID": this.parentGrantAccess.drpdownOffices == undefined ? "" : this.parentGrantAccess.drpdownOffices.officeID
					  }, {
						"accessType": "team",
						"teamID": this.parentGrantAccess.drpdownTeams == undefined ? "" : this.parentGrantAccess.drpdownTeams.teamID
					  },{
						"accessType": "office",
						"officeID": this.parentGrantAccess.drpdownRelatedCompanies == undefined ? "" : this.parentGrantAccess.drpdownRelatedCompanies.companyID
					}], 
					"notifications": {
						"sendEmailNotification": this.parentEmailNotification.sendMail ? 1 : 0,
						"emailFrom": "Mr. Appraiser Gabberty",
						"emailTo": this.parentEmailNotification.to,
						"emailCC": this.parentEmailNotification.CC,
						"emailBody": this.parentEmailNotification.message
					}
				}
			}
			
			
			//this.submitData = this.submitDataSample;
			console.log("showingg json " + this.parentProjectInfo.projectName);
			/*$timeout(function(){
				this.parentProjectInfo.projectName = "";
				this.parentProjectInfo.dateDraftDue = "";
				this.parentProjectInfo.dateFinalDue = "";
				this.parentClientInfo.companyName= "";
				this.parentClientInfo.contact = "";
				this.parentClientInfo.address = "";
				this.parentClientInfo.city = "";
				this.parentClientInfo.country = "";
				this.parentClientInfo.state = "";
				this.parentClientInfo.zip  = "";
				this.parentPropertyInfo.clientPropNum = "";
				this.parentPropertyInfo.propName = "";
				this.parentPropertyInfo.address1 = "";
				this.parentPropertyInfo.address2 = "";
				this.parentPropertyInfo.address3 = "";
				this.parentPropertyInfo.city  = "";
				this.parentPropertyInfo.country = "";
				this.parentPropertyInfo.state = "";
				this.parentPropertyInfo.zip = "";
				this.parentAddpropInfo.propType = undefined,
				this.parentAddpropInfo.county = "";
				this.parentAddpropInfo.latitude = "";
				this.parentAddpropInfo.longitude = "";
				this.parentAddpropInfo.acerage = "";
				this.parentAddpropInfo.buildings = "";
				this.parentAddpropInfo.transactionType = undefined;
				this.parentSiteContactInfo.contactName  = "";
				this.parentSiteContactInfo.contactPhone  = "";
				this.parentSiteContactInfo.contactFax  = "";
				this.parentSiteContactInfo.contactEmail  = "";
				this.parentAddpropInfo.otherPropType  = "";
				this.reports.length = 0;
				for (var i = 0; i < templateIDArray.length; i++) {
					this.parentReportSelection.project[templateIDArray[i]] = "";
					this.parentReportSelection.po[templateIDArray[i]] = "";
					this.parentReportSelection.fee[templateIDArray[i]] = "";
					this.parentReportSelection.langlib[templateIDArray[i]] = "";
				}  			
				this.parentReportSelection.template = {};
				this.parentGrantAccess.drpdownOffices = undefined;
				this.parentGrantAccess.drpdownTeams = undefined;
				this.parentGrantAccess.drpdownRelatedCompanies = undefined;
				this.parentEmailNotification.sendMail = 0;
				this.parentEmailNotification.to = "";
				this.parentEmailNotification.CC = "";
				this.parentEmailNotification.message = "";  
				templateIDArray.length = 0;
			},2000);*/
			
			
		}
	}

	this.checked = function() {
		console.log("showingg json");

	}
	this.cancelCreateProject = function() {
		$scope.$broadcast('show-errors-reset');
	}
	


}]);