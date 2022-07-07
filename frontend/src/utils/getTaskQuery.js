import axios from 'axios';
import taskObject from './taskObject';

const getAllTasks = async (URL) => {
  try {
    const response = await axios.get(URL);
    const task = taskObject(response.data);

    console.log(task)

    return {
      status: response.status,
      task,
    };
  } catch (e) {
    console.log(e);
  }
};

export default getAllTasks;