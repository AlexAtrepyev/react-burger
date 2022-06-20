import { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouterSwitch from '../router-switch/router-switch';

import { getUserThunk } from '../../services/actions/auth';
import { getIngredientsThunk } from '../../services/actions/ingredients';
import { useDispatch } from '../../services/hooks';

const App: FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUserThunk());
    dispatch(getIngredientsThunk());
  }, [dispatch]);
  
  return (
    <BrowserRouter>
      <RouterSwitch />
    </BrowserRouter>
  );
}

export default App;
