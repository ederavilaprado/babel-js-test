import http from 'http'
import config from './config'
import hello from './grettings'

const server = http.createServer((req, res) => {
  res.end(hello('Eder'))
})

server.listen(config.port, config.hostname, () => {
  console.log(`Server running on http://${config.hostname}:${config.port}/`)
})
