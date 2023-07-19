
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
	
	if (2 > o.version) {
		
		clear_upg_storage(8, 'upg');
		clear_upg_stats(8, 'upg');
		
		o.version = 2;
		console.log('New player version: ' + o.version)
		
	}
	
	LOAD.load_progress();
	
}
update_version();