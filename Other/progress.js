
//localStorage.clear();



function load_progress() {
	let m = STATS.plr.main,
		o = STATS.plr.other;
	
	o.progress = Number(localStorage.getItem('progress'));
	m.coins = Number(localStorage.getItem('coins'));
	
	if (o.progress >= 1) {
		info_coins.style.display = "block";
		upg1.style.display = "block";
	}
	if (o.progress >= 2) {
		upg2.style.display = "block";
	}
}
load_progress();



function save_progress() {
	let m = STATS.plr.main,
		o = STATS.plr.other,
		progress = o.progress,
		coins = m.coins;
	localStorage.setItem('coins', coins);
	localStorage.setItem('progress', progress);
	console.log(localStorage.getItem('coins'));
};
timer = setInterval(save_progress,10);