
// ПОТОМ УБЕРИ В ФАЙЛ SETTINGS
bt_hard_reset.onclick = function() {
	localStorage.clear();
	location.reload();
	console.log("Hard reset completed!");
}

bt_restart.onclick = function() {
	if (STATS.plr.other.lose == 1) {
		MATH.field.restart();
	}
}

bt_get_coins.onclick = function() {
	if (STATS.plr.other.score > 0) {
		MATH.plr.progress(1);
		info_coins.style.display = "block";
		upg1.style.display = "block";
		STATS.plr.main.coins += MATH.plr.coins();
		MATH.field.restart();
	}
}


bt_big_bang.onclick = function() {
	
	// Количество шардов, которые мы должны получить
	let gain = MATH.plr.shards()[0];
	// Если количество не равно нулю, то...
	if (gain > 0) {
		
		// Повышаем прогресс до 12
		MATH.plr.progress(12);
		
		// Сбрасывает минное поле
		MATH.field.restart();
		
		// Выполняем сброс определенных объектов
		MATH.reset.upg();
		MATH.reset.cur1();
		
		// Добавляет шарды
		STATS.plr.main.shards += gain;
		
		// Показывает информацию о шардах и кнопку передвижения до big bang
		info_shards.style.display = "block";
		mv_menu_bb.style.display = "block";
		
		// Экран переходит в big bang
		MOVES.move(1)
		
	}
	
}

MATH.field.mines();