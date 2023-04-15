<template>
    <div>
        <div class="">
            <p class="absolute top-0 left-0 right-0 bottom-0 m-auto">50%</p>
            <Doughnut :data="data" :options="options" />
        </div>
    </div>
</template>

<script>

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        Doughnut
    },
    data() {
        return {
            data: {
                labels: ['VueJs', 'EmberJs'],
                datasets: [
                {
                    backgroundColor: ['#41B883', '#E46651'],
                    data: [40, 20],
                    cutout: '70%'
                }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                    display: false,
                },
            },
            }
        }
    }
}
</script>

