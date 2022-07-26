	function change(){
		var bodyBgs = [];
bodyBgs[0] = "https://i0.hdslb.com/bfs/article/786e204a34c858704b4b5d13b36a8b7dbb3b484c.jpg";
bodyBgs[1] = "https://i0.hdslb.com/bfs/article/f33eca72e3ecc65ae001077d93eb53dd353945eb.jpg";
bodyBgs[2] = "https://i0.hdslb.com/bfs/article/4500d9cddf8ab69b83fc5368cb0370a11bb58439.jpg";
bodyBgs[3] = "https://i0.hdslb.com/bfs/article/98a6123c4d3a13a394522696af55d362d768a1ac.jpg";
bodyBgs[4] = "https://i0.hdslb.com/bfs/article/84f2887117ccff553f90bacf49d41ea1a8cdfaa0.jpg";
bodyBgs[5] = "https://i0.hdslb.com/bfs/article/9563b0cf39b7eb75463f31b6b93e122de29691d5.jpg";
bodyBgs[6] = "https://i0.hdslb.com/bfs/article/aeabaab0eed388da87e3a1a6aa3d208066162f1b.jpg";
bodyBgs[7] = "https://i0.hdslb.com/bfs/article/ffb25a48d2490d439808222aad9d73b4a20acdec.jpg";
bodyBgs[8] = "https://i0.hdslb.com/bfs/article/bc25bacea5554334349cdd8bc1259cd3d7310e1c.jpg";
bodyBgs[9] = "https://i0.hdslb.com/bfs/article/27de3ee69f071294c85d7a904f7854125731a561.jpg";
bodyBgs[10] = "https://i0.hdslb.com/bfs/article/81c8840c981b6c091a59b0c09e508118e59272bd.jpg";
bodyBgs[11] = "https://i0.hdslb.com/bfs/article/eb12883efbe07d5675f479c723530740dd50bed3.jpg";
		var randomBgIndex = Math.round( Math.random() * 11 );
		var img1= document.getElementById('bgimg');
		img1.style.backgroundImage='url(' + bodyBgs[randomBgIndex] + ')';
	        window.setTimeout(function(){change()},10000);
	}
	change();