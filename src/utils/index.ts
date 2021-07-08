export const getDay = (date: string): number => {
	return new Date(date).getDate();
}

export const getDayName = (date: string): string => {
	return new Date(date).toLocaleString('en-us', { weekday: 'long' })
}

export const debounce = (func: Function, delay: number) => {
	let timewatcher: any;
	return (...arg: any) => {
  // must be a callback
  	const callFunc = () =>  func(...arg)
    clearTimeout(timewatcher)
    timewatcher = setTimeout(callFunc, delay)
  }
};

export const tempToCelcius = (temp: number) => {
	return Math.round(temp-273)
}