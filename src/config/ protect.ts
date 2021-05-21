import { NextPageContext } from 'next'
import Router from 'next/router'
import { Cookies } from 'react-cookie';

// set up cookies
const cookie = new Cookies();

const protectPage = async (ctx: any) => {

    // const cookie: any = ctx.req?.headers.cookie?.split('; ')
    const cookie: string = ctx.req ? ctx.req?.headers.cookie?.split('; ') : null

    try {

        // will hold the token
        let token: string
        let isLogin: boolean = false  // remove this line later

        // if we do have some cookie
        if (cookie && cookie[0] !== undefined) {

            // save the cookie
            token = cookie[0];

            if (token) {
                return { isAuthorized: true };
            }

        } else {
            console.log(`no token found`);
            ctx.res?.writeHead(302, { Location: '/?request=unauthorized-access' })
            ctx.res?.end()
            return { isAuthorized: false };
        }

        // return isAuthorized as a property
        return { isAuthorized: true }

    } catch (error) {
        // for network issues
        return { error: 'Network Error' }
    }
}

export default protectPage