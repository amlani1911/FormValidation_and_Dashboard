let graph = document.getElementById('graph1').getContext('2d');
let masspopChart = new Chart(graph, {
  type: 'bar',
  data: {
    labels: ['Material Sale', 'Maintenance', 'HWT Replacement', 'Bid Work PLumbing', 'Service HVAC', 'Bid work HVAC', 'Service Plumbing'],
    datasets: [{
      label: 'Revenue By Job Type',
      data: [
        2500,
        42000,
        44000,
        78000,
        79000,
        130000,
        182000
      ],
      backgroundColor: '#58e6df',
      hoverBorderWidth: 3,
      hoverBorderColor: 'white'
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Revenue By Job Type',
      fontSize: 15
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Revenue for November 2019($)'
        }
      }]
    }
  }
});
let graph2 = document.getElementById('graph2').getContext('2d');
let locChart = new Chart(graph2, {
  type: 'bar',
  data: {
    labels: ['Edmonds', 'Mukilteo', 'Bothell', 'Lynwood', 'Seattie', 'Everett'],
    datasets: [{
      label: 'Revenue By Job Location',
      data: [
        34000,
        46000,
        47500,
        49500,
        75000,
        80000
      ],
      backgroundColor: '#58e6df',
      hoverBorderWidth: 3,
      hoverBorderColor: 'white'
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Revenue By Job Location',
      fontSize: 15
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Revenue for November 2019($)'
        }
      }]
    }
  }
});