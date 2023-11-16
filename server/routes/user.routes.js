import express from "express";
import userCtrl from "../controllers/user.controller.js";
const router = express.Router();
router.route("/api/users").get(userCtrl.list).post(userCtrl.create);
router
  // .route("/api/users/:userId")
  // .get(userCtrl.requireSignin, userCtrl.read)
  // .put(userCtrl.requireSignin, userCtrl.hasAuthorization, userCtrl.update)
  // .delete(userCtrl.requireSignin, userCtrl.hasAuthorization, userCtrl.remove)
  .route("/api/users/:userId")
  .get(userCtrl.read)
  .put(userCtrl.hasAuthorization, userCtrl.update)
  .delete(userCtrl.hasAuthorization, userCtrl.remove)
router.param('userId', userCtrl.userByID)

router.route("/api/auth/signin")
  .post(userCtrl.signIn)
  router.route("/api/auth/signout")
  .post(userCtrl.signOut)
export default router;
