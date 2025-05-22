import {
  useImperativeHandle,
  useContext,
  type ForwardedRef,
  type PropsWithChildren,
  type RefObject,
} from 'react';
import { CounterContext } from '../contexts/counter/CounterContext';
import { useFetch } from '../hooks/useFetch';
import { useToggle } from '../hooks/useToggle';

export type HelloHandler = {
  xx: string;
  sayHello: () => void;
};

type Props = {
  id: number;
  helloButtonRef: RefObject<HTMLButtonElement | null>;
  refx: ForwardedRef<HelloHandler>;
};

type User = {
  id: number;
  name: string;
};

export default function Hello({
  id,
  helloButtonRef,
  children,
  refx,
}: PropsWithChildren<Props>) {
  const { plusCount } = useContext(CounterContext); // ✅ use 대신 useContext 사용
  const [reloadFlag, toggleReload] = useToggle();

  const {
    data: user,
    isLoading,
    error,
  } = useFetch<User>(`https://jsonplaceholder.typicode.com/users/${id}`, [
    id,
    reloadFlag,
  ]);

  useImperativeHandle(
    refx,
    () => ({
      xx: 'XXXX',
      sayHello() {
        alert(`Hello, Mr.${user?.name || 'Unknown'}!`);
      },
    }),
    [user]
  );

  return (
    <div className='border'>
      <h3>
        Hello, {isLoading ? '...' : user?.name}
        <div>{error}</div>
      </h3>
      <div>
        {children} ({id})
      </div>
      <button ref={helloButtonRef} onClick={() => plusCount()}>
        count + 1
      </button>
      <button onClick={toggleReload}>Reload</button>
    </div>
  );
}
