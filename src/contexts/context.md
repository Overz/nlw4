# Contexts

Contexts API's no react ajudam a troca de funcionalidades ou dados entre componentes da aplicação com a função `useContext(NomeDoCtx)`

Atenção a onde usar o contexto, pois ao englobar os componentes/elementos html da aplicação, tudo que esta dentro do contexto poderá usar este contexto,
mas também existem dependencias de contextos para contextos que neste caso existe a necessidade de um ficar dentro do outro.

## Criando

```typescript
import React, { useState, createContext, ReactNode } from 'react';

interface MyProviderProps {
  children: ReactNode;
  props: MyProps;
}

interface MyContextData {
  valor: number;
  nome: string;
  setValor: () => void;
  setNome: () => void;
}

/**
 * criando e fazendo o cast para os valores necessários.
 * o cast desta forma é feito para evitar a criação
 * de valores ja pre-definidos no parametro da função,
 * podendo assim criar de acordo com a interface e vazio.
 */
export const MyContext = createContext({} as MyContextData);

export const ContextProvider: React.FC<MyProviderProps> = ({
  children,
  props,
}) => {
  const [valor, setValor] = useState(0);
  const [nome, setNome] = useState('');


// retorna o provier para ser utilizado na aplicação
// com os parametros/funções para serem utilizados
// no resto da aplicação
  return (
      <MyContext.Provider
        value={
            valor,
            nome,
            setValor,
            setNome
        }
      >
        {children}
        <MyOtherFuncionalities>
      </MyContext.Provider>
  )
};
```

## Resgatando o Contexto

Existe a necessidade deste componente estar englobado
pelo contexto utilizado.

```typescript
import React, { useContext } from 'react';
import {MyContext} from '../contexts/my-context.tsx';

export const SomeComponent: React.FC = () => {
  const {level, nome, setLevel, setNome} = useContext(MyContext);

  [...]
};
```
