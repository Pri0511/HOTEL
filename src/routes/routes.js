import servicios from "../components/servicios.vue"
import hotel from "../components/hotel.vue"
import Login from "../components/Login.vue"
import actividades from "../components/actividades.vue"
import contacto from "../components/contacto.vue"
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"


const routes = [
    {path:"/servicios", component:servicios},
    {path:"/hotel", component:hotel},
    {path:"/actividades", component:actividades},
    {path:"/contacto", component:contacto},
    {path:"/", component:Login}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})