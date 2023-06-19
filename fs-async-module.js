const {readFile,writeFile}=require('fs')
console.log('start')
readFile ('./content/first.txt','utf8',(err,result)=>{
    if (err) 
    {
        console.log(err)
        return ;
    }
    first=result
    console.log(result)
    readFile ('./content/second.txt','utf8',(err,result)=>{
        if (err) 
        {
            console.log(err)
            return ;
        }
        second=result
        console.log(result)
        writeFile('./content/result-async.txt',`Here is the result: ${first} ,${second}`,{flag:'a'},(err, result)=>{
            if (err) 
            {
                console.log(err)
                return ;
            }
            console.log('Done with this task')

        })
})})

console.log('Starting with the next task')