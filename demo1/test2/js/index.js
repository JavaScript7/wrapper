window.onload = function(){
	showTime();
	function showTime(){
		var d = new Date();
		var y = d.getFullYear();
		var m = cT(d.getMonth()+1);
		var r = cT(d.getDate());
		var h = cT(d.getHours());
		var f = cT(d.getMinutes());
		var s = cT(d.getSeconds());
		function cT(n){
			if(n<10){
				n = '0'+n;
			}
			return n;
		}
		document.getElementsByClassName('showTime')[0].innerHTML = `${y}-${m}-${r} ${h}:${f}`;
		setTimeout(showTime,500);
	}
}