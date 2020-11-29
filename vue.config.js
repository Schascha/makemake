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
		: '/'
 }
