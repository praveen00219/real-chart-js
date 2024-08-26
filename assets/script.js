const ctx = document.getElementById("realTimeChart").getContext("2d");
let chart;

// Initial data
const initialData = {
  labels: [],
  datasets: [
    {
      label: "Value",
      data: [],
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      fill: false,
      pointRadius: 5,
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
    },
  ],
};

// Chart configuration
const chartConfig = {
  type: "line",
  data: initialData,
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Time",
          color: "#4b5563",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          color: "#4b5563",
        },
        grid: {
          color: "#e5e7eb",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
          color: "#4b5563",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          color: "#4b5563",
        },
        grid: {
          color: "#e5e7eb",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#4b5563",
          font: {
            size: 14,
          },
        },
      },
    },
    animation: {
      duration: 0, // Disable the default animation for updates
    },
  },
};

// Initialize the chart
chart = new Chart(ctx, chartConfig);

// Function to add random data
function addData() {
  const newData = Math.random() * 100; // Generate random data
  chart.data.labels.push(chart.data.labels.length);
  chart.data.datasets[0].data.push(newData);
  chart.update(); // Update the chart

  // Add fadeIn animation to the last data point
  const points = document.querySelectorAll(".chartjs-render-monitor .point");
  const lastPoint = points[points.length - 1];
  if (lastPoint) {
    lastPoint.classList.add("chart-data-point");
  }
}

// Add data at regular intervals (e.g., every 1 second)
setInterval(addData, 1000);
