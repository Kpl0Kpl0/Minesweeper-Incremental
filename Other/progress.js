
//localStorage.clear();



function upg_storage(id, type, task) {
	
	let upgr = STATS.upgs[type][id],
		m1 = ['lvl', 'upgr.lvl',
		'eff', 'upgr.eff',
		'cost', 'upgr.cost',
		'max', 'upgr.max',
		'visible', 'upgr.visible',
		'resettable', 'upgr.resettable'];
		
		
		
	for (let i = 0; i < m1.length; i+=2) {
		
		let store_name = String(type) + "_" + m1[i] + String(id);
		
		if (task == 'save') {
			
			localStorage.setItem(store_name,JSON.stringify(eval(m1[i+1])));
			
		} else {
			
			for (let g = 0; g < STATS.upgs[type].length; g++) {
				if (localStorage.getItem(store_name) != null) {
					upgr[m1[i]] = JSON.parse(localStorage.getItem(store_name));
				}
			}
			
		}
	}
	
}


var LOAD = {
	load_version() {
		function load_stats(name, type) {
			if (localStorage.getItem(name) != null) {
				STATS.plr[type][name] = Number(localStorage.getItem(name));
			}
		}
		load_stats('version', 'other');
	},
	load_progress() {
		
		let m = STATS.plr.main,
			o = STATS.plr.other;
		
		
		function load_stats(name, type) {
			if (localStorage.getItem(name) != null) {
				STATS.plr[type][name] = Number(localStorage.getItem(name));
			}
		}
		load_stats('coins', 'main');
		load_stats('rage', 'main');
		load_stats('shards', 'main');
		load_stats('progress', 'other');
		load_stats('best_coins', 'other');
		
		
		
		for (let i = 0; i < STATS.upgs['upg'].length; i++) {
			upg_storage(i, 'upg', 'load');
		}
		for (let i = 0; i < STATS.upgs['bb_upg'].length; i++) {
			upg_storage(i, 'bb_upg', 'load');
		}
		
		
		function load_upgs(num) {
			for (let i = 0; i < num; i++) {
				let upg = document.getElementById("upg" + (i+1));
				upg.style.display = "block";
			}
		}
		if (o.progress < STATS.upgs['upg'].length) { load_upgs(o.progress) }
		else { load_upgs(STATS.upgs['upg'].length) }
		
		
		
		function load_bb_upgs(num) {
			let upgr = STATS.upgs['bb_upg'];
			for (let i = 0; i < upgr.length; i++) {
				let bb_upg = document.getElementById(upgr[i].name[0]);
				bb_upg.style.display = "block";
			}
		}
		 load_bb_upgs(STATS.upgs['bb_upg'].length);
		
		
		
		progr_display = [
			1, 'info_coins.style.display = "block"',
			6, 'info_rage.style.display = "block"',
			11, 'bt_big_bang.style.display = "block"',
			12, 'info_shards.style.display = "block"',
			12, 'mv_menu_bb.style.display = "block"'
		]
		for (let i = 0; i < progr_display.length; i+=2) {
			if (o.progress >= progr_display[i]) {
				eval(progr_display[i+1]);
			} else {
				break;
			}
		}
		
		console.log('Current progress: ' + o.progress)
		
	}
}
LOAD.load_version();


function save_progress() {
	
	let m = STATS.plr.main,
		o = STATS.plr.other,
		coins = m.coins,
		rage = m.rage,
		shards = m.shards,
		progress = o.progress,
		version = o.version,
		best_coins = o.best_coins;
	
	
	
	localStorage.setItem('coins', coins);
	localStorage.setItem('rage', rage);
	localStorage.setItem('shards', shards);
	localStorage.setItem('progress', progress);
	localStorage.setItem('version', version);
	localStorage.setItem('best_coins', best_coins);
	
	
	
	let len = STATS.upgs['upg'].length;
	for (let i = 0; i < len; i++) {
		upg_storage(i,'upg','save');
	}
	
	let bb_len = STATS.upgs['bb_upg'].length;
	for (let i = 0; i < bb_len; i++) {
		upg_storage(i,'bb_upg','save');
	}
	
	console.log("Saved");
};
timer = setInterval(save_progress,5000);