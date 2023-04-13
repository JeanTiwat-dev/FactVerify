<template>
    <div class="bg-[#020617] h-screen">
        <p class="text-6xl text-white py-6">Enter the news you want to check</p>
        <div class="bg-[#E14761] h-screen rounded-t-3xl py-20" >
            <div class="flex items-center justify-center py-10">
                <div class="w-full ">
                    <div class="w-full mb-10">
                        <input type="text" class="w-1/2 p-4 bg-[#FAD7DE] border border-gray-300 rounded-2xl"
                            placeholder="Title" v-model="title">
                    </div>
                    <div class="w-full mb-10">
                        <textarea type="text" class="w-1/2 p-4 bg-[#FAD7DE] border border-gray-300 rounded-2xl h-32"
                            placeholder="Content" v-model="content"></textarea>
                    </div>
                    <div class="w-full mb-10">
                        <input type="text" class="w-1/2 p-4 bg-[#FAD7DE] border border-gray-300 rounded-2xl"
                            placeholder="Source URL"  v-model="soucre_url">
                    </div>
                    <div class="w-full mb-10">
                        <!-- <label class="block mb-2 text-lg font-medium text-gray-900 dark:text-white ">Upload Media File</label> -->
                        <input class="w-1/2 p-4 bg-[#FAD7DE] border border-gray-300 rounded-lg cursor-pointer " type="file">
                    </div>
                    <button type="submit"
                        class="text-white bg-[#5b1d28] font-medium rounded-lg text-2xl py-2 px-10 text-center" @click="sendForm()">SEND</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: 'FormView.vue',
    data() {
        return {
            title: "",
            content: "",
            soucre_url: ""
        }
    },
    methods: {
        async sendForm() {
            const data = {
                title: this.title,
                content: this.content,
                soucre_url: this.soucre_url,
            }

            axios.post("http://localhost:5000/sendForm", data)
                .then(res => {
                    console.log(res.data.result)
                }).catch(err => {
                    console.log(err)
                })

        }
    }
}
</script>
  