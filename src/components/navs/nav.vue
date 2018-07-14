<template>

<div class="row">
    <div class="col-md-12 logo"><img class="col-md-3 col-md-offset-1 col-sm-offset-0 " src="../../assets/img/home/logo.png" alt="">
       <span class="hidden-xs col-md-6 col-md-offset-2 col-sm-offset-1"> 
        <router-link to="/" >hemo</router-link>
        <router-link to="" >hemo</router-link>
        <router-link to="" >hemo</router-link>
        <router-link to="">hemo</router-link>
        <router-link  to="">hemo</router-link>
    </span>
    <span class="visible-xs-inline-block icom">
      <i class="iconfont icon-iconset0193" :class={cli:icons} @click="iconsClick"></i>
      
    </span>
    </div>
     <div class="visible-xs-inline-block navList " v-if=icons>
         <router-link to="/" >hemo</router-link>
        <router-link to="" >hemo</router-link>
        <router-link to="" >hemo</router-link>
        <router-link to="">hemo</router-link>
        <router-link  to="">hemo</router-link>
     </div>
</div>
</template>

<script>
export default{
    data () {

        return {
            listFor:[1,2,3,4,5,6,11,22],
            icons:false,
         
        }
    },
    methods:{
       iconsClick(){
           this.icons = !this.icons
       }
    }
}



</script>

<style scoped>
.col-md-12.logo{
    text-align: left;
    line-height: 4rem;
    overflow: hidden;
    position: relative
}
.col-md-12.logo img{
    text-align: left;
    width: 10rem;
    height: 2.5rem;
    margin-top: 0.75rem;
}
.col-md-12.logo span{
    text-align: right;

}
.col-md-12.logo span a{
   text-decoration: none;
   padding: 0 1.5rem;
   color: #797A7A;
}
.col-md-12.logo span a:nth-child(1){
    color:#24B727
}
.col-md-12.logo span a:hover{
    color: #24B727
}
.visible-xs-inline-block.icom{
    display: inline-block;
    position: absolute;
    right: 1rem;
}
.iconfont.icon-iconset0193{
    padding: 0.1rem;
    font-size: 2rem
}
.iconfont.icon-iconset0193.cli{
    border: solid  0.1rem yellow;
    background-color: #BDC4C4
}
@keyframes lists{
    0%{
      
        height: 0rem
    }
    20%{
      
        height: 2.6rem
    }
    40%{
     
        height: 5.2rem
    }
    60%{
     
        height: 7.8rem
    }
    80%{
      
        height: 10.4rem
    }
    100%{
   
        height: 13rem
    }
}
.visible-xs-inline-block.navList{
    background-color: aliceblue;
    width: 100%;
    height: 13rem;
    z-index: 99;
    position: absolute;
    left: 0;
    animation: .2s lists ease-out;
    

}
.visible-xs-inline-block.navList a{
    display: block;
    text-decoration: none;
    margin: 1rem 0 ;
    color: #797A7A;
}
.visible-xs-inline-block.navList a:nth-child(1){
    color: #24B727
}
.visible-xs-inline-block.navList a:hover{
    color: #24B727
}

</style>
