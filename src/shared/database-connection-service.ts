import { drizzle } from "drizzle-orm/mysql2"
import mysql from 'mysql2/promise'

// const CONNECTION_LIMIT = 50
export type DefaultConnection = typeof drizzle

export interface DatabaseConnectionService {
  getConnection(): DefaultConnection
}

export class DatabaseConnectionServiceImpl
  implements DatabaseConnectionService
{

  private static _instance: DatabaseConnectionServiceImpl | null = null
  private _connection: any

  static getInstance(): DatabaseConnectionService {
    if (!DatabaseConnectionServiceImpl._instance) {
      DatabaseConnectionServiceImpl._instance =
        new DatabaseConnectionServiceImpl()
    }
    return DatabaseConnectionServiceImpl._instance
  }

  public getConnection() {

    const poolConnection =  mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'appointment',
        connectionLimit: 50
    });

    this._connection = drizzle(poolConnection)
    return this._connection
  }
}