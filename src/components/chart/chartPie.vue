<template>
    <div class="bg-white shadow-lg" id="chartpie" style="min-height: 353px;"></div>
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
          series: [44, 55, 67, 83],
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '50%',
              },
            },
          },
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        };
  
        var chart = new ApexCharts(document.querySelector('#chartpie'), options);
        chart.render();
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  