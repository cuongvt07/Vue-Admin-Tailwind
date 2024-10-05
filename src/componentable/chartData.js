import ApexCharts from 'apexcharts';

export const cards = [
  {
    title: 'Item Sales',
    stat: '4,510',
    iconColor: 'text-blue-400',
    iconPath: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
  },
  {
    title: 'Item Sales',
    stat: '4,510',
    iconColor: 'text-yellow-400',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Item Sales',
    stat: '4,510',
    iconColor: 'text-pink-600',
    iconPath: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
  },
  {
    title: 'Item Sales',
    stat: '4,510',
    iconColor: 'text-green-400',
    iconPath: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
  },
];

export function initializeCharts() {
  var chartLine = document.querySelector('#chartline');
  var optionsLine = {
    series: [
      { name: 'TEAM A', type: 'area', data: [44, 55, 31] },
      { name: 'TEAM B', type: 'line', data: [55, 69, 45] },
    ],
    chart: { height: 350, type: 'line', zoom: { enabled: false } },
    xaxis: {
      categories: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09', 'Dec 10'],
    },
  };
  var lineChart = new ApexCharts(chartLine, optionsLine);
  lineChart.render();

  var chartPie = document.querySelector('#chartpie');
  var optionsPie = {
    series: [44, 55, 67, 83],
    chart: { height: 350, type: 'radialBar' },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '50%',
        },
      },
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  };
  var pieChart = new ApexCharts(chartPie, optionsPie);
  pieChart.render();
}
