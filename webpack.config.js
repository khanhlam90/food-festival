const path = require("path");

const webpack = require("webpack");

// create the main configuration object within our file
module.exports = {
    // entry point is the root of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code
    entry: './assets/js/script.js',

    //take that entry point, bundle that code, and output that bundled code
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],

    // provide the mode in which we want webpack to run
    mode: 'development'
};
