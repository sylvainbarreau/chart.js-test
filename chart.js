const ctx = document.getElementById('myChart');

  let graph = new Chart(ctx, {
    type: 'bar',
    data: null,
    options: null
  });

  graph.data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  };
  graph.update();

  graph.data.datasets[0] = {
    label: 'nombre of Votes',
    data: [5, 5, 4, 8, 7, 6],
    borderWidth: 10
  };
  graph.update();