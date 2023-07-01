const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
];

const grafico = document.getElementById('grafico')
const labels = data.map(item=>item.year)
const values = data.map(item=>item.count)
console.log(labels)
console.log(values)

new Chart(grafico, {
    type: 'bar',
    options: {
        animation: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        }
    },
    data:{
        labels: labels,
        datasets: [
            {
                label: 'Acquisitions by year',
                data: values
            },
            {
                label: 'Acquisitions by year 2',
                data: values
            }
        ]
    }
})