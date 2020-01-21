const { resolve } = require('path');
const glob = require('glob');

exports.InitSchemas = () => {
    glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require);
};
