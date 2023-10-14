const { Router } = require('express')
const { login, signUp, recover, updateRole, password_recovery, change_password } = require('../controllers/auth')
const {auth: authMiddleware, verifyRole} = require('../middlewares/auth')

const auth = (app)=>{
    const router = Router()
    app.use('/api/auth', router)
    router.post('/login', login) //endpoint
    router.post('/signup', signUp)
    router.get('/recover', authMiddleware, verifyRole(['ADMIN','EDITOR','REGULAR']), recover)
    router.post('/password_recovery', password_recovery)
    router.post('/change_password', change_password)
    router.post('/update_role', authMiddleware, verifyRole(['ADMIN']), updateRole)
}

module.exports = auth