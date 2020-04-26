// pages/person/person.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
    
  },
  //事件处理函数
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //获取用户信息
    let userInfo=wx.wx.getStorageSync("userInfo");
    this.setData({
      userInfo:userInfo
    })
    
  },
  //点击事件
  getUserInfoFunc: function(e) {
    console.log(e)
    let userInfo=e.detail.userInfo;
    this.setData({
      userInfo:userInfo
    })
    wx.getStorageSync("userInfo",userInfo)
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