<template>
    <div id="best-sell-product">
        <div class="bg-white">
            <div
                class="max-w-2xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:max-w-screen-lg lg:max-w-screen-xl lg:max-w-screen-2xl lg:px-5">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
                    Sản phẩm bán chạy
                </h2>
                <ListProduct />

                <div class="flex justify-center">
                    <a href="#" class="pt-1 text-sm text-gray-500 hover:text-gray-900">
                        Xem tất cả
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ListProduct from "../ListProduct.vue";
</script>
