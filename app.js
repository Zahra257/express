const express = require('express')
const app = express()
const path = require('path')

// app.use(express.static('./public'))

app.set('view engine','ejs')
const contact = path.resolve(__dirname, './contact.ejs')
const home = path.resolve(__dirname, './home.ejs')
const service = path.resolve(__dirname, './service.ejs')

function todayProgram(req,res,next){
    const date=new Date()
    const dateOfTheWeek = ['lundi','mardi','jeudi']
    const todayDate = date.getDay()
    const hourOfTheDay = date.getHours()

    if (dateOfTheWeek[todayDate]==='monday'||'tuesday'||'wednesday'){
        if(hourOfTheDay<8||hourOfTheDay>17)
        res.end('what are you doing')
    }
    next()
}

app.use(todayProgram)

app.route('/').get( (req,res) => {
    res.render('home', {
        title: 'Hello home',   
    })
})

app.route('/services').get((req,res) => {
    res.render('service', {
        title: 'Hello service',   
    })
}) 

app.route('/Contact').get( (req,res) => {
    res.render('contact', {
        title: 'Hello contact', 
    })
})



// app.route('/delete/1').delete((req,res) => {
//     res.end('Deleted element with ID 1 ')
// })

// app.route('/update/1').put((req,res) => {
//     res.end('updated element with ID 1 with PUT METHOD')
// })

app.listen(3001, ()=>{
    console.log('server listening at port 3001')
})