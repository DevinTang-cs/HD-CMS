import hdRequest from '@/service'

export function getPageListData(url: string, queryInfo: any) {
  return hdRequest.post({
    url: url,
    data: queryInfo
  })
}
