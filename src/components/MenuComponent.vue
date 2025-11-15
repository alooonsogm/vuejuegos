<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">VUE</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/archivo">Subir Archivo</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Equipos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li v-for="equipo in equipos" :key="equipo"><router-link class="dropdown-item" :to="'/equipo/' +  equipo.idEquipo">{{ equipo.nombre }}</router-link></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search" v-model="busquedaJugadores"/>
        <button class="btn btn-outline-success" @click.prevent="buscarJugadores">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
import ServiceFutbol from '@/services/ServiceFutbol';
const service = new ServiceFutbol();

    export default {
        name: "MenuComponent",
        data(){
            return {
                equipos: [],
                busquedaJugadores: ""
            }
        },
        mounted(){
            service.getEquipos().then(result => {
                this.equipos = result;
            })
        },
        methods: {
            buscarJugadores(){
                this.$router.push("/jugadores/" + this.busquedaJugadores);
            }
        }
    }
</script>