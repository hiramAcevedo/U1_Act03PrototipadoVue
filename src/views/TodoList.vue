<template>
<div class="page-wrapper">
    <HeaderComponent />
    <div class="container main-content">
    <h1 class="section-title">To-do List en Vue</h1>
    <TodoListMain />
    </div>
    <FooterComponent />
</div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import TodoListMain from '../components/TodoListMain.vue'

export default {
name: 'TodoList',
components: {
    HeaderComponent,
    FooterComponent,
    TodoListMain
}
};
</script>  