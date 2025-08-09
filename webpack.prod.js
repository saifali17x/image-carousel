import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [], // Remove HTML plugin for library build
  output: {
    library: {
      name: 'ImageCarousel',
      type: 'umd',
    },
    globalObject: 'this',
  },
});
