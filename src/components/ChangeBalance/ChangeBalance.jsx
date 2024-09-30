import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBalance } from '../../redux/auth/operations';
import { StyledForm } from './Styles';
import { LightModalWindow } from '../../components/LightModalWindow/LightModalWindow';

// import ModalWindow from '../ModalWindow/ModalWindow';

const ChangeBalance = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const form = useRef();
  const stateBalance = useSelector(state => state.transactions.newBalance);
  const dispatch = useDispatch();
  let balance;

  const handleSubmit = evt => {
    evt.preventDefault();
    balance = evt.target.balance.value;
  };

  const handleClick = () => {
    dispatch(updateBalance({ newBalance: balance }));
    form.current.reset();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit} ref={form}>
        <h2 className="title">Balance:</h2>
        <input
          className="inputTag"
          type="number"
          name="balance"
          title="Please, enter your balance"
          pattern="[0-9, .PLN]*"
          placeholder={`${stateBalance}.00 PLN`}
          required
        />
        <button type="submit" className="btn" onClick={handleModalOpen}>
          Confirm
        </button>
        {/* {!stateBalance && <ModalWindow />} */}
      </StyledForm>
      {modalOpen && (
        <LightModalWindow
          changeBalance="true"
          closeModal={handleModalClose}
          dispatch={handleClick}
          text="SURE"
          balance={balance}
        >
          Are you sure?
        </LightModalWindow>
      )}
    </>
  );
};

export default ChangeBalance;
