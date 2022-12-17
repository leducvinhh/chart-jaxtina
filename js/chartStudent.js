import randomColor from './common.js';

const handleData = (data) => {
  var BAChartDataValue = Object.values(data);

  var BAChartDataLabel = Object.keys(data).map(item => `${item}(${data[item]})`);

  var BAChartJobErrColors = BAChartDataValue.map((item, index) => randomColor(index));

  var BAChartCountTotal = 0;

  if (BAChartDataValue.length > 0) {

    BAChartCountTotal = BAChartDataValue.reduce(function (
      acc,
      currentVal
    ) {
      return acc + currentVal;
    },
    0);
  }

  createChartStudent(
    BAChartDataValue,
    BAChartDataLabel,
    BAChartJobErrColors,
    BAChartCountTotal
  );
};

function createChartStudent(data, label, colorItem, total) {
  var BAChartCtx = document
    .getElementById("chart-tab-student")
    .getContext("2d");

  new Chart(BAChartCtx, {
    type: "doughnut",
    data: {
      labels: label,
      datasets: [
        {
          data: data,
          backgroundColor: colorItem,
          borderColor: "#fff",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: "top",
        fontSize: 18,
        fontColor: "#fff",
        fontStyle: "bold",
        padding: 24,
        text: "Danh sách các lớp",
      },
      plugins: {
        labels: [
          {
            render: "label",
            fontColor: "#fff",
            position: "outside",
            fontSize: "15",
            fontStyle:"bold",
          },
          {
            render: "percentage",
            fontColor: "#000",
            fontSize: "15",
            fontStyle:"bold",
          },
        ],
        doughnutlabel: {
          labels: [
            {
              text: "Total: " + total,
              font: {
                size: "30",
              },
              color: "#0ff",
            },
          ],
        },
      },
      legend: {
        display: false,
      },
    },
  });
}

const renderChartStudent = (data) => {
  handleData(data)
}

export default renderChartStudent;
