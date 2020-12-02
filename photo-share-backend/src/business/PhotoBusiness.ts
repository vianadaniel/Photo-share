import { CustomError } from "../errors/CustomError";
import { Photo, PhotoInputDTO} from "../model/Photo";
import photoDatabase, { PhotoDatabase } from "../data/PhotoDatabase";
import moment from "moment";
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
         const date= moment().format("YYYY-MM-DD") 
         
         const users_id = String(this.tokenGenerator.verify(token).id)
         

         await this.photoDatabase.createPhoto(
            new Photo(id, input.subtitle, input.author, date, input.file, input.tags,input.collection, users_id)
         );

         
         
         
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