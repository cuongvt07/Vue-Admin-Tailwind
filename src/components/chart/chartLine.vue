<template>
    <div class="bg-white shadow-lg p-4" id="chartline" style="min-height: 365px;"></div>
  </template>
  
  <script>
  import ApexCharts from 'apexcharts';
  
  export default {
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        var options = {
          series: [
            { name: 'TEAM A', type: 'area', data: [44, 55, 31] },
            { name: 'TEAM B', type: 'line', data: [55, 69, 45] },
          ],
          chart: {
            height: 350,
            type: 'line',
            zoom: { enabled: false },
          },
          xaxis: {
            categories: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09', 'Dec 10'],
          },
        };
  
        var chart = new ApexCharts(document.querySelector('#chartline'), options);
        chart.render();
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  