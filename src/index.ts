const addon = require("../build/Release/hello.node")

const hello: string = addon.hello();
console.log(hello)