module.exports = {
    webpack: function (config, options) {
      config.module.rules.push(
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: 'url-loader?limit=100000',
        },
        {
            test: /\.yaml|yml$/,
            use: ['json-loader', 'yaml-loader'],
        },
        {
            test: /\.jsx?/,
            use: [options.defaultLoaders.babel]
        },
      )
      return config
    }
  }