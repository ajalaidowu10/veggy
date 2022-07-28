<template>
    <div class="container">
        <div class="row justify-content-center card-list">
            <Item
                v-for="item in getItems"
                :key="item.id"
                :item="item"
            />   
        </div>
    </div>
</template>
<style scoped>
    .card-list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap:20px;
        grid-template-rows: auto;
        justify-items: center;
    }
</style>
<script>
    import { mapGetters } from "vuex";
    import Item from '../Item/Item';
    
    export default {
        components: { Item },
        computed: {
            ...mapGetters(['getItems']),
        },
        created() {
            this.$store.dispatch('fetchItems');
        }
    }
</script>
