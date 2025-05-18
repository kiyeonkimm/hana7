import Login from './Login';
import Profile from './Profile';
import Item from './Item';
import { memo, useMemo, useReducer, useState, type RefObject } from 'react';
import { useSession } from '../contexts/session/SessionContext';
import ColorTitle from './ColorTitle';
//import useDebounce from '../hooks/useDebounce';


type Props = {
  logoutButtonRef: RefObject<HTMLButtonElement | null>;
};

// type Post = { id: number; title: string };
// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?userId=1';

// const MemoColorTitle = memo(ColorTitle, () => true);
const MemoColorTitle = memo(
  ColorTitle,
  (preProp, newProp) => preProp.color === newProp.color
);

export default function My({ logoutButtonRef }: Props) {
  const {
    session: { loginUser, cart },
  } = useSession();
  
  // 1)
  // const [isAdding, setAdding] = useState(false);
  // const toggleAdding = () => setAdding(!isAdding);
  
  // 2)
  // const [isAdding, toggleAdding] = useToggle();
  
  // 3)
  const [isAdding, toggleAdding] = useReducer(pre => !pre, false);  
  
  // const [search, setSearch] = useState('');
  // const debouncedSearch = useDebounce(search, 300); // 300ms 지연
  
  
  // export default function MySearch() {
    //   const {
      //     session: { cart },
      //   } = useSession();
      
      //---- search
      const [search, setSearchStr] = useState('');
      
      const filteredCart = cart.filter(item =>
        item.name.includes(search)
      );
      
      const totalPrice = useMemo(() => {
        return filteredCart.reduce((acc, item) => acc + item.price, 0);
      }, [filteredCart]);
      
      const [totalExpectPrice, addExpectPrice] = useReducer(
        (prePrice, newPrice) => totalPrice + newPrice + prePrice * 0,
        totalPrice
      );
      // const [posts, setPosts] = useState<Post[]>([]);
      // const [error, setError] = useState(null);
      
      // useEffect(() => {
        //   // (async function () {
          //   //   const res = await fetch(POSTS_URL);
          //   //   const data = await res.json();
          //   // })();
          //   const controller = new AbortController();
          //   const { signal } = controller;
          //   fetch(POSTS_URL, { signal })
          //     .then(res => res.json())
          //     .then(setPosts)
          //     .catch(err => {
            //       console.log('🚀 err:', err);
            //       if (!signal.aborted) setError(err);
            //     });
            
            //   return () => controller.abort();
            // }, []);
            
            return (
              <>
      {loginUser ? <Profile logoutButtonRef={logoutButtonRef} /> : <Login />}
      <MemoColorTitle color={cart.length % 2 === 1 ? 'pink' : 'purple'}>
        Total: {totalPrice.toLocaleString()}
      </MemoColorTitle>
      <h4>Expect: {totalExpectPrice.toLocaleString()}</h4>
      <div>
        
      search: <input
        type = 'text'
        onChange={(evt)=> setSearchStr(evt.target.value) }
        />

        <ul>
          {/* {cart.map(item => (
            <li key={item.id}>
            <Item item={item} addExpectPrice={addExpectPrice} />
            </li>
            ))} */}
          {filteredCart.map(item => (
            <li key={item.id}>
              <Item item={item} addExpectPrice={addExpectPrice} />
            </li>
          ))}
          {isAdding ? (
            <li>
              <Item
                item={{ id: 0, name: '', price: 3000 }}
                toggleAdding={toggleAdding}
                addExpectPrice={addExpectPrice}
              />
            </li>
          ) : (
            <button onClick={() => toggleAdding()}>ADD</button>
          )}
        </ul>
        <hr />
        {/* <h3>{JSON.stringify(error)}</h3>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>
              {id}. <strong>{title}</strong>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
}