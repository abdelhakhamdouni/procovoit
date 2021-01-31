import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    covoits: [
      {
        aller:{
          ville_depart: 'Olréans',
          quartier_dapart: 'Argonne',
          ville_dist: 'Saran',
          quartier_dist: 'Pole 45',
          entreprise: 'Amazon',
          heure_depart: "12:00",
          heure_dist: "12:40"
        },
        retour:{
          ville_depart: 'Saran',
          quartier_dapart: 'Pole45',
          ville_dist: 'Olréans',
          quartier_dist: 'Argonne',
          entreprise: 'Amazon',
          heure_depart: "20:30",
          heure_dist: "21:10"
        },
        jours: "lundi - vendredi"
      },
      {
        aller:{
          ville_depart: 'Olréans',
          quartier_dapart: 'Argonne',
          ville_dist: 'Saran',
          quartier_dist: 'Pole 45',
          entreprise: 'Amazon',
          heure_depart: "12:00",
          heure_dist: "12:40"
        },
        retour:{
          ville_depart: 'Saran',
          quartier_dapart: 'Pole45',
          ville_dist: 'Olréans',
          quartier_dist: 'Argonne',
          entreprise: 'Amazon',
          heure_depart: "20:30",
          heure_dist: "21:10"
        },
        jours: "lundi - vendredi"
      },
      {
        aller:{
          ville_depart: 'Olréans',
          quartier_dapart: 'Argonne',
          ville_dist: 'Saran',
          quartier_dist: 'Pole 45',
          entreprise: 'Amazon',
          heure_depart: "12:00",
          heure_dist: "12:40"
        },
        retour:{
          ville_depart: 'Saran',
          quartier_dapart: 'Pole45',
          ville_dist: 'Olréans',
          quartier_dist: 'Argonne',
          entreprise: 'Amazon',
          heure_depart: "20:30",
          heure_dist: "21:10"
        },
        jours: "lundi - vendredi"
      },
      {
        aller:{
          ville_depart: 'Olréans',
          quartier_dapart: 'Argonne',
          ville_dist: 'Saran',
          quartier_dist: 'Pole 45',
          entreprise: 'Amazon',
          heure_depart: "12:00",
          heure_dist: "12:40"
        },
        retour:{
          ville_depart: 'Saran',
          quartier_dapart: 'Pole45',
          ville_dist: 'Olréans',
          quartier_dist: 'Argonne',
          entreprise: 'Amazon',
          heure_depart: "20:30",
          heure_dist: "21:10"
        },
        jours: "lundi - vendredi"
      },
    ]
  },
  getters: {
    covoits: state => {
      return state.covoits
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
