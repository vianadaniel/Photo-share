import express from "express";
import {AddressInfo} from "net";
import cors from "cors"
import { userRouter } from "./router/UserRouter";
import { photoRouter } from "./router/PhotoRouter";

const app = express();

app.use(cors())
app.use(express.json());

app.use("/users", userRouter)
app.use("/photo", photoRouter)


const server = app.listen(3003, () => {
  
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server running http://localhost:${address.port}`);
  } else {
    console.error(`Server fail!`);
  }
});