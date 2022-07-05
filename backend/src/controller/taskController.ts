import { Request, Response, NextFunction } from 'express';
import TaskService from '../service/taskService';

export default class TaskController {
  public createTask = async (req: Request, res: Response, _next: NextFunction) => {
    const { title, description } = req.body;
    const reqTask = { description, title }
    const newTask = await TaskService.create(reqTask);

    return res.status(201).json(newTask);
  }
}