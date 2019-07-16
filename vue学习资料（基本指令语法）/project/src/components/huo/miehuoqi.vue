<template>
    <div>
            <!-- 图片 -->
            <div id="bag" v-bind:class="{burst:ended}"></div>
            <!-- 状态信息 -->
            <div id="bag-length">
                <div v-bind:style="{width:length + '%'}"></div>
            </div>
            <!-- 游戏控制按钮 -->
            <div id="controls">
                <!-- 当横条的长度为0的时候，让按钮呈置灰状态 -->
                <button v-on:click="Punch" v-bind:disabled="isdisabled">Punch</button>
                <button v-on:click="Restart">Restart</button>
            </div>
        </div>
</template>
<script>
export default {                                                                                                  
    data(){
        return{
            length:100,
             ended:false,
             isdisabled:false,
        }
    },
    methods:{
        Punch(){
            this.length -=10;
            if(this.length<0){
               this.ended=true;
               this.isdisabled=true

            }
        },
        Restart(){
           this.length =100;
           this.ended=false
           this.isdisabled=false
        }
    }
    
}
</script>

<style scoped>
#bag{
    width: 200px;
    height: 500px;
    margin: 0 auto;
    background: url(../assets/bag.png) center no-repeat;
    /* background-size: 80%; */
}

#bag.burst{
    background-image: url(../assets/bag-burst.png);
}

#bag-length{
    width: 200px;
    border: 2px solid #000;
    margin: 0 auto 20px auto;
}

#bag-length div{
    height: 20px;
    background: crimson
}

#controls{
    width: 120px;
    margin: 0 auto;
}
</style>
