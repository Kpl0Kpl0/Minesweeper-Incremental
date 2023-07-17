var field = document.getElementById("field");
var upg_window= document.getElementById("upg_window");

function generate_field() {
	for (let i = 0; i < MATH.field.generate()[0]; i++){
		for (let x = 0; x < MATH.field.generate()[0]; x++) {
			let spawn_tile = document.createElement("div");
			spawn_tile.className = tile_style.class_name;
			spawn_tile.id = tile_style.id + (i + x * 5);
			spawn_tile.setAttribute('onclick', tile_style.onclick_name + "(" + (i + x * 5) +")");
			//spawn_tile.textContent = spawn_tile.id;
			spawn_tile.style.width = tile_style.width + "vw";
			spawn_tile.style.height = tile_style.height + "vw";
			spawn_tile.style.top = x * tile_style.top + "vw";
			spawn_tile.style.left = i * tile_style.left + "vw";
			spawn_tile.style.position = tile_style.position;
			spawn_tile.style.backgroundColor = tile_style.bckgrnd_clr;
			spawn_tile.style.border = tile_style.border;
			spawn_tile.style.cursor = "crosshair";
			
			field.appendChild(spawn_tile);
		}
	}
}

function generate_upgrades() {
	for (i = 0; i < STATS.upgs['upg'].length; i++) {
		let upg = document.createElement("button");
		upg.className = "upg";
		upg.id = "upg" + (i+1);
		upg.setAttribute('onclick', "MATH.upg.buy.one(" + i + ", 'upg')");
		upg.setAttribute('ondblclick', "MATH.upg.buy.all(" + i + ", 'upg')");
		upg.style.display = "none";
		upg.style.width ="16vw";
		upg.style.height ="8vw";
		upg.style.position = "absolute";
		upg.style.fontSize = "1.2vw";
		upg.style.fontFamily = "Arial, Helvetica, sans-serif";
		upg.style.textAlign = "center";
		upg.style.whiteSpace = "pre-wrap";
		upg.style.lineHeight = "120%";
		upg.style.cursor = "pointer";
		if (i >= 0 && i <= 4) {
			if (i == 3) upg.style.fontSize = "1.1vw";
			upg.style.top = (6 + 8.5 * i) + "vw";
			upg.style.left = "17.6vw";
			upg.style.color = "#8C8C4B";
			upg.style.border = "2px solid #8C8C4B";
			upg.style.backgroundColor = "#D2D280";
		} else if (i >= 5 && i <= 10) {
			upg.style.top = (6 + 8.5 * (i-5)) + "vw";
			upg.style.left = "66.5vw";
			upg.style.color = "#A05D4B";
			upg.style.border = "2px solid #A05D4B";
			upg.style.backgroundColor = "#D29880";
		}
		upg_window.appendChild(upg);
	}
}

function generate_bb_upgrades() {
	let bb_upgr = STATS.upgs['bb_upg'];
	for (i = 0; i < bb_upgr.length; i++) {
		let upg = document.createElement("button")
			upgr = bb_upgr[i];
		upg.className = upgr.type;
		upg.id = upgr.name[0];
		upg.setAttribute('onclick', "STATS.plr.other.bb_upg = " + (i+1));
		upg.setAttribute('ondblclick', "STATS.plr.other.bb_upg = " + (i+1));
		upg.textContent = upgr.name[0];
		upg.style.display = "block";
		upg.style.width ="4vw";
		upg.style.height ="4vw";
		upg.style.position = "absolute";
		upg.style.fontSize = "2vw";
		upg.style.fontFamily = "Arial, Helvetica, sans-serif";
		upg.style.textAlign = "center";
		upg.style.whiteSpace = "pre-wrap";
		upg.style.lineHeight = "120%";
		upg.style.cursor = "pointer";
		
		upg.style.top = upgr.cords[0] + "vw";
		upg.style.left = upgr.cords[1] + "vw";
		upg.style.color = "#0F104B";
		upg.style.border = "4px solid #0F104B";
		upg.style.backgroundColor = "#2F30B4";
		bb_upg_window.appendChild(upg);
	}
}

generate_upgrades();
generate_bb_upgrades();
generate_field();