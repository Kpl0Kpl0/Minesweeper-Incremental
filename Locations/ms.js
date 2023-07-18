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
	let gain = MATH.plr.shards()[0];
	if (gain > 0) {
		MATH.plr.progress(12);
		MATH.field.restart();
		MATH.reset.upg();
		MATH.reset.cur1();
		STATS.plr.main.shards += gain;
		info_shards.style.display = "block";
		mv_menu_bb.style.display = "block";
	}
}

MATH.field.mines();