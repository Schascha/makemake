<template>
	<div class="frame">
		<header>
			<h1>makemake</h1>
		</header>

		<main>
			<AppCalculator />
		</main>

		<footer>
			<a
				:href="$t('link.github.href')"
				:title="$t('link.github.title')"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconGitHub />
			</a>
			<AppLanguage />
		</footer>
	</div>
</template>

<script>
	import IconGitHub from '@/assets/icons/github.svg';
	import AppCalculator from '@/components/AppCalculator';
	import AppLanguage from '@/components/AppLanguage';

	export default {
		name: 'App',
		components: {
			IconGitHub,
			AppCalculator,
			AppLanguage
		}
	};
</script>

<style lang="scss">
	@import '@/scss/layout';
</style>
