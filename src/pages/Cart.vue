<template>
  <div id="cart-page" style="min-height: 600px">
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
            <delete-outlined style="color:  red" @click="deleteItemOutOfCart(record)" />
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
  </div>
</template>

<script setup>
import { DeleteOutlined } from "@ant-design/icons-vue";
import { reactive } from "vue";

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
</style>