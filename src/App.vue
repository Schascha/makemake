<template>
	<div class="app" id="app">
		<h1>makemake</h1>

		<form>
			<div class="form-field">
				<label for="brutto">
					<span>
						<toggle-button
							v-model="form.calculationType"
							:labels="{checked: 'Bruttolohn', unchecked: 'Stundenlohn'}"
							:width="100"
							:color="{checked: '#282828', unchecked: '#282828'}"
							switch-color="#fff"
							@change="onChangeCalculationType" />
						im
						<toggle-button
							v-model="form.period"
							:labels="{checked: 'Monat', unchecked: 'Jahr'}"
							:width="70"
							:color="{checked: '#282828', unchecked: '#282828'}"
							switch-color="#fff"
							@change="onChangePeriod" />
					</span>
					<input type="number" name="brutto" id="brutto" v-model="form.brutto" :placeholder="`z.B. ${(form.calculationType) ? ((form.period) ? '2500' : '30000') : '14'} €`">
				</label>
			</div>

			<div class="form-field">
				<label>
					<span>Arbeits­stunden pro Woche</span>
					<input type="number" name="hours" v-model="form.hours" placeholder="z.B. 40">
				</label>
			</div>

			<div class="form-field">
				<label for="increase">
					<span>
						Erhöhung in
						<toggle-button
							v-model="form.increaseType"
							:labels="{checked: '%', unchecked: '€'}"
							:color="{checked: '#282828', unchecked: '#282828'}"
							switch-color="#fff"
							@change="onChangeIncreaseType" />
					</span>
					<input type="number" name="increase" id="increase" v-model="form.increase" :placeholder="(form.increaseType) ? 'z.B. 3 %' : 'z.B. 75 €'">
				</label>
			</div>

			<div class="result">
				<template v-if="form.calculationType">
					<span v-if="salary">
						<strong>{{number(salary)}} €</strong>
						/ Stunde
					</span>
					<span v-if="total">
						<strong>{{number(total)}} €</strong>
						/ {{(form.period) ? 'Monat' : 'Jahr'}}
					</span>
				</template>
				<template v-else>
					<span v-if="total">
						<strong>{{number(total)}} €</strong>
						/ Stunde
					</span>
					<span v-if="salary">
						<strong>{{number((form.period) ? salary : salary * 12)}} €</strong>
						/ {{(form.period) ? 'Monat' : 'Jahr'}}
					</span>
				</template>
			</div>
		</form>
	</div>
</template>

<script>
import {number, percentageChange, percentageDiffercence, salaryPerHour, salaryPerMonth} from './utils/calculations';


export default {
	name: 'app',
	data() {
		return {
			form: {
				brutto: '',
				hours: '',
				increase: '',
				period: true,
				increaseType: true,
				calculationType: true
			}
		};
	},
	computed: {
		salary() {
			const
				{brutto, hours, period, calculationType} = this.form,
				total = this.total || brutto
			;

			return brutto && hours > 0 && ((calculationType)
				? salaryPerHour((period) ? total : total / 12, hours)
				: salaryPerMonth(total, hours));
		},
		total() {
			const {brutto, increase, increaseType} = this.form;

			return brutto && increase && this.getTotal(brutto, increase, increaseType);
		}
	},
	methods: {
		getTotal(brutto, increase, type) {
			return (type)
				? percentageChange(brutto, increase)
				: parseFloat(brutto) + parseFloat(increase);
		},
		getIncrease(total, brutto, type) {
			return (type)
				? number(percentageDiffercence(brutto, total))
				: (total - parseFloat(brutto)).toFixed(2);
		},
		onChangeCalculationType() {
			const
				{brutto, calculationType, hours, period} = this.form
			;

			if (brutto) {
				if (hours) {
					this.form.brutto = number((calculationType)
						? salaryPerMonth((period) ? brutto : brutto * 12, hours)
						: salaryPerHour((period) ? brutto : brutto / 12, hours)
					);
				} else {
					this.form.brutto = '';
				}
			}
		},
		onChangeIncreaseType() {
			const
				{brutto, increase, increaseType} = this.form,
				total = this.getTotal(brutto, increase, !increaseType) || brutto
			;

			if (brutto && increase) {
				this.form.increase = this.getIncrease(total, brutto, increaseType);
			}
		},
		onChangePeriod() {
			const {brutto, calculationType, increase, increaseType, period} = this.form;

			if (brutto && calculationType) {
				this.form.brutto = number((period) ? brutto / 12 : brutto * 12);

				if (increase && !increaseType) {
					this.form.increase = number((period) ? increase / 12 : increase * 12);
				}
			}
		},
		number: number
	}
}
</script>

<style lang="scss">
@import 'styles';
</style>
