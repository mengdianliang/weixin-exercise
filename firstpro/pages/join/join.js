// pages/join/join.js

//index.js
//获取应用实例
const app = getApp()

Page({
  tel() {
    wx.makePhoneCall({
      phoneNumber: '13693658278',
    })
  },
})
