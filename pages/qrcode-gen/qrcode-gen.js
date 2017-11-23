const QR = require('../../utils/qrcode.js')

Page({
    data: {
        placeholder: "文本",
        canvasHidden: false
    },
    onLoad: function () {
    },
    //适配不同屏幕大小的canvas
    setCanvasSize: function () {
        var size = {};
        try {
            var res = wx.getSystemInfoSync();
            var scale = 750 / 686;//不同屏幕下canvas的适配比例；设计稿是750宽
            var width = res.windowWidth / scale;
            var height = width;//canvas画布为正方形
            size.w = width;
            size.h = height;
        } catch (e) {
            // Do something when catch error
            console.log("获取设备信息失败" + e);
        }
        return size;
    },
    createQrCode: function (url, canvasId, cavW, cavH) {
        //调用插件中的draw方法，绘制二维码图片
        QR.qrApi.draw(url, canvasId, cavW, cavH);
    },
    genCode: function (e) {
        var that = this;
        var url = e.detail.value.txt;
        console.log(url);
        wx.showToast({
            title: '生成中...',
            icon: 'loading',
            duration: 2000
        });
        var st = setTimeout(function () {
            wx.hideToast()
            var size = that.setCanvasSize();
            //绘制二维码
            that.createQrCode(url, "qrcode", size.w, size.h);
            clearTimeout(st);
        }, 2000)

    }
})
