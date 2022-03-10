import Modal from 'react-modal'
import { Container,TransactionTypeContainer,ButtonRadio,ImgStyleModal,TextStyleModal} from './styles'
import Closeimg from '../../assets/close.svg'
import Incomeimg from '../../assets/income.svg'
import Outcomeimg from '../../assets/outcome.svg'
import {FormEvent, useState} from 'react'

interface INewTransactionModalProps {
  isOpenProp: boolean;
  onRequestCloseProp: () => void;

}


export function NewTransactionModal({ isOpenProp, onRequestCloseProp }: INewTransactionModalProps) {

  const[title, setTitle] = useState('');
  const[value, setValue] = useState(0);
  const[category, setCategory] = useState('');

  const[type,setType] = useState('deposit');

  function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault();

    console.log(
      
      {
        title,
        value,
        category,
        type
      }
    )
    setTitle('')
    setValue(0)
    setCategory('')
    setType('deposit')


  }


  return (
    <Modal
      // isOpen={isNewTransactionModalOpen}
      isOpen={isOpenProp}
      // onRequestClose={handleCloseNewTransactionModal}
      onRequestClose={onRequestCloseProp}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>

        <button onClick={onRequestCloseProp} className="react-modal-close"><img src = {Closeimg} alt="fechar" />
        
        </button>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          placeholder="Valor"
          value={value}
          onChange={event => setValue(+event.target.value)}
        />

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        
        <TransactionTypeContainer>
          
        <ButtonRadio type='button'
        onClick={()=> setType ('deposit')}
        isActive = {type === 'deposit'}
        activeColor = 'green'
        >
          
          <ImgStyleModal src = {Incomeimg} alt="fechar" />
          <TextStyleModal>Entrada</TextStyleModal>
        </ButtonRadio>

        <ButtonRadio type='button'
        onClick={()=> setType ('withdraw')}
        isActive = {type === 'withdraw'}
        activeColor = 'red'
        >
          <ImgStyleModal src = {Outcomeimg} alt="fechar" />
          <TextStyleModal>Saída</TextStyleModal>
        </ButtonRadio>

        </TransactionTypeContainer>



        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}