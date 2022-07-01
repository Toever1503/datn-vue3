<template>
  <div id="cart-page" class="relative" style="min-height: 600px">
    <a-table :columns="columns"
             style="border: 1px solid #80808040"
             :bordered="true"
             :loading="tblLoading"
             :data-source="dataCart"
             :pagination="false"
             :customHeaderCell="customHeaderCell"
             :row-selection="{ selectedRowKeys: selectedRowKeys.data, onChange: onSelectKeyChange }"
             size="middle">

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a-tooltip>
            <template #title>Xóa khỏi giỏ hàng</template>
            <delete-outlined style="color:  red" @click="deleteItemOutOfCart(record)"/>
          </a-tooltip>
        </template>
        <template v-else-if="column.key === 'product'">
          <div class="flex" style="height: 80px">
            <img style="width: 80px;"
                 src="https://imgaz1.chiccdn.com/os/202206/20220620021849_365.jpg.webp">
            <span class="m-auto ml-2 h-fit">
              têffffstêffffstêffffstêffffstêffffstêffffstêffffs
              têffffstêffffs
            </span>
          </div>
        </template>

      </template>


    </a-table>

    <div class="absolute bottom-0 right-0 border-gray-200 pd-3">
      <a-descriptions title="Thông tin chung" style="max-width: 500px; " size="small">
        <a-descriptions-item label="Tổng số lượng" span="3">
          <span>{{ 3 }}</span>
        </a-descriptions-item>
        <a-descriptions-item label="Tổng tiền(đã bao gồm thuế)" span="3">
          <span>1810000000</span>
        </a-descriptions-item>
      </a-descriptions>
      <a-button class="float-right mb-2">Đặt hàng ngay!</a-button>
    </div>

    <!--    checkout-->
    <a-modal :visible="showModal" style="max-width: 600px" title="Thông tin đặt hàng" okText="Đặt hàng"
             cancelText="Hủy bỏ"
             :closable="false"
             :confirm-loading="orderFormLoading"
    >
      <a-form
          ref="formRef"
          :model="orderForm"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          labelAlign="left"

      >
        <a-form-item
            label="Tên người nhận"
            name="receiver"
            :rules="[{ required: true, message: 'Vui lòng điền tên người nhận!' }]"
        >
          <a-input v-model:value="orderForm.username"/>
        </a-form-item>

        <a-form-item label="Địa chỉ chi tiết" required>
          <a-input v-model:value="orderForm.street" placeholder="Điền số nhà, tên đường nơi bạn ở" />
        </a-form-item>

        <div class="row">
          <a-form-item label="Tỉnh/Thành Phố" required>
            <a-select
                v-model:value="orderForm.provinceId"
                show-search
                placeholder="Chọn thành phố"
                :options="provinceOpts"
                :filter-option="filterOptionSelect"
            ></a-select>
          </a-form-item>
          <a-form-item label="Quận Huyện" required>
            <a-select
                v-model:value="orderForm.districtId"
                show-search
                placeholder="Chọn quận huyện"
                :options="districtOpt"
                :filter-option="filterOptionSelect"
            ></a-select>
          </a-form-item>
          <a-form-item label="Xã Phường" required>
            <a-select
                v-model:value="orderForm.wardId"
                show-search
                placeholder="Chọn xã phường"
                :options="wardOpts"
                :filter-option="filterOptionSelect"
            ></a-select>
          </a-form-item>
        </div>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
import {DeleteOutlined} from "@ant-design/icons-vue";
import {reactive, ref} from "vue";

const columns = [
  {
    title: "Sản phẩm",
    dataIndex: "product",
    key: "product",
    align: "center",
    width: "500px"
  },
  {
    title: "Đơn giá",
    dataIndex: "price",
    key: "price",
    align: "center"
  },
  {
    title: "Số luợng",
    dataIndex: "quantity",
    key: "quantity",
    align: "center"
  },
  {
    title: "Số tiền",
    dataIndex: "subTotal",
    key: "subTotal",
    align: "center"
  },
  {
    title: "Hành động",
    dataIndex: "action",
    key: "action",
    align: "center",
    width: "100px"
  }
];

const dataCart = [{
  product: "Sản phẩm 1",
  price: "100000",
  quantity: "1",
  subTotal: "100000"
},
  {
    product: "Sản phẩm 2",
    price: "200000",
    quantity: "2",
    subTotal: "400000"
  },
  {
    product: "Sản phẩm 3",
    price: "300000",
    quantity: "3",
    subTotal: "900000"
  }
];


const selectedRowKeys = reactive({
  data: []
});
const tblLoading = reactive(false);

const customHeaderCell = (record) => {
  console.log("header row: ", record);
  return {
    style: "background: white" // props
  };
};
const onSelectKeyChange = selectedRowKeys => {
  console.log("selectedRowKeys changed: ", selectedRowKeys);
  this.selectedRowKeys.data = selectedRowKeys;
};

const deleteItemOutOfCart = (row) => {
  console.log("deleting item: ", row);
};

//handle order checkout
const showModal = reactive(true);
const formRef = ref();
const orderForm = reactive({
  street: "",
  password: "",
  provinceId: null,
  districtId: null,
  wardId: null
});

const orderFormLoading = reactive(true);

const provinceOpts = ref([{
  value: 'jack',
  label: 'Jack',
}, {
  value: 'lucy',
  label: 'Lucy',
}, {
  value: 'tom',
  label: 'Tom',
}]);

const districtOpt = ref([{
  value: 'jack',
  label: 'Jack',
}, {
  value: 'lucy',
  label: 'Lucy',
}, {
  value: 'tom',
  label: 'Tom',
}]);

const wardOpts = ref([{
  value: 'jack',
  label: 'Jack',
}, {
  value: 'lucy',
  label: 'Lucy',
}, {
  value: 'tom',
  label: 'Tom',
}]);
const filterOptionSelect = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

</script>

<style>
#cart-page th.ant-table-cell {
  background-color: #56c2e3a1 !important;
  border: none;
  border-bottom: 1px solid #f0f0f0;
}

#cart-page td.ant-table-cell {
  border: none;
  border-top: 1px solid #f0f0f0;
}

#cart-page table tbody {
  margin-top: 20px;
  background-color: transparent !important;
  background: transparent !important;
}

#cart-page span.ant-descriptions-item-content {
  justify-content: flex-end;
}
</style>