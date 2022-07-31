import './cards.css';
import {Component} from "react";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {buttonTitle: 'Submit'}
    }

    render() {
        return (
            <div className="column">
                <div className="card weather-card">
                    <center>
                        {this.props.imageSvg}
                    </center>
                    <div className="card-body">
                        <center><h5 className="card-title">{this.props.cardTitle}</h5></center>
                        <label>{this.props.cardSubHeader}</label>
                        <input id="inputtedLocation" type="text" maxLength="8" className="ms-1"/>
                        <center>
                            <button type="button" className="btn btn-primary btn-lg mt-2" onClick={this.props.onclick}>{this.state.buttonTitle}</button>
                        </center>
                        <div id={this.props.responseId}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;
