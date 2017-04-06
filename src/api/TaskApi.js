class TaskApi {
    static requestHeaders() {
        return {'Authorization': sessionStorage.jwt, 'Content-Type': 'application/json'}
    }

    static getTasks() {
        const headers = this.requestHeaders();
        const request = new Request(`${process.env.REACT_APP_API_HOST}/tasks`, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default TaskApi;