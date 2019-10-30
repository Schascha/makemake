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
							@change="onChangePeriod" />
					</span>
					<input type="text" name="brutto" v-model="form.brutto" :placeholder="(form.period) ? 'z.B. 2500' : 'z.B. 30000'">
				</label>
			</div>

			<div class="form-field">
				<label>
					<span>Arbeits­stunden pro Woche</span>
					<input type="text" name="hours" v-model="form.hours" placeholder="z.B. 40">
				</label>
			</div>

			<div class="form-field">
				<label>
					<span>
						Erhöhung in
						<toggle-button
							v-model="form.increaseType"
							:labels="{checked: '%', unchecked: '€'}"
							:color="{checked: '#282828', unchecked: '#282828'}"
							@change="onChangeIncreaseType" />
					</span>
					<input type="text" name="increase" v-model="form.increase" :placeholder="(form.increaseType) ? 'z.B. 3 %' : 'z.B. 200 €'">
				</label>
			</div>

			<div class="result">
				<span>{{salary}}</span>
				<span>{{increase}}</span>
			</div>
		</form>
	</div>
</template>

<script>
import {calcPercentage, salaryPerHour} from './calculations';


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
			const {form: {brutto, hours, increase, period}, total} = this;

			return brutto && hours &&
				`${salaryPerHour((period) ? total : total / 12, hours).toFixed(2)} € / Stunde`;
		},
		increase() {
			const {form: {brutto, increase, increaseType, period}, total} = this;

			return brutto && increase &&
				`${total.toFixed(2)} € / ${(period) ? 'Monat' : 'Jahr'}`;
		},
		total() {
			const {brutto, increase, increaseType} = this.form;

			return (increaseType) ? calcPercentage(brutto, increase) : parseFloat(brutto) + parseFloat(increase)
		}
	},
	methods: {
		onChangeIncreaseType() {
			const
				{brutto, increase, increaseType} = this.form,
				end = (increaseType) ? parseFloat(brutto) + parseFloat(increase) : calcPercentage(brutto, increase)
			;

			if (increase) {
				this.form.increase = ((increaseType)
					? (end - brutto) / brutto * 100
					: end - parseFloat(brutto)
				).toFixed(2);
			}
		},
		onChangePeriod() {
			const {brutto, period} = this.form;

			if (brutto) {
				this.form.brutto = ((period) ? brutto / 12 : brutto * 12);
			}
		}
	}
}
</script>

<style lang="scss">
@import 'styles';
</style>
