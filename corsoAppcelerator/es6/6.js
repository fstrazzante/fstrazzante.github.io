//finestra1
var win = Ti.UI.createWindow({
    title: "Esercizio 6",
    backgroundColor:"red"
});

var vista1 = Ti.UI.createView({
	backgroundColor:"red",
	width:"100%",
	height:"25%",
	top:0,
	name:"Vista1"
});

var vista2 = Ti.UI.createView({
	backgroundColor:"green",
	width:"100%",
	height:"25%",
	top:"25%",
	name:"Vista2"
});

var vista3 = Ti.UI.createView({
	backgroundColor:"blue",
	width:"100%",
	height:"25%",
	top:"50%",
	name:"Vista3"
});

var vista4 = Ti.UI.createView({
	backgroundColor:"yellow",
	width:"100%",
	height:"25%",
	top:"75%",
	name:"Vista4"
});

win.add(vista1);
win.add(vista2);
win.add(vista3);
win.add(vista4);

function stampaName(e){
	alert(e.source.name);
}

vista1.addEventListener("click", stampaName);
vista2.addEventListener("click", stampaName);
vista3.addEventListener("click", stampaName);
vista4.addEventListener("click", stampaName);

win.open();