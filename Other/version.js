
function update_version() {
	
	let o = STATS.plr.other;
	
	console.log('Player version: ' + o.version)
	
	function clear_upg_storage(id, type) {
		localStorage.removeItem(type + '_lvl' + id);
		localStorage.removeItem(type + '_eff' + id);
		localStorage.removeItem(type + '_cost' + id);
		localStorage.removeItem(type + '_max' + id);
	}
	
	function clear_upg_stats(id, type) {
		
		let upgr = STATS.upgs[type][id];
		
		upgr.cost[0] = upgr.cost[3];
		upgr.eff[0] = upgr.eff[3];
		upgr.max[0] = upgr.max[1];
		upgr.lvl = 0;
		
	}
	
	function compensation(id, type) {
		
		function get_item(name) {
			return JSON.parse(localStorage.getItem(String(type) + "_" + name + String(id)));
		}
		
		let lvl = get_item('lvl');
		
		if (lvl > 0) {
			
			let grow = get_item('cost')[1],
				grow_type = get_item('cost')[2],
				starter_cost = get_item('cost')[3],
				cur_type = get_item('cost')[4],
				comp = starter_cost;
			
			for (i = 0; i < lvl-1; i++) {
				
				if (grow_type == "c*") {comp = comp * grow + comp}
				else if (grow_type == "c**") {comp **= grow}
				else if (grow_type == "l*") {comp = starter_cost * grow * (lvl+1)}
				else if (grow_type == "l**") {comp = starter_cost * grow ** (lvl+1)}
				
			}
			
			STATS.plr.main[cur_type] = Number(localStorage.getItem(cur_type)) + (Math.floor(comp));
			localStorage.setItem(cur_type, STATS.plr.main[cur_type])
			
			console.log("Compensation: " + Math.floor(comp) + " " + cur_type);
			
		}
	}
	
	if (2 > o.version) {
		
		compensation(8, 'upg');
		clear_upg_storage(8, 'upg');
		clear_upg_stats(8, 'upg');
		
		o.version = 2;
		console.log('New player version: ' + o.version)
		
	}
	if (3 > o.version) {
		
		compensation(0, 'bb_upg');
		clear_upg_storage(0, 'bb_upg');
		clear_upg_stats(0, 'bb_upg');
		
		compensation(1, 'bb_upg');
		clear_upg_storage(1, 'bb_upg');
		clear_upg_stats(1, 'bb_upg');
		
		compensation(2, 'bb_upg');
		clear_upg_storage(2, 'bb_upg');
		clear_upg_stats(2, 'bb_upg');
		
		o.version = 3;
		console.log('New player version: ' + o.version)
		
	}
	if (4> o.version) {
		
		compensation(2, 'upg');
		clear_upg_storage(2, 'upg');
		clear_upg_stats(2, 'upg');
		
		compensation(4, 'upg');
		clear_upg_storage(4, 'upg');
		clear_upg_stats(4, 'upg');
		
		compensation(6, 'upg');
		clear_upg_storage(6, 'upg');
		clear_upg_stats(6, 'upg');
		
		compensation(8, 'upg');
		clear_upg_storage(8, 'upg');
		clear_upg_stats(8, 'upg');
		
		compensation(9, 'upg');
		clear_upg_storage(9, 'upg');
		clear_upg_stats(9, 'upg');
		
		compensation(0, 'bb_upg');
		clear_upg_storage(0, 'bb_upg');
		clear_upg_stats(0, 'bb_upg');
		
		o.version = 4;
		console.log('New player version: ' + o.version)
		
	}
	if (5> o.version) {
		
		compensation(7, 'bb_upg');
		clear_upg_storage(7, 'bb_upg');
		clear_upg_stats(7, 'bb_upg');
		
		compensation(8, 'bb_upg');
		clear_upg_storage(8, 'bb_upg');
		clear_upg_stats(8, 'bb_upg');
		
		o.version = 5;
		console.log('New player version: ' + o.version)
		
	}
	if (6> o.version) {
		
		compensation(2, 'upg');
		clear_upg_storage(2, 'upg');
		clear_upg_stats(2, 'upg');
		
		compensation(8, 'upg');
		clear_upg_storage(8, 'upg');
		clear_upg_stats(8, 'upg');
		
		compensation(10, 'bb_upg');
		clear_upg_storage(10, 'bb_upg');
		clear_upg_stats(10, 'bb_upg');
		
		o.version = 6;
		console.log('New player version: ' + o.version)
		
	}
	if (7> o.version) {
		
		compensation(7, 'bb_upg');
		clear_upg_storage(7, 'bb_upg');
		clear_upg_stats(7, 'bb_upg');
		
		compensation(8, 'bb_upg');
		clear_upg_storage(8, 'bb_upg');
		clear_upg_stats(8, 'bb_upg');
		
		compensation(9, 'bb_upg');
		clear_upg_storage(9, 'bb_upg');
		clear_upg_stats(9, 'bb_upg');
		
		compensation(12, 'bb_upg');
		clear_upg_storage(12, 'bb_upg');
		clear_upg_stats(12, 'bb_upg');
		
		o.version = 7;
		console.log('New player version: ' + o.version)
		
	}
	if (8> o.version) {
		
		compensation(6, 'bb_upg');
		clear_upg_storage(6, 'bb_upg');
		clear_upg_stats(6, 'bb_upg');
		
		compensation(7, 'bb_upg');
		clear_upg_storage(7, 'bb_upg');
		clear_upg_stats(7, 'bb_upg');
		
		compensation(13, 'bb_upg');
		clear_upg_storage(13, 'bb_upg');
		clear_upg_stats(13, 'bb_upg');
		
		compensation(14, 'bb_upg');
		clear_upg_storage(14, 'bb_upg');
		clear_upg_stats(14, 'bb_upg');
		
		o.version = 8;
		console.log('New player version: ' + o.version)
		
	}
	if (9> o.version) {
		
		compensation(12, 'bb_upg');
		clear_upg_storage(12, 'bb_upg');
		clear_upg_stats(12, 'bb_upg');
		
		o.version = 9;
		console.log('New player version: ' + o.version)
		
	}
	if (10> o.version) {
		
		compensation(5, 'upg');
		clear_upg_storage(5, 'upg');
		clear_upg_stats(5, 'upg');
		
		o.version = 10;
		console.log('New player version: ' + o.version)
		
	}
	if (11> o.version) {
		
		compensation(12, 'bb_upg');
		clear_upg_storage(12, 'bb_upg');
		clear_upg_stats(12, 'bb_upg');
		
		o.version = 11;
		console.log('New player version: ' + o.version)
		
	}
	
}
update_version();

LOAD.load_progress();