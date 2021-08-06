const select = document.getElementById("country");

var requestOptionsForInfoAllCountries = {
    method: 'GET',
    redirect: 'follow'
};

var xValues = ["recovereds", "deaths", "confirmed"];
var barColors = [
	"rgb(252, 203, 171)",
	"rgb(202, 165, 140)",
	"rgb(150, 125, 109)",
];

const myChart = new Chart(document.getElementById("myChart"), {
	type: "pie",
	data: {
		labels: xValues,
		datasets: [
			{
				backgroundColor: barColors,
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

var myHeaders = new Headers();

myHeaders.append(
	"x-rapidapi-key",
	"8ce2c0aa26msh1bc7e28a0966945p1a0c1ejsnfe3b547760cf"
);
myHeaders.append("x-rapidapi-host", "covid-19-data.p.rapidapi.com");

var requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow",
};
async function getInfoForAllcountries(){
	
    const response = await fetch("https://api.covid19api.com/summary",requestOptionsForInfoAllCountries);
    var dataForAllCountries = await response.json();
          let InfoForAll = `<tr>
                    <th>Country</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    <th>Confirmed</th>
                </tr>`;
    console.log(dataForAllCountries ,'***********************************************',
    
    select.value)
    if (select.value === "All") {
		InfoForAll += `<tr>  
                    <td>All</td>     
                    <td>${dataForAllCountries.Global.TotalConfirmed}</td>
                    <td>${dataForAllCountries.Global.TotalRecovered}</td> 
                    <td>${dataForAllCountries.Global.TotalDeaths}</td>
                </tr>`;
    console.log(InfoForAll + "hiiiii");
    myChart.data.datasets[0].data = [dataForAllCountries.Global.TotalConfirmed, dataForAllCountries.Global.TotalRecovered, dataForAllCountries.Global.TotalDeaths]; 
	myChart.update();
	document.getElementById("cases").innerHTML = InfoForAll;
    } 
} 
async function getCountryInfo(url, requestOptions) {
	document.getElementById("loaderForShow").style.display = "block";
	document.getElementById("cases").style.display = "none";
	document.getElementById("diagramForShow").style.display = "none";
	const response = await fetch(url, requestOptions);
	document.getElementById("loaderForShow").style.display = "none";
	document.getElementById("cases").style.display = "inline-table";
	document.getElementById("diagramForShow").style.display = "block";

	var data = await response.json();
	console.log(data);

	show(data);
}

getCountryInfo(
	"https://covid-19-data.p.rapidapi.com/country?name=" + select.value,
	requestOptions
);

function show(data) {
	let tab = `<tr>
          <th>Country</th>
          <th>Recovered</th>
          <th>Deaths</th>
          <th>Confirmed</th>
         </tr>`;
	for (let r of data) {
		tab += `<tr>  
                <td>${r.country}</td>
                <td>${r.recovered}</td> 
                <td>${r.deaths}</td>
                <td>${r.confirmed}</td>     
            </tr>`;
	}
	console.log(select.value);
	if (select.value === "All") {
        getInfoForAllcountries();
		myChart.update();
	}
	console.log(data[0].confirmed, data[0].recovered, data[0].deaths);
	document.getElementById("cases").innerHTML = tab;

	myChart.data.datasets[0].data = [
		data[0].recovered,
		data[0].deaths,
		data[0].confirmed,
	];
	myChart.update();
}

select.onchange = function () {
	getCountryInfo(
		"https://covid-19-data.p.rapidapi.com/country?name=" + select.value,
		requestOptions
	);
};

async function getCountries(url, requestOptions) {
	const response = await fetch(url, requestOptions);

	var data = await response.json();
	let listOfCountries = "";
	listOfCountries +=
		'<option  id="countryNames" value="All">' + "All" + "</option>";
	for (let b of data) {
		listOfCountries += `<option value="${b.Slug}">${b.Country}</option>`;
	}
	console.log(data);
	select.innerHTML = listOfCountries;
}

getCountries("https://api.covid19api.com/countries", {
	method: "GET",
	redirect: "follow",
});
getInfoForAllcountries();
