<template>
    <div id="nav-bar" class="row">
        <div class="container-fluid"> 
            <nav  class="navbar navbar-icon-top navbar-expand-lg fixed-top navbar-dark shadow-lg">
              <div class="container"> 
                    <router-link to="/"  class="navbar-brand font-weight-bold">Veggy</router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <form v-if="$route.name == 'item-list'" class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                      </form>
                      <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <i class="fa fa-user"></i>
                            Account
                          </a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/cart"  class="nav-link">
                                <i class="fa fa-shopping-cart"></i>
                                Cart <span class="badge badge-dark">{{ getCartQty }}</span>
                            </router-link>
                        </li>
                      </ul>
                    </div>  
              </div>
            </nav>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

     export default {
        computed: {
            ...mapGetters(['getCartQty'])
        }
    }
</script>
