<template>
  <!-- Container -->
  <div class=" mx-auto h-full">
    <div class="flex flex-col items-center h-full relative top-28">
      <!-- Row -->
      <div class="xl:w-4/4 lg:w-12/12 flex justify-center">
        <!-- Col -->
        <div class="w-full max-w-lg bg-white p-5 rounded-lg lg:rounded-l-none">
          <router-link to="/">
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                 alt="Workflow">
          </router-link>
          <div class="px-8 mb-4 text-center">
            <h3 class="pt-4 mb-2 text-2xl">Bạn Đã Quên Mật Khẩu?</h3>
            <p class="mb-4 text-sm text-gray-700">
              Bạn chỉ cần điền địa chỉ email, chúng tôi sẽ gửi mật khẩu tới cho bạn!
            </p>
          </div>

          <!--          ant form-->
          <a-form
              :model="formState"
              :label-col="{ span: 4 }"
              :wrapper-col="{ span: 20 }"
              autocomplete="off"
              @finish="resetPasswd"
              style="max-width: 500px; margin: auto"
          >
            <a-form-item
                label="Email"
                name="email"
                labelAlign="left"
                :rules="[{ required: true, message: 'Vui lòng điền email!' }]"
            >
              <a-input type="email" v-model:value="formState.email"/>
            </a-form-item>


            <a-button type="primary" :loading="resetLoading" style="margin: auto; display: block; margin-bottom: 20px"
                      html-type="submit">Đặt
              lại mật khẩu
            </a-button>
          </a-form>
          <div class="extra-forgot">
            <div class="text-center">
              <router-link to="/sign-up"
                           class="inline-block text-sm align-baseline text-{#1890ff} hover:text-{#1890ff}-500">
                Tạo tài khoản mới!
              </router-link>

            </div>
            <div class="text-center">
              <router-link to="/sign-in"
                           class="inline-block text-sm lign-baseline text-{#1890ff} hover:text-{#1890ff}-500">
                Bạn đã có tài khoản? Đăng nhập!
              </router-link>
            </div>
          </div>

          <!--          end ant form-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {reactive, ref} from "vue";

const router = useRouter();
const resetLoading = ref(false);
const formState = reactive({
  email: '',
});

const resetPasswd = (payload) => {
  resetLoading.value = true;
  console.log('reset psswd by email', payload);
}

</script>

<style>
body {
  background-color: #00000003 !important;
}
</style>