// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        "text": "预定",
        "iconPath": "/images/tabbar/xinbaniconshangchuan-.png",
        "selectedIconPath": "/images/tabbar/xinbaniconshangchuan-.png",
        dot: false
      },
      {
        "text": "开门",
        "iconPath": "/images/tabbar/lock.png",
        "selectedIconPath": "/images/tabbar/lock.png",
        badge: ''
      },
      {
        "text": "发现",
        "iconPath": "/images/tabbar/faxian.png",
        "selectedIconPath": "/images/tabbar/faxian.png",
        badge: ''
      },
      {
        "text": "我的",
        "iconPath": "/images/tabbar/wode.png",
        "selectedIconPath": "/images/tabbar/wode.png",
        badge: ''
      }
    ],
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确定'
    }],
    oneButton: [{
      text: '确定'
    }],
    canIUseGetUserProfile: true
  },
  tabChange(e) {
    console.log('tab change', e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})