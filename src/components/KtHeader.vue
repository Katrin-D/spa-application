<template>
    <header class="header">
        <nav class="nav">
            <img class="logo" src="/assets/yourlogo.png" alt="">
            <router-link to="/" class="nav_link">Home</router-link>
            <router-link to="/products" class="nav_link">Products</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'KtHeader',
    props: {}
}
</script>
