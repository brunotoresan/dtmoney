import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
	// this property is a function with no parameters and no return type
	onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
	return (
		<Container>
			<Content>
				<img src={logo} alt="dt-money" />
				<button type="button" onClick={onOpenNewTransactionModal}>
					Nova transação
				</button>
			</Content>
		</Container>
	)
}