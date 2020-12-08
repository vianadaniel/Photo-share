import BaseDataBase from "./BaseDatabase";
import { Collection, CollectionOutputDTO } from "../model/Collection";

export class CollectionDatabase extends BaseDataBase {

    protected tableName: string = "collection_share";
    
 
    private toModel(dbModel?: any): Collection | undefined {
       return (
          dbModel &&
          new Collection(
             dbModel.id,
             dbModel.title,
             dbModel.subtitle,
             dbModel.image
          )
       );
    }
 
    public async createCollection(collection: Collection): Promise<void> {
       try {
          await BaseDataBase.connection.raw(`
             INSERT INTO ${this.tableName} (id, title, subtitle, image)
             VALUES (
             '${collection.getId()}', 
             '${collection.getTitle()}', 
             '${collection.getSubtitle()}', 
             '${collection.getImage()}'
             )`
          );
       } catch (error) {
          throw new Error(error.sqlMessage || error.message)
       }
    }
 
    
     
    public  getCollections = async(): Promise<CollectionOutputDTO[]> => {
       try {
          const result = await BaseDataBase.connection.raw(`
             SELECT * from ${this.tableName}
          `);
          
          return result[0].map((data: any) => {
             return {
               id: data.id,
               title: data.title,
               subtitle: data.subtitle,
               image: data.image
             };
          });
       } catch (error) {
          console.log(error)
          throw new Error(error.sqlMessage || error.message)
       }
    }

//     public async getPhotoById(id: string): Promise<Photo | undefined> {
//       try {
//          const result = await BaseDataBase.connection.raw(`
//             SELECT * from ${this.tableName} WHERE id = '${id}'
//          `);
//          return this.toModel(result[0][0]);
//       } catch (error) {
//          throw new Error(error.sqlMessage || error.message)
//       }
//    }

//    public async deletePhotoById(id: string) {
//       try {
//          await BaseDataBase.connection.raw(`
//             DELETE FROM ${this.tableName} WHERE id = '${id}'
//          `);
         
//       } catch (error) {
//          throw new Error(error.sqlMessage || error.message)
//       }
//    }

 }
 
 export default new CollectionDatabase()