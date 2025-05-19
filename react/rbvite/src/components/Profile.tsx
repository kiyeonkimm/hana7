import { useEffect, type RefObject } from 'react';
import { useSession } from '../contexts/session/SessionContext';
import Trans from './Trans';
import Post from './Post';

type Props = {
  logoutButtonRef: RefObject<HTMLButtonElement | null>;
};

export default function Profile({ logoutButtonRef }: Props) {
  const {
    session: { loginUser },
    logout,
  } = useSession();

    const f = () => console.log('sss>>>', loginUser?.name);
    useEffect(()=>{
      f();
    },[f]);
    
  return (
    <>
      <Trans />
      <Post />
      <h3>LoginUser: {loginUser?.name}</h3>
      <button ref={logoutButtonRef} onClick={logout}>
        LogOut
      </button>
    </>
  );
}