import { DataTypes, Model } from 'sequelize';
import db from '.';

class Task extends Model {
  public id?: Number;
  public title?: String;
  public description?: String;
  public startDate?: String;
  public endDate?: String;
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
    allowNull: true,
    defaultValue: ""
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
  tableName: 'Tasks',
  sequelize: db
})

export default Task;