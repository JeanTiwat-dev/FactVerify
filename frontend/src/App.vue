<template>
  <nav
    class="bg-[#E14761] flex items-center justify-between py-2 w-full absolute"
  >
    <router-link to="/" class="text-2xl ml-12" style="color: white"
      >FactVerify</router-link
    >
    <div class="flex justify-end space-x-10 items-center mr-8 text-lg">
      <router-link to="/">Home</router-link>
      <router-link to="/form">Form</router-link>
      <router-link to="/about">About Us</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #000;
}
</style>
