var canvas = wx.createCanvas();
var ctx = canvas.getContext('2d');

let [desk_width,desk_height]=[900,506];

export default class Main{
  constructor()
  {
    this.showDesk();
  }

  showDesk(){//显示背景桌面
    let windowWidth, windowHeight, left_x, left_y, desk_rendering_width, desk_rendering_height;

    //获得机器信息
    wx.getSystemInfo({
      success: function(res) {
        windowWidth=res.windowWidth;
        windowHeight=res.windowHeight;
      }
    })

    //适配机器长宽
    if (windowHeight/windowWidth > desk_height/desk_width){
      desk_rendering_width=windowWidth;
      desk_rendering_height=desk_height*desk_rendering_width/desk_width;
      left_x=0;
      left_y=0.5*(windowHeight-desk_rendering_height);
    }
    else{
      desk_rendering_height=windowHeight;
      desk_rendering_width=desk_width*desk_rendering_height/desk_height;
      left_x=0.5*(windowWidth-desk_rendering_width);
      left_y=0;
    }

    //画图
    let Desk_img=wx.createImage();
    Desk_img.src = './assets/image/desk.jpg';
    Desk_img.onload=function(){
      ctx.drawImage(Desk_img,left_x ,left_y ,desk_rendering_width ,desk_rendering_height);
    };
  }
}