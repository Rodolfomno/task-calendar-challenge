import axios from 'axios';
import taskObject from './taskObject';

const updateTaskApi = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    const resultData = taskObject(response.data);

    return {
      status: response.status,
      resultData,
    };
  } catch (e) {
    console.log(e);
  }
};

export default updateTaskApi;