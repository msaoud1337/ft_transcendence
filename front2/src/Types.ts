import React from "react";
import {ImageType} from "react-images-uploading"

export type TitlteTypes = {
    Name : string
}


export type UserDatatypes = {
    id : number,
    user_name : string,
    email : string,
    display_name : string,
    avatar_url : string,
    is_2fa_enabled : boolean,
    twoFactorAuthSecret : null,
    state : string,
    createdAt : string,
}
