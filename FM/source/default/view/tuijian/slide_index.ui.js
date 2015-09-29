//related to slide_index.ui

var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");

page.on("back", function(){ app.closePage() });


/**********************************************************************************************************/


var myslide = ui("myslide");  //用法 与ListView  GridView  完全一样;

var listdata = mm("do_ListData");  // 创建一个 数据集合;

myslide.bindItems(listdata);// 建立sliderview 与 ListData 的行数据关系;

listdata.addData([
    {template : 0},
    {template : 1},
    {template : 2},
    {template : 3},
    {template : 4},
    {template : 5}
]);

myslide.refreshItems();

timer01 = mm("do_Timer");
timer01.delay = 0;
timer01.interval = 4000;

var i = 0;

timer01.on("tick", function(){
    if(i >= 6){
        i = 0;
    }
    myslide.set({index: i});
    i++;
});

timer01.start();
