<script>
import axios from 'axios';

export default {
    data() {
        return {
            apartments: {}
        }
    },
    methods: {
        apiApartments() {
            axios.get('http://localhost:8000/api' + '/v1/apartments')
                .then(res => {
                    this.apartments = res.data.response.data;
                    console.log(this.apartments);
                })
        }
    },
    mounted() {
        this.apiApartments();
    },
}
</script>

<template>
    <div>
        <ul>
            <li v-for="apartment in apartments">
                <a href="#">
                    {{ apartment.title }}
                </a>
                 - rooms:{{ apartment.rooms }}
                 - bathrooms:{{ apartment.bathrooms }}
                 - beds:{{ apartment.beds }}
            </li>
        </ul>
    </div>
</template>