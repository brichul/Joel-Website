function isInViewport(element) 
{
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

var currBG = 1;

if (window.location.pathname.split("/").pop() != "JoelWebsiteNews.html")
{
	document.getElementById("chunk1").style.marginTop = window.innerHeight.toString() + "px";
}

var facts = document.getElementsByClassName('fact');
for (var i = 0; i < facts.length; ++i) {
    var fact = facts[i];
	if (parseInt(fact.getAttribute('id')) % 4 == 1)
	{
		fact.style.backgroundColor = '#000';
		fact.style.cssFloat = 'right';
		fact.style.left = "50%"
	}
	else if (parseInt(fact.getAttribute('id')) % 4 == 2)
	{
		fact.style.backgroundColor = '#fff';
		fact.style.cssFloat = 'left';
		fact.style.right = "50%"
	}
	else if (parseInt(fact.getAttribute('id')) % 4 == 3)
	{
		fact.style.backgroundColor = '#000';
		fact.style.cssFloat = 'left';
		fact.style.right = "50%"
	}
	else if (parseInt(fact.getAttribute('id')) % 4 == 0)
	{
		fact.style.backgroundColor = '#fff';
		fact.style.cssFloat = 'right';
		fact.style.left = "50%"
	}
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

function FactSlide()
{
	orig = "50%";
	if (1.1 * window.innerHeight >= window.innerWidth)
	{
		orig = "100%"
	}
	var facts = document.getElementsByClassName('fact');
	for (var i = 0; i < facts.length; ++i) 
	{
		var fact = facts[i];
		if (isInViewport(fact) && fact.style.cssFloat == "right")
		{
			fact.style.left = '0';
		}
		else if (isInViewport(fact) && fact.style.cssFloat == "left")
		{
			fact.style.right = '0';
		}
		else if (!isInViewport(fact) && fact.style.cssFloat == "right")
		{
			fact.style.left = orig;
		}
		else if (!isInViewport(fact) && fact.style.cssFloat == "left")
		{
			fact.style.right = orig;
		}
	}
}

document.getElementById("sidebartoggle").onclick = sidebar;
document.getElementById("copyright").onclick = cfade;
//setInterval(PictureFade, 7500);
document.addEventListener('scroll', BlurFade);
document.addEventListener('scroll', FactSlide);
