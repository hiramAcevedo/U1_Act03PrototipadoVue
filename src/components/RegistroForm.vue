<template>
<form @submit.prevent="handleSubmit">
    <div>
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" :placeholder="emailPlaceholder">
    </div>
    <div>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" v-model="password" :placeholder="passwordPlaceholder">
    </div>
    <button type="submit">Registrarse</button>
</form>
</template>

<script>
export default {
name: 'RegistroForm',
props: {
    emailPlaceholder: {
    type: String,
    default: 'Ingresa tu email'
    },
    passwordPlaceholder: {
    type: String,
    default: 'Ingresa tu contraseña'
    }
},
data() {
    return {
    email: '',
    password: ''
    }
},
methods: {
    handleSubmit() {
    // Emitir el evento 'submit' con los datos del formulario
    this.$emit('submit', { email: this.email, password: this.password });
    }
}
}
</script>  