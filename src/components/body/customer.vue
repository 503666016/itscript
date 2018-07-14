<template>
    
    <div class="customer">
     <span v-for="(item,index) in caseimages" :key="index" class="col-md-3 col-sm-4 col-xs-6"> <img class="col-xs-12 col-md-12 " :src="item" alt=""></span>

    </div>
</template>


<script>
    export default{
        props: ['caseimage'],
        data () {
            return {
                caseimages:this.caseimage.list
                
            }
        }
    }

</script>
<style>
.customer{
    margin: 0 5%
}
.customer span img{
    width: 100%;
    height: 100%;
}
.customer span{
    display: inline-block;
    height: 50%
}


</style>
