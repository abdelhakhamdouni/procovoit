<template>
  <ul class="nav bg-light justify-content-around fixed-bottom">
    <li class="nav-item">
      <router-link class="nav-link" to="/"><sapn class="fa fa-home"></sapn></router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="recherche"><sapn class="fa fa-search"></sapn></router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="profile"><sapn class="fa fa-user"></sapn></router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="reglages"><sapn class="fa fa-bars"></sapn></router-link>
    </li>
  </ul>
</template>
<style scoped>
.nav{
  box-shadow: 0 0 8px gray;
}
.nav-link{
  color: #737373;
  font-size: 1.1em;
}
.nav-link.router-link-exact-active{
  color: #327ee5;
}
</style>