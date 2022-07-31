import {Component} from "react";

class BackendUp extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    updateAPIResponse = res => this.setState({apiResponse: res})

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.updateAPIResponse(res));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        if ( this.state.apiResponse !== ""){
            return (
                <svg xmlns="http://www.w3.org/2000/svg" id="backendUp" fill="currentColor" className="bi bi-layers-fill float-end mt-n5" viewBox="0 0 16 16">
                    <path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z"/>
                    <path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z"/>
                </svg>
            )
        }
        else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" id="backendDown" fill="currentColor" className="bi bi-x-lg float-end" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            )
        }
    }
}

export default BackendUp;