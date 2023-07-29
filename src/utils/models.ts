 
/**
 * Task
 * @typedef Task
 * @type {object}
 * @property {number} id - id
 * @property {string} title - Task title
 * @property {number} status - Task status
 */
export class Task {
  /**
   * id
   */
  id: number;
  /**
   * Task title
   */
  task: string;
  /**
   * Task status
   */
  status: number = 1;

};


/**
 * Tasks filter
 * @typedef FilterData
 * @type {object}
 * @property {number} status - Task status {waiting , done, cancel}
 */
export class FilterData { 
  /**
   * Task status {vacation , sickness}
   */
  status!: number; 
};

/**
 * Base Response 
 * @typedef BaseResponseModel
 * @type {object}
 * @property {string} message - message
 */
export class BaseResponseModel {
  /**
   * message
   */
  message!: string;
}
  
/**
 * Task Response 
 * @typedef TaskResponseModel
 * @type {object}
 * @property {Task} data - Tasks data list
 */
export class TaskResponseModel extends BaseResponseModel {
  /**
   * Tasks data list
   */
  data!: Task[];
}


/**
 * Initial State 
 * @typedef InitialStateModel
 * @type {object}
 * @property {TaskResponseModel} tasks - Tasks data list
 * @property {Task} task - Task data
 * @property {boolean} loading - loading
 * @property {boolean} error - error
 * @property {boolean} dataChanged - dataChanged
 */
export class InitialStateModel extends BaseResponseModel {
  tasks: Task[];
  task: Task;
  loading: boolean;
  error: boolean;
  dataChanged: boolean;
  message: string;
}
 