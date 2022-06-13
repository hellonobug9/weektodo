export default class Task {
  id: string;
  startTime: Date;
  title: string;
  desc: string | null;
  status: boolean;
  static schema = {
    name: 'Task',
    primaryKey: 'id',
    properties: {
      id: 'number',
      startTime: 'date',
      title: 'string',
      desc: 'string?',
      status: 'bool',
    },
  };

  constructor(
    id: string,
    startTime: Date,
    title: string,
    desc: string,
    status: boolean,
  ) {
    this.id = id;
    this.startTime = startTime;
    this.title = title;
    this.desc = desc;
    this.status = status;
  }
}
