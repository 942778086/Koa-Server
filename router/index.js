const router = require('koa-router')()
const user = require('../src/controller/userController')

router.get('/', (ctx, next) => {
    ctx.body = "Welcome to Koa2"
})

router.use('/user', user.routes(), user.allowedMethods())

module.exports = router
