define(["mui"], function() {
	let name = document.getElementById('xm');
	let pos = document.getElementById('pos');
	let hao = document.getElementById('hao');
	let qu = document.getElementById('qu');
	let address = document.getElementById('address');

	var obtn = document.getElementById('btn'); //完成按钮

	//初始化
	function init() {
		mui.init();
		addobtn(); //点击按钮
	}

	function addobtn() {
		obtn.onclick = function() {
			let nameval = name.value;
			let	posval = pos.value;
			let	haoval = hao.value;
			let	quval = qu.value;
			let	addressval = address.value;
				location.href = "addlist.html"
			
	}

	}

	init()
})
