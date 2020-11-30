<template>
	<form class="calculator">
		<div class="form-field">
			<label for="brutto">
				<span>
					<toggle-button
						v-model="form.calculationType"
						:labels="{
							checked: $t('calculator.grossWage'),
							unchecked: $t('calculator.hourlyWage')
						}"
						:width="100"
						:color="{checked: '#282828', unchecked: '#282828'}"
						switch-color="#fff"
						@change="onChangeCalculationType" />
					{{ $t('calculator.typeInPeriod') }}
					<toggle-button
						v-model="form.period"
						:labels="{
							checked: $t('calculator.wagePerMonth'),
							unchecked: $t('calculator.wagePeryear')
						}"
						:width="70"
						:color="{checked: '#282828', unchecked: '#282828'}"
						switch-color="#fff"
						@change="onChangePeriod" />
				</span>
				<input
					type="number"
					name="brutto"
					id="brutto"
					min="0"
					:placeholder="(form.calculationType) ? ((form.period) ? $t('calculator.placeholder.wagePerMonth') : $t('calculator.placeholder.wagePerYear')) : $t('calculator.placeholder.wagePerHour')"
					v-model="form.brutto"
				>
			</label>
		</div>

		<div class="form-field">
			<label>
				<span>{{ $t('calculator.workingHours') }}</span>
				<input
					type="number"
					name="hours"
					min="0"
					:placeholder="$t('calculator.placeholder.workingHours')"
					v-model="form.hours"
				>
			</label>
		</div>

		<div class="form-field">
			<label for="increase">
				<span>
					{{ $t('calculator.increase') }}
					<toggle-button
						v-model="form.increaseType"
						:labels="{
							checked: $t('calculator.increaseInPercent'),
							unchecked: $t('calculator.increaseInValue')
						}"
						:color="{checked: '#282828', unchecked: '#282828'}"
						switch-color="#fff"
						@change="onChangeIncreaseType" />
				</span>
				<input
					type="number"
					name="increase"
					id="increase"
					min="0"
					:placeholder="(form.increaseType) ? $t('calculator.placeholder.increaseInPercent') : $t('calculator.placeholder.increaseInValue')"
					v-model="form.increase"
				>
			</label>
		</div>

		<div class="result">
			<template v-if="form.calculationType">
				<span v-if="salary">
					<strong>{{number(salary)}} {{ $t('calculator.currency') }}</strong>
					/ {{ $t('calculator.hour') }}
				</span>
				<span v-if="total">
					<strong>{{number(total)}} {{ $t('calculator.currency') }}</strong>
					/ {{(form.period) ? $t('calculator.month') : $t('calculator.year')}}
				</span>
			</template>
			<template v-else>
				<span v-if="total">
					<strong>{{number(total)}} {{ $t('calculator.currency') }}</strong>
					/ {{ $t('calculator.hour') }}
				</span>
				<span v-if="salary">
					<strong>{{number((form.period) ? salary : salary * 12)}} {{ $t('calculator.currency') }}</strong>
					/ {{(form.period) ? $t('calculator.month') : $t('calculator.year')}}
				</span>
			</template>
		</div>
	</form>
</template>

<script>
import {number, percentageChange, percentageDiffercence, salaryPerHour, salaryPerMonth} from '@/utils/calculations';

export default {
	name: 'Calculator',
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
