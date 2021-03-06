export const getLineChartConfig = (title, yLabel, xLabel) => {
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
                    display: (yLabel ? true : false),
                    labelString: yLabel
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: (xLabel ? true : false),
                    labelString: xLabel
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

export const getBarChartConfig = (title, yLabel, xLabel, minValue, maxValue) => {
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
                    display: (yLabel ? true : false),
                    labelString: yLabel
                },
                ticks: {
                    suggestedMin: (minValue ? minValue - 1 : ''),
                    suggestedMax: (maxValue ? maxValue : '')
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: (xLabel ? true : false),
                    labelString: xLabel
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