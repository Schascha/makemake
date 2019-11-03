<template>
	<div id="app">
		<h1>makemake</h1>

		<form>
			<div class="form-field">
				<label for="brutto">
					<span>
						Bruttolohn im
						<toggle-button
							v-model="form.period"
							:labels="{checked: 'Monat', unchecked: 'Jahr'}"
							:width="70"
							:color="{checked: '#282828', unchecked: '#282828'}"
							switch-color="#fff"
							@change="onChangePeriod" />
					</span>
					<input type="text" name="brutto" id="brutto" v-model="form.brutto" :placeholder="(form.period) ? 'z.B. 2500' : 'z.B. 30000'">
				</label>
			</div>

			<div class="form-field">
				<label>
					<span>Arbeits­stunden pro Woche</span>
					<input type="text" name="hours" v-model="form.hours" placeholder="z.B. 40">
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
					<input type="text" name="increase" id="increase" v-model="form.increase" :placeholder="(form.increaseType) ? 'z.B. 3 %' : 'z.B. 75 €'">
				</label>
			</div>

			<div class="result">
				<span v-if="salary">
					<strong>{{salary.toFixed(2)}} €</strong>
					/ Stunde
				</span>
				<span v-if="total">
					<strong>{{total.toFixed(2)}} €</strong>
					/ {{(form.period) ? 'Monat' : 'Jahr'}}
				</span>
			</div>
		</form>
	</div>
</template>

<script>
import {percentageChange, percentageDiffercence, salaryPerHour} from './utils/calculations';


export default {
	name: 'app',
	data() {
		return {
			form: {
				brutto: '',
				hours: '',
				increase: '',
				period: true,
				increaseType: true
			}
		};
	},
	computed: {
		salary() {
			const
				{brutto, hours, period} = this.form,
				total = this.total || brutto
			;

			return brutto && hours && salaryPerHour((period) ? total : total / 12, hours);
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
				? parseFloat(percentageDiffercence(brutto, total).toFixed(2))
				: (total - parseFloat(brutto)).toFixed(2);
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
			const {brutto, increase, increaseType, period} = this.form;

			if (brutto) {
				this.form.brutto = (period) ? brutto / 12 : brutto * 12;

				if (increase && !increaseType) {
					this.form.increase = ((period) ? increase / 12 : increase * 12).toFixed(2);
				}
			}
		}
	}
}
</script>

<style lang="scss">
@import 'styles';
</style>
