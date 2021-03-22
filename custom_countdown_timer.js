var timerSeconds;
var intervalhandler;

function setUpTimer(){
	//var timerInput=document.createElement("input");
	//timerInput.setAttribute("type","text");
	//timerInput.setAttribute("id","minutes");

	//var button=document.createElement("input");
	//button.setAttribute("type","button");
	//button.setAttribute("value","Start Timer");

	//button.onclick=function()
	//{
	//	startCounter();
	//}

	//document.getElementById("inputArea").AppendChild(timerinput);
	//document.getElementById("inputArea").AppendChild(button);
}

function tick(){
	var timeDisplay=document.getElementById("time");
	var min=Math.floor(timerSeconds/60);
	var sec=timerSeconds-(min*60);

	if(sec<10)
	{
		sec="0"+sec;
	}

	var message=min.toString()+":"+sec;
	timeDisplay.innerHTML=message;

	if(timerSeconds===0){
		alert("done");
		clearInterval(intervalhandler);
		setUpTimer();
	}
	timerSeconds--;
}
function startCounter(){
	var timerInput=document.getElementById("minutes").value;
	if(isNaN(timerInput)){
		alert("type a valid number");
		return;
	}
	timerSeconds=timerInput*60;
	intervalhandler=setInterval(tick, 1000);
	document.getElementByid("inputArea").style.display="none";
}

/*window.onload= function(){
	setUpTimer();
}*/