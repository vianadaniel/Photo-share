import { Request, Response } from "express"
import { PhotoBusiness } from "../business/PhotoBusiness"

import BaseDatabase  from "../data/BaseDatabase"
import { PhotoDatabase } from "../data/PhotoDatabase"
import { PhotoInputDTO } from "../model/Photo"

export class PhotoController {
    constructor(
        private photoBusiness: PhotoBusiness
        
        
     ) { }
    public registerPhoto = async(req: Request, res: Response) =>{
        try {
            const { subtitle, author, file, tags, collection } = req.body
            const input: PhotoInputDTO = {
                subtitle: subtitle,
                author: author,
                file: file,
                tags: tags,
                collection: collection
            }
    
            
    
            await this.photoBusiness.createPhoto(input, req.headers.authorization as string)
    
            res.sendStatus(200)
        } catch (err) {
            res.status(err.customErrorCode || 400).send({
                message: err.message
            })
        } 
        // finally {
        //     await BaseDatabase.destroyConnection()
        // }
    }

    async getPhotos(req: Request, res: Response) {
        try {
            const photoDatabase = new PhotoDatabase
            const photos = await photoDatabase.getPhotos()

            res.status(200).send({ photos })
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

