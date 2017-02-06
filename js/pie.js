google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Developers', 10],
          ['Designers', 10],
          ['Hybrids',  8],
          ['Others', 2],
        ]);

        var options = {
        width: 400,
        height: 400,
        legend: 'none',
        pieSliceText: 'label',
        pieSliceTextStyle: {color: 'white', fontName: 'Montserrat'},
        pieStartAngle: 90,
        backgroundColor: 'none',
        pieSliceBorderColor: 'none',
        colors: ['#00a0a6', '#009ea3', '#00868d', '#00c2ca'],
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }