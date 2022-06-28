<template>

  <div class="min-h-full flex justify-center relative top-28">
    <div class="max-w-lg w-full space-y-8 p-5 h-fit bg-white">
      <div>
        <router-link to="/">
          <img class="mx-auto h-12 w-auto" :src="Logo"
               alt="Workflow">
        </router-link>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng ký tài khoản mới</h2>
      </div>
      <a-form
          :noStyle="true"
          :model="formState"
          autocomplete="off"
          @finish="onSubmit"
          labelAlign="left"
          :label-col="{ span: 6 }"
      >
        <a-form-item
            label="Họ và tên"
            name="fullName"
            :rules="[{ required: true, message: 'Vui lòng điền tên của bạn!' }]"
        >
          <a-input placeholder="Điền tên đăng nhập" v-model:value="formState.fullName"/>
        </a-form-item>

        <a-form-item
            label="Tên đăng nhập"
            name="username"
            :rules="[{ required: true, message: 'Vui lòng điền tên đăng nhập!' }]"
        >
          <a-input placeholder="Điền tên đăng nhập" v-model:value="formState.username"/>
        </a-form-item>

        <a-form-item
            label="Email"
            name="email"
            :rules="[{ required: true, message: 'Vui lòng điền email!' }]"
        >
          <a-input type="email" placeholder="Điền email của bạn" v-model:value="formState.email"/>
        </a-form-item>


        <a-form-item
            label="Mật khẩu"
            name="password"
            :rules="[{ required: true, message: 'Vui lòng điền mật khẩu!' }]"
        >
          <a-input-password placeholder="Điền mật khẩu của bạn" v-model:value="formState.password"/>
        </a-form-item>

        <div  >
          <a-button type="primary" style="margin: auto; display: block" html-type="submit" :loading="submitLoading"
          >Đăng Ký
          </a-button>

          <p class="text-center mt-2 mb-2">Hoặc</p>

          <router-link to="/sign-in" class="block w-fit m-auto text-sm lign-baseline text-{#1890ff} hover:text-{#1890ff}-500">
            Bạn đã có tài khoản? Đăng nhập!
          </router-link>
        </div>


      </a-form>
    </div>
  </div>

</template>

<script setup>
import Logo from '../assets/logoB.png';
import {reactive, ref} from "vue";

const submitLoading = ref(false);
const formState = reactive({
  username: '',
  email: '',
  fullName: '',
  password: '',
});

const onSubmit = (payload) => {
  submitLoading.value = true;
  console.log('onSubmit', payload);

}
</script>

