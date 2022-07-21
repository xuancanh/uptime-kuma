const NotificationProvider = require("./notification-provider");
const { DOWN, UP } = require("../../src/util");
const axios = require("axios");

class SeaTalk extends NotificationProvider {

    name = "SeaTalk";

    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {
        let okMsg = "Sent Successfully.";

        try {
            let data = {
                tag: "text",
                text: {
                    content: msg,
                },
            };

            await axios.post(notification.webhookURL, data);
            return okMsg;

        } catch (error) {
            this.throwGeneralAxiosError(error);
        }

    }
}

module.exports = SeaTalk;
