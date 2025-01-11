import SendMessageUtility from "../../utility/SendMessageUtility.js";

// Create About
export const MessageService = async (req, res) => {
    try{

        const { firstName, lastName, email, number, message } = req.body;
        const EmailTo = "atikurrahman05186@gmail.com";
        const EmailFrom = `${firstName}  ${lastName}`;
        const EmailText = `First Name: ${firstName} 
                           Last Name: ${lastName}
                           Client Email: ${email}
                           Message: ${message}`;

        await SendMessageUtility(EmailTo, EmailFrom, EmailText ,'Client Message')

        return { status: 'success', message: 'Message received successfully!', data: {firstName, lastName, email, number, message} };


    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}