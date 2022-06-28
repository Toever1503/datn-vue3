<template>
  <div id="category-page" class="flex">
    <div id="category-sidebar" class="p-2" style="width: 20%">
      <h3>
        BỘ LỌC TÌM KIẾM
      </h3>

      <div class="variation-filter">
        <h4>Khoảng Giá</h4>
        <a-input-group compact>
          <a-input
              type="number"
              style="width: 42%;text-align: center"
              placeholder="Từ"
          />
          <a-input
              style="width: 30px; border-left: 0; pointer-events: none; background-color: #fff"
              placeholder="~"
              disabled
          />
          <a-input
              type="number"
              style="width: 42%; text-align: center; border-left: 0"
              placeholder="Đến"
          />
        </a-input-group>
      </div>

      <div class="variation-filter">
        <h4>Khối Lượng</h4>

        <a-checkbox-group v-model:value="C">
          <a-row>
            <a-col :span="8">
              <a-checkbox value="A">150G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="B">250G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="C">100G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="D">220G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="E">E</a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>

      </div>

      <div class="variation-filter">
        <h4>Thương hiệu</h4>
        <a-checkbox-group v-model:value="C">
          <a-row>
            <a-col :span="8">
              <a-checkbox value="A">150G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="B">250G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="C">100G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="D">220G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="E">E</a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </div>

      <div class="variation-filter">
        <h4>Unit</h4>
        <a-checkbox-group v-model:value="C">
          <a-row>
            <a-col :span="8">
              <a-checkbox value="A">150G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="B">250G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="C">100G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="D">220G</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="E">E</a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </div>


    </div>

    <div id="category-content" style="width: 80%">
      <div id="best-sell-product">
        <div class="bg-white">
          <a-dropdown class="float-right m-5 mt-2 mb-2" placement="bottomRight" trigger="'click'">
            <a-button>Xếp theo: Giá giảm dần</a-button>
            <template #overlay>
              <a-menu>
                <a-menu-item key="1">
                  Giá Tăng Dần
                </a-menu-item>
                <a-menu-item key="2">
                  % Giảm Dần
                </a-menu-item>
                <a-menu-item key="2">
                  % Tăng Dần
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <div
              class="max-w-2xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:max-w-screen-lg lg:max-w-screen-xl lg:max-w-screen-2xl lg:px-5">
            <div
                class="product-list mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8"
            >
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>

              <!-- More products... -->
            </div>

            <div class="m-auto mt-2 flex justify-center">
              <a-pagination v-model="pageConfig" @change="onChangePage" size="small" :total="500" :responsive="true"
                            :showSizeChanger="false"/>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import Product from "../components/Product.vue";
import {onMounted, ref} from "vue";

const route = useRoute();
const categoryId = ref(null);
const pageConfig = ref({
  current: 1,
  total: 500,
  pageSize: 30
});
const filter = ref({
  minPrice: 0,
  maxPrice: 1000000,
  weights: [],
  brands: [],
  units: []
});

const onChangePage = (page, size) => {
  console.log("changing page: ", page, size);
  console.log("filter: ", filter.value);
};

onMounted(() => {
  categoryId.value = route.params.id;
  console.log("category id: ", categoryId.value);
});

</script>

<style>
#category-page #category-sidebar, #category-page #category-content {
  background-color: rgb(233 231 231 / 18%);
}

#category-page .variation-filter {
  padding: 2px;
  border-top: 1px solid #cfcfcf;
  margin: 20px 0;
}

#category-page #category-content {
  padding-left: 10px;
}
</style>