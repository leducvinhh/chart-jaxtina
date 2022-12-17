const handleData = (data) => {
  const dataPeriod1 = [];
  const dataPeriod2 = [];

  const labels = ["Team1", "Team2", "Team3", "Team4"];

  for (const [key, value] of Object.entries(data)) {
    key.includes('_1') && dataPeriod1.push(value);
    key.includes('_2') && dataPeriod2.push(value);
  }

  createChartFt(labels, dataPeriod1, dataPeriod2);
}

const createChartFt = (labels, dataPeriod1, dataPeriod2) => {
  new Chart(document.getElementById("chart-tab-pt"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Period 1",
          backgroundColor: "#3e95cd",
          data: dataPeriod1,
        },
        {
          label: "Period 2",
          backgroundColor: "#8e5ea2",
          data: dataPeriod2,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            display: true,
            ticks: {
              fontColor: "#fff",
              fontSize: 20,
            },

          },
        ],
        yAxes: [
          {
            display: true,
            ticks: {
              fontColor: "#fff",
              fontSize: 20,
              beginAtZero: true,
            },
            gridLines: {
              display: true,
              lineWidth: 0.5,
              color: '#fff'
            },
          },
        ],
      },
      title: {
        display: true,
        text: "Scored Points ",
        fontSize: 40,
        fontColor: "#fff",
        fontStyle: "bold",
        padding: 24,
      },
      plugins: {
        labels: [
          {
            render: "value",
            fontColor: "#fff",
            fontSize: 20,
            fontStyle: "bold",
          },
        ],
      },
      legend: {
        position: 'bottom',
        labels: {
          fontColor: "#ffffff",
          fontSize: 20,
        },
      },
    },
  });
}

const renderChartFt = (data) => {
  handleData(data);
};

export default renderChartFt;
