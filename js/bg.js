	function change(){
		var bodyBgs = [];
bodyBgs[0] = "../bg.jpg";
bodyBgs[1] = "../bg.jpg";
bodyBgs[2] = "../bg.jpg";
bodyBgs[3] = "../bg.jpg";
bodyBgs[4] = "../bg.jpg";
bodyBgs[5] = "../bg.jpg";
bodyBgs[6] = "../bg.jpg";
bodyBgs[7] = "../bg.jpg";
bodyBgs[8] = "../bg.jpg";
bodyBgs[9] = "../bg.jpg";
bodyBgs[10] = "../bg.jpg";
bodyBgs[11] = "../bg.jpg";
		var randomBgIndex = Math.round( Math.random() * 11 );
		var img1= document.getElementById('bgimg');
		img1.style.backgroundImage='url(' + bodyBgs[randomBgIndex] + ')';
	        window.setTimeout(function(){change()},10000);
	}
	change();