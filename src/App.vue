<template>
	<div class="frame">
		<header>
			<h1>makemake</h1>
		</header>

		<main>
			<Calculator />
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
			<Language />
		</footer>
	</div>
</template>

<script>
	import IconGitHub from '@/assets/icons/github.svg?inline';
	import Calculator from '@/components/Calculator';
	import Language from '@/components/Language';

	export default {
		name: 'App',
		components: {
			IconGitHub,
			Calculator,
			Language
		}
	};
</script>

<style lang="scss">
	@import '@/scss/layout';
</style>
