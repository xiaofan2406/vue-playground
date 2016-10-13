import TodoActions from './todo/todo-actions';
import ProjectActions from './project/project-actions';


export const todoActions = { ...TodoActions };

export const projectActions = { ...ProjectActions };

export default {
  todoActions,
  projectActions
};
