<template>
    <div class="product_list">
        <h1 class="title">
            {{title}}
        </h1>
        <div class="container">
            <KtCardColor v-for="color in colors"  
            v-bind:item="color" 
            v-on:copy-color="copy"/>
        </div>
    </div>
</template>

<script>
import KtCardColor from '../components/KtCardColor.vue'

export default {
    name: 'Product',
    data() {
        return {
            name: 'Product',
            title: 'Responsive grid',
            confirmationText: '',
            colors: [{
                    color_name: 'Blue',
                    HEX: '#2358EF',
                    HSL: '222, 86%, 54%',
                    RGB: '35, 88, 239',
                },
                {
                    color_name: 'Light blue',
                    HEX: '#11B3E3',
                    HSL: '194, 86%, 48%',
                    RGB: '17, 179, 227',
                },
                {
                    color_name: 'Green',
                    HEX: '#2CBC62',
                    HSL: '142, 62%, 45%',
                    RGB: '44, 188, 98',
                },
                {
                    color_name: 'Violet',
                    HEX: '#774FE0',
                    HSL: '257, 70%, 69%',
                    RGB: '119, 79, 224',
                },
                {
                    color_name: 'Purple',
                    HEX: '#af50d3',
                    HSL: '284, 60%, 57%',
                    RGB: '175, 80, 211',
                },
                {
                    color_name: 'Red',
                    HEX: '#eb4961',
                    HSL: '351, 80%, 61%',
                    RGB: '235, 73, 97',
                },
                {
                    color_name: 'Orange',
                    HEX: '#f1773a',
                    HSL: '20, 87%, 59%',
                    RGB: '241, 119, 58',
                },
                {
                    color_name: 'Dimmed yellow',
                    HEX: '#e9c009',
                    HSL: '49, 93%, 47%',
                    RGB: '233, 192, 9',
                },
                {
                    color_name: 'Yellow',
                    HEX: '#ffe502',
                    HSL: '54, 100%, 50%',
                    RGB: '255, 229, 2',
                },
               

            ]
        }

    },
    components: {
        KtCardColor,
    },
    methods: {
        copy(){
            const copyText = document.querySelector('.tocopy').textContent
            const textArea = document.createElement('textarea')
            textArea.textContent = copyText
            document.body.append(textArea)
            textArea.select()
            document.execCommand('copy')
        },
 
    },

}
</script>