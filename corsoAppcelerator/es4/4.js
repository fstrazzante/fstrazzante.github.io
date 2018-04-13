var win = Ti.UI.createWindow({
    title: "Esercizio 4",
});

var vista1 = Ti.UI.createView({
	backgroundColor:"red",
	width:"33%",
	height:"100%",
	left:0,
	top:0
});

var vista2 = Ti.UI.createView({
	backgroundColor:"#0f0",
	width:"33%",
	height:"100%",
	left:"33%",
	top:0
});

var vista3 = Ti.UI.createView({
	backgroundColor:"#0000ff",
	width:"34%",
	height:"100%",
	left:"66%",
	top:0
});

var button = Ti.UI.createButton({
	width:200,
	height:50,
	title: "Remove view"
});

win.add(vista1);
win.add(vista2);
win.add(vista3);
win.add(button);

button.addEventListener("click", function(e){
	win.remove(vista1);
	win.remove(vista2);
	win.remove(vista3);
});

win.open();