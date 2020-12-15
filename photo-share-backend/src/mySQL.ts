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
        date DATETIME NOT NULL,
        file VARCHAR(255) NOT NULL,
        tags VARCHAR(255) NOT NULL,
        collection VARCHAR(255) NOT NULL,
        users_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(users_id) REFERENCES users_photo(id)
        
      )
      `)
      await BaseDataBase.connection
      .raw(`
      CREATE TABLE IF NOT EXISTS collection_share (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255)  NOT NULL,
        subtitle VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL
      )
      `)
      await BaseDataBase.connection
      .raw(`
      CREATE TABLE IF NOT EXISTS users_follow (
        user_id VARCHAR(255) NOT NULL,
        user_follow VARCHAR(255)  NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users_photo(id),
        FOREIGN KEY(user_follow) REFERENCES users_photo(id),
        PRIMARY KEY(user_id, user_follow)
      )
      `)
      
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }}

new CreateDatabase().createTable()