<template>
  <div>
    <table-render :data="data" :columns="columns"></table-render>
    <button @click="handleAddData">添加数据</button>
  </div>
</template>

<script>
import tableRender from '../components/tableRender'
export default {
  data () {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age',
          sortable: true
        },
        {
          title: '生日',
          key: 'birthday',
          sortable: true
        },
        {
          title: '地点',
          key: 'address'
        }
      ],
      data: [
        {
          name: '王小明',
          age: 18,
          birthday: '1999-12-11',
          address: '北京市'
        },
        {
          name: '王小明',
          age: 20,
          birthday: '1999-1-11',
          address: '北京市'
        },
        {
          name: '邵等',
          age: 18,
          birthday: '1999-2-11',
          address: '北京市'
        },
        {
          name: '李敏',
          age: 18,
          birthday: '1999-12-01',
          address: '北京市'
        },
        {
          name: '李梅',
          age: 18,
          birthday: '1999-12-16',
          address: '北京市'
        },
        {
          name: '吴丽',
          age: 21,
          birthday: '1999-12-21',
          address: '北京市'
        },
        {
          name: '华国锋',
          age: 22,
          birthday: '1999-12-01',
          address: '北京市'
        },
        {
          name: '万小明',
          age: 8,
          birthday: '2009-12-11',
          address: '北京市'
        },
        {
          name: '沃达丰',
          age: 18,
          birthday: '2099-12-11',
          address: '北京市'
        }
      ]
    }
  },
  components: {
    tableRender
  },
  methods: {
    handleAddData: function () {
      console.log('111')
      this.data.push({
        name: '王小明',
        age: 19,
        birthday: '1999-12-11',
        address: '北京市'
      })
    }
  }
}
</script>
<style>
[v-cloak]{
  display: none
}
table{
  width: 100%;
  margin-bottom: 24px;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #e9e9e9;
}
table th{
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  white-space: nowrap;
}
table td, table th{
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
table th a{
  display: inline-block;
  margin: 0 4px;
  cursor: pointer;
}
table th a.on{
  color: #3399ff
}
table th a:hover{
  color: #3399ff
}
</style>
