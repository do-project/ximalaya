//related to listview_04.ui
var rootview, page;
rootview = ui("$");
page = sm("do_Page");

rootview.setMapping({
	"do_ImageView_1.source":"img1",
	"do_ImageView_2.source":"img2",
	"do_ImageView_3.source":"img3",
    "do_Label_1.text" : "title1",
    "do_Label_2.text" : "title2",
    "do_Label_3.text" : "title3"
});