<template>
  <div style="width: 500px; border: 1px solid gray">
    <a-carousel arrows dots-class="slick-dots slick-thumb"
                :infinite="true"
                :rtl="true"
                :slidesToShow="2"
                :slidesToScroll="2"
                :swipe="true"
                :draggable="true">
      <template #customPaging="props">
        <p>
          <img :src="getImgUrl(props.i)"/>
        </p>
      </template>
      <div v-for="item in 4" :key="item">
        <img :src="getImgUrl(item - 1)"/>
      </div>

    </a-carousel>
  </div>
</template>
<script>
import {defineComponent} from "vue";

const baseUrl =
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/";
export default defineComponent({
  setup() {
    const getImgUrl = (i) => {
      return `${baseUrl}abstract0${i + 1}.jpg`;
    };

    return {
      getImgUrl,
    };
  },
});
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}

.ant-carousel :deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}

.ant-carousel :deep(.slick-arrow) {
  display: none !important;
}

.ant-carousel :deep(.slick-thumb) {
  bottom: 0px;
}

.ant-carousel :deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}

.ant-carousel :deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}

.ant-carousel :deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
