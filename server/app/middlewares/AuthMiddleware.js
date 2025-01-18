import {TokenDecode} from '../utility/TokenUtility.js';

export default (req, res, next) => {
    console.log('Cookies:', req.cookies);
    const token = req.cookies["Token"];
    console.log('token', token);
    const decoded = TokenDecode(token);

    if(decoded === null){
        return res.status(401).json({status: "fail", message: "Unauthorized ami midddleware atkiye diyesi"});
    }else{

        const email = decoded.email;
        const user_id = decoded.user_id;
        const role = decoded.role;
        req.headers.email = email;
        req.headers.user_id = user_id;
        req.headers.role = role;
        next();

    }

}