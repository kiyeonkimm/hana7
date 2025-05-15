import { useContext } from 'react';
import { SessionContext } from './SessionContext';

export const useCounter = () => useContext(SessionContext);