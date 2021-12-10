cc.Class({
    extends: cc.Component,
    properties: {
        stick:{
            type:cc.Node,
            default:null
        },
        dic:cc.Vec2,
        max_R:0,//最大圈
        min_R:0,//圈内范围
    },
    onLoad () {
        this.stick.setPosition(cc.v2(0,0))
        this.stick.on(cc.Node.EventType.TOUCH_MOVE, function (event) {//错误一：节点选取不明确（stick与node）
            console.log('TOUCH_MOVE');
            this.joyMove(event)
          }, this);
          this.stick.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log('TOUCH_END');
            this.joyEnd(event)
          }, this);
    },
    start () {
    },
//遥感的移动
    joyMove(e){
        var getPos=e.getLocation();
        var nodePos=this.node.convertToNodeSpaceAR(getPos);
        //问题：相对坐标的理解（子节点的坐标是相对与父节点的坐标而言的）
        //节点坐标的转换(从世界（屏幕坐标）坐标系到节点坐标系的转换)
        var lenth=nodePos.mag()
        //node.mag（向量长度）
        if(lenth<=this.min_R){
            this.stick.setPosition(nodePos);
        }//按钮在圈里面的话移动到哪走到哪
        this.dic.x=nodePos.x/lenth;//cosx
        this.dic.y=nodePos.y/lenth;//sinx
        if(lenth>this.max_R){
            nodePos.x=nodePos.x*this.max_R/lenth;
            nodePos.y=nodePos.y*this.max_R/lenth;
        }//按钮出了范围之外，按钮停在和最外圈圆的交点坐标处
        this.stick.setPosition(nodePos);
    },
    //遥感松开后返回原位
    joyEnd(e){ 
        this.dic=cc.v2(0,0)//无方向
        this.stick.setPosition(cc.v2(0,0))//摇杆按钮回到原点
    }
    // update (dt) {},
});

