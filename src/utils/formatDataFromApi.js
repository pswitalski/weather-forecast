import {
    dayOfTheWeek,
    dayAndMonth
} from './dateConverter';

export const DailyFormatData = (data) => {
    console.log(data);
    const days = [];
    const temps = [];
    const pressure = [];
    const windSpeed = [];
    const cloudiness = [];
    const rain = [];
    const precipitation = [];
    const humidity = [];


    data.forEach(day => {
        temps.push(day.temp.day);

        const unixTime = day.dt;
        const date = new Date(unixTime * 1000);
        const d = dayOfTheWeek(date);
        const dd = dayAndMonth(date)
        days.push(`${d}, ${dd}`)
    })


    const chartData = {
        labels: days,
        datasets: [{
            label: 'Temperature',
            data: temps,
            fill: false,
            backgroundColor: '#ddd'
        }],
    }
    console.log(chartData)
    return chartData;
}