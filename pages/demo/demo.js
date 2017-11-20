//logs.js
const util = require('../../utils/util.js')

const app = getApp();

Page({
    data: {
    },
    onLoad: function () {
        wx.getUserInfo({
            success: function (res) {
                console.log(res);
                console.log(res.userInfo);
            }
        })
    },
    bindsubmit: function (options) {
        console.log(options.detail.value);
    }
})
