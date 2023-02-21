/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SigninCallbacktype {
    username?: string;
    ok: boolean;
    result: {
        message?: string;
        startus?: number;
        access_token?: string;
        access_token_expration?: string;
    }
}
export interface AuthContextType {
    user: string;
    signin: (username: string, password: string, callback: any) => Promise<SigninCallbacktype>;
    signout: (callback: VoidFunction) => void;
}
