<template>
  <div>
    <TopBar />
    <main class="container main">
      <router-view></router-view>
    </main>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
export default {
  components: {TopBar, Navbar},
  data: () => ({}),

}
</script>
<style scoped>
.main{
  padding-top: 3.5em;
}
</style>