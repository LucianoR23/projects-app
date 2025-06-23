<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="py-4">{{ subtitle ?? '**Ingrese un subtitulo**' }}</p>

      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            :placeholder="placeholder ?? 'Ingrese un valor'"
            class="input input-primary input-bordered w-full flex-1"
            v-model="inputValue"
            />
          <div class="flex justify-end mt-5">
            <button type="button" @click="closeModal" class="btn mr-4">Cerrar</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>

    </div>
  </dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

  interface Props {
    open: boolean;
    title: string;
    placeholder?: string;
    subtitle?: string;
  }

  defineProps<Props>();

  const emits = defineEmits<{
    close: [void];
    value: [text: string];
  }>();

  const closeModal = () => {
    emits('close')
  }

  const inputValue = ref('');
  const inputRef = ref<HTMLInputElement | null>(null)

  const submitValue = () => {
    if( !inputValue.value ) {
      inputRef.value?.focus();
      return
    };

    emits('value', inputValue.value.trim())
    emits('close')

    inputValue.value = ''
  }

</script>
