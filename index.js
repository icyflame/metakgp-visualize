/* global google */
var dataString50 =
'{"query-continue":{"allusers":{"aufrom":"Amrav"}},"query":{"allusers":[{"userid":"101","name":"Zola","editcount":1},{"userid":"6","name":"Xtinct","editcount":325},{"userid":"13","name":"Whiplash","editcount":13},{"userid":"35","name":"VictoreroTillettxULT","editcount":1},{"userid":"119","name":"Ujjwal","editcount":8},{"userid":"52","name":"Tusharsingh","editcount":3},{"userid":"72","name":"Theslavemaster","editcount":3},{"userid":"78","name":"Thesidjway","editcount":3},{"userid":"64","name":"The professor","editcount":1},{"userid":"123","name":"TeganDrago08905","editcount":1},{"userid":"46","name":"Subhajoy","editcount":1},{"userid":"9","name":"Shushman","editcount":3},{"userid":"115","name":"Shashank11me","editcount":2},{"userid":"128","name":"Sandeep","editcount":7},{"userid":"33","name":"Rishicomplex","editcount":3},{"userid":"10","name":"Ppsreejith","editcount":6},{"userid":"83","name":"Orkohunter","editcount":90},{"userid":"11","name":"OmleY","editcount":8},{"userid":"50","name":"OjasTayal","editcount":1},{"userid":"2","name":"Nuwanda","editcount":107},{"userid":"77","name":"Nishitshah.2211","editcount":1},{"userid":"59","name":"Nikesharyan","editcount":2},{"userid":"94","name":"Naitik","editcount":1},{"userid":"73","name":"Mulayam","editcount":1},{"userid":"21","name":"Mohitbhura","editcount":1},{"userid":"69","name":"Mitpal","editcount":5},{"userid":"75","name":"Mankeyboy","editcount":1},{"userid":"47","name":"MaisieHaddad146","editcount":2},{"userid":"121","name":"Lalit Khemlani","editcount":1},{"userid":"51","name":"Kumarkrishna","editcount":3},{"userid":"31","name":"KuZon","editcount":8},{"userid":"45","name":"KristopherSpeigh","editcount":2},{"userid":"106","name":"Kjwhatdidyouthink","editcount":1},{"userid":"111","name":"Keerthanpg","editcount":1},{"userid":"62","name":"Icyflame","editcount":34},{"userid":"5","name":"Hargup","editcount":219},{"userid":"76","name":"Genuine","editcount":1},{"userid":"108","name":"Flameboi","editcount":1},{"userid":"91","name":"F1uk3r","editcount":8},{"userid":"129","name":"Diegocosta","editcount":5},{"userid":"70","name":"Dementor","editcount":64},{"userid":"113","name":"Deep628","editcount":1},{"userid":"102","name":"Cic","editcount":1},{"userid":"79","name":"Chanuchess","editcount":1},{"userid":"125","name":"BrendaWhitton28","editcount":1},{"userid":"126","name":"Batman","editcount":4},{"userid":"39","name":"Ayushimrigen","editcount":2},{"userid":"48","name":"Ardentsatish","editcount":1},{"userid":"97","name":"Ankesh","editcount":2},{"userid":"109","name":"Anhgamat","editcount":2}]}}';
var dataString =
'{"query":{"allusers":[{"userid":"101","name":"Zola","editcount":1},{"userid":"6","name":"Xtinct","editcount":328},{"userid":"13","name":"Whiplash","editcount":13},{"userid":"35","name":"VictoreroTillettxULT","editcount":1},{"userid":"119","name":"Ujjwal","editcount":8},{"userid":"52","name":"Tusharsingh","editcount":3},{"userid":"72","name":"Theslavemaster","editcount":3},{"userid":"78","name":"Thesidjway","editcount":3},{"userid":"64","name":"The professor","editcount":1},{"userid":"123","name":"TeganDrago08905","editcount":1},{"userid":"46","name":"Subhajoy","editcount":1},{"userid":"9","name":"Shushman","editcount":3},{"userid":"115","name":"Shashank11me","editcount":2},{"userid":"128","name":"Sandeep","editcount":7},{"userid":"33","name":"Rishicomplex","editcount":3},{"userid":"10","name":"Ppsreejith","editcount":6},{"userid":"83","name":"Orkohunter","editcount":103},{"userid":"11","name":"OmleY","editcount":8},{"userid":"50","name":"OjasTayal","editcount":1},{"userid":"2","name":"Nuwanda","editcount":107},{"userid":"77","name":"Nishitshah.2211","editcount":1},{"userid":"59","name":"Nikesharyan","editcount":2},{"userid":"94","name":"Naitik","editcount":1},{"userid":"73","name":"Mulayam","editcount":1},{"userid":"21","name":"Mohitbhura","editcount":1},{"userid":"69","name":"Mitpal","editcount":5},{"userid":"75","name":"Mankeyboy","editcount":1},{"userid":"47","name":"MaisieHaddad146","editcount":2},{"userid":"121","name":"Lalit Khemlani","editcount":1},{"userid":"51","name":"Kumarkrishna","editcount":3},{"userid":"31","name":"KuZon","editcount":8},{"userid":"45","name":"KristopherSpeigh","editcount":2},{"userid":"106","name":"Kjwhatdidyouthink","editcount":1},{"userid":"111","name":"Keerthanpg","editcount":1},{"userid":"62","name":"Icyflame","editcount":34},{"userid":"5","name":"Hargup","editcount":221},{"userid":"76","name":"Genuine","editcount":1},{"userid":"108","name":"Flameboi","editcount":1},{"userid":"91","name":"F1uk3r","editcount":8},{"userid":"129","name":"Diegocosta","editcount":8},{"userid":"70","name":"Dementor","editcount":65},{"userid":"113","name":"Deep628","editcount":1},{"userid":"102","name":"Cic","editcount":1},{"userid":"79","name":"Chanuchess","editcount":1},{"userid":"125","name":"BrendaWhitton28","editcount":1},{"userid":"126","name":"Batman","editcount":4},{"userid":"39","name":"Ayushimrigen","editcount":2},{"userid":"48","name":"Ardentsatish","editcount":1},{"userid":"97","name":"Ankesh","editcount":2},{"userid":"109","name":"Anhgamat","editcount":2},{"userid":"1","name":"Amrav","editcount":385},{"userid":"116","name":"AbhishekP","editcount":3},{"userid":"84","name":"Abhishek ranjan","editcount":16},{"userid":"8","name":"Abhishek","editcount":15},{"userid":"12","name":"Abhinavjain","editcount":12},{"userid":"40","name":"Ab","editcount":1},{"userid":"63","name":"ADMIN","editcount":11},{"userid":"122","name":"A S Duddu","editcount":1}]}}';


