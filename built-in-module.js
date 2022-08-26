const { text } = require('node:stream/consumers');
const os=require('os');
const user=os.userInfo();
const user2=os.hostname();
// console.log(
//     user
// );
// console.log(user2);
// const runTime=os.uptime();
// console.log(runTime);
const fulldetail={
    totlaMeomry:os.totalmem(),
    freemeom:os.freemem(),
    new:os.type()
}
// console.log(`total meomry : ${fulldetail.totlaMeomry} free meomry : ${fulldetail.freemeom} netwoek: ${fulldetail.new}`);
// another buildin module
const path=require('path')
// console.log(path.sep);
const result=path.join('./newfolder','subfolder','text.text')
// console.log(result);
// console.log(path.basename(result))
const resol=path.resolve(__dirname)
// console.log(resol);




//         sycronous way                    file sinc build-in module

const {readFileSync, writeFileSync}=require('fs')
// const Showvalue=readFileSync('./newfolder/subfolder/text.text','utf-8');
// console.log(Showvalue);
// writeFileSync('./newfolder/new.text','hello world');



// asycronous way
const {readFile, writeFile}=require('fs')
writeFile('./test2.js','i am testing',(err,resolve)=>{
    if(err){
        // console.log(err);
    }
    // console.log(resolve);
})
readFile('./newfolder/new.text','utf-8',(err,result)=>{
if(err){
    // console.log(err);
    return;
}
// console.log(result);
})



// ////////////////////http module///////////////////////////////////////////////////////////////
const http=require('http');
const Server=http.createServer((request,response)=>{
    if(request.url=="/about"){
        response.end('this is about page')
    }
    if(request.url=="/home"){
        response.end('this is home page')
    }
   
   

})
Server.listen(5000)
