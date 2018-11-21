const ajax = function (url,data) {
  return new Promise((reslove,reject) => {
    wx.request({
      url:url,
      method : "POST",
      header: {
        'content-type': 'application/json',
      },
      success:(res) => {
        reslove(res)
      }
    })
  })
}
wx.ajax = ajax;