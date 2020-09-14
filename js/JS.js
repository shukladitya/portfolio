daynight=document.querySelector(".fa-moon");
daynight.addEventListener("click",toggle);
var daynightflag=0;
function toggle(){
	this.classList.toggle("fa-sun");
	if(daynightflag==0){
						document.documentElement.style.setProperty('--backgroundcolor','#111216');
						document.documentElement.style.setProperty('--iconnotselected','#88888A');
						document.documentElement.style.setProperty('--iconhover','white');
						document.documentElement.style.setProperty('--text','white');
						document.getElementById('logo').style.backgroundImage = "url('css/asset/logolight.png')";
						daynightflag=1;
					   }
	else{   
			document.documentElement.style.setProperty('--backgroundcolor','#FAFAFA');
		    document.documentElement.style.setProperty('--iconnotselected','#7D7D7D');
			document.documentElement.style.setProperty('--iconhover','black');
			document.documentElement.style.setProperty('--text','black');
			document.getElementById('logo').style.backgroundImage = "url('css/asset/logodark.png')";
			daynightflag=0;
	}
}

function toogletasto(){
	if (document.getElementById('tastovideo').style.display=='block') {
		document.getElementById('tastovideo').style.display='none';
		document.getElementById('vid1').pause();
	}
	else 
		document.getElementById('tastovideo').style.display='block';

}
function toogleatmo(){
	if (document.getElementById('atmovideo').style.display=='block') {
		document.getElementById('atmovideo').style.display='none';
		document.getElementById('vid2').pause();
	}
	else 
		document.getElementById('atmovideo').style.display='block';
}