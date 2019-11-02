export function salaryPerHour(brutto, hours) {
	return (3 * brutto) / 13 / hours;
}

export function percentageChange(start, percent = 0) {
	return start * (1 + percent / 100);
}

export function percentageDiffercence(start, end) {
	return (end - start) / start * 100;
}
