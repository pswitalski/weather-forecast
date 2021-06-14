import {
    dayOfTheWeek,
    dayAndMonth
} from './dateConverter';

export const dailyTempData = (data) => {
    console.log(data);
    const days = [];
    const temps = [];
    const min = [];
    const max = [];
    const feels = [];
    // const pressure = [];
    // const windSpeed = [];
    // const cloudiness = [];
    // const rain = [];
    // const precipitation = [];
    // const humidity = [];


    data.forEach(day => {
        temps.push(day.temp.day);
        min.push(day.temp.min);
        max.push(day.temp.max);
        feels.push(day.feels_like.day);

        // console.log(day.weather[0].icon)

        const unixTime = day.dt;
        const date = new Date(unixTime * 1000);
        const d = dayOfTheWeek(date);
        const dd = dayAndMonth(date)
        days.push(`${d}, ${dd}`)
    })


    const chartData = {
        labels: days,
        datasets: [{
                label: 'Day Temp.',
                data: temps,
                fill: false,
                backgroundColor: 'orange',
                borderColor: 'orange',
                // pointRadius: 5,
                // pointHoverRadius: 7
            },
            {
                label: 'Apparent Temp.',
                data: feels,
                fill: false,
                backgroundColor: 'green',
                borderColor: 'green',
                // pointRadius: 5,
                // pointHoverRadius: 7
            },
            {
                label: 'Min',
                data: min,
                fill: false,
                backgroundColor: 'cyan',
                borderColor: 'cyan',
                // pointRadius: 5,
                // pointHoverRadius: 7
            },
            {
                label: 'Max',
                data: max,
                fill: false,
                backgroundColor: 'red',
                borderColor: 'red',
                // pointRadius: 5,
                // pointHoverRadius: 7
            },
        ],
    }
    console.log(chartData)
    return chartData;
}

// export const