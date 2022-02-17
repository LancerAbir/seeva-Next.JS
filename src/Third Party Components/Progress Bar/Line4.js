import { Line } from "rc-progress";
import * as React from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

class Line4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
        };
        this.increase = this.increase.bind(this);
        this.restart = this.restart.bind(this);
    }

    componentDidMount() {
        this.increase();
    }

    increase() {
        const { percent } = this.state;
        const newPercent = percent + 1;
        if (newPercent >= 85) {
            clearTimeout(this.tm);
            return;
        }
        this.setState({ percent: newPercent });
        this.tm = setTimeout(this.increase, 10);
    }

    restart() {
        clearTimeout(this.tm);
        this.setState({ percent: 0 }, () => {
            this.increase();
        });
    }

    render() {
        const { percent } = this.state;
        return (
            <ReactVisibilitySensor>
                {({ isVisible }) => (
                    <Line
                        strokeWidth="1"
                        strokeLinecap="square"
                        strokeColor="rgb(255, 48, 0)"
                        trailColor="rgb(255, 224, 217)"
                        percent={isVisible ? percent : ""}
                        className="background-color: red"
                    />
                )}
            </ReactVisibilitySensor>
        );
    }
}

export default Line4;
