cc.Class({
    extends: cc.Component,
    properties: {
        speed:0,
    },
    start () {  },
    update (dt) {
        this.node.y+=this.speed*dt//属性中this不能忘记加！！！
    },
});
