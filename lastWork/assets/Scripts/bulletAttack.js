cc.Class({
    extends: cc.Component,
    properties: { },
    start () {},
    onCollisionEnter: function (other, self) {
        if(other.node.group=="enemy"){
            cc.log("击毁敌机")
            other.node.destroy();
            self.node.destroy();
            cc.find("Canvas").getComponent("game0.").gainScore();
            cc.find("Canvas").getComponent("game0.").boom.play()
            //在一个脚本中调用另外一个脚本的函数方法
        }
        var score= cc.find("Canvas").getComponent("game0.").score;
        if(score>=5){//if语句不能用单等于号
            cc.find("Canvas").getComponent("game0.").gameClear.active = true;
            cc.director.pause();
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
});
