// require your server and launch it here
const server = require('./api/server.js')

const port = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log('listening on', PORT)
})