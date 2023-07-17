function move(id){
	let menus = [menu_mf, menu_bb];
	for (i = 0; i < menus.length; i++) {
		if (i == id) {menus[i].style.display = "block"}
		else {menus[i].style.display = "none";}
	}
}

mv_menu_mf.onclick = function() { move(0)}
mv_menu_bb.onclick = function() { move(1)}

function update() {
	// Обновление стиля кнопок
	let shards_gain = abbrNum(MATH.plr.shards()[0]),
		shards_cost = abbrNum(MATH.plr.shards()[1]),
		shards_one = abbrNum(MATH.plr.shards()[2]);
	bt_big_bang.innerHTML = "Resets all progress to get <b>" + shards_gain + 
	"</b> shards (<b>+" + shards_one + "</b> at <b>" + shards_cost + "</b> of coins)";
	
	// Обновление всех показателей статов
	info_coins.textContent = "Coins: " + abbrNum(STATS.plr.main.coins);
	info_rage.textContent = "Rage: " + abbrNum(STATS.plr.main.rage);
	info_shards.textContent = "Shards: " + abbrNum(STATS.plr.main.shards);
	
	// Обновление кнопки получения монет
	bt_get_coins.innerHTML = "Get " + abbrNum(MATH.plr.score()) + " coins";
	if (STATS.plr.other.score == 0) {
		// Выйгрыша нет
		bt_get_coins.style.backgroundColor = "#808080";
		bt_get_coins.style.color = "#141414";
		bt_get_coins.style.border = "2px solid #141414";
	} else {
		// Выйграш есть
		bt_get_coins.style.backgroundColor = "#FCF697";
		bt_get_coins.style.color = "#B4A900";
		bt_get_coins.style.border = "2px solid #B4A900";
	}
	
	// Обновление кнопки рестарта
	if (STATS.plr.other.lose == 0) {
		// Не проиграл
		bt_restart.style.backgroundColor = "#808080";
		bt_restart.style.color = "#141414";
		bt_restart.style.border = "2px solid #141414";
	} else {
		// Проиграл
		bt_restart.style.backgroundColor = "#FA8072";
		bt_restart.style.color = "#C8143C";
		bt_restart.style.border = "2px solid #C8143C";
	}
	
	// Обновление кнопки большого взрыва
	if (MATH.plr.shards()[0] == 0) {
		// Получаешь 0 кристаллов
		bt_big_bang.style.backgroundColor = "#808080";
		bt_big_bang.style.color = "#141414";
		bt_big_bang.style.border = "2px solid #141414";
	} else {
		// Получаешь больше 0 кристаллов
		bt_big_bang.style.backgroundColor = "#6D5DFD";
		bt_big_bang.style.color = "#140A64";
		bt_big_bang.style.border = "2px solid #140A64";
	}
	
	// Обновление улучшений
	for (i = 0; i < STATS.upgs['upg'].length; i++) {
		let num = eval("upg" + (i+1)), 
			upgr = STATS.upgs['upg'][i], 
			cur = upgr.cost[4],
			cost =  upgr.cost[0],
			desc = upgr.desc,
			clr = upgr.clr,
			lvl = upgr.lvl,
			max = upgr.max[0],
			desc_cost = "",
			plr = STATS.plr;
		
		if (lvl == max && max > 0) {desc_cost = "\n<b>Cost:</b> MAX"
		} else {desc_cost = "\n<b>Cost:</b> " + abbrNum(cost) + " " + cur}
		
		if (cost <= plr.main[cur] && (max  != lvl || max == 0)) {
			num.style.backgroundColor = "#" + clr[0];
			num.style.color =  "#" + clr[2];
			num.style.border =  "2px solid #" + clr[2];
		} else {
			num.style.backgroundColor = "#" + clr[1]
			num.style.color =  "#" + clr[3];
			num.style.border =  "2px solid #" + clr[3];
		}
		
		if (max > 0) {
			num.innerHTML = 
			"<b>Level " + lvl + " / " + max + 
			"</b>\n<b>Effect</b>: " + desc  +  desc_cost;
		} else {
			num.innerHTML = 
			"<b>Level " + lvl + 
			"</b>\n<b>Effect</b>: " + desc +  desc_cost;
		}
	}
	
	// Обновление описания bb улучшений
	console.log(STATS.plr.other.bb_upg);
	let o = STATS.plr.other;
	if (o.bb_upg > 0) {
		bb_upg_desc.style.display = "block";
		bb_upg_close.style.display = "block";
		bb_upg_buy.style.display = "block";
		let upgr = STATS.upgs['bb_upg'][o.bb_upg-1],
			num = upgr.name[0], 
			cur = upgr.cost[4],
			cost =  upgr.cost[0],
			desc = upgr.desc,
			lvl = upgr.lvl,
			max = upgr.max[0],
			desc_cost = "";
			
		if (lvl == max && max > 0) {desc_cost = "\n<b>Cost:</b> MAX"
		} else {desc_cost = "\n<b>Cost:</b> " + abbrNum(cost) + " " + cur}
		
		bb_upg_desc.innerHTML = "<b>Level " + lvl + " / " + max + "</b>\n<b>Effect</b>: " + desc  +  desc_cost;
	} else {
		bb_upg_desc.style.display = "none";
		bb_upg_close.style.display = "none";
		bb_upg_buy.style.display = "none";
	}
}
timer = setInterval(update,10);