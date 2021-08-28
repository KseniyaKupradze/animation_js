function myMove(){
	var elem = document.getElementById("myAnimation");
	var pos = 0;
	var id = setInterval(frame,10);
	function frame(){
		if(pos == 350){
			clearInterval(id);

			var pos1 =350;
			var id1 = setInterval(frame1,10);
			function frame1(){
				if(pos == 0){
				clearInterval(id1);
				}
				else{
				pos--;
				elem.style.top= pos+"px";
				elem.style.left= pos+"px";
				}
			}

			
		}
		else{
			pos++;
			elem.style.top= pos+"px";
			elem.style.left= pos+"px";

		}
	}
	
}