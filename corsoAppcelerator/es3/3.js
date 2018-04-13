xvar win = Ti.UI.createWindow({
    title: "Esercizio 3",
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

win.add(vista1);
win.add(vista2);
win.add(vista3);

win.open();