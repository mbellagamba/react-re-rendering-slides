import { Dispatch, createContext, useState, useContext } from 'react';

type InputContextType = {
  text: string;
  setText: Dispatch<React.SetStateAction<string>>;
};
const InputContext = createContext<InputContextType>({
  text: '',
  setText: () => {},
});

function InputProvider({ children }: { children: React.ReactNode }) {
  const [text, setText] = useState('');
  return (
    <InputContext.Provider value={{ text, setText }}>
      {children}
    </InputContext.Provider>
  );
}

function useInput() {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error('useInput must be used within a InputProvider');
  }
  return context;
}

export { InputProvider, useInput };
