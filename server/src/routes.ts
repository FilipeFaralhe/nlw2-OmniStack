import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionController'


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionController = new ConnectionController();

//Cria a classes
routes.post('/classes', classesControllers.create); 

//Lista a classes
routes.get('/classes', classesControllers.index); 


//cria uma conexão 
routes.post('/connections', connectionController.create);

//lista o total de conexões
routes.get('/connections', connectionController.index);

export default routes;
