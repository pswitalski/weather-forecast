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
            },
            {
                label: 'Apparent Temp.',
                data: feels,
                fill: false,
                backgroundColor: 'green',
                borderColor: 'green',
            },
            {
                label: 'Min',
                data: min,
                fill: false,
                backgroundColor: 'cyan',
                borderColor: 'cyan',
            },
            {
                label: 'Max',
                data: max,
                fill: false,
                backgroundColor: 'red',
                borderColor: 'red',
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

    temps.length = 25;
    feels.length = 25;
    hours.length = 25;

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

    pressures.length = 25;
    hours.length = 25;

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

    winds.length = 25;
    hours.length = 25;

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

export const hourlyPercentage = (data) => {
    const hours = [];
    const clouds = [];
    const humidity = [];
    const precipitation = [];

    console.log(data)

    data.forEach(object => {
        const unixTime = object.dt;
        const date = new Date(unixTime * 1000);
        const h = hour(date);
        hours.push(h);

        clouds.push(object.clouds);
        humidity.push(object.humidity);
        precipitation.push(object.pop * 100);
    })

    hours.length = 25;
    clouds.length = 25;
    humidity.length = 25;
    precipitation.length = 25;

    const chartData = {
        labels: hours,
        datasets: [{
                label: 'Cloudiness',
                data: clouds,
                fill: false,
                backgroundColor: 'orange',
                borderColor: 'orange'
            },
            {
                label: 'Humidity',
                data: humidity,
                fill: false,
                backgroundColor: 'cadetBlue',
                borderColor: 'cadetBlue'
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

export const checkAttendance = (data, target) => {
    console.log(data)
    let isFound = false;

    data.forEach(object => {
        if (target in object) {
            isFound = true
        }
    })
    return isFound;
}

export const dailySnow = (data) => {
    const days = [];
    const snows = [];
    console.log(data);
    data.forEach(object => {
        const unixTime = object.dt;
        const date = new Date(unixTime * 1000);
        const d = dayOfTheWeek(date);
        const dd = dayAndMonth(date);
        days.push(`${d}, ${dd}`);

        if ('snow' in object) {
            snows.push(object.snow)
        } else {
            snows.push(0)
        }
    })

    const chartData = {
        labels: days,
        datasets: [{
            label: 'Snow volume',
            data: snows,
            fill: false,
            backgroundColor: 'orange',
            borderColor: 'orange',
        }, ],
    }
    return chartData;
}

export const dailyRain = (data) => {
    const days = [];
    const rains = [];
    console.log(data);
    data.forEach(object => {
        const unixTime = object.dt;
        const date = new Date(unixTime * 1000);
        const d = dayOfTheWeek(date);
        const dd = dayAndMonth(date);
        days.push(`${d}, ${dd}`);

        if ('rain' in object) {
            rains.push(object.rain)
        } else {
            rains.push(0)
        }
    })

    const chartData = {
        labels: days,
        datasets: [{
            label: 'Rain volume',
            data: rains,
            fill: false,
            backgroundColor: 'orange',
            borderColor: 'orange',
        }, ],
    }
    return chartData;
}

export const hourlySnow = (data) => {
    const hours = [];
    const snows = [];
    console.log(data);
    data.forEach(object => {
        const unixTime = object.dt;
        const date = new Date(unixTime * 1000);
        const h = hour(date);
        hours.push(h);

        if ('snow' in object) {
            snows.push(object.snow["1h"])
        } else {
            snows.push(0)
        }
    })

    hours.length = 25;
    snows.length = 25;

    const chartData = {
        labels: hours,
        datasets: [{
            label: 'Snow volume',
            data: snows,
            fill: false,
            backgroundColor: 'orange',
            borderColor: 'orange',
        }, ],
    }
    return chartData;
}

export const hourlyRain = (data) => {
    const hours = [];
    const rains = [];
    console.log(data);
    data.forEach(object => {
        const unixTime = object.dt;
        const date = new Date(unixTime * 1000);
        const h = hour(date);
        hours.push(h);

        if ('rain' in object) {
            rains.push(object.rain["1h"])
        } else {
            rains.push(0)
        }
    })

    hours.length = 25;
    rains.length = 25;

    const chartData = {
        labels: hours,
        datasets: [{
            label: 'Rain volume',
            data: rains,
            fill: false,
            backgroundColor: 'orange',
            borderColor: 'orange',
        }, ],
    }
    return chartData;
}

export const getAirConditionGrade = (value) => {
    switch (value) {
        case 1:
            return 'good';
        case 2:
            return 'fair';
        case 3:
            return 'moderate';
        case 4:
            return 'poor';
        case 5:
            return 'very poor'
    }
}