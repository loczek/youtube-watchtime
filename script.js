function timesplit(){
var allwatchedvideos = Array ( );
var allwatchedtime = Array (0,0,0);
var times = document.querySelectorAll("div[class='bI9urf']");
var timesArr = Array.prototype.slice.call(times);

for(a=0;a<timesArr.length;a++){
	var b = timesArr[a].outerText.split(':');
	if(b.length < 3)
		{
		b.unshift(0);
		}
	if(b.length > 3){
	 b = Array ("0","0","0");
	}
	b[0] = parseInt(b[0],10);
	b[1] = parseInt(b[1],10);
	b[2] = parseInt(b[2],10);
	allwatchedvideos.unshift(b);

	var i = 0;
	allwatchedtime[0] = allwatchedtime[0] + allwatchedvideos[i][0];
	allwatchedtime[1] = allwatchedtime[1] + allwatchedvideos[i][1];
	allwatchedtime[2] = allwatchedtime[2] + allwatchedvideos[i][2];
	i++;
	}
	allwatchedtime[1] = allwatchedtime[1] + Math.abs(allwatchedtime[2] / 60);
	allwatchedtime.pop();

	var c = allwatchedtime[1].toString();
	var d = c.split('.');
	d[1]= d[1].substring(0,2);
	d[0] = parseInt(d[0],10);
	d[1] = parseInt(d[1],10);

	var e = d[1] / 100;
	d[1] = 60 * e;
	d[1] = d[1].toString();
	d[1] = d[1].substring(0,2);
	d[1] = parseInt(d[1],10);
	allwatchedtime[1] = d[0];
	allwatchedtime[2] = d[1];
	allwatchedtime[0] = allwatchedtime[0] + Math.abs(allwatchedtime[1]/60);
	allwatchedtime[0] = allwatchedtime[0]

	var f = allwatchedtime[0].toString();
	f = f.split('.');
	f[1] = f[1].substring(0,2);
	f[0] = parseInt(f[0],10);
	f[1] = parseInt(f[1],10);

	var g = f[1]/100;
	f[1] = 60 * g;
	f[1] = f[1].toString();
	f[1] = f[1].substring(0,2);
	f[1] = parseInt(f[1],10);
	allwatchedtime[0] = f[0];
	allwatchedtime[1] = f[1]
	clear();
	console.log("Your time spent watching videos is: " + allwatchedtime[0] + " hours " + allwatchedtime[1] + " minutes " + allwatchedtime[2] + " seconds ")
}
timesplit();