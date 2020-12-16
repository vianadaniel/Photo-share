import { CustomError } from "../errors/CustomError";
import { User} from "../model/User";
import userDatabase, { UserDatabase } from "../data/UserDatabase";
import hashGenerator, { HashGenerator } from "../services/hashGenerator";
import idGenerator, { IdGenerator } from "../services/idGenerator";
import tokenGenerator, { TokenGenerator } from "../services/tokenGenerator";

export class UserBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private hashGenerator: HashGenerator,
      private tokenGenerator: TokenGenerator,
      private userDatabase:UserDatabase
   ){}

   public  signup = async (
      name: string,
      nickname: string,
      email: string,
      password: string
      
   ) => {
      try {
         if (!name || !email || !nickname || !password ) {
            throw new CustomError(422, "Missing input");
         }

         if (email.indexOf("@") === -1) {
            throw new CustomError(422, "Invalid email");
         }

         if (password.length < 6) {
            throw new CustomError(422, "Invalid password");
         }

         const id = this.idGenerator.generate();

         const cypherPassword = await this.hashGenerator.hash(password);

         await this.userDatabase.createUser(
            new User(id, name, nickname, email, cypherPassword)
         );

         const accessToken = this.tokenGenerator.generate({
            id
            
         });
         
         return { accessToken };
      } catch (error) {
         if (error.message.includes("for key 'email'")) {
            throw new CustomError(409, "Email already in use")
         }

         throw new CustomError(error.statusCode, error.message)
      }

   }

   public  login = async(email: string, password: string) =>{

      try {
         if (!email || !password) {
            throw new CustomError(422, "Missing input");
         }

         const user = await this.userDatabase.getUserByEmail(email);

         if (!user) {
            throw new CustomError(401, "Invalid credentials");
         }

         const isPasswordCorrect = await this.hashGenerator.compareHash(
            password,
            user.getPassword()
         );

         if (!isPasswordCorrect) {
            throw new CustomError(401, "Invalid credentials");
         }

         const accessToken = this.tokenGenerator.generate({
            id: user.getId()
            
         });

         return { accessToken };
      } catch (error) {
         throw new CustomError(error.statusCode, error.message)
      }
   }
   public  followUser = async (
      id: string,
      token: string
       
   ) => {
      try {
         
        
         const users_id = String(this.tokenGenerator.verify(token).id)
         

         await this.userDatabase.createFollowUser(
            id, users_id
         );

         
         
         
      } catch (error) {
         
         throw new CustomError(error.statusCode, error.message)
      }

   }

   public  getFriends = async (
      
      token: string
       
   ) => {
      try {
         
        
         const users_id = String(this.tokenGenerator.verify(token).id)
         

         return this.userDatabase.getFriends(
             users_id
         );

         
         
         
      } catch (error) {
         
         throw new CustomError(error.statusCode, error.message)
      }

   }

}

export default new UserBusiness(
   idGenerator,
   hashGenerator,
   tokenGenerator,
   userDatabase
)