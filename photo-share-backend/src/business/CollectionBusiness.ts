import { CustomError } from "../errors/CustomError";
import { Collection, CollectionInputDTO} from "../model/Collection";
import collectionDatabase, { CollectionDatabase } from "../data/CollectionDatabase";

import idGenerator, { IdGenerator } from "../services/idGenerator";


export class CollectionBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private collectionDatabase: CollectionDatabase
   ){}

   public  createCollection = async (
      input: CollectionInputDTO
      
   ) => {
      try {
         if (!input.title || !input.subtitle || !input.image ) {
            throw new CustomError(422, "Missing input");
         }
         const id = this.idGenerator.generate();
         
         

         await this.collectionDatabase.createCollection(
            new Collection(id, input.title, input.subtitle, input.image)
         );

         
         
         
      } catch (error) {
         
         throw new CustomError(error.statusCode, error.message)
      }

   }

  
}

export default new CollectionBusiness(
   idGenerator,
   collectionDatabase
)