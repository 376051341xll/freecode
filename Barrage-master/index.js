//发送弹幕
$("#send").on('click', function(){
	var div = $("<div></div>");
	var value = $("#danmu").val();
	var that = div;
	that.html(value);
	that.addClass("move");
	$('.wallpaper').append(div); //将创建的div插入到div中
	init(that);
	//在init方法里面一般是做一些事件绑定，界面初始化的工作。
	move(that);
});

//清屏
$("#clear").click(function(){
	for(var i=0; i<timers.length; i++) {
		clearInterval(timers[i]);
	}
	$(".move").remove();
});

var timers = [];
//移动
function move(that) {
	var i=0;
	var timer = setInterval(function(){
		that.css({"right": (i += 1)+"px"});
		if(that.offset().left+that.width() < $(".wallpaper").offset().left) {
			that.remove();
			clearInterval(timer);
		}
	}, 10);
	timers.push(timer);  //将timer都存入数组中
	console.log(that);
}

//初始化 设置字体宽度，颜色
function init(that) {
	var r =Math.floor(Math.random()*254);
	var g =Math.floor(Math.random()*254);
	var b =Math.floor(Math.random()*254);
	that.css({"color": "rgb("+r+","+g+","+b+")",
			top: Math.floor(Math.random()*(-800))+"px",
			right: -that.width(),
			width: that.width()
	});
	console.log(that.width());
}