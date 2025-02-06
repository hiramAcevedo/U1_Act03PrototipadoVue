<template>
<div class="todo-list-container">
    <h2 class="section-title">Mi Lista de Tareas</h2>
    <p class="instructions">
    Nota: Haz clic en el texto de una tarea para marcarla como completada.<br>
    Usa "Eliminar" para borrar una tarea y "Borrar Completadas" para limpiar las terminadas.
    </p>
    <!-- Formulario para agregar tareas -->
    <form @submit.prevent="addTask" class="task-form">
    <input type="text" v-model="newTask" placeholder="Añadir tarea..." />
    <button type="submit">Agregar</button>
    </form>

    <!-- Lista de tareas -->
    <ul class="task-list">
    <li v-for="(task, index) in tasks" :key="index">
        <span 
        @click="toggleTask(index)" 
        :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
        {{ task.text }}
        </span>
        <button @click="removeTask(index)">Eliminar</button>
    </li>
    </ul>

    <!-- Botón para borrar todas las tareas completadas -->
    <button @click="clearCompleted" class="clear-button">
    Borrar Completadas
    </button>
</div>
</template>

<script>
export default {
name: "TodoListMain",
data() {
    return {
    newTask: "",
    tasks: [
        { text: "Comprar leche", completed: false },
        { text: "Llamar a mamá", completed: false },
        { text: "Ir al gimnasio", completed: true },
        { text: "Leer un libro", completed: false }
    ]
    };
},
methods: {
    addTask() {
    if (this.newTask.trim() !== "") {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = "";
    }
    },
    toggleTask(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
    },
    removeTask(index) {
    this.tasks.splice(index, 1);
    },
    clearCompleted() {
    this.tasks = this.tasks.filter(task => !task.completed);
    }
}
};
</script>  