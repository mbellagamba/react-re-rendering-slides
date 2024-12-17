import { ContentDisclosure } from '../components/content-disclosure/ContentDisclosure';
import { SyntaxHighlight } from '../components/syntax-highlight/SyntaxHighlight';
import TodoApp8 from '../examples/todoapp-8/todoapp8';
import {
  MEMO_ADD_TASK_FORM,
  MEMO_ADS_BANNER,
  MEMOIZED_TASK_VIEW,
  TASK_ITEM,
} from './data/memoization-code';

const Memoization = () => (
  <>
    <section data-auto-animate>
      <h2>Memoization</h2>
    </section>
    <section data-auto-animate>
      <h2>Memoization</h2>
      <q>
        La memoizzazione è una tecnica di programmazione che consiste nel
        salvare in memoria i valori restituiti da una funzione in modo da averli
        a disposizione per un riutilizzo successivo senza doverli ricalcolare.
      </q>
      <br />
      <a
        href="https://it.wikipedia.org/wiki/Memoizzazione"
        target="_blank"
        rel="noreferrer"
      >
        Wikipedia
      </a>
      <aside className="notes">
        React utilizza la memoizzazione per memorizzare il risultato dei
        funzioni che rappresentano dei componenti, evitando così di doverli
        ri-renderizzare.
      </aside>
    </section>
    <section>
      <h2>Memoization in React.js</h2>
      <ul>
        <li className="fragment">
          <code className="code-snippet">memo</code> - High Order Component che
          permette di evitare il re-render quando le props di un componente sono
          invariate.
        </li>
        <li className="fragment">
          <code className="code-snippet">useMemo</code> - React Hook che
          permette di memorizzare il risultato di una funzione tra i re-render.
        </li>
        <li className="fragment">
          <code className="code-snippet">useCallback</code> - React Hook che
          permette di memorizzare una funzione tra i re-render.
        </li>
      </ul>
      <br />
      <a
        href="https://react.dev/reference/react/useMemo#memoizing-a-function"
        target="_blank"
        rel="noreferrer"
        className="fragment"
      >
        <small>Memoizing a function</small>
      </a>
      <aside className="notes">
        useMemo e useCallback sono molto simili, la differenza principale è che
        useMemo memorizza il risultato di una funzione, mentre useCallback
        memorizza la funzione stessa. Si potrebbe utilizzare useMemo per
        memorizzare una funzione, ma useCallback è più chiaro e leggibile.
        useMemo e useCallback sono equivalenti.
      </aside>
    </section>
    <section>
      <p>AdsBanner</p>
      <SyntaxHighlight language="tsx" lineNumbers>
        {MEMO_ADS_BANNER}
      </SyntaxHighlight>
    </section>
    <section>
      <p>AddTaskForm</p>
      <SyntaxHighlight language="tsx" lineNumbers>
        {MEMO_ADD_TASK_FORM}
      </SyntaxHighlight>
    </section>
    <section>
      <p>TaskItem</p>
      <SyntaxHighlight language="tsx" lineNumbers="15-36" fullScreen>
        {TASK_ITEM}
      </SyntaxHighlight>
    </section>
    <section>
      <p>TasksView</p>
      <SyntaxHighlight language="tsx" lineNumbers="10-27|30-35" fullScreen>
        {MEMOIZED_TASK_VIEW}
      </SyntaxHighlight>
    </section>
    <section>
      <ContentDisclosure title="TodoApp8.tsx">
        <TodoApp8 />
      </ContentDisclosure>
    </section>
    <section>
      <h2>Consigli finali</h2>
      <ul>
        <li className="fragment">
          React applica uno <em className="highlight">shallow comparison</em>{' '}
          per verificare se le dipendenze sono cambiate.
        </li>
        <li className="fragment">
          La memoizzazione è utile anche per rendere stabili i riferimenti di
          valori degli array di dipendenze degli hooks (anche <em>useEffect</em>
          ).
        </li>
        <li className="fragment">
          Si può modificare la funzione di confronto per{' '}
          <code className="code-snippet">memo</code> passando un secondo
          argomento.
        </li>
      </ul>
      <aside className="notes">
        Se si passano oggetti, array o funzioni generati durante il rendering,
        la memoizzazione non funzionerà.
      </aside>
    </section>
    <section>
      <h2>Perché non usare sempre queste funzioni?</h2>
      <p>
        La memoizzazione ha un costo in termini di memoria. Usare{' '}
        <code className="code-snippet">memo</code> inutilmente aumenta il
        consumo di memoria creando più lavoro per il garbage collector,
        potenzialmente degradando le prestazioni.
      </p>
      <aside className="notes">
        La memoizzazione è utile quando si ha a che fare con componenti che
        richiedono molto tempo per essere renderizzati oppure quando le props di
        un componente non cambiano spesso a fronte di un alto numero di
        renderizzazioni.
      </aside>
    </section>
  </>
);

export default Memoization;
