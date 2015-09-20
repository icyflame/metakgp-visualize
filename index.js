/* global google */
var request = require('browser-request');

var api_url = 'https://wiki.metakgp.org/api.php?action=query&list=allusers&auprop=editcount&aulimit=500&auwitheditsonly&audir=descending&origin=' + encodeURIComponent(window.location.origin) + '&format=json';

google.load('visualization', '1', {
  packages: ['corechart', 'bar']
});

google.setOnLoadCallback(requestData);

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

function drawBasic (dataset) {
  var data = google.visualization.arrayToDataTable(dataset);

  var options = {
    title: 'Contributions to the MetaKGP Wiki at ' + (new Date()).toTimeString(),
    width: window.innerWidth - 100, // 600,
    height: window.innerHeight - 100, // 600,
    chartArea: {
    },
    hAxis: {
      title: 'Editcount',
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

function requestData () {
  request({
    url: api_url,
    headers: {
    }
  }, function (err, response, dataString) {
    if (err) {
      console.error(err);
    }
    var dataKeyValues = parseApiResult(dataString);
    console.log('Key values!');
    console.log(dataKeyValues);
    console.log('Keys!');
    // console.log(dataKeys);

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

    data = data.slice(0, 50);

    console.log('Final data!');
    console.log(data);

    var dataset = data;
    dataset.reverse();
    dataset.push(['Users', 'Editcount']);
    dataset.reverse();

    drawBasic(dataset);
  });
}
