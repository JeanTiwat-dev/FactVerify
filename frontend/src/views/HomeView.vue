<template>
  <div class="home min-h-screen bg-[#1E1E1E]">
    <div class="content flex ml-36">
      <div class="mt-32">
        <p class="text-[#E14761] font-black text-2xl text-left pl-1 mb-2">
          WE ARE READY HELP YOU
        </p>
        <p class="text-8xl font-bold text-white text-left mb-10">FactVerify</p>
        <p class="text-white text-left w-[55%] mb-10 leading-7">
          FactVerify เป็น Web Application ที่มีการใช้เทคโนโลยีของ AI ในด้านต่างๆ
          ในการตรวจสอบ โดย Machine Learning
          ใช้สำหรับการตรวจสอบข่าวเทียบกับฐานข้อมูลข่าวที่เชื่อถือได้
          เพื่อจำแนกระหว่างข่าวที่น่าเชื่อถือและข่าวเท็จ ใช้ Natural Language
          Processing (NLP) เพื่อวิเคราะห์และประมวลผลข้อความในข่าว
          เพื่อค้นหาคำศัพท์หรือแท็กที่มีความสัมพันธ์กับข่าวเทียบกับฐานข้อมูลข่าวที่เชื่อถือได้
          เพื่อช่วยในการตรวจสอบ ใช้ Computer Vision
          เพื่อตรวจสอบภาพและวิดีโอว่าถูกตกแต่งให้ดูโดดเด่นเกินจริงหรือไม่
          หรือเป็นภาพเคลื่อนไหวที่ถูกตัดต่อและสร้างขึ้นมา และใช้ Deep Learning
          ใช้ในการตรวจสอบข่าวที่มีข้อมูลปลอม
          หรือข่าวที่ไม่มีข้อมูลปลอมแต่มีเนื้อหาที่สร้างความสับสนหรือความเข้าใจผิดกันได้ง่าย
        </p>
        <router-link
          to="/form"
          class="text-white text-2xl font-extrabold bg-[#E14761] hover:bg-[#af1d35] p-3 px-8 rounded-xl float-left"
          >GET STARTED
        </router-link>
      </div>
    </div>
    <footer
      class="absolute bottom-0 bg-[#E14761] w-full h-[10%] justify-between flex px-20 text-lg text-white font-bold items-center"
    >
      <div class="flex space-x-8 items-center">
        <router-link to="/">Product</router-link>
        <router-link to="/">Blog</router-link>
        <router-link to="/">About</router-link>
        <router-link to="/">Contacts</router-link>
      </div>
      <div class="flex text-lg text-white font items-center">
        © 2023 FactVerify
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
