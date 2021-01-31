<template>
  <div class="my-3  mt-4">
    <h6>Chercher par mot clé</h6>
    <div class="input-group">
      <input type="text"
             class="form-control"
             id="validationCustomUsername"
             placeholder="Départ, destination, entreprise..."
      >
      <div class="input-group-prepend">
        <button class="input-group-text py-3" id="inputGroupPrepend"><span class="fa fa-search"></span></button>
      </div>
    </div>

    <h6 class="mt-3">Listes des derniers covoits</h6>

    <CovoitCard  />

  </div>
</template>
<script>
import CovoitCard from "@/components/CovoitCard";
export default {
  components: {CovoitCard}
}
</script>