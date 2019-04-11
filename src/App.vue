<template>
    <!--页面结构-->
    <div>
        <span v-text="msg" class="red"></span>
        <button @click="substrict(1,2)">add</button>
        <router-link to="/login">登录</router-link>|
        <router-link to="/register">注册</router-link>
        <mt-button @click="tip" type="primary" size="large">primary</mt-button>
        <router-view></router-view>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a>
                    <span class="mui-icon-extra mui-icon-extra-cart"></span>
                    <div class="mui-media-body">Cart</div></a></li>
            </ul>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="../statics/images/shuijiao.jpg">
                        <div class="mui-media-body">
                            幸福
                            <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="../statics/images/muwu.jpg">
                        <div class="mui-media-body">
                            木屋
                            <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="../statics/images/cbd.jpg">
                        <div class="mui-media-body">
                            CBD
                            <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
//负责导出.vue组件对象（本质上是vue对象）
import calc from './calc';
import {Toast} from 'mint-ui'//jscomponents需要重新导入一次才能用，因为它需要一个对象接受该组件对象
    export default {
        data(){
            return{
                msg:'hello lzj'
            }
        },
        methods:{
            add(x,y) {
                console.log(x+y);
            },
            add1:calc.add,
            substrict:calc.substrict,
            tip:function () {
                Toast('hello')
            }
        },
        created() {

        }
    }
</script>
<style scoped>
/*scoped 表示该样式只限当前页面内部使用*/
    .red{
        color: red;
    }
.mui-icon-extra {
    margin-top: 12px;
}
.flex-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: space-between;
    text-align: center;
}
</style>