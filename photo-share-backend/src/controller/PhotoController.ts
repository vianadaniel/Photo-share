import { Request, Response } from "express"
import { PhotoBusiness } from "../business/PhotoBusiness"


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

            res.status(200).send(photos )
        } catch (err) {
            res.status(err.customErrorCode || 400).send({
                message: err.message,
            })
        } 
        // finally {
        //     await BaseDatabase.destroyConnection()
        // }
    }

    async getPhotoById(req: Request, res: Response) {
        try {
            const photoDatabase = new PhotoDatabase
            const id = req.params.id
            const photo = await photoDatabase.getPhotoById(id)

            res.status(200).send(photo )
        } catch (err) {
            res.status(err.customErrorCode || 400).send({
                message: err.message,
            })
        } 
        // finally {
        //     await BaseDatabase.destroyConnection()
        // }
    }

    async deletePhotoById(req: Request, res: Response) {
        try {
            const photoDatabase = new PhotoDatabase
            const id = req.params.id
             await photoDatabase.deletePhotoById(id)

            res.status(200).send("delete photo" )
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

