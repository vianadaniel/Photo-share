import { CustomError } from "../errors/CustomError";
import { Photo, PhotoInputDTO} from "../model/Photo";
import photoDatabase, { PhotoDatabase } from "../data/PhotoDatabase";

import idGenerator, { IdGenerator } from "../services/idGenerator";
import tokenGenerator, { TokenGenerator } from "../services/tokenGenerator";

export class PhotoBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private tokenGenerator: TokenGenerator,
      private photoDatabase: PhotoDatabase
   ){}

   public  createPhoto = async (
      input: PhotoInputDTO,
      token: string   
   ) => {
      try {
         if (!input.subtitle || !input.author || !input.file || !input.tags || !input.collection ) {
            throw new CustomError(422, "Missing input");
         }
         const id = this.idGenerator.generate();
         
         const users_id = this.tokenGenerator.verify(token)
         

         await this.photoDatabase.createPhoto(
            new Photo(id, input.subtitle, input.author, date, input.file, input.tags,input.collection, users_id)
         );

         const accessToken = this.tokenGenerator.generate({
            id
            
         });
         
         
      } catch (error) {
         
         throw new CustomError(error.statusCode, error.message)
      }

   }

  
}

export default new PhotoBusiness(
   idGenerator,
   tokenGenerator,
   photoDatabase
)