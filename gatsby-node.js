exports.onCreateWebpackConfig = ({ actions, stage }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /mapbox-gl/,
						use: ['null-loader']
					},
				],
			}
		})
	}
};