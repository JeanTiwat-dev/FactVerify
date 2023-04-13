<template>
    <div class="bg-[#020617] h-screen">
        <p class="text-6xl text-white py-6">Enter the news you want to check</p>
        <form class="bg-[#E14761] h-screen rounded-t-3xl py-20">
            <div class="flex items-center justify-center py-10">
                <div class="w-full ">
                    <div class="w-full mb-10">
                        <input type="text" 
                            class="w-1/2 p-4 bg-[#FAD7DE] border border-gray-300 rounded-2xl" placeholder="Title">
                    </div>
                    <div class="w-full mb-10">
                        <textarea type="text" 
                            class="w-1/2 p-4 bg-[#FAD7DE] border border-gray-300 rounded-2xl h-32" placeholder="Content"></textarea>
                    </div>
                    <div class="w-full mb-10">
                        <input type="text" 
                            class="w-1/2 p-4 bg-[#FAD7DE] border border-gray-300 rounded-2xl" placeholder="Source">
                    </div>
                    <div class="w-full mb-10">
                        <!-- <label class="block mb-2 text-lg font-medium text-gray-900 dark:text-white ">Upload Media File</label> -->
                        <input  class="w-1/2 p-4 bg-[#FAD7DE] border border-gray-300 rounded-lg cursor-pointer " type="file">
                    </div>
                    <button type="submit" class="text-white bg-[#5b1d28] font-medium rounded-lg text-2xl py-2 px-10 text-center">SEND</button>
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    name: 'FormView.vue',
}
</script>
  