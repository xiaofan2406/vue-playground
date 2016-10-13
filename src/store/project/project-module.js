import { set as vueSet, delete as vueDelete } from 'vue';
import { v4 } from 'node-uuid';

import getters from './project-getters';
import actions from './project-actions';


const mutations = {
  addProject: 'project/addProject',
  removeProject: 'project/removeProject',
  setName: 'project/setName'
};


export default {
  state: {
    projects: {}
    /*
    {
      id: string,
      name: string,
      todos: [{
        id: string,
        name: string,
        completed: bool
      }]
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
    [mutations.setName](state, payload) {
      state.projects[payload.id].name = payload.name;
    }
  },
  getters: {
    [getters.ALL_PROJECTS]: state => Object.keys(state.projects).map(id => state.projects[id])
  },
  actions: {
    [actions.ADD_PROJECT]({ commit }, project) {
      if (typeof project === 'string') {
        commit(mutations.addProject, {
          id: v4(),
          name: project
        });
      } else {
        commit(mutations.addProject, project);
      }
    },
    [actions.REMOVE_PROJECT]({ commit }, id) {
      commit(mutations.removeProject, id);
    },
    [actions.SET_NAME]({ commit }, newName) {
      commit(mutations.setName, newName);
    }
  }
};
