<template>
  <div class="result h-screen bg-[#1E1E1E]">
    <div class="flex items-center justify-center space-x-16 pt-24">
      <div class="relative">
        <div class="w-44 h-44">
          <Doughnut :data="data1" :options="options" />
        </div>
        <p class="mt-8 text-xl text-white font-bold">
          {{ result.data_result.consistency }}%
        </p>
        <p class="mt-4 text-xl text-white font-bold">Consistency</p>
      </div>
      <div class="relative">
        <div class="w-44 h-44">
          <Doughnut :data="data2" :options="options" />
        </div>
        <p class="mt-8 text-xl text-white font-bold">
          {{ result.data_result.adaptation }}%
        </p>
        <p class="mt-4 text-xl text-white font-bold">Adaptation</p>
      </div>
      <div class="relative">
        <div class="w-44 h-44">
          <Doughnut :data="data3" :options="options" />
        </div>
        <p class="mt-8 text-xl text-white font-bold">
          {{ result.data_result.ambiguity }}%
        </p>
        <p class="mt-4 text-xl text-white font-bold">Ambiguity</p>
      </div>
      <div class="relative">
        <div class="w-44 h-44">
          <Doughnut :data="data4" :options="options" />
        </div>
        <p class="mt-8 text-xl text-white font-bold">
          {{ result.data_result.false_information }}%
        </p>
        <p class="mt-4 text-xl text-white font-bold">False_information</p>
      </div>
    </div>
    <div
      class="bg-[#E14761] w-[50%] my-12 mx-auto h-[50%] rounded-xl text-white font-bold space-y-32"
    >
      <p class="pt-8 text-2xl">Result</p>
      <p class="text-5xl">{{ result.data_result.message }}</p>
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
      result: JSON.parse(localStorage.getItem("result")),
      data1: {
        labels: ["Good", "Bad"],
        datasets: [
          {
            backgroundColor: ["#98D8AA", "#FF6D60"],
            data: [
              JSON.parse(localStorage.getItem("result")).data_result
                .consistency,
              100 -
                JSON.parse(localStorage.getItem("result")).data_result
                  .consistency,
            ],
            cutout: "0%",
          },
        ],
      },
      data2: {
        labels: ["Good", "Bad"],
        datasets: [
          {
            backgroundColor: ["#98D8AA", "#FF6D60"],
            data: [
              JSON.parse(localStorage.getItem("result")).data_result.adaptation,
              100 -
                JSON.parse(localStorage.getItem("result")).data_result
                  .adaptation,
            ],
            cutout: "0%",
          },
        ],
      },
      data3: {
        labels: ["Good", "Bad"],
        datasets: [
          {
            backgroundColor: ["#98D8AA", "#FF6D60"],
            data: [
              JSON.parse(localStorage.getItem("result")).data_result.ambiguity,
              100 -
                JSON.parse(localStorage.getItem("result")).data_result
                  .ambiguity,
            ],
            cutout: "0%",
          },
        ],
      },
      data4: {
        labels: ["Good", "Bad"],
        datasets: [
          {
            backgroundColor: ["#98D8AA", "#FF6D60"],
            data: [
              JSON.parse(localStorage.getItem("result")).data_result
                .false_information,
              100 -
                JSON.parse(localStorage.getItem("result")).data_result
                  .false_information,
            ],
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
  mounted() {
    console.log(JSON.parse(localStorage.getItem("result")));
  },
};
</script>
