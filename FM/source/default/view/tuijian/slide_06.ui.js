//related to slide_06.ui
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });

var aa = ui("do_ImageView_1");

aa.on("touch",function(data, e){
	nf.alert("点击了第6张图片");
});