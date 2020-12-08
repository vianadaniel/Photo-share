import express from "express";

import collectionBusiness from "../business/CollectionBusiness";
import { CollectionController } from "../controller/CollectionController";


//linha responsável por criar um módulo de rotas no express
export const collectionRouter = express.Router();

const collectionController = new CollectionController(collectionBusiness)

collectionRouter.post("/create", collectionController.registerCollection);
collectionRouter.get("/all", collectionController.getCollections)
collectionRouter.get("/:collection", collectionController.getPhotoByCollection)