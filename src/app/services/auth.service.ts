import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { AuthResponseData } from "../models/AuthResponseData.model";
import { User } from "../models/user.model";

const loginSuccessDetail = (email: string): AuthResponseData => {
    return {
        email: email,
        expiresIn: "3600",
        idToken: 'kjshdifuhsdfsdfsdfdasfaf',
        localId: 'sdkjfyoiuashdfsahdoifhsdf',
        refreshToken: 'sdfafasdfkjasdfh ksa hfdhsafd',
        registered: true
    }
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    login(email: string, password: string): Observable<AuthResponseData> {
        return of(loginSuccessDetail(email))
            .pipe(delay(3000))
    }

    formatUser(data: AuthResponseData) {
        const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000)
        const user = new User(data.email, data.idToken, data.localId, expirationDate);
        return user;
      }
}