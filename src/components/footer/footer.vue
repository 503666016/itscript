<template >
    <div class="col-md-12">
        <ul v-for="(item,index) in fterList" :key="index"  class="col-md-2 col-sm-3 col-xs-6">
            <li>{{item.tatle}}</li>
            <li v-for="child in item.child" :key="child">{{child}}</li>
        </ul>
        <ul class="col-md-4 col-sm-3 col-xs-6 cooColor">
           <li  v-for="item in cooperation" :key="item" >{{item}}</li>
        </ul>
        <div class="col-md-12 col-sm-12 col-xs-12">
            友情链接： xxxxx xxxxx xxxxx<br>
            Copyright © 2018-2020 xxxxx工作室 版权所有 备案号： xxxxxxxxxxxx
        </div>
    </div>
    

</template>


<script>
    
    export default{
        data () {
            return {
                
                fterList:[
                    {
                        tatle:"服务",
                        child:['服务动态','解决方案','合作流程','服务客户']
                },{
                        tatle:"服务",
                        child:['服务动态','解决方案','合作流程','服务客户']
                },{
                        tatle:"服务",
                        child:['服务动态','解决方案','合作流程','服务客户']
                },{
                        tatle:"服务",
                        child:['服务动态','解决方案','合作流程','服务客户']
                },
                ],
                cooperation:{
                    tatle:'商务合作',
                    email:'Email:qingshan_1996@qq.com',
                    tel:'手机：1111111111',
                    qq:"qq:"+503666016,
                    adrees:'地址我家'
                }
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
    color: #555
    
}
ul li:nth-child(1){
    font-size: 150%;
    padding: .5rem;
}
ul li{
   padding: .2rem;  
}
.col-md-4.col-sm-3.col-xs-6.cooColor li:nth-child(1){
    color: #24B727;
}
</style>
