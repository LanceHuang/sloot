//logs.js
const util = require('../../utils/util.js')

Page({
    data: {
        msg: 'Hello QR Code.456789asdasdahshdjahsjdkasasasasasasasdasasdasdasdasdas.asasas asas'
    },
    onLoad: function () {
    },
    scanCode: function (e) {
        const that = this;
        wx.scanCode({
            success: function (res) {
                that.setData({ msg: res.result });
                // console.log(res.result);
            }
        })
    }
})
