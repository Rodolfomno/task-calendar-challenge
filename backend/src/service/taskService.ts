import { ITask } from '../Interfaces/ITask';

const { taskModel } = require('../database/models');

export default class TaskService {
  public static async create(task: ITask) {
    const newTask = await taskModel.create(task)

    return newTask;
  }
}