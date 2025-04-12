export const contentTableConfig = {
  title: '商品列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'oldPrice', label: '原价', minWidth: '100' },
    { prop: 'newPrice', label: '现价', minWidth: '100' },
    { prop: 'imgUrl', label: '图片', minWidth: '100', slotName: 'image' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    {
      prop: 'handler',
      label: '操作',
      minWidth: '120px',
      slotName: 'handler'
    }
  ]
}
