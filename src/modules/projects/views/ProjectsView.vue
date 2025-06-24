<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avances</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projectStore.projectList" :key="project.id" class="hover:bg-base-300">
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks.length }}</td>
          <td>
            <progress class="progress progress-primary w-56" value="1" max="100"></progress>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <InputModal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="projectStore.addProject"
    placeholder="Ingrese el nombre del proyecto"
    title="Nuevo proyecto"
    subtitle="Ingrese el nombre del nuevo proyecto que desea crear"
    />

  <custom-modal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Titulo del Modal</h1>
    </template>
    <template #body>
      <p>Lorem ipsum non ullamco</p>
    </template>
    <template #actions>
      <div>
        <button @click="customModalOpen = false" class="btn mr-4">Cerrar</button>
        <button @click="customModalOpen = false" class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </custom-modal>

  <FabButton @click="modalOpen = true">
    <AddCircle />
  </FabButton>
  <FabButton @click="customModalOpen = true" position="bottom-left">
    <AddCircle />
  </FabButton>
</template>

<script setup lang="ts">
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import { ref } from 'vue';
import { useProjectStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectStore = useProjectStore();

</script>
