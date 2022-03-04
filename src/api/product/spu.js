//平台属性管理模块请求文件
import request from '@/utils/request'

//获取spu列表数据的接口
///admin/product/{page}/{limit}  get  page  limit   category3Id
export const reqSpuList=(page,limit,category3Id)=>request({url:`/admin/product/${page}/${limit}`,method:'get',params:{category3Id}})


//获取SPU的信息
///admin/product/getSpuById/{spuId}  get
export const reqSpu=(spuId)=>request({url:`/admin/product/getSpuById/${spuId}`,method:'get'})


//获取品牌的信息
///admin/product/baseTrademark/getTrademarkList  get
export const reqTradeMarkList=()=>request({url:'/admin/product/baseTrademark/getTrademarkList',method:'get'})


//获取SPU图标的接口
///admin/product/spuImageList/{spuId}  get
export const reqSpuImageList=(spuId)=>request({url:`/admin/product/spuImageList/${spuId}`,method:'get'})

//获取平台全部销售属性---整个平台销售属性一共三个
///admin/product/baseSaleAttrList  get
export const reqBaseSaleAttrList=()=>request({url:'/admin/product/baseSaleAttrList',method:'get'})


//修改｜添加SPU：对于修改或者添加，携带给服务器的参数大致是一样的，唯一的区别就是携带的参数是否带有ID
export const reqAddOrUpdateSpu=(spuInfo)=>{
    //携带的参数带有ID---修改SPU
    if(spuInfo.id){
        return request({url:'/admin/product/updateSpuInfo',method:'post',data:spuInfo})
    }else{
        //携带的参数没有ID---添加SPU
        return request({url:'/admin/product/saveSpuInfo',method:'post',data:spuInfo})
    }
}

//删除SPU
///admin/product/deleteSpu/{spuId}  delete
export const reqDeleteSpu=(spuId)=>request({url:`/admin/product/deleteSpu/${spuId}`,method:'delete'})

//获取图片的接口
///admin/product/spuImageList/{spuId}  get
export const reqSpuImageLIst = (spuId) => request({ url: `/admin/product/spuImageList/${spuId}`, method: 'get' })

//获取销售属性的列表
///admin/product/spuSaleAttrList/{spuId}  get
export const reqSpuSaleAttrList = (spuId) => request({ url: `/admin/product/spuSaleAttrList/${spuId}`, method: 'get' })

//获取销售属性的列表
///admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}  get
export const reqAttrInfoList = (category1Id, category2Id, category3Id) => request({ url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`, method: 'get' })

//添加sku
///admin/product/saveSkuInfo   post
export const reqAddSku = (skuInfo) => request({ url: '/admin/product/saveSkuInfo', method: 'post', data:skuInfo })


//获取SKu列表数据的接口
//GET  /admin/product/findBySpuId/{spuId}
export const reqSkuList=(spuId)=>request({url:`/admin/product/findBySpuId/${spuId}`,methodP:'get'})