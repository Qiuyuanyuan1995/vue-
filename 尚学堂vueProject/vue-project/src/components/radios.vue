<template>
    <div class="chooser-component">
          <ul class="chooser-list">
              <li @click="chooseRadio(index)" v-for="(item,index) in Radios" :key="index" :class="{'active':index == nowIndex}">
               {{index}}-{{item.title}}
              </li>
          </ul>
        </div>
</template>
<script>
export default {
    name:"radios",
    data(){
        return{
            nowIndex:0
        }
    },
    props:{
        Radios:{
             type:Array,
             default:function(){
                  return[
                      {
                          // title:"测试",
                          // value:1
                      },
                     
                  ]
             }
        }
    },
    methods:{
      chooseRadio(index){
          this.nowIndex  = index;
          this.$emit("radiosData",this.Radios[index].value)
           this.$store.dispatch("updateOrder",["radios",this.Radios[index].value])
      }
    }
}
</script>
<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
