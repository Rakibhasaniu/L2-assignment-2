import mongoose from 'mongoose'
import app from './app'
import { config } from './app/config/config'

const main = async function () {
  mongoose.connect(config.db_url as string)

  app.listen(config.port, () => {
    console.log(`app listening on port ${config.port}`)
  })
}

main()
