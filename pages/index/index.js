//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImage: ['../../images/1.jpeg', '../../images/2.jpeg', '../../images/3.jpeg'],
  },
  onShow(options){

  },
  onPullDownRefresh(){
    setTimeout(()=>{
      wx.stopPullDownRefresh()
      
    },300)
  },
  onShareAppMessage : function(){
    return{
      title:"测试"
    }
  },
  getPhone:function(){
    wx.makePhoneCall({
      phoneNumber : '15652520368'
    })
  },
  goMap:function(){
    wx.navigateTo({
      url: '../map/index',
    })
  }

})
