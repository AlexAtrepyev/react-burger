import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ModalSwitch from '../modal-switch/modal-switch';

import { getUserThunk } from '../../services/actions/auth';
import { getIngredientsThunk } from '../../services/actions/ingredients';
import { useDispatch } from '../../services/hooks';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUserThunk());
    dispatch(getIngredientsThunk());
  }, [dispatch]);
  
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
