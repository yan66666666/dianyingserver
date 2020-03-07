let Koa = require("koa")
let server = new Koa()

let static1 = require("koa-static")
server.use(static1("./src"))

let {user,movie,cinema,order} = require("./mongo.js")

let cors = require("koa2-cors")
server.use(cors())

let body = require("koa-body")
server.use(body())

let Router = require("koa-router")
let router = new Router()

router.post("/reg",async (ctx,next)=>{
	var res = ctx.request.body
//	console.log(res)
//	ctx.body = "收到"
	var one = new user(res)
	await one.save()
	ctx.body = {
		status:1,
		message:"注册成功"
	}
})

router.post("/login",async (ctx,next)=>{
	var res = ctx.request.body
	console.log(res)
//	ctx.body = "收到"
	var one = await user.findOne({userName:res.userName,pwd:res.pwd})
	if(one){
		ctx.body = {
			status:1,
			message:"登录成功"
		}
	}else{
		ctx.body = {
			status:0,
			message:"账号或密码错误"
		}
	}
	
})

router.get("/movie", async (ctx,next)=>{
//	console.log( await movie.find())
	if(ctx.query.id){
		ctx.body = await movie.findOne({_id:ctx.query.id})
	}else{
		ctx.body = await movie.find()
	}
	

})

router.get("/cinema",async (ctx,next)=>{
	 //ctx.query.title
	 if(ctx.query.id){
	 	ctx.body = await cinema.findOne({_id:ctx.query.id})
	 }else{
	 	ctx.body = await cinema.find({title:ctx.query.title})
	 }
	 
})


router.post("/order",async (ctx,next)=>{
//	console.log(ctx.request.body[2])
	cinema.update({_id:ctx.request.body[2]},{selected:ctx.request.body[1]},err=>{
//		console.log("更新成功")
	})
	var one = new order(ctx.request.body[0])
	await one.save()
	ctx.body = "购票成功"
	
})

router.get("/order",async (ctx,next)=>{
	 //
	 console.log(ctx.query.user)
	 if(ctx.query.user){
	 	ctx.body = await order.find({user:ctx.query.user})
	 }else{
	 	ctx.body = ""
	 }
	 
})


server.use(router.routes())

server.listen(3003,err=>{
	console.log("小莱电影服务器启动在3003端口上")
})


