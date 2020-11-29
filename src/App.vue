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
				href="https://github.com/Schascha/makemake"
				title="Mehr auf GitHub"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconGitHub />
			</a>
		</footer>
	</div>
</template>

<script>
	import IconGitHub from '@/assets/icons/github.svg?inline';
	import Calculator from '@/components/Calculator';

	export default {
		name: 'app',
		components: {
			IconGitHub,
			Calculator
		}
	}
</script>

<style lang="scss">
	@import '@/scss/_layout.scss';
</style>
