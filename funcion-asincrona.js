
// data file comes from Json file created named data
var fs = require('fs')

fs.readFile('./data.json', 'utf-8', (err,data) => {
console.log(data)
} ) // Anonymouns function // code format utf 8 for reading it // Arrow Function changed this line of code : function(err,data)