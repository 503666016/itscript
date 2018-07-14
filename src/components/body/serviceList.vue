<template>
    <div class="row">
      <ul v-for="(item,index) in list " :key='index' class=" col-md-2 col-xs-6 col-sm-4 ">
          <li><img :src="item.image"></li>
          <li>{{item.tatle}}</li>
          <li v-for="  list in item.child" :key="list">{{list}}</li>
      </ul>
    </div>
</template>

<script>
export default{
    props:['servicelist'],
    data () {
        return {
            list:this.servicelist
            
        }
    },
    methods: {
        datas(){
            console.log(list)
        }
    }

}    

</script>


<style scoped>
ul  {
    list-style: none;
    display: inline-block;
    text-align: center;
    padding: 2rem 2rem ;
    color: #555;
    
}
ul li:nth-child(2){
    font-size: 150%;
    padding: .5rem;
}
ul li{
   padding: .2rem;  
   text-align: left;
   text-align: center;
}


</style>
