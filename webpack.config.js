let path = require('path');

module.exports ={
    mode :'development',
    entry : './logic.js',
    output :{
        path : path.resolve(__dirname,''),
        filename : './logicTranspiled.js'
    },
    module :{
        rules:[
            {
                test : /\.js$/,
                loader :'babel-loader',
                exclude:/node_modules/,
                query :{
                    presets:['es2015','react']
                }
            }
            
        ]
    }
}