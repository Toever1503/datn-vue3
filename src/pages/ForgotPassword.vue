<template>
  <!-- Container -->
  <div class=" mx-auto h-full">
    <div class="flex flex-col items-center h-full" style="margin-top: 100px" >
      <!-- Row -->
      <div class="xl:w-4/4 lg:w-12/12 flex justify-center">
        <!-- Col -->
        <div class="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
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
            style="max-width: 500px; margin: auto"
          >
            <a-form-item
              label="Email"
              name="email"
              labelAlign="left"
              :rules="[{ required: true, message: 'Vui lòng điền email!' }]"
            >
              <a-input type="email" v-model:value="formState.username" />
            </a-form-item>


            <a-button type="primary" style="margin: auto; display: block; margin-bottom: 20px" html-type="submit">Đặt lại mật khẩu</a-button>
          </a-form>
          <div class="extra-forgot">
            <div class="text-center">
              <a
                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="./register.html"
              >
                Tạo tài khoản mới!
              </a>
              <!--              <router-link to="/sign-up" class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">-->
              <!--                Tạo tài khoản mới!-->
              <!--              </router-link>-->
            </div>
            <div class="text-center">
              <a
                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                @click="router.push('/sign-in')"
              >
                Bạn đã có tài khoản? Đăng nhập!
              </a>
            </div>
          </div>

          <!--          end ant form-->

          <!--          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">-->
          <!--            <div class="mb-4">-->
          <!--              <label class="block mb-2 text-sm font-bold text-gray-700" for="email">-->
          <!--                Email-->
          <!--              </label>-->
          <!--              <input-->
          <!--                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"-->
          <!--                id="email"-->
          <!--                type="email"-->
          <!--                placeholder="Nhập địa chỉ email..."-->
          <!--              />-->
          <!--            </div>-->
          <!--            <div class="mb-6 text-center">-->
          <!--              <button-->
          <!--                class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"-->
          <!--                type="button"-->
          <!--              >-->
          <!--                Đặt lại mật khẩu-->
          <!--              </button>-->
          <!--            </div>-->
          <!--            <hr class="mb-6 border-t" />-->
          <!--            <div class="text-center">-->
          <!--              <a-->
          <!--                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"-->
          <!--                href="./register.html"-->
          <!--              >-->
          <!--                Tạo tài khoản mới!-->
          <!--              </a>-->
          <!--              &lt;!&ndash;              <router-link to="/sign-up" class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">&ndash;&gt;-->
          <!--              &lt;!&ndash;                Tạo tài khoản mới!&ndash;&gt;-->
          <!--              &lt;!&ndash;              </router-link>&ndash;&gt;-->
          <!--            </div>-->
          <!--            <div class="text-center">-->
          <!--              <a-->
          <!--                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"-->
          <!--                @click="router.push('/sign-in')"-->
          <!--              >-->
          <!--                Bạn đã có tài khoản? Đăng nhập!-->
          <!--              </a>-->
          <!--            </div>-->
          <!--          </form>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";

const router = useRouter();
const formState = reactive({
  username: "",
  password: "",
  remember: true
});

</script>

<style>
body {
  background-color: #00000003 !important;
}

*, html{
  padding: 0;
  margin: 0;
}
</style>