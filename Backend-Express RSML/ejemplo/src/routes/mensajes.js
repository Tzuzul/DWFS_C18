const {Router} = requiere('express')


function mensaje(app){
const router = Router()

app.use(router)

router.get('/', (req, res)=>{

    console.log(req.body)
    console.log(req.query)

    return res.json ()
})
}

modules.exports = mensajes