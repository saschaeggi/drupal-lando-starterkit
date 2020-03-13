const path = require('path');
const isDev = (process.env.NODE_ENV !== 'production');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const autoprefixer = require('autoprefixer');
const Fiber = require('fibers');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    main: ['./js/main.js', './styles/main.scss'],
    drupal: ['./styles/drupal.scss'],
  },
  output: {
    devtoolLineToLine: true,
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'js/async/[name].chunk.js',
    pathinfo: true,
    filename: 'js/[name].js',
    publicPath: '/themes/frontend/dist/'
  },
  module: {
    rules: [{
        test: /\.(config.js)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: './'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]?[hash]',
            },
          },
          {
            loader: 'img-loader',
            options: {
              enabled: !isDev,
            },
          },
        ],
      },
      {
        test: /modernizrrc\.js$/,
        loader: 'expose-loader?Modernizr!webpack-modernizr-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
              sourceMap: isDev,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
              sassOptions: {
                fiber: Fiber,
                importer: globImporter()
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CleanWebpackPlugin(),
    new SVGSpritemapPlugin(path.resolve(__dirname, 'images/icons/**/*.svg'), {
      output: {
        filename: 'sprites/sprite.svg',
        svg: {
          sizes: false
        }
      },
      sprite: {
        prefix: false,
        gutter: 0,
        generate: {
          title: false,
          symbol: true,
          use: true,
          view: '-view'
        }
      },
      styles: {
        filename: path.resolve(__dirname, 'styles/helpers/_svg-sprite.scss'),
        format: 'fragment'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new BrowserSyncPlugin({
      proxy: {
        target: 'https://drupal-docksal-starterkit.docksal/',
        proxyReq: [
          function(proxyReq) {
            proxyReq.setHeader('Cache-Control', 'no-cache, no-store');
          }
        ]
      },
      browser: 'chrome',
      open: false,
      https: false,
      notify: true,
      logConnections: true,
      reloadOnRestart: true,
      injectChanges: true,
      online: true,
      // reloadDelay: 500,
      ghostMode: {
        clicks: false,
        forms: false,
        scroll: false,
      },
      files: [
        {
          match: ['**/*.css', '**/*.js'],
          fn: (event, file) => {
            if (event == 'change') {
              const bs = require("browser-sync").get("bs-webpack-plugin");
              if (file.split('.').pop()=='js') {
                bs.reload();
              } else {
                bs.stream();
              }
            }
          }
        }
      ]
    }, {
      // prevent BrowserSync from reloading the page
      // and let Webpack Dev Server take care of this
      reload: false,
      injectCss: true,
      name: 'bs-webpack-plugin'
    }),
  ],
  watchOptions: {
    aggregateTimeout: 300,
    ignored: ['**/*.woff', '**/*.json', '**/*.woff2', '**/*.jpg', '**/*.png', '**/*.svg', 'node_modules'],
  }
};
