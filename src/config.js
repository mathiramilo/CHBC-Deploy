const dotenv = require('dotenv')
const yargs = require('yargs')

dotenv.config()

const args = yargs(process.argv.slice(2))
  .default({
    mode: 'fork'
  })
  .alias({
    m: 'mode'
  }).argv

const config = {
  MODE: args.mode,
  PORT: process.env.PORT || 8080,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE: process.env.JWT_EXPIRE
}

module.exports = config
