import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { reIssueAccessToken } from "../services/session.service";
import { verifyJWT } from "../utils/jwt.utils";

const deserializeUser = async (req: Request, res: Response, next: NextFunction) =>{

    const accesToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "")

    const refreshToken = get(req, "headers.x-refresh")

    if(!accesToken)
    {
        return next();
    }

    const {decoded, expired} = verifyJWT(accesToken);

    if(decoded){
        res.locals.user = decoded;
        return next();
    }

    if(expired && refreshToken)
    {
        const newAccessToken = await reIssueAccessToken({refreshToken});
        if(newAccessToken)
        {
            res.setHeader('x-access-token', newAccessToken)
        }

        const result = verifyJWT(newAccessToken as string);

        res.locals.user = result.decoded;

        return next();
    }

    return next();
}

export default deserializeUser;