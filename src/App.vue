<template>
  <div id="app">
    <navs></navs>
    <router-view />
  </div>
</template>

<script>
import Nav from './components/index'
export default {
  name:'App',
    data () {
        return {
      
        }
    },
    components: {
        navs:Nav
    }
}
</script >

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,*{
margin: 0;
padding: 0;
font-size: 16px;
}
</style>
