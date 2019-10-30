export function salaryPerHour(brutto, hours) {
	return (3 * brutto) / 13 / hours;
}

export function calcPercentage(start, percent = 0) {
	return start * (1 + percent / 100);
}
