<template>
  <div> 
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/core/Navbar';

    export default {
        components: {Navbar}
    }
</script>