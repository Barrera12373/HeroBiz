module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,css,jpg,svg,js,txt,json,woff,woff2,html,mp4}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};