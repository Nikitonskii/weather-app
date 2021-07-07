
export interface Forecast {
  weather: Weather[];
  main: Main;
	visibility: number;
	wind: Wind;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export interface WeekForecast {
  list: WeekForecastItem[];
}

export type WeekForecastItem = {
	dt: 0;
	main: WeekMain;
	weather: Weather[];
	clouds: Clouds;
	wind: WeekWind;
	visibility: number;
	pop: number;
	dt_txt: string;
}

type WeekMain = {
	temp: number,
	feels_like: number,
	temp_min: number,
	temp_max: number,
	pressure: number,
	sea_level: number,
	grnd_level:number,
	humidity: number,
	temp_kf: number
}

type Clouds = {
	all: number
}

type WeekWind = {
	speed: number,
	deg: number,
	gust: number
}

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
}

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

type Wind = {
	speed: number;
	deg: number;
}

export type ItemProps = {
	props: WeekForecastItem
}





