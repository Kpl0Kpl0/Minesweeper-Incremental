
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
				comp = 1;
			
			for (i = 0; i < lvl; i++) {
				
				if (grow_type == "c*") {comp *= grow}
				else if (grow_type == "c**") {comp **= grow}
				else if (grow_type == "l*") {comp = starter_cost * grow * (lvl+1)}
				else if (grow_type == "l**") {comp = starter_cost * grow ** (lvl+1)}
				
			}
			
			STATS.plr.main[cur_type] = Number(localStorage.getItem('shards')) + (comp - 1);
			localStorage.setItem('shards', STATS.plr.main[cur_type])
			
			console.log("Compensation: " + (comp - 1) + " " + cur_type);
			
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
	
	LOAD.load_progress();
	
}
update_version();