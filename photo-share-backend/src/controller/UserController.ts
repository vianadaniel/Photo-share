import { Request, Response } from "express";
import   userBusiness, {UserBusiness}  from "../business/UserBusiness";
import {UserDatabase} from "../data/UserDatabase";


export class UserController {
   

   constructor(
      private userBusiness: UserBusiness
   ) { }
   public  signup = async  (req: Request, res: Response) => {
      try {
         
         const { name, nickname, email, password } = req.body
         const result = await this.userBusiness.signup(
            name,
            nickname,
            email,
            password
            
         );
         res.status(200).send(result);
      } catch (error) {
         console.log(error);
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }
   async getUsers(req: Request, res: Response) {
      try {
          const userDatabase = new UserDatabase
          const users = await userDatabase.getAllUsers()

          res.status(200).send(users )
      } catch (err) {
          res.status(err.customErrorCode || 400).send({
              message: err.message,
          })
      } 
      // finally {
      //     await BaseDatabase.destroyConnection()
      // }
  }
}

