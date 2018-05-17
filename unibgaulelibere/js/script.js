window.onload = function(){
	function callOrario(e, t, n) {
	    var xhttp = new XMLHttpRequest;
	    xhttp.open("POST", "https://cors-anywhere.herokuapp.com/https://logistica.unibg.it/PortaleStudenti/rooms_call.php")
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	    xhttp.onreadystatechange = function() {
	        if (4 == xhttp.readyState && 200 == xhttp.status) {
	            var e = JSON.parse(xhttp.responseText);
	            e.edificio = t;
	            console.log(e.edificio)
	            n(e)
	        }
	    }, xhttp.send("form-type=rooms&aula=&sede=" + t + "&date=" + e + "&_lang=it")
	}
	var now = new Date

	var description=document.getElementById("description")

	description.innerHTML = "<h1>Cerco aule libere dalle " + now.getHours() + ":" + now.getMinutes() + " in poi di oggi " + now.getDate() + "/" + (now.getMonth() + 1) + "</h1>";

	var hours = now.setHours(7),
	    minutes = now.setMinutes(30),
	    seconds = now.setSeconds(0),
	    day = now.getDate(),
	    month = now.getMonth() + 1,
	    year = now.getFullYear(),
	    oggi = day + "-" + month + "-" + year;
	for (sedi = ["EDA-Dalmine", "EDB-Dalmine", "EDC-Dalmine", "EDD-Dalmine"], k = 0; k < sedi.length; k++){

		callOrario(oggi, sedi[k], function(e) {
			description.innerHTML +="<h2>Edificio "+ e.edificio+"</h2>"
			for (key in e.table){
				for (i = 1; i < e.table[key].length - 1; i++) {
					if (0 == e.table[key][i].length && (1 == i || 0 != e.table[key][i - 1].length)){
						var inizio = new Date(now.getTime() + 6e4 * i * 30 - 18e5);
					}
					if (0 == e.table[key][i].length && (i + 1 == 25 || 0 != e.table[key][i + 1].length)) {
						var n = new Date
						if(i + 1 == 25){
							var fine = new Date(now.getTime() + 6e4 * i * 30 + 36e5);
						}else{
							var fine = new Date(now.getTime() + 6e4 * i * 30 + 18e5);
						}
						if(n<fine){
							description.innerHTML += "<p>Aula " + key + " libera dalle " + inizio.getHours() + ":" + inizio.getMinutes() + " alle " + fine.getHours() + ":" + fine.getMinutes() + "</p>"
						}
					}
				}
			}
			console.log(description)
		});

	}
}
	