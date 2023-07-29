

/**
 * Task
 * @typedef Task
 * @type {object}
 * @property {number} id - id
 * @property {string} task - Task title
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
  status: number;

};
 
/**
 * Tasks filter
 * @typedef filData
 * @type {object}
 * @property {number} status - Task status {waiting , done, cancel}
 */
export class filData { 
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
