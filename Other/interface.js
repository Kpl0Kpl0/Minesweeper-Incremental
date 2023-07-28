const MOVES = {
	move(id){
		let menus = [menu_mf, menu_bb, menu_sett];
		for (i = 0; i < menus.length; i++) {
			if (i == id) {menus[i].style.display = "block"}
			else {menus[i].style.display = "none";}
		}
	}
}

mv_menu_mf.onclick = function() { MOVES.move(0)}
mv_menu_bb.onclick = function() { MOVES.move(1)}
mv_menu_sett.onclick = function() { MOVES.move(2)}

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
			eff_1 = STATS.upgs['bb_upg'][15].eff[0],
			upgr = STATS.upgs['upg'][i], 
			cur = upgr.cost[4],
			cost =  upgr.cost[0] * eff_1,
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
	
	// Путь к основным и дополнительным статам игрока
	let o = STATS.plr.other,
		m = STATS.plr.main;
	
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	
	// Кнопки улучшений в big bang'е яркие если их можно купить (хватает кристаллов)
	let bb_upgr2 = STATS.upgs['bb_upg'];
	
	// Просматриваем все bb улучшения
	for (i = 0; i < bb_upgr2.length; i++) {
		
		// Находим имя улучшения
		let bb_upgr2_id = document.getElementById(bb_upgr2[i].name[0]);
		
		// Если шардов на улучшение хватает, то...
		if (bb_upgr2[i].lvl == bb_upgr2[i].max[0]) {
			
			// Кнопка голубая
			bb_upgr2_id.style.backgroundColor = '#2F8CB4';
			bb_upgr2_id.style.border = "2px solid #0F394A";
			bb_upgr2_id.style.color = '#0F394A';
			
		} else if (bb_upgr2[i].cost[0] <= m.shards) {
			
			// Кнопка светлая
			bb_upgr2_id.style.backgroundColor = '#2F30B4';
			bb_upgr2_id.style.border = "2px solid #0F104B";
			bb_upgr2_id.style.color = '#0F104B';
			
		} else {
			
			// Кнопка темная
			bb_upgr2_id.style.backgroundColor = '#22237F';
			bb_upgr2_id.style.border = "2px solid #0B0B35";
			bb_upgr2_id.style.color = '#0B0B35';
			
		}
	}
	
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	
	// Обновление описания bb улучшений
	if (o.bb_upg > 0) {
		
		let upgr = STATS.upgs['bb_upg'][o.bb_upg-1],
			cur = upgr.cost[4],
			cost =  upgr.cost[0],
			desc = upgr.desc,
			lvl = upgr.lvl,
			max = upgr.max[0],
			name1 = upgr.name[0],
			name2 = upgr.name[1],
			desc_cost = "",
			upg_id = document.getElementById(name1);
		
		// Показывает кнопки описания и само описание
		bb_upg_desc.style.display = "block";
		bb_upg_close.style.display = "block";
		// Если кристаллов хватает, то показывает кнопку покупки
		if (upgr.cost[0] <= m.shards) {
			bb_upg_buy.style.display = "block";
		} else {
			bb_upg_buy.style.display = "none";
		}
		
		if (lvl == max && max > 0) {desc_cost = "\n<b>Cost:</b> MAX"
		} else {desc_cost = "\n<b>Cost:</b> " + abbrNum(cost) + " " + cur}
		
		bb_upg_desc.innerHTML = "[" + name1 + "] <b>" + name2 + "</b>\n<b>Level " + lvl + " / " + max + "</b>\n<b> Effect</b>: " + desc  +  desc_cost;
		
	} else {
		
		// Скрывает кнопки описания и само описание
		bb_upg_desc.style.display = "none";
		bb_upg_close.style.display = "none";
		bb_upg_buy.style.display = "none";
		
	}
	
	// Обновление экрана описания bb улучшений
	let bb_upgr = STATS.upgs['bb_upg'],
		bb_screen = STATS.plr.other.bb_screen;
	for (i = 0; i < bb_upgr.length; i++) {
		let upg = document.getElementById(bb_upgr[i].name[0]);
		if (bb_upgr[i].type == bb_screen && bb_upgr[i].visible == 1) {
			upg.style.display = "block";
		} else { upg.style.display = "none"; }
	}
}
timer = setInterval(update,25);