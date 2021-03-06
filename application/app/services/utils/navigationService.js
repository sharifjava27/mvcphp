﻿
'use strict';

define(['app','services/utils/navigationService'], function (app) {

    var navigationService = function ($location) {
    	
		this.menuNavigation = function (navUrl) { 
			$location.path('/'+navUrl); 
		};
		
		this.showPageWithData = function (url, id) {
	    	$location.path('/'+url+'/'+id);
	    };
    	
    };
    
    app.service('navigationService', ['$location', navigationService]);

});
