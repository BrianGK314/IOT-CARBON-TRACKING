let humArr = [], tempArr = [], upArr = [];
let myChart = Highcharts.chart('container1', {
    
    title: {
        text: 'Line chart'
    },

    subtitle: {
        text: 'subtitle'
    },

    yAxis: {
        title: {
            text: 'Value'
        }
    },

    xAxis: {
        categories: upArr
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },
    series: [{
        name: 'CO2 Levels',
        data: []
    },  
    // {
    //     name: 'Temperature',
    //     data: []
    // }
],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});

let getWheatherData = function () {
    $.ajax({
        type: "GET",
        url: "https://sbucketiot.s3.ap-northeast-1.amazonaws.com/myNewKey",  //example: https://mydatabucket.s3.amazonaws.com/myKey"
        dataType: "json",
        async: false,
        success: function (data) {
            console.log('data', data);
            drawChart(data);
        },
        error: function (xhr, status, error) {
            console.error("JSON error: " + status);
        }
    });
}

let drawChart = function (data) {

    let { airquality, temperature, timestamp } = data;

    humArr.push(Number(airquality));
    //tempArr.push(Number(temperature));
    upArr.push(Number(timestamp));
    
    myChart.series[0].setData(humArr , true)
    //myChart.series[1].setData(tempArr , true)
}

let intervalTime = 3 * 1000; // 3 second interval polling, change as you like
setInterval(() => {
    getWheatherData();
}, intervalTime);