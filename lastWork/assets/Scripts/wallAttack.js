cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {

    },

    onCollisionEnter: function (other, self) {//不能在这个里面重复定义gamePause中的组件，要不然会调用多次
        if(other.node.group=="enemy"){
            cc.log("敌机飞跃安全区")
            other.node.destroy();
            cc.find("Canvas").getComponent("game0.").gamePause.active = true;
            cc.find("Canvas").getComponent("game0.").gamePlaying.active = false;
            cc.find("Canvas").getComponent("game0.").attackstick.active = false;
            cc.find("Canvas").getComponent("game0.").gameOver.active = true;
            cc.director.pause();
            //在一个脚本中调用另外一个脚本的函数方法
        }
        // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
        var world = self.world;
    
        // 碰撞组件的 aabb 碰撞框
        var aabb = world.aabb;
    
        // 节点碰撞前上一帧 aabb 碰撞框的位置
        var preAabb = world.preAabb;
    
        // 碰撞框的世界矩阵
        var t = world.transform;
    
        // 以下属性为圆形碰撞组件特有属性
        var r = world.radius;
        var p = world.position;
    
        // 以下属性为 矩形 和 多边形 碰撞组件特有属性
        var ps = world.points;
    },
    // update (dt) {},
});
