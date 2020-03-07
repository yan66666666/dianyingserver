let mongo = require("mongoose")
mongo.connect("mongodb://127.0.0.1:27017/xiaolai",{ useNewUrlParser: true })

mongo.connection.on("connected",err=>{
	console.log("数据库连接成功")
})

var userHeader = mongo.Schema({
	userName:String,
	pwd:String
})
var user = mongo.model("user",userHeader)


var movieHeader = mongo.Schema({
	pic:String,
	title:String,
	category:Array,
	type:String,
	rank:Number,
	description:String,
	person:Array,
	time:String
})
var movie = mongo.model("movie",movieHeader)
//
//var one = new movie({
//	pic:"img/t1.jpg",
//	title:"黑衣人：全球追缉",
//	category:["动作","喜剧","科幻"],
//	type:"3D",
//	rank:7.4,
//	description:"英国黑衣人总部王牌探员H（克里斯·海姆斯沃斯 饰）与新晋探员M（泰莎·汤普森 饰）在阻止外星团伙入侵的过程中意外铲除了隐藏在黑衣人组织中的内奸，成功拯救世界。",
//	person:["连姆·尼森","泰莎·汤普森"],
//	time:"2019-06-14"
//})
//one.save()
//var one = new movie({
//	pic:"img/t2.jpg",
//	title:"最好的我们",
//	category:["爱情","青春"],
//	type:"2D",
//	rank:8.8,
//	description:"每个人的心里大概都藏着一个念念不忘的人。一个偶然被提及的名字，让女摄影师耿耿（何蓝逗 饰）内心掀起万千波澜，触动了回忆的开关，那个撩人心动的少年余淮（陈飞宇 饰）再度闯进她的思绪。那是记忆里最好的时光，“学渣”耿耿和“学霸”余淮成了同桌，还结识了简单（王初伊 饰）、贝塔（周楚濋 饰）、徐延亮（陈帅 饰）。校园里充盈着专属少男少女们的懵懂、青涩、怦然心动和勇敢，耿耿余淮也拥有了他们的约定。高考后，当耿耿满怀期待憧憬约定兑现之时，余淮却忽然消失不见了。七年后两人重逢，余淮当年未说出口的那句话、他不辞而别的秘密，耿耿能否得到解答？这段耿耿于怀的过往，让两人再度面临情感的抉择……",
//	person:["陈飞宇","何蓝逗","惠英红"],
//	time:"2019-06-06"
//})
//one.save()
//var one = new movie({
//	pic:"img/t3.jpg",
//	title:"千与千寻",
//	category:["动画","冒险","奇幻","家庭"],
//	type:"2D",
//	rank:9.7,
//	description:"千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。千寻仓皇逃出，一个叫小白的人救了他，喂了她阻止身体消失的药，并且告诉她怎样去找锅炉爷爷以及汤婆婆，而且必须获得一份工作才能不被魔法变成别的东西。千寻在小白的帮助下幸运地获得了一份在浴池打杂的工作。渐渐她不再被那些怪模怪样的人吓倒，并从小玲那儿知道了小白是凶恶的汤婆婆的弟子。一次，千寻发现小白被一群白色飞舞的纸人打伤，为了救受伤的小白，她用河神送给她的药丸驱出了小白身体内的封印以及守封印的小妖精，但小白还是没有醒过来。为了救小白，千寻又踏上了她的冒险之旅。",
//	person:["柊瑠美","周冬雨","入野自由"],
//	time:"2019-06-21"
//})
//one.save()
//var one = new movie({
//	pic:"img/t4.jpg",
//	title:"蜘蛛侠：英雄远征",
//	category:["动作","冒险","科幻"],
//	type:"3D",
//	rank:9.2,
//	description:"故事全面延续“复联4”，蜘蛛侠志承钢铁侠远征欧洲，独挑大梁对抗群敌！新角色“神秘客”穿越多元宇宙霸气登场！神盾局局长尼克·弗瑞回归领军！“漫威新铁三角”组合强势出击！全新蜘蛛战衣酷炫升级！史诗对决燃爆今夏突破想象极限！",
//	person:["汤姆·赫兰德","杰克·吉伦哈尔"],
//	time:"2019-06-28"
//})
//one.save()
//var one = new movie({
//	pic:"img/t5.jpg",
//	title:"X战警：黑凤凰",
//	category:["动作","冒险","科幻"],
//	type:"3D",
//	rank:7.7,
//	description:"在一次危及生命的太空营救行动中，琴·葛蕾（苏菲·特纳 饰）被神秘的宇宙力量击中，成为最强大的变种人。此后琴不仅要设法掌控日益增长、极不稳定的力量，更要与自己内心的恶魔抗争，她的失控让整个X战警大家庭分崩离析，也让整个星球陷入毁灭的威胁之中……",
//	person:["苏菲·特纳","詹姆斯·麦卡沃伊"],
//	time:"2019-06-06"
//})
//one.save()


var cinemaHeader = mongo.Schema({
	title:String,
	time:String,
	type:String,
	address:String,
	price:Number,
	selected:Array,
	seatNumber:Number
})
var cinema = mongo.model("cinema",cinemaHeader)
//
//var one = new cinema({
//	title:"最好的我们",
//	time:"10:30",
//	type:"国语2D",
//	address:"1号厅",
//	price:35,
//	selected:[[1,1],[8,7],[8,8]],
//	seatNumber:140
//})
//one.save()
//var one = new cinema({
//	title:"最好的我们",
//	time:"12:20",
//	type:"国语2D",
//	address:"3号厅",
//	price:35,
//	selected:[[8,7],[8,8]],
//	seatNumber:140
//})
//one.save()
//var one = new cinema({
//	title:"最好的我们",
//	time:"14:00",
//	type:"国语2D",
//	address:"IMAX",
//	price:35,
//	selected:[[8,8]],
//	seatNumber:300
//})
//one.save()
//var one = new cinema({
//	title:"最好的我们",
//	time:"16:20",
//	type:"国语2D",
//	address:"2号厅",
//	price:35,
//	selected:[[5,6]],
//	seatNumber:140
//})
//one.save()
//var one = new cinema({
//	title:"最好的我们",
//	time:"18:50",
//	type:"国语2D",
//	address:"1号厅",
//	price:35,
//	selected:[],
//	seatNumber:140
//})
//one.save()
//var one = new cinema({
//	title:"最好的我们",
//	time:"20:00",
//	type:"国语2D",
//	address:"1号厅",
//	price:35,
//	selected:[],
//	seatNumber:140
//})
//one.save()
//var one = new cinema({
//	title:"最好的我们",
//	time:"23:00",
//	type:"国语2D",
//	address:"3号厅",
//	price:35,
//	selected:[],
//	seatNumber:140
//})
//one.save()

var orderHeader = mongo.Schema({
	title:String,
	time:String,
	address:String,
	checked:Array,
	total:Number,
	user:String
})
var order = mongo.model("order",orderHeader)


module.exports = {user,movie,cinema,order}



