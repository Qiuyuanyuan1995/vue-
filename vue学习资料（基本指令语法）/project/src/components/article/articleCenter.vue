<template>
  <div>
    <h5>
      一九七五年二三月间，一个平平常常的日子，细的雨丝夹着一星半点的雪花，
      正纷纷淋淋地向大地飘洒着。时令己快到凉蛰，雪当然再不会存留，
      往往还没等落地，就已经消失得无踪无影了。
      黄土高原严寒而漫长的冬天看来不要过去，但那真正温暖的春天还远远地没有到来。
    </h5>
    <slot>{{msg}}</slot>
    <!-- 具名插槽 -->
     <slot name="one">插槽1</slot>
     <slot name="two">插槽2</slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈"
    };
  }
};
</script>

