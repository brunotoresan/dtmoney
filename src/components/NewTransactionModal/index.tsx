import Modal from 'react-modal'
import { Container } from "./styles";

interface NewTrasactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTrasactionModalProps) {
        return(      
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            // overlay is the page behind the modal
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder="Título" />
                <input type="number" placeholder="valor" />
                <input placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}