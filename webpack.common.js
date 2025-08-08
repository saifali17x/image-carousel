import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isProd = process.env.NODE_ENV === 'production';

export default {
  entry: './src/index.js',
  output: {
    filename: 'index.js', // matches package.json "main": "dist/index.js"
    path: path.resolve(process.cwd(), 'dist'),
    clean: true,
    library: {
      name: 'DropdownMenu',
      type: 'umd',
      export: 'default',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
    ...(isProd ? [new MiniCssExtractPlugin({ filename: 'styles.css' })] : []),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
