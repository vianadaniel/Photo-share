import BaseDataBase from "./data/BaseDatabase";


export class CreateDatabase extends BaseDataBase {

  public async createTable(
    
  ): Promise<void> {
    try {
      await BaseDataBase.connection
      .raw(`
      CREATE TABLE IF NOT EXISTS users_photo (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        nickname VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
        
      )
      `)
      await BaseDataBase.connection
      .raw(`
      CREATE TABLE IF NOT EXISTS photo_share (
        id VARCHAR(255) PRIMARY KEY,
        subtitle VARCHAR(255)  NOT NULL,
        author VARCHAR(255) NOT NULL,
        date INT NOT NULL,
        file xxx,
        tags xxx,
        collection VARCHAR(255) NOT NULL
        
      )
      `)
      
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }}

new CreateDatabase().createTable()