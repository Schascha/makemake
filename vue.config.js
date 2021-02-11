module.exports = {
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
