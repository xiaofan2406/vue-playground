import { set as vueSet, delete as vueDelete } from 'vue';

import getters from './project-getters';
import actions from './project-actions';


const mutations = {
  addProject: 'project/addProject',
  removeProject: 'project/removeProject',
  setProjectName: 'project/setProjectName',
  addTodo: 'project/addTodo',
  removeTodo: 'project/removeTodo'
};

// export default {
//   ADD_PROJECT: 'project/ADD_PROJECT',
//   REMOVE_PROJECT: 'project/REMOVE_PROJECT',
//   SET_PROJECT_NAME: 'project/SET_PROJECT_NAME',
//   ADD_TODO: 'project/ADD_TODO',
//   REMOVE_TODO: 'project/REMOVE_TODO',
//   TOGGLE_TODO: 'project/TOGGLE_TODO',
//   SET_SEARCH: 'project/SET_SEARCH',
//   SET_FILTER: 'project/SET_FILTER',
//   SET_TODO_NAME: 'project/SET_TODO_NAME'
// };

export default {
  state: {
    projects: {}
    /*
    {
      id: string,
      name: string,
      todos: {
        id: {
          id: string,
          name: string,
          completed: bool
        }
      }
    }
    */
  },
  mutations: {
    [mutations.addProject](state, payload) {
      vueSet(state.projects, payload.id, payload);
    },
    [mutations.removeProject](state, payload) {
      vueDelete(state.projects, payload);
    },
    [mutations.setProjectName](state, payload) {
      state.projects[payload.id].name = payload.name;
    },
    [mutations.addTodo](state, payload) {
      vueSet(state.projects[payload.projectId].todos, payload.id, payload);
    },
    [mutations.removeTodo](state, payload) {
      vueDelete(state.projects[payload.projectId].todos, payload.id);
    }
  },
  getters: {
    [getters.ALL_PROJECTS]: state => Object.keys(state.projects).map(id => state.projects[id])
  },
  actions: {
    [actions.ADD_PROJECT]({ commit }, project) {
      const payload = {
        todos: {},
        ...project
      };
      commit(mutations.addProject, payload);
    },
    [actions.REMOVE_PROJECT]({ commit }, id) {
      commit(mutations.removeProject, id);
    },
    [actions.SET_PROJECT_NAME]({ commit }, newName) {
      commit(mutations.setName, newName);
    },
    [actions.ADD_TODO]({ commit }, todo) {
      commit(mutations.addTodo, todo);
    },
    [actions.REMOVE_TODO]({ commit }, { projectId, id }) {
      commit(mutations.removeTodo, { projectId, id });
    }
  }
};
