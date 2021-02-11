module.exports = {
	chainWebpack: (config) => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'makemake';
				args[0].meta = {
					url: 'https://schascha.github.io/makemake/',
					description: 'Just a simple working hours and salary calculator'
				};
				return args;
			});
	},

    css: {
		loaderOptions: {
			scss: {
				additionalData:  `
					@import '@/scss/_variables.scss';
					@import '@/scss/_mixins.scss';
					`
			}
		}
	},

	pluginOptions: {
		i18n: {
			locales: ['en', 'de'],
			fallbackLocale: 'en',
			localeDir: 'locales',
			enableInSFC: true
		}
	},

	publicPath: process.env.NODE_ENV === 'production'
		? '/makemake/'
		: '/',

	pwa: {
		name: 'makemake',
		themeColor: '#FFE474',
		manifestOptions: {
			background_color: "#FFE474"
		}
	},
}
