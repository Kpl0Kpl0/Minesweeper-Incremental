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
			boost: 1,
			version: 1,
			best_coins: 0
		}
	},
	upgs: {
		upg: [
			/* coins_1 */{
				lvl: 0, 
				eff: [1, 2, "c*", 1], 
				cost: [1, 4, "c*", 1, "coins"], 
				max: [50, 50], 
				resettable: 1,
				visible: 1,
				code: "upg2.style.display = 'block';",
				desc: "double coin gain",
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
				resettable: 1,
				visible: 1,
				code: "upg3.style.display = 'block';",
				desc: "reduces the number of mines on the field", 
				clr: ["D2D280", "93935A", "8C8C4B", "626234"]
			},
			/* coins_3 */{
				lvl: 0, 
				eff: [1, 10, "l*", 1], 
				cost: [500, 100, "c*", 500, "coins"], 
				max: [10, 10],
				resettable: 1,
				visible: 1,
				code: "upg4.style.display = 'block';",
				desc: "coin gain is multiplied by 10", 
				clr: ["D2D280", "93935A", "8C8C4B", "626234"]
			},
			/* coins_4 */{
				lvl: 0, 
				eff: [0, 1, "c+", 0], 
				cost: [10000, 10, "c*", 10000, "coins"], 
				max: [25, 25],
				resettable: 1,
				visible: 1,
				code:  "upg5.style.display = 'block';",
				desc: "when you open a mine adds X% of the coins you were supposed to get (X - level)", 
				clr: ["D2D280", "93935A", "8C8C4B", "626234"]
			},
			/* coins_5 */{
				lvl: 0, 
				eff: [1, 1, "c+", 1], 
				cost: [5*10**5, 1000, "c*", 5*10**5, "coins"], 
				max: [5, 5],
				resettable: 1,
				visible: 1,
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
				max:[1000, 1000],
				resettable: 1,
				visible: 1,
				code: "upg7.style.display = 'block'",
				desc: "coin gain is multiplied by 100", 
				clr: ["D29880", "936A5A", "A05D4B", "704134"]
			},
			/* rage_2 */{
				lvl: 0, 
				eff: [1, 0, "c+", 1], 
				cost: [20, 2, "c*", 20, "rage"], 
				max: [1, 1],
				resettable: 1,
				visible: 1,
				code: "upg8.style.display = 'block'",
				desc: "double rage gain for each level of the second coin upgrade", 
				clr: ["D29880", "936A5A", "A05D4B", "704134"]
			},
			/* rage_3 */{
				lvl: 0,
				eff: [0, 10, "c+", 0],
				cost: [500, 10, "c*", 500, "rage"],
				max: [5, 5],
				resettable: 1,
				visible: 1,
				code: "upg9.style.display = 'block';" +
					"STATS.upgs['upg'][0].max[0] += STATS.upgs['upg'][7].eff[1]",
				desc: "increases limit of the first coin upgrade by 10",
				clr: ["D29880", "936A5A", "A05D4B", "704134"]
			},
			/* rage_4 */{
				lvl: 0,
				eff: [0, 1, "l+", 0],
				cost: [1000, 10, "c*", 1000, "rage"],
				max: [5, 5],
				resettable: 1,
				visible: 1,
				code: "upg10.style.display = 'block'",
				desc: "increases coin gain for each open cell (restart resets the bonus)", 
				clr: ["D29880", "936A5A", "A05D4B", "704134"]
			},
			/* rage_5 */{
				lvl: 0, 
				eff: [1, 1, "l+", 1], 
				cost: [3500, 2, "c*", 3500, "rage"], 
				max: [1, 1],
				resettable: 1,
				visible: 1,
				code: "bt_big_bang.style.display = 'block'",
				desc: "rage gain is boosted by OoMs of coins (OoM - Order of Magnitude)", 
				clr: ["D29880", "936A5A", "A05D4B", "704134"]
			}
		],
		bb_upg: [
			/* pc1 */{
				lvl: 0, 
				eff: [1, 5, "l*", 1], 
				cost: [1, 2, "c*", 1, "shards"], 
				max: [10, 10], 
				resettable: 1,
				visible: 1,
				code: "",
				name: ["pc1", "Power Coins 1"], 
				desc: "coin gain is multiplied by 5", 
				type: "power", 
				cords: [2, 22]
			},
			/* pr1 */{
				lvl: 0, 
				eff: [1, 3, "l*", 1], 
				cost: [1, 2, "c*", 1, "shards"], 
				max: [10, 10], 
				resettable: 1,
				visible: 1,
				code: "",
				name: ["pr1", "Power Rage 1"],
				desc: "rage gain is multiplied by 3", 
				type: "power", 
				cords: [2, 28]
			},
			/* ps1 */{
				lvl: 0, 
				eff: [1, 2, "l*", 1], 
				cost: [2, 2, "c*", 2, "shards"], 
				max: [10, 10], 
				resettable: 1,
				visible: 1,
				code: "STATS.upgs['bb_upg'][3].visible = 1;" +
					"STATS.upgs['bb_upg'][4].visible = 1;" +
					"STATS.upgs['bb_upg'][5].visible = 1",
				name: ["ps1", "Power Shards 1"],
				desc: "shards gain is multiplied by 2, unlock more upgrades",
				type: "power", 
				cords: [2, 34]
			},
			/* pc2 */{
				lvl: 0, 
				eff: [1, 3, "c*", 1], 
				cost: [10, 2, "c*", 10, "shards"], 
				max: [1, 1], 
				resettable: 1,
				visible: 0,
				code: "",
				name: ["pc2", "Power Coins 2"], 
				desc: "triple coin gain", 
				type: "power", 
				cords: [8, 22]
			},
			/* pr2 */{
				lvl: 0, 
				eff: [1, 3, "c*", 1], 
				cost: [10, 2, "c*", 10, "shards"], 
				max: [1, 1], 
				resettable: 1,
				visible: 0,
				code: "",
				name: ["pr2", "Power Rage 2"], 
				desc: "triple rage gain", 
				type: "power", 
				cords: [8, 28]
			},
			/* ps2 */{
				lvl: 0, 
				eff: [1, 3, "c*", 1], 
				cost: [15, 2, "c*", 15, "shards"], 
				max: [1, 1], 
				resettable: 1,
				visible: 0,
				code: "",
				name: ["ps2", "Power Shards 2"], 
				desc: "triple shards gain", 
				type: "power", 
				cords: [8, 34]
			},
			/* cg1 */{
				lvl: 0,
				eff: [0, 1, "l*", 0], 
				cost: [5, 1, "c*", 5, "shards"], 
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "STATS.upgs['upg'][6].resettable = 0;" +
					"STATS.upgs['bb_upg'][8].visible = 1;" +
					"STATS.upgs['bb_upg'][18].visible = 1;",
				name: ["cg1", "Comfort Gameplay 1"], 
				desc: "Big Bang doesn't reset the second rage upgrade, unlock new upgrade",
				type: "comfort", 
				cords: [2, 22]
			},
			/* cc1 */{
				lvl: 0,
				eff: [0, 1, "l*", 0], 
				cost: [1, 10, "c*", 1, "shards"], 
				max: [3, 3], 
				resettable: 1,
				visible: 1,
				code: "STATS.upgs['bb_upg'][6].visible = 1;" +
					"STATS.upgs['bb_upg'][10].visible = 1;" +
					"STATS.upgs['bb_upg'][12].visible = 1;" +
					"STATS.upgs['bb_upg'][21].visible = 1;" +
					"STATS.upgs['bb_upg'][22].visible = 1;" +
					"STATS.upgs['bb_upg'][23].visible = 1",
				name: ["cc1", "Comfort Cost 1"], 
				desc: "reduces Big Bang requirements by 10, unlock more upgrades and automation",
				type: "comfort", 
				cords: [2, 28]
			},
			/* cg2 */{
				lvl: 0,
				eff: [0, 1, "l*", 0], 
				cost: [35, 1, "c*", 35, "shards"], 
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "STATS.upgs['upg'][9].resettable = 0;" +
					"STATS.upgs['bb_upg'][9].visible = 1;",
				name: ["cg2", "Comfort Gameplay 2"],
				desc: "Big Bang doesn't reset the fifth rage upgrade, unlock new upgrade",
				type: "comfort",
				cords: [8, 22]
			},
			/* cg3 */{
				lvl: 0,
				eff: [0, 1, "l*", 0], 
				cost: [80, 1, "c*", 80, "shards"], 
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "STATS.upgs['upg'][3].resettable = 0;",
				name: ["cg3", "Comfort Gameplay 3"], 
				desc: "Big Bang doesn't reset the fourth coin upgrade",
				type: "comfort", 
				cords: [14, 22]
			},
			/* cl1 */{
				lvl: 0,
				eff: [0, 1, "l*", 0], 
				cost: [10, 1, "c*", 10, "shards"], 
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "STATS.upgs['upg'][2].max[0] += 10;" +
					"STATS.upgs['upg'][2].max[1] += 10;" +
					"STATS.upgs['bb_upg'][11].visible = 1;" +
					"STATS.upgs['bb_upg'][13].visible = 1",
				name: ["cl1", "Comfort Level 1"],
				desc: "increases limit of the third coin upgrade by 10",
				type: "comfort", 
				cords: [2, 34]
			},
			/* cr1 */{
				lvl: 0,
				eff: [0, 1, "c*", 0], 
				cost: [9, 1, "c*", 9, "shards"], 
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "STATS.upgs['bb_upg'][14].visible = 1",
				name: ["cr1", "Comfort Rules 1"], 
				desc: "you can get rage after the Big Bang",
				type: "comfort", 
				cords: [2, 40]
			},
			/* cc2 */{
				lvl: 0,
				eff: [0, 1, "c*", 0], 
				cost: [20, 2, "l**", 20, "shards"], 
				max: [3, 3],
				resettable: 1,
				visible: 0,
				code: "STATS.upgs['upg'][5].cost[0] *= 0.2;" +
					"STATS.upgs['upg'][5].cost[3] *= 0.2;" +
					"STATS.upgs['bb_upg'][15].visible = 1;",
				name: ["cc2", "Comfort Cost 2"], 
				desc: "first rage upgrade are 80% cheaper",
				type: "comfort", 
				cords: [8, 28]
			},
			/* cl2 */{
				lvl: 0,
				eff: [0, 1, "l*", 0], 
				cost: [25, 1, "c*", 25, "shards"], 
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "STATS.upgs['upg'][3].max[0]+=25;" +
					"STATS.upgs['bb_upg'][16].visible = 1;",
				name: ["cl2", "Comfort Level 2"], 
				desc: "increases limit of the fourth coin upgrade by 25, unlock more upgrades",
				type: "comfort", 
				cords: [8, 34]
			},
			/* cr2 */{
				lvl: 0,
				eff: [0, 1, "c*", 0], 
				cost: [99, 1, "c*", 99, "shards"], 
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "STATS.upgs['bb_upg'][17].visible = 1;",
				name: ["cr2", "Comfort Rules 2"], 
				desc: "getting shards depends on the number of all coins earned since the last Big Bang",
				type: "comfort", 
				cords: [8, 40]
			},
			/* cc3 */{
				lvl: 0,
				eff: [1, 0.9, "c*", 1], 
				cost: [150, 1, "c*", 150, "shards"], 
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "",
				name: ["cc3", "Comfort Cost 3"], 
				desc: "all coin and rage upgrades are 10% cheaper",
				type: "comfort", 
				cords: [14, 28]
			},
			/* cl3 */{
				lvl: 0,
				eff: [0, 1, "l*", 0], 
				cost: [75, 1, "c*", 75, "shards"], 
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "STATS.upgs['upg'][8].max[0]+=5;",
				name: ["cl3", "Comfort Level 3"], 
				desc: "increases limit of the fourth rage upgrade by 5, unlock more upgrades",
				type: "comfort", 
				cords: [14, 34]
			},
			/* cr3 */{
				lvl: 0,
				eff: [0, 1, "c*", 0], 
				cost: [999, 1, "c*", 999, "shards"], 
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "",
				name: ["cr3", "Comfort Rules 3"], 
				desc: "does not discard coins when losing",
				type: "comfort", 
				cords: [14, 40]
			},
			/* ce1 */{
				lvl: 0,
				eff: [1, 1, "c+", 1], 
				cost: [10, 2, "l*", 10, "shards"], 
				max: [4, 4],
				resettable: 1,
				visible: 0,
				code: "STATS.upgs['upg'][2].desc = 'coin gain is multiplied by ' + (10*STATS.upgs['bb_upg'][18].eff[0]);" +
					"STATS.upgs['bb_upg'][19].visible = 1;",
				name: ["ce1", "Comfort Efficiency 1"], 
				desc: "increases efficiency of the third coin upgrade by 10",
				type: "comfort", 
				cords: [2, 16]
			},
			/* ce2 */{
				lvl: 0,
				eff: [0, 5, "c+", 0], 
				cost: [40, 2, "l*", 40, "shards"], 
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "STATS.upgs['upg'][0].max[0] += (5*STATS.upgs['upg'][7].lvl);" +
					"STATS.upgs['upg'][7].eff[1] += 5;" +
					"STATS.upgs['upg'][7].desc = 'increases limit of the first coin upgrade by 15';" +
					"STATS.upgs['bb_upg'][20].visible = 1;",
				name: ["ce2", "Comfort Efficiency 2"], 
				desc: "increases efficiency of the third rage upgrade to 15",
				type: "comfort",
				cords: [8, 16]
			},
			/* ce3 */{
				lvl: 0,
				eff: [1, 0.1, "c+", 1],
				cost: [160, 2, "l*", 160, "shards"],
				max: [1, 1],
				resettable: 1,
				visible: 0,
				code: "",
				name: ["ce3", "Comfort Efficiency 3"],
				desc: "increases efficiency of the fifth rage upgrade by 10%",
				type: "comfort",
				cords: [14, 16]
			},
			/* ac1 */{
				lvl: 0,
				eff: [0, 0.01, "c+", 0],
				cost: [1, 2, "c*", 1, "shards"],
				max: [10, 10],
				resettable: 1,
				visible: 0,
				code: "",
				name: ["ac1", "Automation Coins 1"], 
				desc: "gives X% of the coins per second of the coins you should get (X - level)",
				type: "automation",
				cords: [2, 22]
			},
			/* ar1 */{
				lvl: 0,
				eff: [0, 0.01, "c+", 0],
				cost: [1, 2, "c*", 1, "shards"],
				max: [10, 10],
				resettable: 1,
				visible: 0,
				code: "",
				name: ["ar1", "Automation Rage 1"],
				desc: "gives X% rage per second of the rage you should get (only works after losing, X - level)",
				type: "automation",
				cords: [2, 28]
			},
			/* as1 */{
				lvl: 0,
				eff: [0, 0.01, "c+", 0],
				cost: [10, 2, "c*", 10, "shards"],
				max: [10, 10],
				resettable: 1,
				visible: 0,
				code: "",
				name: ["as1", "Automation Shards 1"],
				desc: "gives X% of the shards per minute of the shards you should get (X - level)",
				type: "automation",
				cords: [2, 34]
			}
		]
	},
	reb: {
		bb: {
			cost: 5,
			coef: 34,
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