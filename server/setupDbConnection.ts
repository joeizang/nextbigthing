import { createConnection, Connection } from 'typeorm'

const dbConnection = async (): Promise<Connection> => {
  return await createConnection()
}

export default dbConnection
