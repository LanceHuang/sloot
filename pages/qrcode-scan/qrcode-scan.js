const util = require('../../utils/util.js')

const app = getApp();

Page({
    data: {
        msg: ''
    },
    onLoad: function () {
    },
    scanCode: function () {
        const that = this;
        wx.scanCode({
            success: function (res) {
                that.setData({ msg: res.result });
            }
        })
    }
})
