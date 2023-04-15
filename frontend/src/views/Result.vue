<template>
  <div class="result h-screen bg-[#1E1E1E]">
    <div class="flex items-center justify-center space-x-16 pt-24">
      <div class="relative">
        <div class="w-44 h-44">
          <Doughnut :data="data" :options="options" />
        </div>
        <p class="mt-8 text-xl text-white font-bold">60%</p>
        <p class="mt-4 text-xl text-white font-bold">Consistency</p>
      </div>
      <div class="relative">
        <div class="w-44 h-44">
          <Doughnut :data="data" :options="options" />
        </div>
        <p class="mt-8 text-xl text-white font-bold">60%</p>
        <p class="mt-4 text-xl text-white font-bold">Consistency</p>
      </div>
      <div class="relative">
        <div class="w-44 h-44">
          <Doughnut :data="data" :options="options" />
        </div>
        <p class="mt-8 text-xl text-white font-bold">60%</p>
        <p class="mt-4 text-xl text-white font-bold">Consistency</p>
      </div>
      <div class="relative">
        <div class="w-44 h-44">
          <Doughnut :data="data" :options="options" />
        </div>
        <p class="mt-8 text-xl text-white font-bold">60%</p>
        <p class="mt-4 text-xl text-white font-bold">Consistency</p>
      </div>
    </div>
    <div
      class="bg-[#E14761] w-[50%] my-12 mx-auto h-[50%] rounded-xl text-white font-bold space-y-32"
    >
      <p class="pt-8 text-2xl">Result</p>
      <p class="text-5xl">Reliable</p>
    </div>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Doughnut,
  },
  data() {
    return {
      data: {
        labels: ["Good", "Bad"],
        datasets: [
          {
            backgroundColor: ["#98D8AA", "#FF6D60"],
            data: [60, 40],
            cutout: "0%",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
};
</script>
