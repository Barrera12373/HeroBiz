module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,json,mp4}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};