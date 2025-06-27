<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="project?.name ?? 'No name'" />
    </section>
    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in project?.tasks" :key="task.id" class="hover:bg-base-300">
              <th>
                <input type="checkbox" @change="projectStore.toggleTask(project?.id ?? '', task.id)" :checked="!!task.completedAt" class="checkbox checkbox-primary">
              </th>
              <td>{{ task.name }}</td>
              <td>{{ task.completedAt ?? 'Incompleto' }}</td>
            </tr>
            <tr class="hover:bg-base-300">
              <th></th>
              <td>
                <input @keyup.enter="handleAddTask" v-model="taskName" type="text" placeholder="Nueva tarea" class="hover:opacity-100 focus:opacity-100 input input-primary w-full opacity-60 transition-all">
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectStore } from '../store/projects.store';
import { useRouter } from 'vue-router';

  interface Props {
    id: string;
  }

  const router = useRouter();
  const props = defineProps<Props>();
  const projectStore = useProjectStore();
  const taskName = ref('');

  const project = computed(() => {
    const proj = projectStore.projectList.find( project => project.id === props.id )
    if( !proj ){
      router.replace('/')
    }
    return proj
  });



  const handleAddTask = () => {
    projectStore.addTaskToProject(taskName.value, props.id)
    taskName.value = '';
  }

  // watch( () => props.id, () => {
  //   project.value = projectStore.projectList.find( project => project.id === props.id )
  // },
  // {
  //   immediate: true,
  // } )
</script>
