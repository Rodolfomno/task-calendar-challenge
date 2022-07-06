import axios from 'axios';
 import taskObject from './taskObject';

const getAllTasks = async (URL) => {
  try {
    const response = await axios.get(URL);
    const data = response.data.map((data) => taskObject(data));

    return {
      status: response.status,
      data,
    };
  } catch (e) {
    console.log(e);
  }
};

export default getAllTasks;