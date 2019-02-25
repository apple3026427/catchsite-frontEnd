//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    jobInfo: [],
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad () {
    this.getJobInfo();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getJobInfo() {
    let that = this;
    wx.request({
      url: 'http://localhost:8080/getJobInfoList',
      success: function (res) {
        console.log(res)// 服务器回包信息
        that.setData({
          jobInfo: res.data,
        });
      }
    })
  }
})
