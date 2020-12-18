import BaseDataBase from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDataBase {

   protected tableName: string = "users_photo";
   protected tableNameFollow: string = "users_follow";
   protected tableNamePhotos: string = "photo_share";
   private toModel(dbModel?: any): User | undefined {
      return (
         dbModel &&
         new User(
            dbModel.id,
            dbModel.name,
            dbModel.nickname,
            dbModel.email,
            dbModel.password
         )
      );
   }

   public async createUser(user: User): Promise<void> {
      try {
         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, name,nickname, email, password)
            VALUES (
            '${user.getId()}', 
            '${user.getName()}', 
            '${user.getNickname()}',
            '${user.getEmail()}',
            '${user.getPassword()}' 
            )`
         );
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getUserByEmail(email: string): Promise<User | undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE email = '${email}'
         `);
         return this.toModel(result[0][0]);
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getUserById(id: string): Promise<User | undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE id = '${id}'
         `);
         return this.toModel(result[0][0]);
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getAllUsers(): Promise<User[]> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName}
         `);
         return result[0].map((res: any) => {
            return this.toModel(res);
         });
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
   public async createFollowUser (id: string, users_id: string): Promise<void> {
      try {
         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableNameFollow} (user_id, user_follow)
            VALUES (
            '${users_id}', 
            '${id}'
            
            )`
         );
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
   public async getFriends(users_id: string): Promise<User[]> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} 
            JOIN ${this.tableNameFollow}
            ON ${this.tableName}.id = ${this.tableNameFollow}.user_follow         
            WHERE user_id = '${users_id}'
         `);
         return result[0].map((data: any) => {
            
            return {
               id: data.id,
               name: data.name
               
             };
         });
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
   public async getPhotosFriends(id: string): Promise<User | undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableNamePhotos} WHERE users_id = '${id}'
         `);
         return result[0].map((data: any) => {
            return {
              id: data.id,
              subtitle: data.subtitle,
              author: data.author,
              date: data.date,
              file: data.file,
              tags: data.tags,
              collection: data.collection,
              users_id: data.users_id
            };
         });
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
}

export default new UserDatabase()