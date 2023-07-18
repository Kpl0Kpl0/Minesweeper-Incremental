var STATS = {
	counts: {
		tile() {
			// Кол-во тайлов в ширину и длину (xy), общее кол-во тайлов
			let xy = 5, total = 25;
			return [xy, total];
		},
		mine() {
			// Кол-во мин
			let x = 10 - STATS.upgs["upg"][1].lvl;
			return x;
		}
	},
	plr: {
		main: {
			coins:0,
			rage:0,
			shards:0
		},
		other: {
			progress: 0,
			score: 0,
			lose: 0,
			bb_screen: 'power',
			bb_upg: 0,
			boost: 1
		}
	},
	upgs: {
		upg: [
			/* coins_1 */{
				lvl: 0, 
				eff: [1, 2, "c*", 1], 
				cost: [1, 4, "c*", 1, "coins"], 
				max: [50, 50], 
				code: "upg2.style.display = 'block';",
				desc: "coin gain is multiplied by 2",
				clr: ["D2D280", "93935A", "8C8C4B", "626234"]
				// Пояснение: 1-ый - светлый для задника, 2-ой - темный для задника
				// 3-ий - светлый для букв и краёв, 4-ый - темный для букв и краёв
				// Цвет изменяется в зависимости от того, хватает денег или нет.
				// Темный цвет делишь на 100 и умножаешь на 70
			},
			/* coins_2 */{
				lvl: 0, 
				eff: [1, 2, "c*", 1], 
				cost: [100, 1000, "c*", 100, "coins"], 
				max: [9, 9], 
				code: "upg3.style.display = 'block';",
				desc: "reduces the number of mines on the field", 
				clr: ["D2D280", "93935A", "8C8C4B", "626234"]
			},
			/* coins_3 */{
				lvl: 0, 
				eff: [1, 10, "l*", 1], 
				cost: [1000, 100, "c*", 1000, "coins"], 
				max: [10, 10], 
				code: "upg4.style.display = 'block';",
				desc: "coin gain is multiplied by 10", 
				clr: ["D2D280", "93935A", "8C8C4B", "626234"]
			},
			/* coins_4 */{
				lvl: 0, 
				eff: [0, 1, "c+", 0], 
				cost: [10000, 10, "c*", 10000, "coins"], 
				max: [25, 25], 
				code:  "upg5.style.display = 'block';",
				desc: "when you open a mine adds X% of the coins you were supposed to get (X - level)", 
				clr: ["D2D280", "93935A", "8C8C4B", "626234"]
			},
			/* coins_5 */{
				lvl: 0, 
				eff: [1, 1, "c+", 1], 
				cost: [1*10**6, 1000, "c*", 1*10**6, "coins"], 
				max: [5, 5], 
				code:  "upg6.style.display = 'block';" +
					"info_rage.style.display = 'block';" +
					"STATS.upgs['upg'][0].cost[0] *= 0.01;",
				desc: "first coin upgrade are 99% cheaper, unlock rage", 
				clr: ["D2D280", "93935A", "8C8C4B", "626234"]
			},
			/* rage_1 */{
				lvl: 0, 
				eff: [1, 100, "l*", 1], 
				cost: [10, 2, "c*", 10, "rage"], 
				max:[0, 0],
				code: "upg7.style.display = 'block'",
				desc: "coin gain is multiplied by 100", 
				clr: ["D29880", "936A5A", "A05D4B", "704134"]
			},
			/* rage_2 */{
				lvl: 0, 
				eff: [1, 0, "c+", 1], 
				cost: [25, 2, "c*", 25, "rage"], 
				max: [1, 1],
				code: "upg8.style.display = 'block'",
				desc: "rage gain is multiplied by 2 for each level of the second coin upgrade", 
				clr: ["D29880", "936A5A", "A05D4B", "704134"]
			},
			/* rage_3 */{
				lvl: 0, 
				eff: [1, 0, "c+", 1], 
				cost: [500, 10, "c*", 500, "rage"], 
				max: [5, 5],
				code: "upg9.style.display = 'block';" +
					"STATS.upgs['upg'][0].max[0]+=10",
				desc: "increases limit of the first coin upgrade by 10", 
				clr: ["D29880", "936A5A", "A05D4B", "704134"]
			},
			/* rage_4 */{
				lvl: 0, 
				eff: [0, 1, "l+", 0], 
				cost: [2000, 10, "c*", 2000, "rage"], 
				max: [10, 10],
				code: "upg10.style.display = 'block'",
				desc: "increases coin gain for each open cell (restart resets the bonus)", 
				clr: ["D29880", "936A5A", "A05D4B", "704134"]
			},
			/* rage_5 */{
				lvl: 0, 
				eff: [1, 1, "l+", 1], 
				cost: [5000, 2, "c*", 5000, "rage"], 
				max: [1, 1],
				code: "bt_big_bang.style.display = 'block'",
				desc: "rage gain is boosted by OoMs of coins (OoM - Order of Magnitude)", 
				clr: ["D29880", "936A5A", "A05D4B", "704134"]
			}
		],
		bb_upg: [
			/* pc1 */{
				lvl: 0, 
				eff: [1, 3, "c*", 1], 
				cost: [1, 2, "c*", 1, "shards"], 
				max: [10, 10], 
				code: "",
				name: ["pc1", "Power Coins 1"], 
				desc: "coin gain is multiplied by 3", 
				type: "power", 
				cords: [2, 22]
			},
			/* pr1 */{
				lvl: 0, 
				eff: [1, 2, "c*", 1], 
				cost: [1, 2, "c*", 1, "shards"], 
				max: [10, 10], 
				code: "",
				name: ["pr1", "Power Rage 1"], 
				desc: "rage gain is multiplied by 2", 
				type: "power", 
				cords: [2, 28]
			},
			/* ps1 */{
				lvl: 0, 
				eff: [1, 2, "c*", 1], 
				cost: [3, 2, "c*", 3, "shards"], 
				max: [10, 10], 
				code: "",
				name: ["ps1", "Power Shards 1"], 
				desc: "shards gain is multiplied by 2", 
				type: "power", 
				cords: [2, 34]
			}
		]
	},
	reb: {
		bb: {
			cost: 5,
			coef: 35,
			cur: "coins",
			count: 0
		}
	}
};

var tile_style = {
	class_name: "tile",
	id: "tile" ,
	onclick_name: "MATH.field.open_tile",
	width: 6,
	height: 6,
	top: 6,
	left: 6,
	position: "absolute",
	
	bckgrnd_clr: "#C0C0C0",
	bckgrnd_clr_mine: "#FF0000",
	bckgrnd_clr_mine2: "#DEC0C0",
	bckgrnd_clr_safe: "#00FF00",
	bckgrnd_clr_safe2: "#C0DEC0",
	
	border: "2px solid #FFFFFF"
};

// 0 - empty, 1 - mine
var map = [
	0, 0, 0, 0, 0,
	0, 0, 0, 0, 0,
	0, 0, 0, 0, 0,
	0, 0, 0, 0, 0,
	0, 0, 0, 0, 0
];