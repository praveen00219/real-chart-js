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
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
    animation: false, // Disable default chart.js animation
  },
};

// Initialize the chart
chart = new Chart(ctx, chartConfig);

// Function to add random data with anime.js animation
function addData() {
  const newData = Math.random() * 100; // Generate random data
  chart.data.labels.push(chart.data.labels.length);
  chart.data.datasets[0].data.push(newData);
  chart.update(); // Update the chart

  // Apply anime.js animation to the latest data point
  anime({
    targets: chart.data.datasets[0].data,
    easing: "easeOutElastic(1, .5)",
    duration: 1500,
    round: 1, // Round off data values to integers
  });
}

// Add data at regular intervals (e.g., every 1 second)
setInterval(addData, 1000);
