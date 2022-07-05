import { Router } from 'express';
import TaskController from '../controller/taskController';

const taskRouter = Router();

const taskController = new TaskController();

taskRouter.post('/', taskController.createTask);

export default taskRouter;
