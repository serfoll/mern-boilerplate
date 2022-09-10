import express from 'express'

import authClr from '../controllers/auth.controller'
import userCtrl from '../controllers/user.controller'

const router = express.Router()

router.route('/api/users').get(userCtrl.list).post(userCtrl.create)

router
  .route('/api/users/:userId')
  .get(authClr.requireSignin, userCtrl.read)
  .put(authClr.requireSignin, authClr.hasAuthorization, userCtrl.update)
  .delete(authClr.requireSignin, authClr.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router
