const taskOject = (task) => { 

  const formatedTask = {
    id: task.id,
    title: task.title,
    start: new Date(task.startDate),
    end: new Date(task.endDate),
    extendedProps: {
      description: task.description,
      }
    };

  return formatedTask;
};
  
  export default taskOject;