<template>
    <section class="slider-block">
        <h1 class="title">
            {{title}}
        </h1>
        <div class="s_slider">
            <swiper :options="swiperOption" v-if="slider.length>0">
                <swiper-slide v-for="slide in slider" :key='index'>
                    <KtCardDog v-bind:item="slide" />
                </swiper-slide>
            </swiper>
            <div class="swiper-btn-prev" slot="button-prev"></div>
            <div class="swiper-btn-next" slot="button-next"></div>
        </div>
    </section>
</template>
<script>
import KtCardDog from '../components/KtCardDog.vue'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
    name: 'Home',
    components: {
        KtCardDog,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            title: 'Slider with data from open API',
            slider: [],
            swiperOption: {
                spaceBetween: 34,
                slidesPerGroup: 1,
                loop: true,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: ".swiper-btn-next",
                    prevEl: ".swiper-btn-prev",
                },
                breakpoints: {
                    "640": {
                        slidesPerView: 1,
                    },

                    "768": {
                        slidesPerView: 2,
                    },

                    "1024": {
                        slidesPerView: 3,
                    },
                },
            },
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    methods: {},
    mounted() {
        axios.get('https://api.thedogapi.com/v1/breeds', {
                params: {
                    page: 0,
                    limit: 8,
                }
            })
            .then(response => {
                this.slider = response.data
                console.log(this.slider)
            });



    },
}
</script>
<style>
</style>