import SendMessageUtility from "../../utility/SendMessageUtility.js";

export const MessageService = async (req, res) => {
    try {
        const { fname, lname, email, number, message } = req.body;

        const EmailTo = "waagvit@gmail.com";
        const EmailFrom = `${fname} ${lname}`;
        const EmailText = `
            First Name: ${fname}
            Last Name: ${lname}
            Client Email: ${email}
            Number: ${number}
            Message: ${message}
        `;

        await SendMessageUtility(EmailTo, EmailFrom, EmailText, "Client Message");

        return { status: "success", message: "Message received successfully!" };
    } catch (error) {
        console.error(error);
        return { status: "error", message: error.toString() };
    }
};
