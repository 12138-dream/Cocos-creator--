
cc.Class({
    extends: cc.Component,

    properties: {
        speed:0,
        joystick:{
            type:require("joystick"),//require(")方法，可以设置调用其他脚本的属性
            default:null
        }
    },
    start () {
            
    },

    update (dt) {
        var vx = this.joystick.dic.x*this.speed;//方向速度
        var vy = this.joystick.dic.y*this.speed;//方向速度
        this.node.x+=dt*vx;
        this.node.y+=dt*vy;
    },
});

