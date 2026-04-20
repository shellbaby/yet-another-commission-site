import { SigninClientDTO } from "@/types/clients"
import { APIResponse } from "@shellbaby/shared/api-response"
import { customFetch } from "../base-service"

export const AuthService = {
    store: (data: SigninClientDTO) => {
        return customFetch<APIResponse<{ token: string; type: "bearer" }>>(
            "auth/signin",
            {
                method: "POST",
                body: JSON.stringify(data),
            }
        )
    },
}
