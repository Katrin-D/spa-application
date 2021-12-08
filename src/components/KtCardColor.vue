<template>
    <div class="card">
        <h2 class="color_name">
            {{item.color_name}}
        </h2>
        <div class="card_color_inner">
            <div class="card_color_img" v-bind:style="{ 'background-color': item.HEX }"></div>
            <div class="card_color_text" title="Click on the color value and it will be copieda">
                <a v-on:click='copy'>
                    HEX:
                    <span @mouseenter="e => e.target.classList.toggle('tocopy')" @mouseleave="e => e.target.classList.toggle('tocopy')">
                    {{item.HEX}}
                    </span>
                </a >
                <a  v-on:click='copy'>
                    HSL:
                    <span @mouseenter="e => e.target.classList.toggle('tocopy')" @mouseleave="e => e.target.classList.toggle('tocopy')">
                    {{item.HSL}}
                    </span>
                </a >
                <a  v-on:click='copy'>
                    RGB: 
                    <span @mouseenter="e => e.target.classList.toggle('tocopy')" @mouseleave="e => e.target.classList.toggle('tocopy')">
                    {{item.RGB}}
                    </span>
                </a >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'KtCardColor',
    props: ['item'],
    methods: {
        copy() {
            this.$emit('copy-color');
        },
    },
}
</script>
<style scoped>
</style>