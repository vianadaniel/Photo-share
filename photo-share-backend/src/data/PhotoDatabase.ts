import BaseDataBase from "./BaseDatabase";
import { Photo, PhotoOutputDTO } from "../model/Photo";

export class PhotoDatabase extends BaseDataBase {

    protected tableName: string = "photo_share";
    
 
    private toModel(dbModel?: any): Photo | undefined {
       return (
          dbModel &&
          new Photo(
             dbModel.id,
             dbModel.subtitle,
             dbModel.author,
             dbModel.date,
             dbModel.file,
             dbModel.tags,
             dbModel.collection,
             dbModel.users_id
          )
       );
    }
 
    public async createPhoto(photo: Photo): Promise<void> {
       try {
          await BaseDataBase.connection.raw(`
             INSERT INTO ${this.tableName} (id, subtitle, author, date, file, tags, collection, users_id)
             VALUES (
             '${photo.getId()}', 
             '${photo.getSubtitle()}', 
             '${photo.getAuthor()}', 
             '${photo.getDate()}',
             '${photo.getFile()}',
             '${photo.getTags()}', 
             '${photo.getCollection()}', 
             '${photo.getUsers_id()}' 
             )`
          );
       } catch (error) {
          throw new Error(error.sqlMessage || error.message)
       }
    }
 
    
     
    public  getPhotos = async(): Promise<PhotoOutputDTO[]> => {
       try {
          const result = await BaseDataBase.connection.raw(`
             SELECT * from ${this.tableName}
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
          console.log(error)
          throw new Error(error.sqlMessage || error.message)
       }
    }

    public async getPhotoById(id: string): Promise<Photo | undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE id = '${id}'
         `);
         return this.toModel(result[0][0]);
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getPhotosByCollection(collection: string): Promise<Photo | undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE collection = '${collection}'
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

   public async deletePhotoById(id: string) {
      try {
         await BaseDataBase.connection.raw(`
            DELETE FROM ${this.tableName} WHERE id = '${id}'
         `);
         
      } catch (error) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

 }
 
 export default new PhotoDatabase()