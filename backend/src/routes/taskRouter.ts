import { Router } from 'express';
import TaskController from '../controller/taskController';

const taskRouter = Router();

const taskController = new TaskController();

taskRouter.get('/', taskController.getAll)

taskRouter.get('/:id', taskController.getById);

taskRouter.post('/', taskController.create);

export default taskRouter;
