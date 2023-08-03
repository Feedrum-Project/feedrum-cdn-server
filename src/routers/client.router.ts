import ClientHandler from "@handlers/client.handler";
import { Router } from "express";

const ClientRouter: Router = Router();

// route /clients/create - route for creating App Clients
// request None
// responses
//    501 Not Implemented
ClientRouter.all("/create", ClientHandler.createClient);

export default ClientRouter;
