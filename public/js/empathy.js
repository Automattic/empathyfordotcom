(function(){
	// -------------------------------------------
	// DATA
	// -------------------------------------------
	var data = [
		{
			type: 'budget',
			arr: ['$0','$5/mo','$10/mo','$50/mo'],
			weight: [0.2,0.3,0.3,0.2]
		},
		{
			type: 'connection',
			arr: ['Regular','Fast 3G','Slow 3G'],
			weight: [0.6,0.2,0.2]
		},
		{
			type: 'device',
			arr: ['desktop','mobile','tablet'],
			weight: [0.6,0.3,0.1]
		},
		{
			type: 'site',
			arr: ['Blog','Small Business Website','eCommerce','Portfolio'],
			weight: [0.2,0.5,0.2,0.1]
		},
		{
			type: 'time',
			arr: ['10 Minutes', '15 Minutes', '30 Minutes'],
			weight: [0.33, 0.33, 0.33]
		},
		{
			type: 'vertical',
			arr: ['Health and Fitness','Art and Entertainment','Consulting','Food and Drink','Fashion','Travel','Education','Real Estate','Home and Garden','Service Provider'],
			weight: [0.2,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1]
		}
	];
	// -------------------------------------------
	// USE-CASE GENERATOR
	// -------------------------------------------
	for (var i = 0; i < data.length; i++) { 
		var id = data[i].type;
		var arr = data[i].arr;
		var weight = data[i].weight;
		$(id).innerHTML = weighted(arr, weight);
	}
	// -------------------------------------------
	// UTILITY FUNCTIONS
	// -------------------------------------------
	function $(id) { return document.getElementById(id); }
	function rand (min, max) { return Math.random() * (max - min) + min; };
	function weighted(arr, weight) { var total_weight = weight.reduce(function (prev, cur, i, arr) { return prev + cur; }); var random_num = rand(0, total_weight); var weight_sum = 0; for (var i = 0; i < arr.length; i++) { weight_sum += weight[i]; weight_sum = +weight_sum.toFixed(2); if (random_num <= weight_sum) { return arr[i]; } } };
})();