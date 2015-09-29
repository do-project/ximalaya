//related to index.ui
var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });

var storage = sm("do_Storage");
/**********************************************************************************************************/

var mylistview = ui("mylistview");
var listdata = mm("do_ListData");

mylistview.bindItems(listdata);// 建立ListView 与 ListData 的行数据关系;

storage.readFile("data://zhibo.json", function(data){// 读取文件
    listdata.addData(data); // 给ListData添加数据
    mylistview.refreshItems(); // 刷新ListView 行数据;
});

mylistview.on("pull", function(data) {
    /**
     * @此事件将会多次执行.
     * @state == 0 : pull动作开始
     * @state == 1 : pull动作持续中
     * @state == 2 : pull动作结束
     */
    if (data.state !== 2) return;
    this.rebound();
});

mylistview.on("touch",function(data, e){
	nf.alert("点击了第"+data+"个listview");
});

