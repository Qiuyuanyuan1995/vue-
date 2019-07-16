<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>
    <div class="sales-board-form">
      <!-- 第一个组件 -->
      <div class="sales-board-line">
        <div class="sales-board-line-left">购买数量：</div>
        <div class="sales-board-line-right">
          <!-- 父组件给子组件传值 -->
          <kepp-alive>
               <counter @counter="getGoodInfo('counter',$event)" :max="Counter.max" :min="Counter.min"></counter>
          </kepp-alive>
         
        </div>
      </div>
      <br>
      <br>
      <br>
      <!-- 第二个组件 -->
      <div class="sales-board-line">
        <div class="sales-board-line-left">产品类型</div>
        <div class="sales-board-line-right" style="margin-top:-16px;float:left;margin-left:70px;">
          <!-- 父组件给子组件传值 -->
          <keep-alive>
                 <dropdown @xialaMenu="getGoodInfo('downmenu',$event)" :xialaData="xialaData"></dropdown>
          </keep-alive>
         
        </div>
      </div>
      <br>
      <br>
      <br>
      <!-- 第三个组件 -->
      <div class="sales-board-line">
        <div class="sales-board-line-left">有效时间</div>
        <br>
        <div class="sales-board-line-right">
          <!-- 父组件给子组件传值 -->
          <keep-alive>
                 <radios @radiosData="getGoodInfo('radios',$event)" :Radios="radioData"></radios>
          </keep-alive>
        
        </div>
      </div>
      <br>
      <br>
      <br>
      <!-- 第四个组件 -->
      <div class="sales-board-line">
        <div class="sales-board-line-left" style="float:left;">总价：</div>
        <div class="sales-board-line-right">
          <!-- 父组件给子组件传值 -->
          {{getTotalPrice}}元
        </div>
      </div>
      <div class="sales-board-line" style="margin-top:15px;">
        <div class="sales-board-line-left"></div>
        <div class="sales-board-line-right">
          <a class="button" href="#">立即购买</a>
        </div>
      </div>
    </div>
    <!-- getOrder是通过store.js中的action实现异步 -->
    <!-- {{getOrder}} -->
    <br>
    <br>
    <br>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

      <h3>用户行为指标</h3>
      <ul>
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>

      <h3>浏览网站方式</h3>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Counter from "../../components/counter";
import Dropdown from "../../components/xiala";
import Radios from "../../components/radios";
export default {
  name: "car",
  data() {
    return {
      counter: 1,
      downmenu: 1,
      radios: 1,
      totalPrice: 0,
      Counter: {
        max: 10,
        min: 1
      },
      xialaData: [
        {
          name: "初级版",
          value: 1
        },
        {
          name: "中级版",
          value: 2
        },
        {
          name: "高级版",
          value: 3
        }
      ],
      radioData: [
        {
          title: "1个月",
          value: 1
        },
        {
          title: "3个月",
          value: 3
        },
        {
          title: "半年",
          value: 6
        },
        {
          title: "年费",
          value: 12
        }
      ]
    };
  },
  components: {
    Counter,
    Dropdown,
    Radios
  },
  methods: {
    // key代表getGoodInfo()方法中的字符串，value接收$event
    getGoodInfo(key, value) {
      // console.log(key)
      // console.log(value)
      /*
       *this代表的是当前组件
       *this[key] = value;这句代码的意思是将从子组件传过来的值value设置成当前组件的属性
       */
      //  console.log(this)
      this[key] = value;
      var readyData = {
        counter: this.counter, //5元
        downmenu: this.downmenu, //2元
        radios: this.radios //10元
      };
      //  console.log(readyData)
    }
    // getCounterNum(data) {
    //   console.log(data);
    // },
    // getxialaMenu(data) {
    //   console.log(data);
    // },
    // getRdiosData(data) {
    //   console.log(data);
    // }
  },
  computed: {
    getTotalPrice() {
      // return  this.counter*5+this.downmenu*2+this.radios*10;
      this.$store.dispatch("updatePrice",this.counter * 5 + this.downmenu * 2 + this.radios * 10);
      return this.$store.getters.getTotalPrice;
    },
    getOrder() {
      return this.$store.getters.getOrder;
    }
  }
};
</script>
<style scoped>
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}

.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
