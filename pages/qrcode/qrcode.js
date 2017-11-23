Page({
    data: {},
    onLoad: function () { },
    scanCode: function () {
        wx.navigateTo({
            url: '../qrcode-scan/qrcode-scan'
        })
    },
    genCode: function () {
        wx.navigateTo({
            url: '../qrcode-gen/qrcode-gen'
        })
    }
})
