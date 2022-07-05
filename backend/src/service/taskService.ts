import { ITask } from '../Interfaces/ITask';

const { taskModel } = require('../database/models');

export default class TaskService {
  public static async create(task: ITask) {
    const newTask = await taskModel.create(task)

    return newTask;
  }

  public static async getAll() {
    const allTasks = await taskModel.findAll()

    return allTasks;
  }

  public static async getById(id: number) {
    const taskById = await taskModel.findOne({ where: { id }});

    return taskById;
  }
}