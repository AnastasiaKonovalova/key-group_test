import { dateGenerator, dataIncrease, arrayCut } from '../utilities/utilities';

const startData = [650, 508, 710, 1000, 960, 1200, 1500, 1750, 2100, 1850, 1700, 1550];

export const data = {
  labels: dateGenerator('2019-04-19', 12),
  datasets: [
    {
      label: 'с 0 до 3',
      data: arrayCut(startData, 1, 0),
      backgroundColor: '#62c4dd'
    },
    {
      label: 'с 3 до 6',
      data: arrayCut(dataIncrease(startData, 0), 1, 1),
      backgroundColor: '#f66f68'
    },
    {
      label: 'с 6 до 9',
      data: arrayCut(dataIncrease(startData, 500), 1, 1),
      backgroundColor: '#50ba71'
    },
    {
      label: 'с 9 до 12',
      data: arrayCut(dataIncrease(startData, 1000), 1, 1),
      backgroundColor: '#fac500'
    },
    {
      label: 'с 12 до 15',
      data: arrayCut(dataIncrease(startData, 3000), 0, 1),
      backgroundColor: '#21a8d9'
    },
    {
      label: 'с 15 до 18',
      data: arrayCut(dataIncrease(startData, 3500), 0, 1),
      backgroundColor: '#30894a'
    },
    {
      label: 'с 18 до 21',
      data: arrayCut(dataIncrease(startData, 4500), 0, 1),
      backgroundColor: '#bf4547'
    },
    {
      label: 'с 21 до 24',
      data: arrayCut(dataIncrease(startData, 6000), 1, 0),
      backgroundColor: '#666666'
    }
  ]
};

export const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Количество посетителей'
        }
      }
    ]
  },
  layout: {
    padding: 20
  },
  legend: {
    position: 'right'
  },
  tooltips: {
    mode: 'x'
  },
  elements: {
    line: {
      fill: true
    }
  }
};
