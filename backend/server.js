import express from 'express';

const app = express()

app.get('/',(req,res)=>{
    res.send("server is ready");
});

// list of 5 jokes
app.get('/jokes',(req,res)=>{
    const jokes = [
      {
        id:1,
        title:"A joke",
        content:"this is a joke"
      },
      {
        id:2,
        title:"Another joke",
        content:"this is another joke"
      },
      {
        id:3,
        title:"third joke",
        content:"this is a joke"
      },
      {
        id:4,
        title:"foirth joke",
        content:"this is fourth joke"
      }
    ];                            // json formatter for api reading
    res.send(jokes); 
});


const port = process.env.PORT || 3000 ;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});