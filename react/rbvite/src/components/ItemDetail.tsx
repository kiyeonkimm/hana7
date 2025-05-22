import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom';
import { useSession, type Cart } from '../contexts/session/SessionContext';

export default function ItemDetail() {
  const {
    session: { cart },
  } = useSession();

  const { curItem } = useOutletContext<{ curItem: Cart }>();
  const { id } = useParams();
  console.log('🚀 item:', curItem, id);
  let item = curItem;
  if (!curItem) {
    if (!id) {
      return <Navigate to='/items' />;
    }

    item = cart.find(item => item.id === +id)!;
  }

  return (
    <>
      <h3>🔎ItemDetail- 금액: {item.price.toLocaleString()}원</h3>
      <Link to ='/items'>목록</Link>
      <div></div>
      <Link to ='./edit'>수정하기</Link>
    </>
  );
}