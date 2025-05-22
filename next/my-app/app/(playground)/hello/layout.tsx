'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PropsWithChildren, Suspense, useLayoutEffect, useState } from 'react';

export default function HelloLayout({ children }: PropsWithChildren) {
  const [state, setState] = useState('');
  const sparams = useSearchParams();
  // console.log('🚀 sparams:', sparams.get('q'));
  useLayoutEffect(() => {
    setState(sparams.get('q') ?? '');
  }, [sparams]);

  const router = useRouter();
  const pathname = usePathname();
  console.log('🚀 pathname:', pathname);
  const setSearchParams = () => {
    const urlParams = new URLSearchParams(sparams.toString());
    urlParams.set('q', `${new Date()}`); // q=****
    urlParams.set('r', `rrr`);
    router.push(`/hello?${urlParams.toString()}`);
  };

  return (
    <>
      <h1>This is Hello Layout: {state}</h1>
      <ul className='flex gap-3'>
        <li>
          <Link href='/hello/morning'>Morning</Link>
        </li>
        <li>
          <Link href='/hello/afternoon'>Afternoon</Link>
        </li>
        <li>
          <Link href='/hello/evening'>Evening</Link>
        </li>
      </ul>
      <hr />
      <Suspense>
        <div>{children}</div>
      </Suspense>
      <button onClick={setSearchParams}>SetParam</button>
    </>
  );
}
