import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface IHeaderProps {
  onOpenNewTransacionalModal: () => void;

}

export default function Header({ onOpenNewTransacionalModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo dt money" />
        {/* <button type="button" onClick={handleOpenNewTransactionModal}> */}
        <button type="button" onClick={onOpenNewTransacionalModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}