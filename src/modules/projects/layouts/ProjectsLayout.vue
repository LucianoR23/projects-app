<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';

</script>

<template>
    <div class="flex flex-col">
        <!-- Top Menu -->
        <TopMenu />
        <main class="flex flex-row">
            <!-- side menu -->
            <side-menu />
            <!-- router view -->
             <router-view></router-view>
        </main>
    </div>
</template>
