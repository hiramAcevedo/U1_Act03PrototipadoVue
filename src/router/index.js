import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'
import Registro from '../views/Registro.vue'

const routes = [
    { path: '/', name: 'TodoList', component: TodoList },
    { path: '/registro', name: 'Registro', component: Registro }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
