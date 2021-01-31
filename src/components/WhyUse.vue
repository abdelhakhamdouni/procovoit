<template>
  <div class="col-12 text-center mt-5 mb-5">
    <h4 class="my-3 text-success mt-5">Covoiturage, pourquoi faire ?</h4>
    <img src="@/assets/image1.jpg" class="rounded img-fluid" width="100%" alt="des personnes dasn une voiture, faisant du covoiturage">
    <div class="bg-light text-success mt-4 p-2 shadow-sm">
      <div><span class="fa fa-seedling"></span></div>
      <h5 class="text-success">Ecologique</h5>
      <small>Reduire le nombre de voitures sur les routes, moins de polution, moins de bruit et moins de déchét!</small>
    </div>
    <div class="bg-light text-success mt-4 p-2 shadow-sm">
      <div><span class="fas fa-money-bill-wave"></span></div>
      <h5 class="text-success">Economique</h5>
      <small>Partager un traget quotidien. Pour mieux maitriser son budget carburant !</small>
    </div>
    <div class="bg-light text-success mt-4 p-2 shadow-sm">
      <div><span class="fa fa-users"></span></div>
      <h5 class="text-success">Conviviale</h5>
      <small>entre collègues, avec des inconues, partager un moment conviviale durant le traget !</small>
    </div>
  </div>

</template>

<style scoped>
.bg-light{
  transition: all .2s ease-in-out;
}
  .bg-light:hover{
    box-shadow: 0 0 15px lightgray !important;
  }

</style>