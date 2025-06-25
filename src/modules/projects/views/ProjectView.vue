<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="project?.name ?? 'No name'" />
    </section>
    <section>
      
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectStore } from '../store/projects.store';
import { useRouter } from 'vue-router';

  interface Props {
    id: string;
  }

  const router = useRouter();
  const props = defineProps<Props>();
  const projectStore = useProjectStore();
  // const project = ref<Project | null>();

  const project = computed(() => {
    const proj = projectStore.projectList.find( project => project.id === props.id )
    if( !proj ){
      router.replace('/')
    }
    return proj
  })

  // watch( () => props.id, () => {
  //   project.value = projectStore.projectList.find( project => project.id === props.id )
  // },
  // {
  //   immediate: true,
  // } )
</script>
