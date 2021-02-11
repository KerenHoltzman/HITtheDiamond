(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"get the daimondnew_atlas_1", frames: [[1774,603,258,106],[2008,286,32,32],[1573,0,446,172],[1573,420,207,181],[1573,174,357,121],[1573,297,357,121],[1573,603,199,175],[1932,286,74,76],[1774,779,69,69],[0,0,1571,1019],[1782,420,206,181],[1774,711,182,66],[1932,174,112,110],[1958,711,78,78]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bubble2 = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.combobck = function() {
	this.initialize(img.combobck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2089,1164);


(lib.ComboBox = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.continuebtn = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.FinishBTN = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.introbck = function() {
	this.initialize(img.introbck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2089,1164);


(lib.logo = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.LOGO = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.maindiamond = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.main_fullback = function() {
	this.initialize(img.main_fullback);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2098,1246);


(lib.main_star = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.pause = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.pause_card = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.PlayAgain = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.startBKG = function() {
	this.initialize(img.startBKG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2089,1164);


(lib.startBTN = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.SummeryBackground = function() {
	this.initialize(img.SummeryBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2097,1128);


(lib.success = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Nosuccess = function() {
	this.initialize(ss["get the daimondnew_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.summeryBCK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.SummeryBackground();
	this.instance.setTransform(2,-3,0.6246,0.6784);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.summeryBCK, new cjs.Rectangle(2,-3,1309.8,765.3), null);


(lib.playagainBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PlayAgain();
	this.instance.setTransform(6,15,0.7049,0.7049);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,15,145.2,127.6);


(lib.finishBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FinishBTN();
	this.instance.setTransform(11,14,0.6981,0.6981);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,14,144.5,126.4);


(lib.Pausebtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pause();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,69);


(lib.pausecard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pause_card();
	this.instance.setTransform(-48,0,0.7148,0.6538);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pausecard, new cjs.Rectangle(-48,0,1122.9,666.2), null);


(lib.continueBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.continuebtn();
	this.instance.setTransform(-127,-52,0.5692,0.6036);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-52,253.9,103.8);


(lib.star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.main_star();
	this.instance.setTransform(41,-6,0.4646,0.4465);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({scaleX:0.3836,x:44},0).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41,-6,34.400000000000006,34);


(lib.nextQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.continuebtn();
	this.instance.setTransform(-67,-27,0.3004,0.3185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-27,134,54.8);


(lib.fullbackscreen2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.main_fullback();
	this.instance.setTransform(0,0,0.6463,0.6463);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1355.9,805.3);


(lib.diamond1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.maindiamond();
	this.instance.setTransform(-73,-64,0.728,0.728);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.diamond1, new cjs.Rectangle(-73,-64,144.9,127.4), null);


(lib.bubbletalk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble2();
	this.instance.setTransform(-175,-73,1.3568,1.3568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bubbletalk, new cjs.Rectangle(-175,-73,350.1,143.8), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("בחר", "bold 17px 'Verdana'", "#660000");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(50.1,5.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AoWCgIAAk/IQtAAIAAE/g");
	this.shape.setTransform(52.5,17.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,1.1,107,32), null);


(lib.startBTN_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.startBTN();
	this.instance.setTransform(0,0,0.8022,0.8022);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146,53);


(lib.startBKG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.startBKG();
	this.instance.setTransform(-20,0,0.6879,0.6879);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startBKG_1, new cjs.Rectangle(-20,0,1437.1,800.8), null);


(lib.combologo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,1.3151,1.3151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.combologo, new cjs.Rectangle(0,0,469.5,159.2), null);


(lib.intro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.introbck();
	this.instance.setTransform(0,0,0.6371,0.6512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.intro, new cjs.Rectangle(0,0,1330.9,758), null);


(lib.combologo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.comboBCK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.combobck();
	this.instance.setTransform(0,0,0.6435,0.6435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.comboBCK, new cjs.Rectangle(0,0,1344.2,749), null);


(lib.fullback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.LOGO();
	this.instance.setTransform(1054,19,0.625,0.625);

	this.instance_1 = new lib.fullbackscreen2("synched",0);
	this.instance_1.setTransform(677.9,402.6,1,1,0,0,0,677.9,402.6);

	this.text = new cjs.Text("", "97px 'ArialMT'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 110;
	this.text.lineWidth = 250;
	this.text.parent = this;
	this.text.setTransform(1147.25,90.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1355.9,805.3);


(lib.forcomb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.startbtn = new lib.Symbol1();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(-79.6,10.4,1.2153,0.7658,0,0,0,52.4,17.1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, בחר נושא, 0, פירות באנגלית, 1, מילים נרדפות, 2, , ', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(77.6,11.05,1.6501,1.266,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-144.5,-3.5,305.5,29.1), null);


// stage content:
(lib.getthedaimondnew = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var stage = this;
		
		var stageH = parseInt(canvas.style.height);
		var stageW = parseInt(canvas.style.width);
		
		var Anum = 0;
		var Qnum = 0;
		var mistakes = 0;
		
		//משתנה-כרטיסיה הפסקה
		var pausecard = new lib.pausecard;
			pausecard.name = "pausecard";
			
		//משוב הצלחה
		var success = new lib.success;
			success.name = "success";
			
		var Nosuccess = new lib.Nosuccess;
			Nosuccess.name = "Nosuccess";
		
		//תיבת טקסט הוראות
		var instructtxt = new createjs.Text();
		instructtxt.font = "26px Arial";
		instructtxt.color = "#FFFFFF";
		
		//מערך תשובות נכונות
		var RightAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		
		var bubbletalk = new lib.bubbletalk;
			bubbletalk.name = "bubbletalk";
		
		var mychoice = 0;
		
		//המערך של כל המשחק
		var Qfruits;
		var Afruits;
		
		var forcombo = new lib.forcomb();
		
		var intro = new lib.intro;
		intro.name = "intro";
		
		var comboBCK = new lib.comboBCK;
		comboBCK.name = "comboBCK";
		
		var totalTime = 0;
		
		var diamond1 = new lib.diamond1;
		diamond1.name = "diamond1";
		
		
		function introscreen(){
		//	introBCK = new lib.introBCK;
		//introBCK.name = "introBCK";
		stage.addChild(intro);
		intro.x = 0;
		intro.y = 0;
			
		var continueBTN = new lib.continueBTN;
		continueBTN.name = "continueBTN";
		intro.addChild(continueBTN);
		continueBTN.x=650;
		continueBTN.y=370;
		continueBTN.addEventListener("click", launch);
		}
		
		 introscreen();
		
		
		//הוספת הקומבו לבמה
		function launch() {
			
		stage.removeChild(intro);
		
		stage.addChild(comboBCK);
		comboBCK.x = 0;
		comboBCK.y = 0;
			
		var combologo = new lib.combologo;
		combologo.name = "combologo";
		stage.addChild(combologo);
		combologo.x =350;
		combologo.y = 0;
			
		//var forcombo = new lib.forcomb();
		forcombo.x = 600;
		forcombo.y = 300;
		stage.addChild(forcombo);
		
		//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
		forcombo.startbtn.alpha = 0.3;
		
		//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
		$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		}
		
		//launch()
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			//שמירת הערך שנבחר בקומבו
			console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
			} 
			
			else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
			}
		}
		
		//לחיצה על בחר
		function fl_ClickToPosition() {
			if(mychoice == 1) {
				firstGameFunc();
			}
			else if(mychoice == 2) {
				secondGameFunc();
			}
		}
		
		
		function firstGameFunc() {
			//יש להכניס אל המערך את התוכן של המשחק הראשון
			//מערך שאלות
			Qfruits = [
			["דובדבן","Cherry","txt",0],
			["מנגו", "Mango","txt",1],
			["בננה", "Banana", "txt",2],
			["אפרסק", "Peach","txt",3],
			["מלון", "Melon","txt",4],
			["תות", "Strawberry","txt",5],
			["תפוז", "Orange","txt",6],
			["אגס", "Pear","txt",7],
			["אננס", "Pineapple","txt",8],
			["תפוח", "Apple","txt",9],
			];
		
			//מערך תשובות
			Afruits = [
			["Cherry", "דובדבן","txt"],
			["Mango", "מנגו","txt"],
			["Banana", "בננה","txt"],
			["Peach", "אפרסק","txt"],
			["Melon", "מלון","txt"],
			["Strawberry", "תות","txt"],
			["Orange", "תפוז","txt"],
			["Pear", "אגס","txt"],
			["Pineapple", "אננס","txt"],
			["Apple", "תפוח","txt"],
			];
			
			startGame();
		}
		
		function secondGameFunc() {
			//יש להכניס אל המערך את התוכן של המשחק השני
			//מערך שאלות
			Qfruits = [
			["שעון","אורלוגין","txt",0],
			["תנור", "קמין","txt",1],
			["בננה", "מוז", "txt",2],
			["גרב", "פוזמק","txt",3],
			["מגפיים", "ערדליים","txt",4],
			["ספסל", "דרגש","txt",5],
			["חלון", "אשנב","txt",6],
			["עט", "קולמוס","txt",7],
			["מדף", "איצטבה","txt",8],
			["מגבת", "אלונטית","txt",9],
			]
		
			//מערך תשובות
			Afruits = [
			["אורלוגין", "שעון","txt"],
			["קמין", "תנור","txt"],
			["מוז", "בננה","txt"],
			["פוזמק", "גרב","txt"],
			["ערדליים", "מגפיים","txt"],
			["דרגש", "ספסל","txt"],
			["אשנב", "חלון","txt"],
			["קולמוס", "עט","txt"],
			["איצטבה", "מדף","txt"],
			["אלונטית", "מגבת","txt"],
			]
			
			startGame();
		}
		
		function startGame() {
		totalTime = 0;
		stage.removeChild(forcombo);
		stage.removeChild(comboBCK);
		//כפתור מעבר לשאלה הבאה
		var nextQ = new lib.nextQ;
		nextQ.name = "nextQ";
		nextQ.addEventListener("click", nextquestion)
		var isAnswerCorrect = true;
		
		
		//מיקום תמונת רקע
		var fullback = new lib.fullback;
		fullback.name = "fullback";
		stage.addChild(fullback);
		fullback.x = 0;
		fullback.y = 0;
		
		//תיבת טקסט הוראות
		
		instructtxt.x = 880;
		instructtxt.y = 110;
		stage.addChild(instructtxt);
		instructtxt.text = "לחצו על היהלום המתאים למילה המוצגת";
		
		
		//כפתור הפסקה
		var Pausebtn = new lib.Pausebtn;
		Pausebtn.name = "Pausebtn";
		stage.addChild(Pausebtn);
		Pausebtn.x = 1200;
		Pausebtn.y = 640;
		
		Pausebtn.addEventListener("click", pausegame);
		
		//פונקציית הפסקה 
		function pausegame() {
			stage.addChild(pausecard);
			pausecard.x=130;
			pausecard.y=50;
			clearInterval(timer); 
				
			var continueBTN = new lib.continueBTN;
			continueBTN.name = "continueBTN";
			pausecard.addChild(continueBTN);
			continueBTN.x=550;
			continueBTN.y=530;
			continueBTN.addEventListener("click",countinuegame);
		}
		
		function countinuegame(){
			 timer = setInterval(Numero, 1000);
			stage.removeChild(pausecard);
			
		}
		
		//טיימר
		
		var counter = 30
		var timertxt = new createjs.Text()
		timertxt.font = "26px Arial"
		timertxt.color = "#FFFFFF"
		timertxt.x = 120
		timertxt.y = 45
		stage.addChild(timertxt);
		var timer = setInterval(Numero, 1000);
		//var totalTime = 0;
		
		function Numero() {
			if (counter > 0) {
				timertxt.text = counter
				counter = counter - 1
				totalTime ++;
				console.log("TotalTime: " + totalTime); 
			}
			else {
			Qtxt.text = "";
			counter = 30;
			Numero();
			Qrand()
			createQ();
			}
		}
		
		// מיקום כוכבים
		function stars() {
		for (var i = 0; i < 4; i++) {
				var star = new lib.star;
				star.name = "star";
				stage.addChild(star);
				star.x = i *270 + 180;
				star.y = 50;
		}
		
		for (var i = 0; i < 3; i++) {
				var star = new lib.star;
				star.name = "star";
				stage.addChild(star);
				star.x = i *340 + 170;
				star.y = 80;
		}
		}
		
		
		var Qtxt = new createjs.Text();
				Qtxt.font = "24px Arial";
				Qtxt.color = "black";
				Qtxt.x = -20;
				Qtxt.y = -30;
				Qtxt.textAlign = "center";
		
		function createQ() {	
			//בועת דיבור-גמד
			bubbletalk.x = 450;
			bubbletalk.y = 100;
			
			stage.addChild(bubbletalk);
			bubbletalk.addChild(Qtxt);
			Qnum++;
			for (var i = 0; i < Qfruits.length; i++) {
			Qtxt.text = Qfruits[Qrandom][1];
			}
		}
		
		
		function Qrand() {
			Qrandom = Math.floor(Math.random() * Qfruits.length);
			console.log("Qrandom: " + Qrandom)
		}
		
		Qrand()
		createQ()
		
		//מענה תשובות נכונות
		var numAnswer = 0
		var numAnswertxt = new createjs.Text()
		numAnswertxt.font = "26px Arial"
		numAnswertxt.color = "#FFFFFF"
		numAnswertxt.x = 110
		numAnswertxt.y = 80
		stage.addChild(numAnswertxt);
		numAnswertxt.text = numAnswer + "/" + Afruits.length;
		
		
		
		// מיקום יהלומים
		function diamonds() {
		while (Anum < Afruits.length) {
			for (var i = 0; i < 3; i++) {
				diamond1 = new lib.diamond1;
				//diamond1.name = "diamond1";
				stage.addChild(diamond1);
				diamond1.x = i * 450 + 200;
				diamond1.y = 400;
				
				diamond1.name = Afruits[Anum][0]
				diamond1.addEventListener("click",choosedaimond);
		
				//טקסט יהלום
				var txt1 = new createjs.Text();
				txt1.font = "24px Arial";
				txt1.color = "black";
				txt1.x = -20;
				txt1.y = -30;
				diamond1.addChild(txt1);
				txt1.text = Afruits[Anum][1];
				Anum++;
			}
		
			for (var i = 0; i < 2; i++) {
				diamond1 = new lib.diamond1;
				//diamond1.name = "diamond1";
				stage.addChild(diamond1);
				diamond1.x = i * 450 + 420;
				diamond1.y = 430;
				diamond1.name = Afruits[Anum][0]
				diamond1.addEventListener("click",choosedaimond);
		
				//טקסט יהלום
				var txt1 = new createjs.Text();
				txt1.font = "24px Arial";
				txt1.color = "black";
				txt1.x = -20;
				txt1.y = -30;
				diamond1.addChild(txt1);
				txt1.text = Afruits[Anum][1];
				Anum++;
			}
		
			for (var i = 0; i < 5; i++) {
				diamond1 = new lib.diamond1;
				//diamond1.name = "diamond1";
				stage.addChild(diamond1);
				stage.addChild(diamond1);
				diamond1.x = i * 240 + 150;
				diamond1.y = 630;
				diamond1.name = Afruits[Anum][0]
				diamond1.addEventListener("click",choosedaimond);
		
				//טקסט יהלום
				var txt1 = new createjs.Text();
				txt1.font = "24px Arial";
				txt1.color = "black";
				txt1.x = -20;
				txt1.y = -30;
				diamond1.addChild(txt1);
				txt1.text = Afruits[Anum][1];
				Anum++;
			}
		}
		}
		
		diamonds()
		stars()
		
		function choosedaimond(event) {
				console.log (Qfruits[Qrandom][1])
			
			if (Qfruits[Qrandom][1] == event.currentTarget.name){
				event.currentTarget.visible = false;
				Qfruits.splice(Qrandom, 1);
				clearInterval(timer); 
				stage.addChild(nextQ);
				nextQ.x = 670;
				nextQ.y = 290;
				nextQ.visible = true;
				isAnswerCorrect = true;
				numAnswer = numAnswer + 1;
				numAnswertxt.text = numAnswer + "/" + Afruits.length;
				stage.addChild(success);
				success.x = 730;
				success.y = 100;
				stage.removeChild(Nosuccess);
			}
			else {
				var correctindex = Qfruits[Qrandom][3];
				RightAnswers[correctindex] = RightAnswers[correctindex] + 1;
				console.log(RightAnswers);
				clearInterval(timer);
				stage.addChild(nextQ);
				nextQ.x = 670;
				nextQ.y = 290;
				nextQ.visible = true;
				isAnswerCorrect = false;
				stage.addChild(Nosuccess);
				Nosuccess.x = 730;
				Nosuccess.y = 100;
				mistakes = mistakes + 1;
				stage.removeChild(success);
			}
		}
		
		function nextquestion() {
			if(isAnswerCorrect) {
				nextquestionTrue();
			}
			else {
				nextquestionFalse();
			}
		}
		
		function nextquestionTrue() {
			
			//diamond1.addEventListener("click",choosedaimond);
			
			Qtxt.text = "";
			console.log("true")
			nextQ.visible = false;
			stage.removeChild(success);
			counter = 30;
			timer = setInterval(Numero, 1000);
			
			if (Qfruits.length == 0) {
				console.log ("game over")
				summery ()
			} else {
				Qrand()
				createQ();
			}
		}
		
		function nextquestionFalse() {
			//diamond1.addEventListener("click",choosedaimond);
			
			Qtxt.text = "";
			console.log("FALSE")
			nextQ.visible = false;
			stage.removeChild(Nosuccess);
			counter = 30;
			timer = setInterval(Numero, 1000);
				Qrand()
				createQ();
			}
			
		
		function summery () {
			stage.removeChild(fullback);
			stage.removeChild(bubbletalk);
			stage.removeChild(Pausebtn);
			clearInterval(timer);
			// מסך סיכום
			var summeryBCK = new lib.summeryBCK;
			summeryBCK.name = "summeryBCK";
			stage.addChild(summeryBCK);
			summeryBCK.x = 0;
			summeryBCK.y = 0;
			
			//כפתור שחק שוב
		var playagainBTN = new lib.playagainBTN;
				playagainBTN.name = "playagainBTN";
				summeryBCK.addChild(playagainBTN);
				playagainBTN.x = 150;
				playagainBTN.y = 400;
				playagainBTN.addEventListener("click", playAgainFunc)
				//playagainBTN.addEventListener("click", launch)
			
				
				var playTXT = new createjs.Text();
				playTXT.font = "22px Arial";
				playTXT.color = "black";
				playTXT.x = 20;
				playTXT.y = 50;
				playagainBTN.addChild(playTXT);
				playTXT.text = "Play Again!";
				
				var finishBTN = new lib.finishBTN;
				finishBTN.name = "finishBTN";
				summeryBCK.addChild(finishBTN);
				finishBTN.x = 150;
				finishBTN.y = 250;
				finishBTN.addEventListener("click", finishFunc)
		
		var finishTXT = new createjs.Text();
				finishTXT.font = "22px Arial";
				finishTXT.color = "black";
				finishTXT.x = 70;
				finishTXT.y = 50;
				finishBTN.addChild(finishTXT);
				finishTXT.text = "Finish!";
			
			var gradetxt = new createjs.Text()
			gradetxt.font = "26px Arial"
			gradetxt.color = "#2F5597"
			gradetxt.x = 800
			gradetxt.y = 280
			stage.addChild(gradetxt);
			gradetxt.text = ":ציון";
			
			var gradeAtxt = new createjs.Text()
			gradeAtxt.font = "26px Arial"
			gradeAtxt.color = "black"
			gradeAtxt.x = 750
			gradeAtxt.y = 280
			stage.addChild(gradeAtxt);
			gradeAtxt.text = ((Afruits.length - mistakes) / Afruits.length) * 100;
			
			var mistakestxt = new createjs.Text()
			mistakestxt.font = "26px Arial"
			mistakestxt.color = "#2F5597"
			mistakestxt.x = 800
			mistakestxt.y = 350
			stage.addChild(mistakestxt);
			mistakestxt.text = ":שגיאות";
			
			var mistakesAtxt = new createjs.Text()
			mistakesAtxt.font = "26px Arial"
			mistakesAtxt.color = "black"
			mistakesAtxt.x = 750
			mistakesAtxt.y = 350
			stage.addChild(mistakesAtxt);
			mistakesAtxt.text = mistakes;
			
			var timetxt = new createjs.Text()
			timetxt.font = "26px Arial"
			timetxt.color = "#2F5597"
			timetxt.x = 800
			timetxt.y = 420
			stage.addChild(timetxt);
			timetxt.text = ":זמן";	
			
			var totaltimetxt = new createjs.Text()
			totaltimetxt.font = "26px Arial"
			totaltimetxt.color = "black"
			totaltimetxt.x = 750
			totaltimetxt.y = 420
			stage.addChild(totaltimetxt);
			totaltimetxt.text = totalTime;
			
			for(var i=0; i<10;i++) {
				var questiontext = new createjs.Text()
				questiontext.font = "20px Arial";
				questiontext.color = "#2F5597";
				questiontext.x = 620;
				questiontext.y = 240 + 24 * i;
				stage.addChild(questiontext);
				questiontext.text = Afruits[i][1];
				
				var astrisk = new createjs.Text() 
				astrisk.font = "20px Arial";
				astrisk.color = "#ff0000";
				astrisk.x = 490;
				astrisk.y = 240 + 24 * i;
				astrisk.text = "*";
				if(RightAnswers[i] != 0) { 
					stage.addChild(astrisk);
				}
				
				var answertext = new createjs.Text()
				answertext.font = "20px Arial";
				//תחליף ל-if 
				answertext.color = "#2F5597";
				answertext.x = 500;
				answertext.y = 240 + 24 * i;
				stage.addChild(answertext);
				answertext.text = Afruits[i][0];			
			}
			
			function playAgainFunc() {
			stage.removeChild(summeryBCK);
			stage.removeChild(Pausebtn);
			stage.removeChild(gradetxt);
			stage.removeChild(mistakestxt);
			stage.removeChild(mistakesAtxt);
			stage.removeChild(timetxt);
			stage.removeChild(totaltimetxt);
			stage.removeChild(questiontext);
			stage.removeChild(astrisk);
			stage.removeChild(answertext);
			stage.removeChild(gradeAtxt.text);
			
			//totalTime = 0;
			Anum = 0;
			Qnum = 0;
			mistakes = 0;
		
			RightAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		
			//mychoice = 0;
		//המערך של כל המשחק
		Qfruits;
		Afruits;
		
		if(mychoice == 1) {
				firstGameFunc();
			}
			else if(mychoice == 2) {
				secondGameFunc();
			}
			//launch()
		}
		
		function finishFunc() {
			stage.removeChild(summeryBCK);
			stage.removeChild(Pausebtn);
			stage.removeChild(gradetxt);
			stage.removeChild(mistakestxt);
			stage.removeChild(mistakesAtxt);
			stage.removeChild(timetxt);
			stage.removeChild(totaltimetxt);
			stage.removeChild(questiontext);
			stage.removeChild(astrisk);
			stage.removeChild(answertext);
			stage.removeChild(gradeAtxt.text);
			
			//totalTime = 0;
			Anum = 0;
			Qnum = 0;
			mistakes = 0;
		
			RightAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		
			mychoice = 0;
		//המערך של כל המשחק
		Qfruits;
		Afruits;
		
			launch();
		}
			
		}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'B2B480F66CBBAB4D9FBBB261B1FD64B4',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/combobck.png?1612964847246", id:"combobck"},
		{src:"images/introbck.png?1612964847246", id:"introbck"},
		{src:"images/main_fullback.png?1612964847246", id:"main_fullback"},
		{src:"images/startBKG.png?1612964847246", id:"startBKG"},
		{src:"images/SummeryBackground.png?1612964847246", id:"SummeryBackground"},
		{src:"images/get the daimondnew_atlas_1.png?1612964847158", id:"get the daimondnew_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1612964847246", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1612964847246", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1612964847246", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B2B480F66CBBAB4D9FBBB261B1FD64B4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;