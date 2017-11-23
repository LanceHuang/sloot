const app = getApp();

Page({
    data: {
        avatarUrl: "",
        nickname: "default"
    },
    onLoad: function () {
        const that = this;
        wx.getUserInfo({
            success: function (res) {
                that.setData({
                    avatarUrl: res.userInfo.avatarUrl,
                    nickname: res.userInfo.nickName
                    });
            }
        })
    }
})
