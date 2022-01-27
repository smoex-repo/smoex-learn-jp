import express from 'express';
import bodyParser from 'body-parser';
import { NextFunction, Request, Response } from 'express'; // express 申明文件定义的类型


const app = express();

// 处理 post 请求的请求体，限制大小最多为 20 兆
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));

// error handler
app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
  return res.sendStatus(500);
});

app.get('/test', function(req, resp) {
    resp.send('hello world')
})

// app.listen(9000, function() {
//     console.log('Example app listening on port 9000!');

// });

export default app