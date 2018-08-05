//index.js

Page({
  data: {
  
  },
  onLoad: function () {
    
  },
  /**
   * 拨打电话
  */
  callphone() {
    wx.makePhoneCall({
      phoneNumber: '13693658278' //仅为示例，并非真实的电话号码
    })
  },
  /**
   * 微信
  */
  chatwei() {

  },
  /**
   * 邮箱
  */
  emailto() {

  },
  /**
   * 地址
   * 116.377823,39.918477
  */
  addressto() {
    var latitude = 39.918477;
    var longitude = 116.377823;
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 28,
      address: '西城区'
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '自定义转发标题',
      path: '/pages/index/index'
    }
  }
})
