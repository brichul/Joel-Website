var currBG = 1;

if (window.location.pathname.split("/").pop() != "JoelWebsiteNews.html")
{
	document.getElementById("chunk1").style.marginTop = window.innerHeight.toString() + "px";
}

function sidebar()
{
	sidebar = document.getElementById("sidebar")
	toggle = document.getElementById("sidebartoggle")
	if (parseInt(sidebar.style.width) > 0)
	{
		sidebar.style.width = "0";
		//toggle.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	}
	else
	{
		sidebar.style.width = "75%";
		//toggle.style.backgroundColor = "rgba(0, 0, 0, 0)";
	}
}

/*function PictureFade()
{
	document.body.style.backgroundImage = "url('Pictures/JoelPicture" + currBG.toString() + ".jpg')";
	currBG = currBG + 1;
	if (currBG > 5)
	{
		currBG = 1;
	}
}*/

function BlurFade()
{
	if (window.location.pathname.split("/").pop() != "JoelWebsiteNews.html")
	{
		if (window.scrollY / 50 < 12)
		{
			document.getElementById("blur").style.backdropFilter = "blur(" + (window.scrollY / 50).toString() + "px) brightness(" + (1 - window.scrollY / 1600).toString() + ")";
		}
		else
		{
			document.getElementById("blur").style.backdropFilter = "blur(" + (12).toString() + "px) brightness(" + (0.625).toString() + ")";
		}
	}
}

function cfade()
{
	if (cphase == 0)
	{
		document.getElementById("copyright").innerHTML = "This website was made by Berry Richulsky. Vote Joel Etienne!";
		cphase = 1;
	}
	else if (cphase == 1)
	{
		document.getElementById("copyright").innerHTML = "© Copyright Berry Richulsky, 2022";
		cphase = 0;
	}
}

document.getElementById("sidebartoggle").onclick = sidebar;
document.getElementById("copyright").onclick = cfade;
//setInterval(PictureFade, 7500);
setInterval(BlurFade, 100);
