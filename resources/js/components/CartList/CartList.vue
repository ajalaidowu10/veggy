<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-8 mb-2">
                <div class="card">
                    <h5 class="card-header bg-white">CART ({{ getCartQty }})</h5>
                    <div class="card-body">
                        <div class="d-flex flex-row border-bottom p-2 mb-2" v-for="cartitem in getCartItems" :key="cartitem.id">
                            <div class="d-flex flex-column flex-sm-row mr-auto">
                                <img :src="cartitem.image" alt="Vegetable"  width="100" height="100"/>
                                <div class="card-text">
                                    <h5>{{ cartitem.title }}</h5>
                                    <p>{{ cartitem.description }}</p>
                                    <button type="button" class="btn btn-danger btn-sm" @click="removeFromCart(cartitem)">
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p><strong>{{ cartitem.price }}</strong></p>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                  <button 
                                        type="button" 
                                        class="btn btn-secondary" 
                                        :disabled="cartitem.qty == 1" 
                                        @click="decrementItemQty(cartitem)">-</button>
                                  <button type="button" class="btn bg-light"><strong>{{ cartitem.qty }}</strong></button>
                                  <button 
                                        type="button" 
                                        class="btn btn-secondary"
                                        @click="incrementItemQty(cartitem)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <h5 class="card-header">CART SUMMARY</h5>
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <div class="p-1"><strong>Subtotal</strong></div>
                        <div class="p-1"><strong>N {{ getCartTotal }}</strong></div>
                      </div>  
                    </div>
                    <div class="card-footer" v-if="getCartQty">
                        <button type="button" class="btn btn-success btn-lg w-100 shawdo-sm" @click="checkout()">
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        computed: {
            ...mapGetters(['getCartItems', 'getCartQty', 'getCartTotal', 'getCheckoutStatus'])
        },
        methods: {
            ...mapActions(['removeFromCart', 'incrementItemQty', 'decrementItemQty', 'checkout'])
        }
    }
</script>
