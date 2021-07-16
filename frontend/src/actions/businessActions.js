// Action is an obj with properties that contain logic to be executed on state
// like events in that they trigger state change
export const fetchBusinesses = () => {
    return fetch('http://localhost:3000/businesses')
            .then(resp => resp.json())
        // .then(resp =>
        }