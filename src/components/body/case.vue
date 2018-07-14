<template>
    <div class="row case">

     <div>
         
       <div v-for="(item,index) in caseimages" :key='index'> 
      <img  class="col-md-4 col-sm-6 col-xs-12 " :src="item" alt="">

      </div>

    
  
    
      </div>   
    </div>

</template>

<script>
export default{
    props:['caseimage'], 
    data(){

        return {
           caseimages :this.caseimage.list 
        }
    }
    
}

    
</script>


<style scoped>
.row.case div{
    width: 90%;
    margin: 0 auto;
    margin-top: 1.5rem;
    cursor: pointer;
}
.row.case ima{
    display: inline-block;
}
.row.case div div :hover{
    box-shadow: 0  0 2px #000;
    color: #00a25f
}
</style>
