<template>
  <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full flex justify-center relative top-28">
    <div class="max-w-lg w-full space-y-8 p-5 h-fit bg-white">
      <div>
        <router-link to="/">
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
               alt="Workflow">
        </router-link>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng nhập vào tài khoản của bạn</h2>
      </div>
      <a-form
          :noStyle="true"
          :model="formState"
          autocomplete="off"
          @finish="onSubmit"
          :label-col="{ span: 6 }"
      >
        <a-form-item
            label="Tên đăng nhập"
            name="username"
            :rules="[{ required: true, message: 'Vui lòng điền tên đăng nhập!' }]"
        >
          <a-input placeholder="Bạn có thể sử dụng email hoặc tên đăng nhập" v-model:value="formState.username"/>
        </a-form-item>

        <a-form-item
            label="Mật khẩu"
            name="password"
            :rules="[{ required: true, message: 'Vui lòng điền mật khẩu!' }]"
        >
          <a-input-password placeholder="Điền mật khẩu của bạn" v-model:value="formState.password"/>
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 5}">
          <a-checkbox v-model:checked="formState.remember">Lưu phiên đăng nhập</a-checkbox>
          <router-link to="/forgot-password" class="font-medium text-{#1890ff} hover:text-{#1890ff}-500 float-right">
            Quên mật khẩu?
          </router-link>
        </a-form-item>

        <div class="flex justify-center">
          <a-button type="primary" html-type="submit" :loading="loginLoading"
          >Đăng nhập
          </a-button>

          <a-button type="link"
          >
            <router-link to="/sign-up">
              Đăng Ký
            </router-link>
          </a-button>

        </div>

      </a-form>
    </div>
  </div>

</template>

<script setup>

import {reactive, ref} from "vue";

const loginLoading = ref(false);
const formState = reactive({
  username: '',
  password: '',
  remember: true,
});

const onSubmit = (payload) => {
  loginLoading.value = true;
  console.log('onSubmit', payload);

}
</script>

