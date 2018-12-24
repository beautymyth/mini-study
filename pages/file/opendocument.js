// pages/file/opendocument.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 点击文件图片，下载文件并打开
   */
  open: function() {
    var filePath = '';
    const downloadTask = wx.downloadFile({
      url: 'https://interview2.51job.com/miniapi/interview/share/resume/getresume',
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          console.log(res);
          filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            fileType: 'docx',
            success(res) {
              console.log('打开文档成功')
            },
            fail: function(e) {
              console.log(e);
            }
          })
        }
      }
    });

    downloadTask.onProgressUpdate((res) => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)

      if (res.progress == 100) {
        console.log(filePath);
      }
    })
  },
  open1: function() {
    wx.openDocument({
      filePath: '/images/tmp/test.docx',
      fileType: 'docx',
      success(res) {
        console.log('打开文档成功')
      },
      fail: function(e) {
        console.log(e);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //this.open();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})