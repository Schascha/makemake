module.exports = {
    css: {
		loaderOptions: {
			scss: {
				prependData:  `
					@import '@/scss/_variables.scss';
					@import '@/scss/_mixins.scss';
					`
			}
		}
	},

    publicPath: process.env.NODE_ENV === 'production'
		? '/makemake/'
		: '/',

	pluginOptions: {
		i18n: {
			locales: ['en', 'de'],
			fallbackLocale: 'en',
			localeDir: 'locales',
			enableInSFC: true
		}
	},

	pwa: {
		name: 'makemake',
		themeColor: '#FFE474'
	},
}
