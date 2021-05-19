import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

const loginSuccessDetail = (email: string): any => {
    return {
        displayName: '',
        email: email,
        expiresIn: "3600",
        idToken: 'kjshdifuhsdfsdfsdfdasfaf',
        kind: 'sdfhksdhfldsf',
        localId: 'sdkjfyoiuashdfsahdoifhsdf',
        refreshToken: 'sdfafasdfkjasdfh ksa hfdhsafd',
        registered: true
    }
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    login(email: string, password: string): Observable<any> {
        return of(loginSuccessDetail(email));
    }
}