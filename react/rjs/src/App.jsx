import { useState, version } from 'react';
import './App.css';

// const StatePool = {};
// function useState(initValue) {
//   if (!StatePool._x) {
//     StatePool._x = initValue;
//   }

//   const obj = {
//     get x() {
//       console.log('🚀 getx:', StatePool._x);
//       return StatePool._x;
//     },
//     setX(newValueOrFn) {
//       console.log('🚀 setX:', typeof newValueOrFn);
//       if (typeof newValueOrFn === 'function') {
//         StatePool._x = newValueOrFn(StatePool._x);
//         console.log('🚀 setx:', StatePool._x);
//       } else {
//         StatePool._x = newValueOrFn;
//       }

//       // React.rerender();
//       App();
//     },
//   };

//   return [obj.x, obj.setX];
// }

function MyButton({ onClick, className }) {
  return <button onClick={onClick} className={className}>MyButton</button>;
}


const hong = { name: 'Hong', hobbies: ['Bike', 'Tennis'] };

const AboutMe = ({ myinfo }) => {
  // const { myinfo } = prop;
  const { name, hobbies } = myinfo;
  return (
    
    <>
      <h1>{name}</h1>
      <ul style={{ listStyle: 'none' }}>
        {hobbies.map(hobby => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className= 'flex justify-center items-center mt-5'>
      <h1 className='text-3xl'>Vite + React {version}</h1>
      <MyButton onClick={() => setIsLoggedIn(!isLoggedIn)}
      className='bg-blue-300 text-white px-6 py-4 rounded hover:bg-blue-599 mb-56' /> 
      {isLoggedIn ? <AboutMe myinfo={hong} /> : <h3>Login Form</h3>}
    </div>
  );
}

export default App;