import app from './app.js'
console.log(__dirname)
app.listen(app.get('port'))

console.log('server on port '+app.get('port'))