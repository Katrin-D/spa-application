<template>
    <div class="card">
        <a href="" class="card_inner">
            <div class="card_img" v-bind:style="{ 'background-image': 'url(' + item.image.url + ')' }"></div>
            
            <div class="card_text">
                <p class="card_type" v-if="item.breed_group !== undefined">
                    {{item.breed_group}}
                </p>
                <p class="card_type" v-else>
                    {{"Dog"}}
                </p>
                <p class="card_name">
                    {{item.name}}
                </p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'KtCard',
    props: ['item'],
}
</script>

<style scoped>
</style>

