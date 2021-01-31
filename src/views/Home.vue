<template>
  <div class="mt-3 mb-5">
      <div class="col-12 text-center mt-5 ">
        <router-link to="recherche" class="btn btn-lg btn-primary"><span class="fa fa-search"></span> Chercher un Covoit</router-link>
      </div>
      <div class="col-12 text-center mt-5">
        <router-link to="plus" class="btn btn-lg btn-success"><span class="fa fa-plus"></span> Proposer du Covoit</router-link>
      </div>

    <WhyUse />
  </div>
</template>
<script>
import WhyUse from "@/components/WhyUse";
export default {
  components: {WhyUse}
}
</script>