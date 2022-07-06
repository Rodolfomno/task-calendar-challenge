import { Router } from 'express';
import TaskController from '../controller/taskController';

const taskRouter = Router();

const taskController = new TaskController();

taskRouter.get('/', taskController.getAll)

taskRouter.get('/:id', taskController.getById);

taskRouter.post('/', taskController.create);

taskRouter.put('/', taskController.update);

taskRouter.delete('/:id', taskController.deleteById);

export default taskRouter;
