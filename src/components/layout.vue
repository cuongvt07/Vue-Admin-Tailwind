<template>
    <div class="w-screen h-screen flex">
      <!-- Sidebar -->
      <Sidebar :showSide="showSide" />
  
      <!-- Main content -->
      <div class="w-full h-full">
        <!-- Header -->
        <Header @toggle-sidebar="toggleSideBar" />
        
        <!-- Layout khung ngoài -->
        <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
          <div class="border border-gray-300 rounded-md p-[10px] h-full">
            <div class="h-full overflow-y-auto">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/sidebar.vue';
  import Header from '@/components/header.vue';
  
  export default {
    components: {
      Sidebar,
      Header
    },
    data() {
      return {
        showSide: true
      };
    },
    methods: {
      toggleSideBar() {
        this.showSide = !this.showSide;
      }
    }
  };
  </script>
  
  <style scoped></style>
  