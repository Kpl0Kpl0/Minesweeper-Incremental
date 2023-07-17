bb_upg_close.onclick = function() {
	STATS.plr.other.bb_upg = 0;
}

bb_upg_buy.onclick = function() {
	let o = STATS.plr.other,
		math_buy = MATH.upg.buy;
	math_buy.one(o.bb_upg-1, 'bb_upg')
}
bb_upg_buy.ondblclick = function() {
	let o = STATS.plr.other,
		math_buy = MATH.upg.buy;
	math_buy.all(o.bb_upg-1, 'bb_upg')
}