var dataKeyValues = parseApiResult(dataString);
console.log('Key values!');
console.log(dataKeyValues);
console.log('Keys!');
// console.log(dataKeys);

function parseApiResult (body) {
  var allUsers = JSON.parse(body).query.allusers;
  var dataKeyValues = {};
  for (var i = 0; i < allUsers.length; i++) {
    var name = allUsers[i].name;
    var editcount = allUsers[i].editcount;
    if (!dataKeyValues.hasOwnProperty(editcount)) {
      dataKeyValues[editcount] = [];
    }
    dataKeyValues[editcount].push(name);
  }
  return dataKeyValues;
}

function sortIntegers (a, b) {
  return (a - b);
}

var dataKeys = Object.keys(dataKeyValues);
for (var i = 0; i < dataKeys.length; i++) {
  dataKeys[i] = parseInt(dataKeys[i], 10);
}
dataKeys.sort(sortIntegers);
dataKeys.reverse();
console.log(dataKeys);
var data = [];

for (i = 0; i < dataKeys.length; i++) {
  var count = dataKeys[i];
  var names = dataKeyValues[dataKeys[i]].sort().join('; ');
  data.push([names, count]);
}

console.log(data);

data = data.slice(0, 50);

var dataset = data;
dataset.reverse();
dataset.push(['User', 'Contributions']);
dataset.reverse();

google.load('visualization', '1', {
  packages: ['corechart', 'bar']
});
google.setOnLoadCallback(drawBasic);


function drawBasic () {
  var data = google.visualization.arrayToDataTable(dataset);

  var options = {
    title: 'Contributions to the MetaKGP Wiki',
    width: window.innerWidth - 100, // 600,
    height: window.innerHeight - 100, // 600,
    chartArea: {
    },
    hAxis: {
      title: 'Number of contributions',
      minValue: 0
    },
    vAxis: {
      title: 'Users'
    }
  };

  var chart = new google.visualization.BarChart(document.getElementById(
    'chart_div'));

  chart.draw(data, options);
}
