import Vue from 'vue';
import Vuex from 'vuex';

import todoModule from './todo/todo-module';
import projectModule from './project/project-module';


Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    todo: todoModule,
    project: projectModule
  },
  strict: process.env.NODE_ENV === 'development'
});
