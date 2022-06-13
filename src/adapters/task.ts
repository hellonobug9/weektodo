import TaskService from '@/services/task';
import BaseAdapter from './base';

export default class TaskAdapter extends BaseAdapter {
  private _taskService: TaskService;

  constructor() {
    super();
    this._taskService = new TaskService();
  }
}
