// Fetch Json from data.json
const data = fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((error) => console.log(error));

// Select the container from the DOM
let chartContainer = document.querySelector(".chart-container");

// Map through data and populate chart
data.then((data) => {
  data.forEach((item) => {
    // Create a new div for each chart item
    let chart = document.createElement("div");
    chart.classList.add("chart");
    const height = item.amount / 7;
    let value = "";
    if (item.day == "wed") {
      value = `<div class="chart-value active" style="--height:${height}em"></div>`;
    } else {
      value = `<div class="chart-value" style="--height:${height}em"></div>`;
    }
    chart.innerHTML = `
        <div class="chart-wrapper">
        ${value}
        </div>
        <div class="chart-title">${item.day}</div>
        `;

    //This is an important line as it adds the chart to the container
    chartContainer.appendChild(chart);
  });
});
