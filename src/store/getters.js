import TodoGetters from './todo/todo-getters';
import ProjectGetters from './project/project-getters';


export const todoGetters = { ...TodoGetters };

export const projectGetters = { ...ProjectGetters };

export default {
  todoGetters,
  projectGetters
};
