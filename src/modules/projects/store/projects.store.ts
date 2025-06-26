import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import type { Project } from "../interfaces/project.interface";
import { useLocalStorage } from "@vueuse/core";


export const useProjectStore = defineStore('projects', () => {
  const projects = ref( useLocalStorage<Project[]>('projects', []) )

  const addProject = (name: string) => {
    if( name.length === 0 ) return;

    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: []
    });

  };

  const addTaskToProject = (name: string, id: string) => {
    if( name.trim().length === 0) return;

    const project = projects.value.find(proj => proj.id === id)
    if(!project) return;

    project.tasks.push({
      id: uuidv4(),
      name,
      completedAt: null,
    })
  };

  return {
    // Properties
    projects,

    //Getters
    projectList: computed(() => [...projects.value]),
    noProjects: computed( () => projects.value.length === 0 ),
    //Actions
    addProject,
    addTaskToProject,
  }
})
