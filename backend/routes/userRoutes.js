const express = require("express");
const { protect, admin } = require("../middleware/authMiddleware");
const {
  getUserProfile,
  getUsers,
  getReport,
  getUserById,
  deleteUser,
  updateUser,
  updateUserProfile,
  sendBulkEmails,
  sendBulkSms,
} = require("../controllers/userController");
const router = express.Router();

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/userslist").get(protect, admin, getUsers);
router.route("/report").post(protect, admin, getReport);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

router.route("/:email").delete(protect, admin, deleteUser);
router.route("/sendbulkemails").post(protect, sendBulkEmails);
router.route("/sendbulksms").post(protect, sendBulkSms);

module.exports = router;
