import * as React from 'react';
import './style.css';
import useLocalStorage from './useLocalStorage';
import { useState } from 'react';

export default function App() {
  const [storedValue, setStoredValue] = useLocalStorage(
    'select-value',
    'light'
  );

  return (
    <div className="container">
      <select
        className="select"
        value={storedValue}
        onChange={(e) => setStoredValue(e.target.value)}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <p className="desc">
        Value from local storage: <span className="span">{storedValue}</span>{' '}
      </p>
    </div>
  );
}
