<template>
  <div>
    <div class="card p-0 mx-0" v-for="covoit in covoits" v-bind:key="covoit">
      <div class="card-header bg-info text-white">
        Depuis et vers <strong>{{covoit.aller.entreprise}} ( {{covoit.jours}} )</strong>
      </div>
      <div class="card-body p-0">
        <div class="card-body d-flex w-100 justify-content-between py-0">
          <div class="left">
            <h5 class="p-0  m-0">{{covoit.aller.ville_depart}}</h5>
            <small  class="text-muted">{{covoit.aller.quartier_dapart}}</small>
            <p  class="font-weight-bold">{{covoit.aller.heure_depart}}</p>
          </div>
          <div class="center font-weight-bold d-flex justify-content-center align-items-center">--------></div>
          <div class="right">
            <h5 class="p-0 m-0">{{covoit.aller.ville_dist}}</h5>
            <small  class="text-muted">{{covoit.aller.quartier_dist}}</small>
            <p  class="font-weight-bold">{{covoit.aller.heure_dist}}</p>
          </div>
        </div>
        <a href="#" class="btn btn-primary btn-sm mr-1">Voir</a>
        <a href="#" class="btn btn-danger btn-sm">Signaler</a>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data(){
    return {
      covoits: store.getters.covoits

    }
  }
}
</script>
