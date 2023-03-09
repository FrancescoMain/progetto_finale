<script>
import { store } from '../stores/store';
import axios from 'axios';
export default {
  name: "App",
  components: {
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    createApartment() {

      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }
      const formData = new FormData();
      formData.append('title', store.NewApartment.title);
      formData.append('rooms', store.NewApartment.rooms);
      formData.append('beds', store.NewApartment.beds);
      formData.append('bathrooms', store.NewApartment.bathrooms);
      formData.append('square_meters', store.NewApartment.square_meters);
      formData.append('address', store.NewApartment.address);
      formData.append('latitude', store.NewApartment.latitude);
      formData.append('longitude', store.NewApartment.longitude);
      formData.append('visible', store.NewApartment.visible);
      formData.append('price', store.NewApartment.price);
      formData.append('description', store.NewApartment.description);
      formData.append('services_id', store.NewApartment.services_id);
      formData.append('user_id', store.NewApartment.user_id);
      formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');

       console.log(store.NewApartment)
       axios.post(store.NewApartmentAPI, formData, config)
        .then(res => {
          store.NewApartment = res.data;
        });
    }
  }
}  
</script>
<template>
This is for creating things
  <form action="POST">
    <label for="title">Nome dell'appartamento</label>
    <input type="text" name="title" v-model="store.NewApartment.title">
    <br>
    <label for="rooms">Stanze</label>
    <input type="number" name="rooms" v-model="store.NewApartment.rooms">
    <br>
    <label for="beds">Letti</label>
    <input type="number" name="beds" v-model="store.NewApartment.beds">
    <br>
    <label for="bathrooms">Bagni</label>
    <input type="number" name="bathrooms" v-model="store.NewApartment.bathrooms">
    <br>
    <label for="square_meters">Metri quadri</label>
    <input type="number" name="square_meters" v-model="store.NewApartment.square_meters">
    <br>
    <label for="address">Indirizzo</label>
    <input type="text" name="address" v-model="store.NewApartment.address">
    <br>
    <label for="price">Prezzo</label>
    <input type="number" name="price" v-model="store.NewApartment.price">
    <br>
    <label for="description">Descrizione</label>
    <input type="text" name="description" v-model="store.NewApartment.description">
    <br>
    <label>Services TODO</label>
    <input type="submit" @click.prevent="createApartment()">
    <br>   
  </form>




</template>
<style lang="scss" scoped>
@use '../styles/general.scss' as *;

</style>



