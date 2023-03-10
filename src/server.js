const express = require('express')
const path = require('path')

const app = express()

//definindo o template engine
app.set('view engine', 'ejs')
app.set ('views', path.join(__dirname, 'views'))

//definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post (form)
app.use(express.urlencoded({extended: true}))

//rotas 
app.get('/', (req,res) =>{
    res.render('index', {
        title: 'titulo teste'
    })
})

// 404 error
app.use((req,res)=>{
    res.send('pagina nao encontrada')
})

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`server is listening on port ${port}`))