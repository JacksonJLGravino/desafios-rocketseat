const options = {
  series: [
    {
      name: 'cambio',
      data: [
        {
          x: new Date('2023-06-11').getTime(),
          y: 4.87
        },
        {
          x: new Date('2023-06-12').getTime(),
          y: 4.9
        },
        {
          x: new Date('2023-06-13').getTime(),
          y: 4.86
        },
        {
          x: new Date('2023-06-14').getTime(),
          y: 4.82
        },
        {
          x: new Date('2023-06-15').getTime(),
          y: 4.8
        }
      ]
    }
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  yaxis: {
    min: 4.5,
    max: 5.5,
    tickAmount: 5,
    labels: {
      formatter: (value) => {
        return value.toFixed(1).replace('.', ',')
      }
    }
  },
  xaxis: {
    labels: {
      show: false
    },
    tooltip: {
      enabled: false
    },
    axisTicks: {
      show: false
    }
  },
  fill: {
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  colors: ['#7C3AED'],
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<div class="tooltip">
    <span>${String(series[seriesIndex][dataPointIndex]).replace(
      '.',
      ','
    )}</span>
    <span>${new Date(
      w.globals.seriesX[seriesIndex][dataPointIndex]
    ).toLocaleDateString('pt-BR', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })}</span>
    </div>`
    }
  }
}

const chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()

function converter() {
  const newValue = document.querySelector('#newValue')
  const value = document.querySelector('#value')

  let n = parseFloat(value.value) * 4.8

  newValue.value = n.toFixed(2)
}
