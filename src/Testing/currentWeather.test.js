import {
    appendCurrentWeatherResponse,
    getWeatherForLocationProvided,
    getWeatherSvg
} from "../Components/currentWeather";
import axios from "axios";

test('Get Weather for Location Provided', () => {
    const spyOnAxios = jest.spyOn(axios, 'request')
    document.body.innerHTML = '<input id="inputtedLocation"/>'
    document.getElementById('inputtedLocation').value = 'SELECTED'
    getWeatherForLocationProvided()
    expect( spyOnAxios ).toBeCalledTimes(1)
    expect( spyOnAxios ).toBeCalledWith({"headers": {"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            "X-RapidAPI-Key": "25b89d0b19mshf961d4a626e2013p1c4951jsn017c654323e8"}, "method": "GET", "params": {"q": "SELECTED"}, "url": "https://weatherapi-com.p.rapidapi.com/current.json"})
});

test('Append Current Weather Response', () => {
    const responseWeather = { temp_c: '20', wind_mph: '20', humidity: '20', vis_miles: '20', wind_dir: '20', uv: '20', condition: {text: 'Sunny'} }
    const responseLocation = { name: 'Name', lon: '1', lat: '1' }
    const returnedHTML = appendCurrentWeatherResponse(responseLocation, responseWeather)
    expect( returnedHTML.includes('Current Longitude: 1') ).toBeTruthy()
    expect( returnedHTML.includes('Current Latitude: 1') ).toBeTruthy()
    expect( returnedHTML.includes('Current Wind Speed: 20') ).toBeTruthy()
    expect( returnedHTML.includes('Current Humidity: 20') ).toBeTruthy()
    expect( returnedHTML.includes('Current Visibility: 20') ).toBeTruthy()
    expect( returnedHTML.includes('Current Wind Direction: 20') ).toBeTruthy()
    expect( returnedHTML.includes('Current UV Index: 20') ).toBeTruthy()
});

describe('Get Weather SVG Tests', () => {
    test('Get Weather Sunny', () => {
        const svgReturned = getWeatherSvg('Sunny')
        expect( svgReturned.includes('SunSvg') ).toBeTruthy()
    });
    test('Get Weather Overcast', () => {
        const svgReturned = getWeatherSvg('Overcast')
        expect( svgReturned.includes('OvercastSvg') ).toBeTruthy()
    });
    test('Get Weather Undefined', () => {
        const svgReturned = getWeatherSvg('Other Weather')
        expect( svgReturned ).toBe('Current Temperature Is: ')
    });
})