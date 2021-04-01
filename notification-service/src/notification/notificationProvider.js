const Email = require("./email");
const Phone = require("./phone");
const Slack = require("./slack");
const NOTIFICATION_MEDIUM_TYPES = require("../NotificationMedium");

const getNotificationService = (medium) => {
  switch (medium) {
    case NOTIFICATION_MEDIUM_TYPES.EMAIL:
      return new Email();
    case NOTIFICATION_MEDIUM_TYPES.PHONE:
      return new Phone();
    case NOTIFICATION_MEDIUM_TYPES.SLACK:
      return new Slack();
    default:
      throw new Error(
        `unsupported medium i.e ${medium} requested to send notification`
      );
  }
};

module.exports = getNotificationService;
