import { ITask } from '../Interfaces/ITask';
import Task from '../database/models/taskModel';
import { Op } from 'sequelize';

export default class TaskService {
  public static async create(task: ITask) {
    const newTask = await Task.create(task);

    return newTask;
  }

  public static async update(task: ITask) {
    const id = task.id;
    await Task.update(task, { where: { id } });
    
    return { message: 'atualizado'};
  }

  public static async getAll() {
    const allTasks = await Task.findAll()

    return allTasks;
  }

  public static async getById(id: number) {
    const taskById = await Task.findOne({ where: { id }});

    return taskById;
  }

  public static async deleteById(id: number) {
    await Task.destroy({ where: { id } });
  }

  public static async searchByQuery(query: String) {
    const taskByQuery = await Task.findAll({
      where: {
        title: { [Op.like]: `%${query}%` },
      }
    });
  }
}