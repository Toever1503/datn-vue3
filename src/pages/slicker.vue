<template>
  <a-carousel arrows
              :afterChange="afterChangeSlide"
              :slidesToShow="4"
              :slidesToScroll="2"
              :draggable="true">
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined/>
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined/>
      </div>
    </template>
    <div @click="clickImage"><h3>8</h3></div>
    <div @click="clickImage"><h3>9</h3></div>
    <div @click="clickImage"><h3>10</h3></div>
    <div @click="clickImage"><h3>11</h3></div>
    <div @click="clickImage"><h3>12</h3></div>
    <div @click="clickImage"><h3>13</h3></div>
    <div @click="clickImage"><h3>14</h3></div>
    <div @click="clickImage"><h3>15</h3></div>
  </a-carousel>
</template>
<script>
import {LeftCircleOutlined, RightCircleOutlined} from '@ant-design/icons-vue';
import {defineComponent} from 'vue';

const afterChangeSlide = (currentSlide) => {
  console.log(currentSlide);
};

const clickImage = (e) =>{
  console.log('click image: ', e.target);
}

export default defineComponent({
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
  methods: {
    afterChangeSlide,
    clickImage,
  }
});
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  border-right: 1px solid red;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}

.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}

.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>