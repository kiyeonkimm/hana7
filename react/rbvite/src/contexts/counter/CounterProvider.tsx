import { useReducer, type PropsWithChildren } from 'react';
import { CounterContext } from './CounterContext';

type Action = {
  type: 'plus'| 'minus';
  payload: number;
}
const reducer = (count: number, {type, payload}: Action) => {
  if (type == 'plus'){
    return count + payload;
  } else if (type == 'minus'){
    return count - payload;
  } else {
    return count;
  }
};

export const CounterProvider = ({ children }: PropsWithChildren) => {
  //const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  //const plusCount = () => setCount(pre => pre + 1);
  const plusCount = (payload: number = 1) => dispatch({type: 'plus', payload});
  //const minusCount = () => setCount(pre => pre - 1);
  const minusCount = (payload: number = 1) => dispatch({type: 'minus', payload });

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};