import TaskDao from '@/daos/task';

export default class TaskService {
  _taskDao: TaskDao;

  constructor() {
    this._taskDao = new TaskDao();
  }
}
