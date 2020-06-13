Highcharts.chart('contain', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Doanh thu trong tháng trước '
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '10', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
    },
    yAxis: {
        title: {
            text: 'Doanh thu (tr)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6, 7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6, 7.0, 6.9, 9.5, 14.5, 18.4, 5.6]
    }]
});