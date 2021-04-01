const express = require("express");
const router = new express.Router();
const getNotificationService = require("../notification/notificationProvider");
const { getFormattedError } = require("../utils/error");
const Notification = require("../models/notification");
router.post("/notifications", async (req, resp) => {
  try {
    const { medium } = req.body;
    if (!medium) throw new Error("medium is required to send notification");

    // create a new notification and save.
    const notification = new Notification(req.body);
    await notification.save();

    // create notification service and send notification
    const notificationService = getNotificationService(medium);
    const notificationStatus = notificationService.send(notification.payload);
    notification.sent = notificationStatus;
    await notification.save();
    resp.send("ok");
  } catch (e) {
    resp
      .status(400)
      .send(
        getFormattedError([e.message ? e.message : "internal server error"])
      );
  }
});

module.exports = router;
