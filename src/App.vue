<script setup>
import { ref, shallowRef, computed, onMounted } from "vue";
import Chart from "chart.js/auto";
import data from "../data.json";
const dataRef = ref(data);
const expenseChart = shallowRef(null);
const expenseChartEl = ref(null);

// const weekDay = computed(()=>{
//   return new Date().getDay();
// });

const week = computed(() => {
  return dataRef.value.map((data) => {
    return data.day;
  });
});

const amount = computed(() => {
  return dataRef.value.map((data) => {
    return data.amount;
  });
});


onMounted(() => {


  expenseChart.value = new Chart(expenseChartEl.value.getContext("2d"), {
    type: "bar",
    data: {
      labels: week.value,
      datasets: [
        {
          label: "",
          data: amount.value,
          backgroundColor: "#ec755d",
          borderColor: "#ec755d",
          borderWidth: 1,
          fill: true,
          hoverBackgroundColor: "#f9b3a7",
          hoverBorderColor: "#f9b3a7",
          borderRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
        y: {
          border: {
            display: false,
          },
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
});
</script>

<template>
  <main>
    <section class="top-section">
      <div class="text-container">
        <p>My balance</p>
        <h2>$921.48</h2>
      </div>
      <div class="flex-1"></div>
      <span class="circles-container">
        <div class="white-circle"></div>
        <div class="black-circle"></div>
      </span>
    </section>
    <section class="bottom-section">
      <h1>Spending - Last 7 days</h1>

      <div class="canvas-box">
        <canvas ref="expenseChartEl"></canvas>
      </div>

      <hr />
      <div class="bottom-section__bottom">
        <div class="bottom-section__left-container">
        <p>Total this month</p>
        <h2>$478.33</h2>
      </div>
      <div class="bottom-section__right-container">
        <h2>+2.4%</h2>
        <p>from last month</p>
      </div>
      </div>
      
    </section>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.top-section {
  width: 50%;
  background-color: #ec755d;
  border-radius: 1rem;
  display: flex;
  padding: 1rem 2rem;
  color: white;
  height: 12vh;
  align-items: center;
}

.bottom-section {
  border-radius: 1rem;
  width: 50%;
  height: 50vh;
  margin-top: 2rem;
  background-color: #fffcf7;
  padding: 1.5rem;
}
.black-circle,
.white-circle {
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
}
.circles-container {
  position: relative;
}
.white-circle {
  border: 1px solid white;
  position: absolute;
  left: -50%;
}
.black-circle {
  border: 1px solid rgb(45, 45, 45);
  background-color: rgb(45, 45, 45);
}
.flex-1 {
  flex: 1 1 0%;
}
.text-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
hr{
  background-color: rgb(222, 222, 222);
  border: solid 0.3px rgb(222, 222, 222);
  margin: 2rem 0;
}
.canvas-box{
  margin-top: 1rem;
}
.bottom-section h1{
  color: rgb(63, 63, 63);
}
.bottom-section__bottom{
  display: flex;
  justify-content: space-between;
  height: 5rem;
}
.bottom-section__left-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgb(63, 63, 63);
}
.bottom-section__right-container{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  color: rgb(63, 63, 63);
}
.bottom-section__left-container p,
.bottom-section__right-container p{
  color: rgb(213, 213, 213);
}

</style>
