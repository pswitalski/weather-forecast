export const getLineChartConfig = (title, yLabel) => {
    const chartOptions = {
        title: {
            display: true,
            text: title
        },
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 5,
                hoverRadius: 7
            }
        },
        layout: {
            padding: 10
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: yLabel
                }
            }]
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: '#333'
            }
        }
    }

    return chartOptions;
}