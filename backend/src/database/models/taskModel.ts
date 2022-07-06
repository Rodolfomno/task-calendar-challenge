import { DataTypes, Model } from 'sequelize';
// import db from '.';

import { Options, Sequelize } from 'sequelize';
import { config } from '../config/database';

const db = new Sequelize(config as Options);

class Task extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public startDate!: string;
  public endDate!: string;
}

Task.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
}, {
  underscored: false,
  timestamps: false,
  modelName: 'Tasks',
  sequelize: db
})

export default Task;