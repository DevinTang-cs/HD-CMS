import hdRequest from '@/service'

export function getPageListData(url: string, queryInfo: any) {
  return hdRequest.post({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return hdRequest.delete({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return hdRequest.post({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return hdRequest.patch({
    url: url,
    data: editData
  })
}
