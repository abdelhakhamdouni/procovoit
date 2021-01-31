<template>
  <ul class="nav bg-light justify-content-around fixed-bottom">
    <li class="nav-item">
      <router-link class="nav-link" to="/"><span class="fa fa-home"></span></router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="recherche"><span class="fa fa-search"></span></router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="plus"><span class="fa fa-plus"></span></router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="profile"><span class="fa fa-user"></span></router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="reglages"><span class="fa fa-bars"></span></router-link>
    </li>
  </ul>
</template>
<style scoped>
.nav{
  box-shadow: 0 0 8px gray;
}
.nav-link{
  color: #565656;
  font-size: 1.1em;
}
.nav-link.router-link-exact-active{
  color: #00cea1;
}
</style>