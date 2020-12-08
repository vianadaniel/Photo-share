import express from "express";

import photoBusiness from "../business/PhotoBusiness";
import { PhotoController } from "../controller/PhotoController";


//linha responsável por criar um módulo de rotas no express
export const photoRouter = express.Router();

const photoController = new PhotoController(photoBusiness)

photoRouter.post("/create", photoController.registerPhoto);
photoRouter.get("/all", photoController.getPhotos)
photoRouter.get("/:id", photoController.getPhotoById)
photoRouter.delete("/delete/:id", photoController.deletePhotoById)


