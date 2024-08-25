// // import { Cookies } from "react-cookie";
// // const cookies=new Cookies();
// //
// // const SetAccessToken=(accessToken)=> {
// //     return cookies.set("access_token",accessToken,{
// //         path:"/",
// //         expires:new Date(new Date().getTime()+28*60*1000),
// //     });
// // };
// //
// // const SetRefreshToken=(refreshToken)=> {
// //     return cookies.set("refresh_token",refreshToken,{
// //         path: "/",
// //         expires:new Date(new Date().getTime()+28*60*1000),
// //     });
// // };
// //
// // const GetAccessToken=() => {
// //     return cookies.get("access_token",{path:"/"});
// // };
// //
// // const GetRefreshToken=() => {
// //     return cookies.get("refresh_token",{path:"/"});
// // };
// //
// // const ClearAll = () => {
// //   cookies.remove("access_token", { path: "/" });
// //   cookies.remove("refresh_token", { path: "/" });
// // };
// import { Cookies } from "react-cookie";
//
// const cookies = new Cookies();
//  // console.log(cookies);
// class AuthCookies {
//     static setAccessToken(accessToken) {
//         return cookies.set("access_token", accessToken, {
//             path: "/",
//             expires: new Date(new Date().getTime() + 60 ),
//         });
//     }
//
//     static setRefreshToken(refreshToken) {
//         return cookies.set("refresh_token", refreshToken, {
//             path: "/",
//             expires: new Date(new Date().getTime() + 60),
//         });
//     }
//
//     static getAccessToken() {
//      //   console.log(cookies.get("access_token"));
//         return cookies.get("access_token", { path: "/" });
//     }
//
//     static getRefreshToken() {
//         return cookies.get("refresh_token", { path: "/" });
//     }
//
//     static clearAll() {
//         cookies.remove("access_token", { path: "/" });
//         cookies.remove("refresh_token", { path: "/" });
//     }
// }
//
// export default AuthCookies;
//

import { Cookies } from "react-cookie";

const cookies = new Cookies();

class AuthCookies {
    static setAccessToken(accessToken) {
        return cookies.set("access_token", accessToken, {
            path: "/",
            expires: new Date(new Date().getTime() + 288 * 60 * 1000), // 28 minutes expiration
        });
    }

    static setRefreshToken(refreshToken) {
        return cookies.set("refresh_token", refreshToken, {
            path: "/",
            expires: new Date(new Date().getTime() + 288 * 60 * 1000), // 28 minutes expiration
        });
    }

    static getAccessToken() {
        return cookies.get("access_token", { path: "/" });
    }

    static getRefreshToken() {
        return cookies.get("refresh_token", { path: "/" });
    }

    static clearAll() {
        cookies.remove("access_token", { path: "/" });
        cookies.remove("refresh_token", { path: "/" });
    }
}

export default AuthCookies;
