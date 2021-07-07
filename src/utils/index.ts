export const getDay = (date: string): number => {
	return new Date(date).getDate();
}

export const getDayName = (date: string): string => {
	return new Date(date).toLocaleString('en-us', { weekday: 'long' })
}