# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
In this challange we used data.json file to apply the data into our front-end and display the chart with its label.


### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![image](https://user-images.githubusercontent.com/42742924/174484926-e9932cb8-cf71-4539-940b-98261774af1c.png)


### Links

- Solution URL: [Github Repo](https://github.com/Skyz03/JS--Expense-Chart-V2)
- Live Site URL: [Live](https://skyz03.github.io/JS--Expense-Chart-V2/)

## My process

1. Break down of design into different components like upper, chart area, lower section.
2. Applied css & content
3. Made the data.json come into frontend part by fetching data.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox


### What I learned

Learned about fetching data and processing it to the frontend by sending the variables,

Js
```
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
```


### Useful resources

## Author

- Frontend Mentor - [@Skyz03](https://github.com/Skyz03)

## Acknowledgments
