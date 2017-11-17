//logs.js
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
                const result = res.result;
                const len = 10;
                let appendStr = '';
                for (let i = 0; i < result.length; i += len) {
                    appendStr += "<br>" + result.substr(i, len);
                }

                that.setData({ msg: appendStr });
                // that.setData({ msg: res.result });
            }
        })
    }
})
