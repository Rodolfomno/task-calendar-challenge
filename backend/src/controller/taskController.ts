import { Request, Response, NextFunction } from 'express';
import TaskService from '../service/taskService';

export default class TaskController {
  public create = async (req: Request, res: Response, _next: NextFunction) => {
    const { title, description } = req.body;
    const reqTask = { description, title }
    const newTask = await TaskService.create(reqTask);

    return res.status(201).json(newTask);
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
}