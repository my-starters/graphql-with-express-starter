const appMaker = require("./app");
const env = require("./env");
const colors = require("cli-color");

const app = appMaker({ port: env.PORT });

app.listen(app.get("port"),() => {
    console.log(`\nServer running at port: ${colors.blue(app.get("port"))}`);
});