const mongoose = require("mongoose");
const NOTIFICATION_MEDIUM_TYPES = require("../NotificationMedium");

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    medium: {
      type: String,
      required: true,
      enum: Object.values(NOTIFICATION_MEDIUM_TYPES),
    },
    payload: {},
    sent: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
