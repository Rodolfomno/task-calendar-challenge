import { Request, Response, NextFunction } from 'express';
import TaskService from '../service/taskService';

export default class TaskController {

  public create = async (req: Request, res: Response, _next: NextFunction) => {
    const newTask = await TaskService.create(req.body);

    return res.status(201).json(newTask);
  }

  public update = async (req: Request, res: Response, _next: NextFunction) => {
    const { body } = req;
    const editedTask = await TaskService.update(body);

    return res.status(200).json(editedTask);
  }

  public getAll = async(_req: Request, res: Response, _next: NextFunction) => {
    const allTasks = await TaskService.getAll();

    return res.status(200).json(allTasks);
  }

  public getById = async(req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;

    const task = await TaskService.getById(Number(id));

    if (!task) return res.status(404).json({ message: "Task nao encontrada" })

    return res.status(200).json(task);
  }

  public deleteById = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    await TaskService.deleteById(Number(id));

    return res.status(204).end();
  }

  public searchByQuery = async (req: Request, res: Response, _next: NextFunction) => {
    const { query } = req.query;
    const taskBy = await TaskService.searchByQuery(String(query));

    if (!taskBy) return res.status(404).json({ message: "titulo não encontrato" });

    console.log(taskBy)

    return res.status(200).json(taskBy);
  }
}