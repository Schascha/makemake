export function salaryPerHour(brutto, hours) {
	return (3 * brutto) / 13 / hours;
}

export function salaryPerMonth(brutto, hours) {
	return hours * 13 * brutto / 3;
}

export function percentageChange(start, percent = 0) {
	return start * (1 + percent / 100);
}

export function percentageDiffercence(start, end) {
	return (end - start) / start * 100;
}

export function number(n) {
	if (n) {
		const
			d = n.toFixed(2)
		;

		return (d % 1 === 0) ? parseFloat(d) : d;
	}
}
