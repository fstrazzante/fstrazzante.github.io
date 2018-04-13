//finestra1
var win = Ti.UI.createWindow({
    title: "Esercizio 4",
    backgroundColor:"red"
});

var vista1 = Ti.UI.createView({
	backgroundColor:"red",
	width:"33%",
	height:"100%",
	left:0,
	top:0
});

var button1 = Ti.UI.createButton({
	width:300,
	height:50,
	title: "Cambia colore",
	top: 10
});

var button2 = Ti.UI.createButton({
	width:300,
	height:50,
	title: "Cambia sfondo",
	top: 70
});

var button3 = Ti.UI.createButton({
	width:300,
	height:50,
	title: "Aggiungi view",
	top: 130
});

var button4 = Ti.UI.createButton({
	width:300,
	height:50,
	title: "Apri finestra",
	top: 190
});

win.add(button1);
win.add(button2);
win.add(button3);
win.add(button4);

//finestra2

var win2 = Ti.UI.createWindow({
    title: "Esercizio 4 finestra 2",
    backgroundColor:"yellow"
});

var button5 = Ti.UI.createButton({
	width:300,
	height:50,
	title: "Chiudi finestra"
});

win2.add(button5);

button1.addEventListener("click", function(e){
	win.setBackgroundColor("blue");
});

button2.addEventListener("click", function(e){
	win.setBackgroundImage("/images/photo.jpg");
});

button3.addEventListener("click", function(e){
	win.add(vista1);
});

button4.addEventListener("click", function(e){
	win2.open();
});

button5.addEventListener("click", function(e){
	win2.close();
});

win.open();