import webpack from 'webpack';
import webpackConfig from '../webpack.prod.config';
import colors from 'colors';

// Sets it so that babel's dev hot module reloading config doesn't apply
process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the follong warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack.stats: ${stats}`);

  console.log('Your app has been compiled in production mode and written to dist'.blue);

  return 0;
});
