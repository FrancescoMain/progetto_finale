<template>
    <div>
      <h1>Crea un nuovo appartamento</h1>
      <form @submit.prevent="createApartment">
        <label for="title">Titolo</label>
        <input type="text" id="title" v-model="form.title">
        <label for="rooms">Stanze</label>
        <input type="number" id="rooms" v-model="form.rooms">
        <label for="beds">Letti</label>
        <input type="number" id="beds" v-model="form.beds">
        <label for="bathrooms">Bagni</label>
        <input type="number" id="bathrooms" v-model="form.bathrooms">
        <label for="square_meters">Metri quadrati</label>
        <input type="number" id="square_meters" v-model="form.square_meters">
        <label for="address">Indirizzo</label>
        <input type="text" id="address" v-model="form.address">
        <label for="latitude">Latitudine</label>
        <input type="text" id="latitude" v-model="form.latitude">
        <label for="longitude">Longitudine</label>
        <input type="text" id="longitude" v-model="form.longitude">
        <label for="main_image">Immagine principale</label>
        <input type="text" id="main_image" v-model="form.main_image">
        <label for="visible">Visibilità</label>
        <input type="checkbox" id="visible" v-model="form.visible">
        <label for="price">Prezzo</label>
        <input type="number" id="price" v-model="form.price">
        <label for="description">Descrizione</label>
        <textarea id="description" v-model="form.description"></textarea>
        <!-- <label for="user_id">user_id</label>
        <input type="number" id="user_id" v-model="form.user_id">
        <label for="services_id">services_id</label>
        <input type="number" id="services_id" v-model="form.services_id"> -->
        <button type="submit">Crea appartamento</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        form: {
          title: 'ciao2',
          rooms: 12,
          beds: 12,
          bathrooms: 213,
          square_meters: 12,
          address: 'aaddf',
          latitude: 'safddfs',
          longitude: 'asfas',
          main_image: 'sdfa',
          visible: 1,
          price: 1,
          description: 'asfdf',
          services_id: [1,2],
          user_id: 1,
        }
      };
    },
    methods: {
      async createApartment() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/v1/apartments', this.form);
          if (response.status === 200) {
            alert('Appartamento creato con successo!');
            this.form = {
              title: '',
              rooms: null,
              beds: null,
              bathrooms: null,
              square_meters: null,
              address: '',
              latitude: '',
              longitude: '',
              main_image: '',
              visible: false,
              price: null,
              description: '',
              services_id: [],
              user_id: null,
            };
          }
        } catch (error) {
          alert('Si è verificato un errore durante la creazione dell\'appartamento.');
          console.error(error);
        }
      }
    }
  };
  </script>