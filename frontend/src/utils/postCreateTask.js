import axios from 'axios';
import taskObject from './taskObject';

const postCreateTask = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    const resultData = taskObject(response.data);

    return {
      status: response.status,
      resultData,
    };
  } catch (e) {
    console.log(e);
  }
};

export default postCreateTask;