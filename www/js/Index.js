	
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", this.onBackKeyDown, false); 
    },
    
    onDeviceReady: function() {
    	 if (navigator.notification) { // Override default HTML alert with native dialog
	        window.alert = function (message) {
	            navigator.notification.alert(
	                message,    // message
	                null,       // callback
	                "CostCalculator", // title
	                'OK'        // buttonName
	            );
	      
	    	
	      	};
	   	}
	},
	onBackKeyDown: function () {
     	navigator.app.exitApp();
	},
};