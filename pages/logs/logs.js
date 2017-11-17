//logs.js
const util = require('../../utils/util.js')

Page({
    data: {
        logs: [],
        longitude: 113.324520,
        latitude: 23.099994
    },
    onLoad: function () {
        // Read user location
        const that = this;
        wx.getLocation({
            success: function (res) {
                console.log("longitude: " + res.longitude);
                console.log("latitude: " + res.latitude);
                that.setData({
                    logs: (wx.getStorageSync('logs') || []).map(log => {
                        return util.formatTime(new Date(log))
                    }),
                    longitude: res.longitude,
                    latitude: res.latitude
                })
            }
        })
        // this.setData({
        //     logs: (wx.getStorageSync('logs') || []).map(log => {
        //         return util.formatTime(new Date(log))
        //     }),
        //     longitude: longitude,
        //     latitude: latitude
        // })
    }
})
