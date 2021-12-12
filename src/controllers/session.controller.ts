import config from 'config';
import {Request, Response} from 'express'
import { updateSession } from '../services/session.service';
import { createSession, findSessions } from '../services/session.service';
import { validatePassword } from '../services/user.service'
import { signJWT } from '../utils/jwt.utils';

export async function createUserSessionHandler(req: Request, res: Response) {
    //validate user password
    const user = await validatePassword(req.body);

    if(!user)
    {
        return res.status(401).send("invalid email or password");
    }

    //create a session
    const session = await createSession(user._id, req.get("user-agent") || "");

    //create an access token
    const accessToken = signJWT(
        {...user, session: session._id}, 
        {expiresIn: config.get("accessTokenTtl")}); //15 minutes

    //create a refresh token
    const refreshToken = signJWT(
        {...user, session: session._id}, 
        {expiresIn: config.get("refreshTokenTtl")});

    //return access and refresh tokens
    return res.send({accessToken, refreshToken})
}

export async function getUserSessionHandler(req: Request, res: Response)
{
    const userId = res.locals.user._id

    const session = await findSessions({user: userId, valid: true})

    return res.send(session);
}

export async function deleteSessionHandler(req:Request, res: Response) {
    const sessionId = res.locals.user.session

    await updateSession({_id: sessionId}, {valid: false});

    return res.send({
        accessToken: null,
        refreshToken: null
    })
}