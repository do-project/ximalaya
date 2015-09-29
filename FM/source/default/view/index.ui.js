/**********************************************
 * Author : @Author
 * Timestamp : @Timestamp
 **********************************************/
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

var search = ui("do_ImageView_1");

search.on("touch",function(){
	app.openPage("source://view/search.ui");
});

page.on("back", function(){ app.closePage() });

/**********************************************************************************************************/
var myslideview =ui("myslideview");
var lb_list = [ui("lb_0"),ui("lb_1"),ui("lb_2"),ui("lb_3"),ui("lb_4")];
var ly_list = [ui("ly_0"),ui("ly_1"),ui("ly_2"),ui("ly_3"),ui("ly_4")];
var color_list = [ui("color_0"),ui("color_1"),ui("color_2"),ui("color_3"),ui("color_4")];
var v = [];
var prev = {lb: lb_list[0], ly: ly_list[0],color: color_list[0], index: 0};
for (var i = 0, len = ly_list.length; i < len; i++) {
    v = ly_list[i];
    v.lb = lb_list[i];
    v.color = color_list[i];
    v.on("touch", function(){
        prev.color.bgColor = "FFFFFFFF";
        this.color.bgColor = "F34D35FF";
        prev.lb.fontColor = "474747FF";
        this.lb.fontColor = "F34D35FF";
        
        prev.color = this.color;
        prev.lb = this.lb;
        prev.index = this.id.substring(3,4);
        myslideview.set({index: prev.index});
    });
}


myslideview.on("indexChanged", function(index){
	var lb_id = "lb_"  + index;
	var color_id = "color_"  + index;
	var ly_id = "ly_"  + index;
	lb_list.forEach(function(v,k){
		v.fontColor = "474747FF";
	});
	color_list.forEach(function(v,k){
		v.bgColor = "FFFFFFFF";
	});
	ui(color_id).bgColor = "F34D35FF";
	ui(lb_id).fontColor = "F34D35FF";
});

var listdata = mm("do_ListData");  // 创建一个 数据集合;

myslideview.bindItems(listdata);// 建立sliderview 与 ListData 的行数据关系;

listdata.addData([
    {template : 0},
    {template : 1},
    {template : 2},
    {template : 3},
    {template : 4}
]);

myslideview.refreshItems();

var faxian=ui("do_ImageView_2");
faxian.on("touch", function(){
	nf.alert("你点击了发现栏！");
});

var dingzhi=ui("do_ImageView_3");
dingzhi.on("touch", function(){
	nf.alert("你点击了定制听栏！");
});
var download=ui("do_ImageView_4");
download.on("touch", function(){
	nf.alert("你点击了下载听栏！");
});
var mine=ui("do_ImageView_5");
mine.on("touch", function(){
	nf.alert("你点击了我的栏！");
});
//var alllist=ui("alllist");
//alllist.on("touch", function(){
//	nf.alert("你点击了播放列表！");
//});
