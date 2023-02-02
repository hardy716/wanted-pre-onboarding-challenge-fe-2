/**
 * A Todo data type
 * @typedef {Object} Todo - Todo 타입
 * @property {string} id - 아이디(required)
 * @property {string} content - 내용(required)
 * @property {boolean} completed - 완료여부(required)
 * @property {string} category - 카테코리(required)
 * @property {Array<string>} tags - 태그들(optional)
 */

/**
 * createTodo : 할 일을 추가한다.
 * @param {string} content - 내용(required)
 * @param {string} category - 카테코리(optional)
 * @property {boolean} completed - 완료여부(optional)
 * @param {Array<string>} tags - 태그들(optional)
 */
async function createTodo(content, category, tags) {}

/**
 * getAllTodo : 모든 할 일을 조회한다.
 * @returns {Promise<Todo[]>}
 */
async function getAllTodo() {}

/**
 * getTodo : ID를 기반으로 특정 할 일을 조회한다.
 * @param {id} id - 아이디(required)
 * @returns {Promise<Todo>}
 */
async function getTodo(id) {}

/**
 * updateTodo : ID를 제외한 모든 속성을 수정한다.
 * @param {UpdateTodo} id - 아이디(required)
 * @returns {Promise<Todo>}
 */
async function updateTodo(id) {}

/**
 * updateTag : 특정 할 일의 특정 태그를 수정한다.
 * @param {UpdateTodo} id - 아이디(required)
 * @returns {Promise<Todo>}
 */
async function updateTag(id) {}

/**
 * deleteTodo : ID를 기반으로 특정 할 일을 삭제한다.
 * @param {id} id - 아이디(required)
 * @returns {Promise<any>}
 */
async function deleteTodo(id) {}

/**
 * deleteAllTodo : 모든 할 일을 제거한다.
 * @returns {Promise<any>}
 */
async function deleteAllTodo() {}

/**
 * deleteTag : 특정 할 일의 특정 태그를 삭제한다.
 * @param {id} id - 아이디(required)
 * @param {Tag} tag - 태그(required)
 * @returns {Promise<any>}
 */
async function deleteTag(id, tag) {}

/**
 * deleteAllTags : 특정 할 일의 모든 태그를 제거한다.
 * @param {id} id - 아이디(required)
 * @returns {Promise<any>}
 */
async function deleteAllTags(id) {}