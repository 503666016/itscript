 <template>
 <div>
     <!-- 导航栏部分 -->
    <div class="container-fluid headers ">
            <navs></navs>
    </div>
    <!-- container部分 -->
    <div class="container-fluid bodys ">
        <div class="row">
            <sowin></sowin>
        </div>
        <div class="row">
             <h1 class="serviceH1">做服务 我们是用心的</h1>
             <service :servicelist='serviceList'></service>
        </div>
        <div class="row case">
            <h2>案例</h2><br>
            <a href="#">网页设计</a>/
            <a href="#">平面广告</a>/
            <a href="#">软件界面</a>/
            <a href="#">移动app</a>/
            <case :caseimage='caseImage'></case>
        </div>

        <div class="row consultation">
              <h2>比起花了大笔钱招个普通营销人员<br>
              靠谱的专业优化团队才是中小企业明智之选！
              </h2>
              <div>
              <span>我们了解中小企业在营销过程中遇到的痛处，因此提供高性价比的服务是我们的宗旨！ 雅思网络是一家集策略咨询、创意创新、视觉设计、技术研发、内容制造、营销推广为一体的综合型数字化创新服务个人工作室，我们利用8年来持续积累的核心技术和互联网思维，提供以互联网、移动互联网为核心的网络技术服务和互动整合营销服务，为传统企业实现提供整套的社交化解决方案！ 我们的服务范围涵盖：网站建设 / 网站改版 / 小程序制作 / SEO优化 / SEM竞价 / 新媒体代运营 / 信息流推广 / 口碑营销 / 新闻营销 / 等行业整合营销...</span>
            </div>

             <div>

             <a type="button" class="btn btn-success">咨询我们</a>
             <a type="button" class="btn btn-success">了解更多</a>

             </div>
             
        </div>

        <div class="row dynamic">
          
            <h2>动态</h2> <br>
            <h5>创意、流程、执行缺一不可</h5>
           
         <dynamic :dynamicList='dynamicList'></dynamic>
        </div>

        <div class="row customer">
            <h2>服务客户</h2> <br> 
            <h6>客户是我们服务的遵旨</h6>
         <customer :caseimage='customerImg' ></customer>

        </div>
    </div>
    <!-- footer部分 -->
    <div class="container-fluid footers ">
        <footers></footers>
    </div>
       
</div>
</template>


<script>
// 导航组件
import Navs from './navs/nav';
// 轮播图组件
import Sowin from './sowin/sowin';
// service组件
import Service from './body/serviceList'
// 案例组件
import Case from './body/case'
// dynamic 动态组件
import Dynamic from './body/dynamic'
// 品牌logo组件
import Customer from './body/customer'

// 页脚组件
import Footers from './footer/footer';
export default {
    data () {
        return {
            serviceList:[
                {
                        tatle:"服务h",
                        image:'../../../static/service_bt_04.png',
                        child:['服务动态','解决方案','合作流程','服务客户']
                },
                 {
                        tatle:"服务g",
                        image:'../../static/service_bt_06.png',
                        child:['服务动态','解决方案','合作流程','服务客户']
                },
                 {
                        tatle:"服务f",
                        image:'../../static/service_bt_08.png',
                        child:['服务动态','解决方案','合作流程','服务客户']
                },
                 {
                        tatle:"服务d",
                        image:'../../static/service_bt_10.png',
                        child:['服务动态','解决方案','合作流程','服务客户']
                },
                 {
                        tatle:"服务a",
                        image:'../../static/service_bt_12.png',
                        child:['服务动态','解决方案','合作流程','服务客户']
                },
                 {
                        tatle:"服务s",
                        image:'../../static/service_bt_14.png',
                        child:['服务动态','解决方案','合作流程','服务客户']
                },
               
            ],

            caseImage:{
                list:
                ['../../static/case.jpg','../../static/case-1 (1).jpg',
            '../../static/case-1 (2).jpg'
            ,'../../static/case-1 (3).jpg'
            ,'../../static/case-1 (4).jpg',
            '../../static/case-1 (5).jpg']
            },
            customerImg:{

                list:
                  ['../../static/baid.jpg',
            '../../static/baid.jpg',
            '../../static/baid.jpg',
            '../../static/baid.jpg',
            '../../static/baid.jpg',
            '../../static/baid.jpg',
            '../../static/baid.jpg',
            '../../static/baid.jpg',
            '../../static/baid.jpg',
            '../../static/baid.jpg',
            '../../static/baid.jpg',

            ]
            },
            dynamicList:
            [{
                image: '../../static/pinpailog/anli (1).jpg',
                tatle:"不转型等死，转型找死这似乎成了所有传统企业的困扰。今年5月，三星亚洲最大苏州代工厂宣..."

            },{
                image: '../../static/pinpailog/anli (2).jpg',
                tatle:"SEM 大家都知道一个企业网站建设完成之后就需要对这个网站进行营销推广，那么单对于搜索引......"

            },{
                image: '../../static/pinpailog/anli (3).jpg',
                tatle:"SEM 在广告行业内学习或工作的人，在和客户或者同行沟通的时候，往往会遇到一些相关的英文......"

            },{
                image: '../../static/pinpailog/anli (4).jpg',
                tatle:"SEM 作为一名蹩脚的程序员，做网站制作几年了，从刚开始工作时的纯开发，犹记当年从一点不......"

            },{
                image: '../../static/pinpailog/anli (5).jpg',
                tatle:"SEM 在当今有许多的自媒体渠道,但是主流的三大渠道还是微信,微博,头条.许多做微商的朋友肯定......"

            },{
                image: '../../static/pinpailog/anli (1).jpg',
                tatle:"SEM 现在我们每一天都被大量的信息包围着，有时光是接触这些信息就会应接不暇，更别说吸收......"

            }
                ]
        }
    },
    components: {
        Navs,
        Sowin,
        Footers,
        Service,
        Case,
        Dynamic,
        Customer
    }
}
</script >

<style scoped>
.container-fluid.headers{
    width: 100%;
    background-color: #FAFAFA;
    height: 4rem;
    text-align: center;
    border-bottom: #666 1px solid;


}
.container-fluid.bodys{
    background-color: #FAFAFA;

}
.container-fluid.footers{
    background-color: #FAFAFA;
    height: 10rem;
}
.serviceH1{
    margin-top:6rem; 
}
.row.case h2,.row.dynamic h2,.row.customer h2{
    margin-top: 2rem;

}
.row.case a{
    text-decoration: none;
    color: #666;
    padding: 0 1rem
}
.row.consultation{
    height: 30rem;
    background: url('../assets/img/home/about_bg.jpg') no-repeat  ;
    background-size: cover;
    margin-top: 1rem;
    color: #FAFAFA;
    overflow: hidden;
 
}
.row.consultation h2{
    margin-top: 4rem;
}
.row.consultation div:nth-child(2){
    height: 8rem;
    overflow: hidden;
     margin: 5% 10%
}
.row.consultation div:nth-child(3) a{
    background-color: #24b727;
    padding: 1rem 3rem
   
}
.row.consultation span{
    color:#B3BCC2;
}

</style>
