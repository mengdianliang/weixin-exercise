//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg',
    ],
    proList: [
      {
        id: '1',
        title: '精英贷',
        img: '/images/pro_01.jpg',
        title: 'test',
        tel: '13687695679',
        banner: '/images/banner_01.jpg',
        shortDesc: '22周岁以上即可 最快3小时下款 件均8万，最高20万',
        introduce: '1.dddffd\n2.errrtrtrettrtrettr\n,3.fgdgfgfggf',    
      },
      {
        id: '2',
        title: '精英贷',
        img: '/images/pro_02.jpg',
        title: 'test',
        tel: '13687695679',
        banner: '/images/banner_02.jpg',
        shortDesc: '22周岁以上即可 最快3小时下款 件均8万，最高20万',
        introduce: '1.dddffd\n2.errrtrtrettrtrettr\n,3.fgdgfgfggf',
      },
      {
        id: '3',
        title: '精英贷',
        img: '/images/pro_03.jpg',
        title: 'test',
        tel: '13687695679',
        banner: '/images/banner_03.jpg',
        shortDesc: '22周岁以上即可 最快3小时下款 件均8万，最高20万',
        introduce: '1.dddffd\n2.errrtrtrettrtrettr\n,3.fgdgfgfggf',
      }
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
  },
  toDetail(e) {
    let index = e.currentTarget.dataset.index;
    console.log(index);
    let title = this.data.proList[index].title;
    wx.navigateTo({
      url: '/pages/detail/detail?title=' + title,
    })
  },
  copy() {
    if (wx.setClipboardData) {
      wx.setClipboardData({
        data: '这是我要复制的内容',
        success: (res) => {
          wx.showModal({
            title: '复制成功',
            content: '内容已经复制成功',
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '您的版本太低，请升级',
      })
    }
    
  },
})
