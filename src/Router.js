import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import ArchivoComponent from "./components/ArchivoComponent.vue";
import EquipoComponent from "./components/EquipoComponent.vue";
import JugadorComponent from "./components/JugadorComponent.vue";

const myRoutes = [
    { path: "/", component: HomeComponent},
    { path: "/archivo", component: ArchivoComponent},
    { path: "/equipo/:id", component: EquipoComponent},
    { path: "/jugadores/:nombre?", component: JugadorComponent},
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;