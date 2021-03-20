var timer;
	function startTime(){
		timer = setInterval(updateTime,1000);
		
        function updateTime(){
			document.getElementById("demo").innerHTML= new Date().toLocaleTimeString();
		}
 	 }

    function stopTime(){
      window.clearInterval(timer);
    }
    
    var date  = new Date();
	let d     = date.getDate();
	let month = date.getMonth()+1;
	let year  = date.getFullYear();
	
	document.write( d + " / " + month + " / " + year);   