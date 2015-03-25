	
	function dbCreate(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS inovicehistory (historyId INTEGER PRIMARY KEY AUTOINCREMENT , history_object TEXT)');
        //getHistoryInfo();
    }
    function errorCB(err) {
         alert("Error processing SQL: "+JSON.stringify(err));
    }
    
	function getHistoryInfo() {
        var db = window.openDatabase("freeinovice", "1.0", "Freeinovice Database", 3000000);
        db.transaction(loginQuerry, errorCB);
    }
    function loginQuerry(tx) {
        tx.executeSql('SELECT * FROM inovicehistory', [], loginQuerySuccess, errorCB);
    }
    
    var hisObject =[];
	 function loginQuerySuccess(tx, results) {
	    hisObject =[];
       for(var i=0;i<results.rows.length;i++){
            var object=JSON.parse(results.rows.item(i).history_object);
            object.historyId=results.rows.item(i).historyId;
            hisObject.push(object);
        }
    }
    var historyObject='';
    function insertInoviceInDB(object) {
        historyObject=object;
         var db = window.openDatabase("freeinovice", "1.0", "Freeinovice Database", 3000000);
        db.transaction(isertInToDB, errorCB);
    }
	 function isertInToDB(tx) {
	     var value="'"+historyObject+"'";
	     //var  qurrey ="INSERT INTO inovicehistory (history_object) VALUES("+value+")";
	 	tx.executeSql("INSERT INTO inovicehistory (history_object) VALUES("+value+")"); 
	 	// alert(qurrey);
	 }


    var historyId=0;
	function deleteFromHistory(id) {
	    historyId=id;
       var db = window.openDatabase("freeinovice", "1.0", "Freeinovice Database", 3000000);
        db.transaction(deleteQuerry, errorCB);
    }
    
     function deleteQuerry(tx) {
        var query='DELETE  FROM inovicehistory where historyId='+historyId;
        tx.executeSql(query);
    }
var isIPhone=true;
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", this.onBackKeyDown, false); 
    },
    
    onDeviceReady: function() {
    	var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
        
        if(deviceType!="iPhone"&&deviceType!="iPad"){
        	isIPhone=false;
        }
    	var db = window.openDatabase("freeinovice", "1.0", "Freeinovice Database", 3000000);
        db.transaction(dbCreate, errorCB);
	 if (navigator.notification) { // Override default HTML alert with native dialog
	        window.alert = function (message) {
	            navigator.notification.alert(
	                message,    // message
	                null,       // callback
	                "FreeInoviceMaker", // title
	                'OK'        // buttonName
	            );
	      
	    	
	      	};
	   	}
	},
	onBackKeyDown: function () {
     	navigator.app.exitApp();
	},
};