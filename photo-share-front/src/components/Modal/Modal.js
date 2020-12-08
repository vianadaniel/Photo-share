import React from 'react'
import { ModalContainer, ModalMain } from './styled'

export const Modal = ({id="modal",onClose, children}) => {

    const handleClose = (e) => {
        if(e.target.id === id)
        onClose()
        
    }


    return (
        <ModalMain id="modal" onClick={handleClose}>
            <ModalContainer>{children}</ModalContainer>
        </ModalMain>
    )
}
