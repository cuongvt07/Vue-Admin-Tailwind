<template>
    <div :class="{ 'w-[400px]': showSide, 'w-[60px]': !showSide }" class="h-full bg-gray-200 text-white transition-all duration-300">
      <div class="h-[50px] bg-gray-900 flex justify-center items-center">
        <!-- Sidebar header or logo -->
        <div :class="{ 'px-[20px]': showSide }">
          <h3 v-if="showSide" class="font-bold text-xl">VueAdmin</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
        <div class="flex flex-col space-y-[10px]">
          <router-link
            to="/dashboard"
            exact-active-class="active"
            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
          >
            <svg class="mr-2 w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              />
            </svg>
            <span v-if="showSide">Dashboard</span>
          </router-link>
  
          <router-link
            to="/product"
            active-class="active"
            class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
          >
            <svg class="mr-2 w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
            <span v-if="showSide">Product</span>
          </router-link>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showSide: {
        type: Boolean,
        default: true
      }
    }
  };
  </script>
  
  <style scoped>
      .active {
          background-color: #D1D5DB;
          font-weight: bold;
      }
  </style>
  