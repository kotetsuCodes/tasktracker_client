class SessionApi {
    static login(credentials) {
        console.log(process.env.REACT_APP_API_HOST);
        const request = new Request(`${process.env.REACT_APP_API_HOST}/auth_user`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default SessionApi;