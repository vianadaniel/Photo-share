import { Request, Response } from "express"
import { CollectionBusiness } from "../business/CollectionBusiness"



import { CollectionDatabase } from "../data/CollectionDatabase"
import {PhotoDatabase} from "../data/PhotoDatabase"
import { CollectionInputDTO } from "../model/Collection"

export class CollectionController {
    constructor(
        private collectionBusiness: CollectionBusiness
        
        
     ) { }
    public registerCollection = async(req: Request, res: Response) =>{
        try {
            const { title, subtitle, image } = req.body
            const input: CollectionInputDTO = {
                title: title,
                subtitle: subtitle,
                image: image         
              }
    
            
    
            await this.collectionBusiness.createCollection(input)
    
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

    async getCollections(req: Request, res: Response) {
        try {
            const collectionDatabase = new CollectionDatabase
            const collection = await collectionDatabase.getCollections()

            res.status(200).send(collection )
        } catch (err) {
            res.status(err.customErrorCode || 400).send({
                message: err.message,
            })
        } 
        // finally {
        //     await BaseDatabase.destroyConnection()
        // }
    }

    async getPhotoByCollection(req: Request, res: Response) {
        try {
            const photoDatabase = new PhotoDatabase
            const collection = req.params.collection
            const photo = await photoDatabase.getPhotosByCollection(collection)

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

    // async deletePhotoById(req: Request, res: Response) {
    //     try {
    //         const photoDatabase = new PhotoDatabase
    //         const id = req.params.id
    //          await photoDatabase.deletePhotoById(id)

    //         res.status(200).send("delete photo" )
    //     } catch (err) {
    //         res.status(err.customErrorCode || 400).send({
    //             message: err.message,
    //         })
    //     } 
    //     // finally {
    //     //     await BaseDatabase.destroyConnection()
    //     // }
    // }

}
