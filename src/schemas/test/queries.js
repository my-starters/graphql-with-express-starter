const testTypes = require("./types");
module.exports = {
    test: {
        type: testTypes.Test,
        description: "A test.",
        resolve: () => ({ message: "This is a test message." })
    }
};