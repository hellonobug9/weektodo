import React, {useContext, useState, useEffect, useRef} from 'react';
import Task from '@/models/task';
import TaskAdapter from '@/adapters/task';
interface ITaskContext {
  createTask: () => void;
  deleteTask: () => void;
  setTaskStatus: () => void;
  tasks: Task[];
}

const TasksContext = React.createContext<ITaskContext | null>(null);

const TasksProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);

  // Use a Ref to store the realm rather than the state because it is not
  // directly rendered, so updating it should not trigger a re-render as using
  // state would.
  const adapterRef = useRef(new TaskAdapter());

  useEffect(() => {
    // get list task
  }, []);

  const createTask = () => {
    console.log('object');
  };

  const setTaskStatus = () => {};

  // Define the function for deleting a task.
  const deleteTask = () => {};

  // Render the children within the TaskContext's provider. The value contains
  // everything that should be made available to descendants that use the
  // useTasks hook.
  return (
    <TasksContext.Provider
      value={{
        createTask,
        deleteTask,
        setTaskStatus,
        tasks,
      }}>
      {children}
    </TasksContext.Provider>
  );
};

// The useTasks hook can be used by any descendant of the TasksProvider. It
// provides the tasks of the TasksProvider's project and various functions to
// create, update, and delete the tasks in that project.
const useTasks = () => {
  const task = useContext(TasksContext);
  if (task == null) {
    throw new Error('useTasks() called outside of a TasksProvider?'); // an alert is not placed because this is an error for the developer not the user
  }
  return task;
};

export {TasksProvider, useTasks};
