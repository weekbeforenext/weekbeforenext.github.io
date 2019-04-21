// menu rollover
function show(subText) {
	hide();
	var sel = subText;
	document.getElementById(sel).style.visibility = 'visible';

	var selToggle = document.getElementById(sel).getElementsByTagName('div');
	for (var i = 0; i < selToggle.length; i++) {
		selToggle[i].style.visibility = 'visible';
	}
}

function hide() {
	var toggleable = document.getElementById('mainNavigation').getElementsByTagName('div');
	for (var i = 0; i < toggleable.length; i++) {
		toggleable[i].style.visibility = 'hidden';
	}
}

// sub menu rollover
function showSub(subText) {
	hide();
	var selSub = subText;
	document.getElementById(selSub).style.visibility = 'visible';

	var selToggleSub = document.getElementById(selSub).getElementsByTagName('div');
	for (var i = 0; i < selToggleSub.length; i++) {
		selToggleSub[i].style.visibility = 'visible';
	}
}

function hideSub() {
	var toggleableSub = document.getElementById('subNavigation').getElementsByTagName('div');
	for (var i = 0; i < toggleableSub.length; i++) {
		toggleableSub[i].style.visibility = 'hidden';
	}
}

//image swap
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}