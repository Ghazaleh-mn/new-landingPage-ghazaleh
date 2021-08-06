var xValues = ["cases", "recovereds", "deaths"];
var yValues = [55, 49, 44];
var barColors = [
	"rgb(252, 203, 171)",
	"rgb(202, 165, 140)",
	"rgb(150, 125, 109)",
];

const myChart = new Chart("myChart", {
	type: "pie",
	data: {
		labels: xValues,
		datasets: [
			{
				backgroundColor: barColors,
				data: yValues,
			},
		],
	},
	options: {
		title: {
			display: true,
			text: "Information about corona virus",
		},
	},
});

myChart.data.datasets[0].data = [55, 33, 66];
myChart.update();
