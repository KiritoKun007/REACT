import React, { Fragment, Component } from 'react'

import './Modal.scss'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    componentDidUpdate() {
        console.log('[Modal.js] did update')
    }

    render() {

        const { show, children, modalClosed } = this.props

        return (
            <Fragment>
                <div 
                    className="Modal"
                    style={{ 
                        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: show ? '1' : '0'
                    }}>
                    {children}
                </div>
                <Backdrop show={show} clicked={modalClosed} />
            </Fragment>
        )
    }
}

export default Modal
