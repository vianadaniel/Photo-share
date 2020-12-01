import { Request, Response } from "express"
import { BandBusiness } from "../business/BandBusiness"
import { BandDatabase } from "../data/BandDatabase"
import BaseDatabase  from "../data/BaseDatabase"
import { PhotoInputDTO } from "../model/Photo"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
export class PhotoController {
   
    async registerBand(req: Request, res: Response) {
        try {
            const input: PhotoInputDTO = {
                subtitle: string,
                author: string,
                date: number,
                file: string,
                tags: string,
                collection: string
            }
    
            const bandBusiness = new BandBusiness(
                new BandDatabase,
                new IdGenerator,
                new Authenticator
            )
    
            await bandBusiness.registerBand(input, req.headers.authorization as string)
    
            res.sendStatus(200)
        } catch (err) {
            res.status(err.customErrorCode || 400).send({
                message: err.message
            })
        } finally {
            await BaseDatabase.destroyConnection()
        }
    }
}
