<template>
  <div class="bg-[#c8f1f129]">
    <div>
      <div class="grid md:grid-cols-5 grid-cols-1 px-4 w-full h-auto py-1 pb-1">
        <div class="md:col-span-2 col-span-1 px-0 w-full h-full">
          <div class="w-full h-[24.387rem]">
            <img class="w-full h-full overflow-hidden object-cover cursor-pointer" :src="detailProduct.image" alt="">
          </div>
          <ssr-carousel class="mt-4 w-full h-auto flex justify-center" :slides-per-page='3' loop show-arrows>
            <slide v-for="(item, index) in detailProduct.attachFiles" :index='index' :key="index"
                   class="border border-white hover:border-[#ee4d2d]">
              <img class="w-[5rem] h-[5rem] object-cover overflow-hidden cursor-pointer " :src="item" alt=""
                   @mouseenter="detailProduct.image=item">
            </slide>
            <template #back-arrow=''>
              <div class=" ">
                <i class="fa-solid fa-chevron-left text-white px-1 py-2"></i>
              </div>
            </template>
            <template #next-arrow=''>
              <div class=" ">
                <i class="fa-solid fa-angle-right text-white px-1 py-2"></i>
              </div>
            </template>
          </ssr-carousel>
        </div>
        <div class="md:col-span-3 col-span-1 ml-10">
          <h1 class="text-center font-bold text-3xl">
            {{ 'product name' }}
          </h1>
          <!--          <div class="grid grid-cols-5 pb-3">-->
          <!--            <div class="border-r border-gray-200 flex items-center " v-if="detailProduct.rating != 0">-->
          <!--              <span class="mr-2 border-b border-[#ee4d2d] text-[#ee4d2d]">-->
          <!--                {{'5'}}-->
          <!--              </span>-->
          <!--            </div>-->
          <!--            <div class="border-r text-center border-r-gray-200">-->
          <!--&lt;!&ndash;              <span class="pt-2 mb-1 " v-if="detailProduct.totalReview != 0">{{ '5'}} Đánh giá</span>&ndash;&gt;-->
          <!--              <span class="pt-2 mb-1 w-auto " v-else>Chưa có đánh giá</span>-->
          <!--            </div>-->
          <!--            <div class=" text-center ">-->
          <!--              <span class="pt-2 mb-1  ">{{'44'}} Đã bán</span>-->
          <!--            </div>-->
          <!--          </div>-->
          <div class=" w-3/5">
            <span class="text-gray-400 text-base line-through mr-3">555#</span>
            <span class="text-red-500 text-xl">$529</span>
          </div>
          <div>
            <a-descriptions title="Chi tiết" class="mt-2" :contentStyle="{
                     background: 'white'
                            }" bordered>
              <a-descriptions-item label="Weight" span="3">Zhou Maomao</a-descriptions-item>
              <a-descriptions-item label="Unit" span="3">1810000000</a-descriptions-item>
              <a-descriptions-item label="Brand" span="3">empty</a-descriptions-item>
            </a-descriptions>
          </div>
          <div class="pb-6 pt-5 text-sm text-gray-500 flex justify-start items-center">
            <p class="m-0 min-w-[6rem]">Số lượng:</p>
            <div class="flex items-center ml-2">
              <minus-outlined @click="decreaseOptionQuantity"/>
              <input type="number" min="1" step="1" v-model="optionQuantity"
                     class="mx-2 font-normal text-[1rem] p-[0.07rem] w-[3.125rem] text-center border border-[#00000017] cursor-text outline-none appearance-none"/>
              <plus-outlined @click="increaseOptionQuantity"/>


            </div>
            <span class="mr-4 text-black text-sm ml-5">{{ '5' }} sản phẩm có sẵn</span>
          </div>
          <div class="pb-5 text-sm text-gray-500 flex justify-start items-center">
            <button
                class=" px-4 py-2 rounded text-[#ee4d2d] bg-[rgba(255,87,34,0.1)] hover:bg-[#fff4f4] shadow shadow-[rgba(0,0,0,.03)] "
            ><i class="fa-solid fa-cart-plus pr-2"></i>Thêm Vào Giỏ Hàng
            </button>
            <button class="px-4 py-2 rounded text-white ml-5 bg-[#ee4d2d] hover:bg-[#ee4d2dc4] shadow shadow-[rgba(0,0,0,.03)] "
            >Mua Ngay
            </button>
          </div>
        </div>
      </div>
      <div class="mt-3 pb-3  px-4 py-4">
        <p class="bg-[#98b1d53b] px-4 py-3 text-black text-lg uppercase">Mô tả sản phẩm</p>
        <!--        <p class="px-4" v-html="detailProduct.description"></p>-->
        mô tả
      </div>
      <div class="mt-3 pb-3  px-4 py-4 ">
        <p class="bg-[#98b1d53b]  px-4 py-3 text-black text-lg uppercase ">Đánh giá sản phẩm</p>
        <div
            class="mx-4 px-8 pb-3 py-8 w-auto h-full bg-[#fffbf8] border border-[#f9ede5] flex items-center justify-start gap-10">
          <div class="">
            <span class="ml-2 text-lg text-[#ee4d2d]">
                {{ '5' }} <span class="text-sm">trên 5</span>
              </span>
            <div class="flex items-center">
              rating start
              <!--              <div class="" v-for="(item , index) in 5" :key="index">-->
              <!--&lt;!&ndash;                <div v-if="index +1 <= detailProduct.rating.toFixed()">&ndash;&gt;-->
              <!--&lt;!&ndash;                  <i class="fa fa-star text-sm text-[#ee4d2d]"></i>&ndash;&gt;-->
              <!--&lt;!&ndash;                </div>&ndash;&gt;-->
              <!--&lt;!&ndash;                <div v-else>&ndash;&gt;-->
              <!--&lt;!&ndash;                  <i class="fa-regular fa-star text-sm text-[#ee4d2d]"></i>&ndash;&gt;-->
              <!--&lt;!&ndash;                </div>&ndash;&gt;-->
              <!--              </div>-->
            </div>
          </div>
          <div class="inline-block space-y-2">
            <button
                class="min-w-[5rem] px-3 py-1 border text-black text-sm text-[#ee4d2d] border-[#ee4d2d] disabled:bg-gray-200">
              Tất cả
            </button>
            <button class="min-w-[5rem] px-3 py-1 border text-black text-sm disabled:bg-gray-200 ml-5"> 5 sao (1)
            </button>
            <button class="min-w-[5rem] px-3 py-1 border text-black text-sm disabled:bg-gray-200 ml-5"> 4 sao (1)
            </button>
            <button class="min-w-[5rem] px-3 py-1 border text-black text-sm disabled:bg-gray-200 ml-5"> 3 sao (1)
            </button>
            <button class="min-w-[5rem] px-3 py-1 border text-black text-sm disabled:bg-gray-200 ml-5"> 2 sao (1)
            </button>
            <button class="min-w-[5rem] px-3 py-1 border text-black text-sm disabled:bg-gray-200 ml-5"> 1 sao (1)
            </button>
          </div>
        </div>
        <div class="mx-4 px-4 py-4 border-b border-[#f9ede5] w-auto flex justify-start">
          <div class="">
            <img class="w-10 h-10 rounded-full" src="https://cf.shopee.vn/file/1123d77a05c1c3bc293b23feb53009b4_tn"
                 alt="">
          </div>
          <div class="ml-5">
            <p class="mb-0">Nguyễn Văn A</p>
            <div class="border-r border-r-gray-200 flex items-center mt-1">
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa-regular fa-star text-sm text-[#ee4d2d]"></i>
              <!--              <a-rate class="text-lg" allow-half :default-value="detailProduct.rating" :value="3" :number="3" disabled/>-->
            </div>
            <p class="mt-1">2022-06-29 12:35 | Phân loại hàng: silver,Find X2 Pro Supi</p>
          </div>
        </div>
        <div class="mx-4 px-4 py-4 border-b border-[#f9ede5] w-auto flex justify-start">
          <div class="">
            <img class="w-10 h-10 rounded-full" src="https://cf.shopee.vn/file/1123d77a05c1c3bc293b23feb53009b4_tn"
                 alt="">
          </div>
          <div class="ml-5">
            <p class="mb-0">Nguyễn Văn A</p>
            <div class="border-r border-r-gray-200 flex items-center mt-1">
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa-regular fa-star text-sm text-[#ee4d2d]"></i>
              <!--              <a-rate class="text-lg" allow-half :default-value="detailProduct.rating" :value="3" :number="3" disabled/>-->
            </div>
            <p class="mt-1">2022-06-29 12:35 | Phân loại hàng: silver,Find X2 Pro Supi</p>
          </div>
        </div>
        <div class="mx-4 px-4 py-4 border-b border-[#f9ede5] w-auto flex justify-start">
          <div class="">
            <img class="w-10 h-10 rounded-full" src="https://cf.shopee.vn/file/1123d77a05c1c3bc293b23feb53009b4_tn"
                 alt="">
          </div>
          <div class="ml-5">
            <p class="mb-0">Nguyễn Văn A</p>
            <div class="border-r border-r-gray-200 flex items-center mt-1">
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa-regular fa-star text-sm text-[#ee4d2d]"></i>
              <!--              <a-rate class="text-lg" allow-half :default-value="detailProduct.rating" :value="3" :number="3" disabled/>-->
            </div>
            <p class="mt-1">2022-06-29 12:35 | Phân loại hàng: silver,Find X2 Pro Supi</p>
          </div>
        </div>
        <div class="mx-4 px-4 py-4 border-b border-[#f9ede5] w-auto flex justify-start">
          <div class="">
            <img class="w-10 h-10 rounded-full" src="https://cf.shopee.vn/file/1123d77a05c1c3bc293b23feb53009b4_tn"
                 alt="">
          </div>
          <div class="ml-5">
            <p class="mb-0">Nguyễn Văn A</p>
            <div class="border-r border-r-gray-200 flex items-center mt-1">
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa fa-star text-sm text-[#ee4d2d]"></i>
              <i class="fa-regular fa-star text-sm text-[#ee4d2d]"></i>
              <!--              <a-rate class="text-lg" allow-half :default-value="detailProduct.rating" :value="3" :number="3" disabled/>-->
            </div>
            <p class="mt-1">2022-06-29 12:35 | Phân loại hàng: silver,Find X2 Pro Supi</p>
          </div>
        </div>
        <div class="mx-4 px-4 py-4 border-b border-[#f9ede5] w-auto flex justify-end">
          <template>
            <a-pagination v-model="current" :total="10" show-less-items/>
          </template>
        </div>
      </div>
    </div>

    <div class="flex mt-9">
      <span class="mr-3" v-for="tag in tagList" :key="tag.id">#{{ tag.tagName }}</span>
    </div>
    <Footer/>
  </div>
</template>

<script setup>

import {reactive, ref} from "vue";
import {PlusOutlined, MinusOutlined} from "@ant-design/icons-vue";

const optionQuantity = ref(1);

const detailProduct = reactive({
  image: 'https://api1921.xyz/wp-content/uploads/2022/02/Fanfare-of-Adolescence-new-char-2.jpg.webp',
  attachFiles: [
    'https://api1921.xyz/wp-content/uploads/2022/02/Fanfare-of-Adolescence-new-char-2.jpg.webp',
    'https://api1921.xyz/wp-content/uploads/2022/02/Plunderer.jpg',
    'https://api1921.xyz/wp-content/uploads/2022/02/manga-KINGDOM-OF-Z.jpg.webp',
    'https://api1921.xyz/wp-content/uploads/2022/02/Manga-Sukeban-Deka-Pretend.jpg.webp',
    'https://api1921.xyz/wp-content/uploads/2022/01/manga-Children-of-the-Shiunji-family.jpg.webp',
    'https://api1921.xyz/wp-content/uploads/2022/01/Higurashi-When-They-Cry.jpg.webp'
  ]
});

const decreaseOptionQuantity = () => {
  console.log('decrease option quantity: ', optionQuantity.value);
  if (optionQuantity.value > 1) {
    optionQuantity.value--;
  }
}
const increaseOptionQuantity = () => {
  console.log('increase option quantity: ', optionQuantity.value);
  optionQuantity.value++;
}

</script>

<style scoped>
/* For demo */
.ant-carousel >>> .slick-dots {
  height: auto;
}

.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}

.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}

.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}

.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}

.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;

}

input[type=number] {
  -moz-appearance: textfield;
}
</style>
