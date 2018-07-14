<template>
    <div class="dynamic-box ">
      <div v-for=" (item,index) in dynamicList"  :key="index" class="imgbox col-md-4 col-sm-5  col-xs-12 ">
          <a  href="" class=" col-xs-12"> 
            <img class=" col-xs-12" :src="item.image" alt="">
        
          </a>
          

         <div id="imgbox-div" class="col-xs-12"><span   >{{item.tatle}}</span></div>
          
         
      </div>

    </div>
</template>

<script>
    export default{
        props: ['dynamicList']
        ,
        data () {
            return {
                listObj:this.dynamicList
            }
        }
    }
</script>
<style scoped>
.dynamic-box{
    margin: 2rem 10%  0 10%;
}
#imgbox-div{

  margin-top: .5rem;


}

</style>
