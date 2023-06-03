// Modulos nativos
const fs = require("fs")

const file = fs.readFileSync("./link.txt")
const url = file.toString()

console.log(url)