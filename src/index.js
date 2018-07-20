import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { node, string, oneOfType } from 'prop-types';

export default class Tooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };

        const id = 'wtjs-tooltip';
        // create dom element for tooltip if it doesn't exist
        this.tooltipWrapper = document.querySelector(`#${id}`);
        if (!this.tooltipWrapper) {
            this.tooltipWrapper = document.createElement('div');
            this.tooltipWrapper.setAttribute('id', id);
            this.tooltipWrapper.setAttribute('data-testid', id);
            document.body.appendChild(this.tooltipWrapper);
        }
        // ref for the wrapper element
        this.sourceRef = React.createRef();
    }

    showTooltip = () => {
        this.setState({
            active: true,
        });
    };

    hideTooltip = () => {
        this.setState({
            active: false,
        });
    };

    renderTooltip = () => {
        const { active } = this.state;
        const { render } = this.props;
        if (active) {
            const { top, left, width } = this.sourceRef.current.getBoundingClientRect();
            const tooltip = {
                position: 'absolute',
                bottom: window.innerHeight - top + 8 - window.scrollY,
                left: left + width / 2 + window.scrollX,
            };
            return ReactDOM.createPortal(
                <div style={tooltip}>
                    <div
                        id="wtjs-tooltip-content"
                        role="tooltip"
                        style={{
                            position: 'relative',
                            left: '-50%',
                            padding: '8px 16px',
                            borderRadius: 4,
                            background: '#424242',
                            color: 'white',
                        }}
                    >
                        {render}
                        <span
                            style={{
                                position: 'absolute',
                                bottom: -10,
                                left: 'calc(50% - 5px)',
                                borderWidth: 5,
                                borderStyle: 'solid',
                                borderColor: '#424242 transparent transparent transparent',
                            }}
                        />
                    </div>
                </div>,
                this.tooltipWrapper,
            );
        }
        return null;
    };

    render() {
        const { children } = this.props;
        const source = (
            <span
                onMouseEnter={this.showTooltip}
                onMouseLeave={this.hideTooltip}
                tabIndex="0"
                role="button"
                onFocus={this.showTooltip}
                onBlur={this.hideTooltip}
                key="0"
                ref={this.sourceRef}
                aria-describedby="wtjs-tooltip-content"
            >
                {children}
            </span>
        );

        // render the child and tooltip
        return [source, this.renderTooltip()];
    }
}

Tooltip.propTypes = {
    /** Tooltip content */
    render: oneOfType([node, string]).isRequired,
    /** Wrapped node */
    children: node.isRequired,
};
