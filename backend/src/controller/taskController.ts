import { Request, Response, NextFunction } from 'express';
import TaskService from '../service/taskService';

export default class TaskController {
  public create = async (req: Request, res: Response, _next: NextFunction) => {
    const newTask = await TaskService.create(req.body);

    return res.status(201).json(newTask);
  }

  public update = async (req: Request, res: Response, _next: NextFunction) => {
    const { body } = req;
    console.log(body);
    const editedTask = await TaskService.update(body);
    console.log('atualizou');
    return res.status(200).json(editedTask);
  }

  public getAll = async(_req: Request, res: Response, _next: NextFunction) => {
    const allTasks = await TaskService.getAll();

    return res.status(200).json(allTasks);
  }

  public getById = async(req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.body;
    const task = await TaskService.getById(id);

    return res.status(200).json(task);
  }

  public deleteById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    await TaskService.deleteById(Number(id));

    return res.status(204).end();
  }

  public searchByQuery = async (req: Request, res: Response, _next: NextFunction) => {
    const { q } = req.query;
    console.log(req);
    console.log(q);
//    const taskBy = await TaskService.searchByQuery('oi');

//   return res.status(200).json(taskBy);
  }
}