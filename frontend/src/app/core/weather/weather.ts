import { WeatherData } from "./weatherData";

export interface Weather {
    id: number,
    name: string,
    state: string,
    country: string,
    data: WeatherData
}