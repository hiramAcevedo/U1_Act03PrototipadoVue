<template>
<div class="page-wrapper">
    <HeaderComponent />
    <div class="container main-content">
    <h1 class="section-title">Registro en Vue</h1>
    <p class="instructions">Por favor, completa el formulario para registrarte.</p>
    <div class="registro-form">
        <form @submit.prevent="handleRegistration">
        <div>
            <label for="email">Email:</label>
            <input id="email" type="email" v-model="email" placeholder="Tu email aquí" required>
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input id="password" type="password" v-model="password" placeholder="Tu contraseña aquí" required>
        </div>
        <button type="submit">Regístrate</button>
        </form>
    </div>
    </div>
    <FooterComponent />
</div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
name: 'Registro',
components: {
    HeaderComponent,
    FooterComponent
},
data() {
    return {
    email: '',
    password: ''
    }
},
methods: {
    handleRegistration() {
    console.log("Registro completado para:", this.email);
    alert("Registro completado para " + this.email);
    }
}
}
</script>  