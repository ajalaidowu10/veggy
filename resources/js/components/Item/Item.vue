<template>
    <div class="card">
        <img :src="item.image" alt="Vegetable" width="200" height="200"/>
        <div class="card-text">
            <h5>{{ item.title }}</h5>
            <p>{{ item.price }}</p>
        </div>
        <button type="button" class="btn btn-secondary btn-sm" @click="addToCart(item)">
            Add to Cart
        </button>
    </div>
</template>
<style scoped>
   .card{
    max-width: 260px;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    box-shadow: 0 7px 14px rgba(0,0,0,0.9);
    transition: transform .25s ease-out;
   }
   card img{
    width: 100%;
    height: auto;
   }
   .card:hover{
    transform: scale(1.05);
   }
   h5{
    font-weight: bold;
   } 
</style>
<script>
    import { mapActions } from 'vuex';

    export default {
        props:['item'],
        methods: {
            ...mapActions(['addToCart'])
        }
    }
</script>
