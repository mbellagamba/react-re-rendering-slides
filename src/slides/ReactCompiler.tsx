import { TwoColumnsLayout } from '../components/layout/TwoColumnsLayout';
import { SyntaxHighlight } from '../components/syntax-highlight/SyntaxHighlight';
import {
  COMPILED_CODE,
  INSTALL_REACT_COMPILER,
  UNCOMPILED_CODE,
} from './data/react-compiler';

const ReactCompiler = () => (
  <>
    <section data-auto-animate>
      <h2>React Compiler</h2>
    </section>
    <section data-auto-animate>
      <h2>React Compiler</h2>
      <p>
        È uno strumento a build time che ottimizza le app React applicando
        automaticamente le funzioni di{' '}
        <strong className="highlight">memoizzazione</strong>.
      </p>
    </section>
    <section>
      <h2>Requisiti</h2>
      <ul>
        <li>React 17+ (React 19 consigliato)</li>
        <li>
          <a
            href="https://react.dev/reference/rules"
            target="_blank"
            rel="noreferrer"
          >
            Rules of React
          </a>
          <ul>
            <li>Components and Hooks must be pure</li>
            <li>React calls Components and Hooks</li>
            <li>Rules of Hooks</li>
          </ul>
        </li>
      </ul>
      <aside className="notes">
        <ul>
          <li>
            Components and Hooks must be pure
            <ul>
              <li>Components must be idempotent</li>
              <li>Side effects must run outside of render</li>
              <li>Props and state are immutable</li>
              <li>Return values and arguments to Hooks are immutable</li>
              <li>Values are immutable after being passed to JSX</li>
            </ul>
          </li>
          <li>
            React calls Components and Hooks
            <ul>
              <li>Never call component functions directly</li>
              <li>Never pass around hooks as regular values</li>
            </ul>
          </li>
          <li>
            Rules of Hooks
            <ul>
              <li>Only call Hooks at the top level</li>
              <li>Only call Hooks from React functions</li>
            </ul>
          </li>
        </ul>
      </aside>
    </section>
    <section>
      <h2>Install</h2>
      <SyntaxHighlight language="bash">
        {INSTALL_REACT_COMPILER}
      </SyntaxHighlight>
      <aside className="notes">
        Installare il plugin Eslint è consigliato fin da subito per rilevare
        eventuali problemi nella propria codebase. React Compiler salta la
        compilazione dei componenti che non rispettano le regole di React senza
        bloccare la compilazione dell&apos;intera app.
      </aside>
    </section>
    <section>
      <p>
        <a href="https://playground.react.dev" target="_blank" rel="noreferrer">
          React Compiler Playground
        </a>
      </p>
      <TwoColumnsLayout>
        <SyntaxHighlight
          language="javascript"
          className="font-small"
          lineNumbers
          fullScreen
        >
          {UNCOMPILED_CODE}
        </SyntaxHighlight>
        <SyntaxHighlight
          language="javascript"
          className="font-small"
          lineNumbers
          fullScreen
        >
          {COMPILED_CODE}
        </SyntaxHighlight>
      </TwoColumnsLayout>
      <aside className="notes">
        Non è necessario rimuovere i precedenti usi di <code>memo</code>,{' '}
        <code>useMemo</code>, <code>useCallback</code> perché React Compiler li
        interpreta correttamente tentando lo stesso di applicare la
        memoizzazione.
      </aside>
    </section>
    <section>
      <h2>Domande aperte</h2>
      <ul>
        <li>
          <strong className="highlight">Correttezza</strong> &ndash; il
          compilatore compila correttamente l&apos;applicazione e ne preserva il
          comportamento originale?
        </li>
        <li>
          <strong className="highlight">Prestazioni</strong> &ndash; il
          compilatore aumenta il livello di prestazioni per tutti i tipi di app
          React? Come si bilancia l&apos;aumento delle dimensioni del bundle con
          una migliore prestazione di rendering?
        </li>
        <li>
          <strong className="highlight">Esperienza dello sviluppatore</strong>{' '}
          &ndash; il compilatore ti aiuta a scrivere meglio in React? È facile
          fare debug quando qualcosa va storto?
        </li>
      </ul>
      <aside className="notes">
        <ul>
          <li className="fragment">
            <strong className="highlight">Correttezza</strong> &ndash; il
            compilatore compila correttamente l&apos;applicazione e ne preserva
            il comportamento originale? L&apos;app compilata è priva di loop
            infiniti inaspettati e/o di esecuzioni eccessive di useEffect?
          </li>
          <li className="fragment">
            <strong className="highlight">Prestazioni</strong> &ndash; il
            compilatore aumenta il livello di prestazioni per tutti i tipi di
            app React, da quelle completamente statiche a quelle completamente
            dinamiche? Come si bilancia l&apos;aumento delle dimensioni del
            bundle con una migliore prestazione di rendering?
          </li>
          <li className="fragment">
            <strong className="highlight">Esperienza dello sviluppatore</strong>{' '}
            &ndash; il compilatore ti aiuta a scrivere meglio in React? I
            messaggi di errore/avvisi sono comprensibili? È facile fare debug
            quando qualcosa va storto? Permette di rimuovere manualmente useMemo
            e useCallback? React diventa più semplice da usare e capire con il
            compilatore abilitato?
          </li>
        </ul>
      </aside>
    </section>
  </>
);

export default ReactCompiler;
