 
/**
 * Task
 * @typedef Member
 * @type {object}
 * @property {number} id - id
 * @property {string} image - Task title
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
