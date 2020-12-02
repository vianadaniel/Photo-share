import express from "express";

import photoBusiness from "../business/PhotoBusiness";
import { PhotoController } from "../controller/PhotoController";
import { PhotoDatabase } from "../data/PhotoDatabase";

//linha responsável por criar um módulo de rotas no express
export const photoRouter = express.Router();

const photoController = new PhotoController(photoBusiness)

photoRouter.post("/create", photoController.registerPhoto);
photoRouter.get("/all", photoController.getPhotos);
