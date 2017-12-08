const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    console.log(ctx.request.query);
    console.log(ctx.request.body);
    ctx.response.type = 'json';

    if(ctx.request.body.viewername == '123' && ctx.request.body.viewertoken == '123'){
        ctx.response.body = {
            "result": "ok",
            "message": "登录成功",
            "user":{
                "id": "E6A232B2DEDF69469C33DC5901307461",
                "name": "学员A",
                "avatar": "http://domain.com/icon.png",
                "customua": "customua1",
                "viewercustommark": "mark1",
                "marquee": "{\"loop\":-1,\"type\":\"text\",\"text\":{\"content\":\"跑马灯内容\",\"font_size\":20,\"color\":\"0xf0f00f\"},\"action\":[{\"duration\":4000,\"start\":{\"xpos\":0,\"ypos\":0,\"alpha\":0.5},\"end\":{\"xpos\":0.6,\"ypos\":0,\"alpha\":1}},{\"duration\":4000,\"start\":{\"xpos\":0,\"ypos\":0.7,\"alpha\":0.3},\"end\":{\"xpos\":0.7,\"ypos\":0.7,\"alpha\":0.9}}]}"
            }
        }
    }
    else {
        ctx.response.body = {
            result: 'fail',
            message: '用户验证失败，只允许viewername=123，viewertoken=123'
        }
    }

    
};

app.use(main);
app.listen(8080);