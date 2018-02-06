const webpack = require('webpack')
const path = require('path')

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const globImporter = require('node-sass-glob-importer')
const { Gaze } = require('gaze')

// JS
const scripts = {
    test: /\.js$/,
    loader: 'babel-loader',
    query: {
        presets: ['es2015']
    }
}

// CSS
const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
})

const styles = {
    test: /\.scss$/,
    use: extractSass.extract({
        use: [{
            loader: 'css-loader',
            options: {
                url: false,
                sourceMap: true
            }
        }, {
            loader: 'postcss-loader',
            options: {
                sourceMap: true
            }
        }, {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
                importer: globImporter()
            }
        }]
    })
}

// development
const browserSync = new BrowserSyncPlugin({
    host: 'localhost',
    files: ["**/*.html", "./public/**/*.js"],
    server: {
        baseDir: ['./']
    }
}, { reload: false })

// this just inject the css on the page and prevent webpack from reload all the browser
const gaze = new Gaze("./public/*.css")
gaze.on('all', () => browserSync.browserSync.reload("./public/*.css"))

// webpack configuration
module.exports = {
    entry: {
        script: path.resolve(__dirname, 'assets/js/main.js'),
        style: path.resolve(__dirname, 'assets/sass/style.scss')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        loaders: [styles, scripts]
    },
    plugins: [
        extractSass,
        browserSync
    ],
    watch: true,
    devtool: "source-map"
}
