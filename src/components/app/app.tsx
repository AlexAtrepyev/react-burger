import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { getUser, getIngredients } from '../../services/actions';

import ModalSwitch from '../modal-switch/modal-switch';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUser());
    dispatch(getIngredients());
  }, [dispatch]);
  
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
