import Repository, { baseDomain, serializeQuery, customHeaders } from "./Repository";

class UserRepository {
    async login(params) {
        try {
            const response = await Repository.post(`${baseDomain}/user/login`, {
                email: params.email,
                password: params.password,
            });
            customHeaders.authorization = response.headers.authorization;
            // ReactSession.set("token", response.headers.authorization);
            console.log(response)
            return response;
        } catch (e) {
            console.error(e);
        }
    }

    async register(params) {
        try {
            const response = await Repository.post(`${baseDomain}/user/register`, {
                first_name: params.firstName,
                last_name: params.lastName,
                phone: params.phone,
                email: params.email,
                password: params.password,
            });
            customHeaders.authorization = response.headers.authorization;
            // ReactSession.set("token", response.headers.authorization);
            console.log(response)
            return response;
        } catch (e) {
            console.error(e);
        }
    }
}

export default new UserRepository();
