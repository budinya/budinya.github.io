	function change(){
		var bodyBgs = [];
bodyBgs[0] = "https://wkphoto.cdn.bcebos.com/4b90f603738da9773934444da051f8198618e3b9.jpg";
bodyBgs[1] = "https://wkphoto.cdn.bcebos.com/4b90f603738da9773934444da051f8198618e3b9.jpg";
bodyBgs[2] = "https://wkphoto.cdn.bcebos.com/4bed2e738bd4b31c8c2756dd97d6277f9e2ff8b9.jpg";
bodyBgs[3] = "https://wkphoto.cdn.bcebos.com/8601a18b87d6277f9109f05e38381f30e924fcb9.jpg";
bodyBgs[4] = "https://wkphoto.cdn.bcebos.com/810a19d8bc3eb1359b1a74ddb61ea8d3fc1f44f3.jpg";
bodyBgs[5] = "https://wkphoto.cdn.bcebos.com/95eef01f3a292df570c16e73ac315c6034a87352.jpg";
bodyBgs[6] = "https://wkphoto.cdn.bcebos.com/f31fbe096b63f6242b46fb659744ebf81a4ca3b9.jpg";
bodyBgs[7] = "https://wkphoto.cdn.bcebos.com/bf096b63f6246b604d157012fbf81a4c510fa2b9.jpg";
bodyBgs[8] = "https://wkphoto.cdn.bcebos.com/e7cd7b899e510fb3efc4b4f1c933c895d0430cf3.jpg";
bodyBgs[9] = "https://wkphoto.cdn.bcebos.com/359b033b5bb5c9ea45e8c185c539b6003af3b3b9.jpg";
		var randomBgIndex = Math.round( Math.random() * 9 );
		var img1= document.getElementById('bgimg');
		img1.style.backgroundImage='url(' + bodyBgs[randomBgIndex] + ')';
	        window.setTimeout(function(){change()},5000);
	}
	change();