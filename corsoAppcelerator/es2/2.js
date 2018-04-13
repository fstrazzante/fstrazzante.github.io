var win = Ti.UI.createWindow({
    title: "Esercizio 2",
});

var vista1 = Ti.UI.createView({
	backgroundColor:"red",
	width:"100%",
	height:"33%",
	top:0
});

var vista2 = Ti.UI.createView({
	backgroundColor:"#0f0",
	width:"100%",
	height:"33%",
	top:"33%"
});

var vista3 = Ti.UI.createView({
	backgroundColor:"#0000ff",
	width:"100%",
	height:"34%",
	top:"66%"
});

win.add(vista1);
win.add(vista2);
win.add(vista3);

win.open();