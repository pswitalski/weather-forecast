import {
    dayOfTheWeek,
    dayAndMonth,
    hour,
    minute
} from './dateConverter';

export const dailyTempData = (data) => {
    // console.log(data);
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

export const hourlyTempData = (data) => {
    const temps = [];
    const feels = [];
    const hours = [];

    console.log(data);

    data.forEach(object => {
        temps.push(object.temp);
        feels.push(object.feels_like);

        const unixTime = object.dt;
        const date = new Date(unixTime * 1000);
        const h = hour(date);
        hours.push(h);
    })

    const chartData = {
        labels: hours,
        datasets: [{
                label: 'Temp.',
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
            }
        ],
    }
    console.log(chartData)
    return chartData;
}

export const dailyPressure = (data) => {
    const pressures = [];
    const days = [];

    data.forEach(object => {
        pressures.push(object.pressure);

        const unixTime = object.dt;
        const date = new Date(unixTime * 1000);
        const d = dayOfTheWeek(date);
        const dd = dayAndMonth(date)
        days.push(`${d}, ${dd}`)
    })

    const chartData = {
        labels: days,
        datasets: [{
            label: 'Pressure',
            data: pressures,
            fill: false,
            backgroundColor: 'orange',
            borderColor: 'orange',
        }, ],
    }

    return chartData;
}

export const hourlyPressure = (data) => {
    const pressures = [];
    const hours = [];

    data.forEach(object => {
        pressures.push(object.pressure);

        const unixTime = object.dt;
        const date = new Date(unixTime * 1000);
        const h = hour(date);
        hours.push(h);
    })

    const chartData = {
        labels: hours,
        datasets: [{
            label: 'Pressure',
            data: pressures,
            fill: false,
            backgroundColor: 'cadetBlue',
            borderColor: 'cadetBlue'
        }, ],
    }
    return chartData;
}

export const minHourlyPressure = (data) => {
    const pressures = [];

    data.forEach(object => {
        pressures.push(object.pressure)
    })

    const minimalPressure = Math.min(...pressures);

    return minimalPressure;
}

export const dailyWind = (data) => {
    const winds = [];
    const days = [];

    data.forEach(object => {
        winds.push(object.wind_speed);

        const unixTime = object.dt;
        const date = new Date(unixTime * 1000);
        const d = dayOfTheWeek(date);
        const dd = dayAndMonth(date)
        days.push(`${d}, ${dd}`)
    })

    const chartData = {
        labels: days,
        datasets: [{
            label: 'Wind speed',
            data: winds,
            fill: false,
            backgroundColor: 'cyan',
            borderColor: 'cyan',
        }, ],
    }

    return chartData;
}

export const hourlyWind = (data) => {
    const winds = [];
    const hours = [];

    data.forEach(object => {
        winds.push(object.wind_speed);

        const unixTime = object.dt;
        const date = new Date(unixTime * 1000);
        const h = hour(date);
        hours.push(h);
    })

    const chartData = {
        labels: hours,
        datasets: [{
            label: 'Wind speed',
            data: winds,
            fill: false,
            backgroundColor: 'cyan',
            borderColor: 'cyan',
        }, ],
    }

    return chartData;
}

export const getEventHour = (data) => {

    const unixTime = data;
    const date = new Date(unixTime * 1000);

    const h = hour(date);
    const m = minute(date);
    return `${h}:${m}`;
}

export const dailyPercentage = (data) => {
    const days = [];
    const clouds = [];
    const humidity = [];
    const precipitation = [];

    console.log(data)

    data.forEach(object => {
        const unixTime = object.dt;
        const date = new Date(unixTime * 1000);
        const d = dayOfTheWeek(date);
        const dd = dayAndMonth(date);
        days.push(`${d}, ${dd}`);

        clouds.push(object.clouds);
        humidity.push(object.humidity);
        precipitation.push(object.pop * 100);
    })

    const chartData = {
        labels: days,
        datasets: [{
                label: 'Cloudiness',
                data: clouds,
                fill: false,
                backgroundColor: 'orange',
                borderColor: 'orange',
            },
            {
                label: 'Humidity',
                data: humidity,
                fill: false,
                backgroundColor: 'cadetBlue',
                borderColor: 'cadetBlue',
            },
            {
                label: 'Probability of precipitation',
                data: precipitation,
                fill: false,
                backgroundColor: 'cyan',
                borderColor: 'cyan',
            }
        ],
    }
    console.log(chartData)
    return chartData;
}