$('.menu .item')
  .tab()
;


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Temperature',
            backgroundColor: '#1d1c22',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20,5]
        }]
    },

    // Configuration options go here
    options: {}
});