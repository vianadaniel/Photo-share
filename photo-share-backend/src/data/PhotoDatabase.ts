import BaseDataBase from "./BaseDatabase";
import { Photo } from "../model/Photo";

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
 
    
     
    public async getPhotos(): Promise<Photo[]> {
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
 }
 
 export default new PhotoDatabase()