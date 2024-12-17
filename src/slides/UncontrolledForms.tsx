import { ContentDisclosure } from '../components/content-disclosure/ContentDisclosure';
import { SyntaxHighlight } from '../components/syntax-highlight/SyntaxHighlight';
import TodoApp5 from '../examples/todoapp-5/todoapp5';
import { ADD_TASK_FORM } from './data/composition-code';
import {
  REACT_19_ADD_TASK_FORM,
  UNCONTROLLED_ADD_TASK_FORM,
} from './data/uncontrolled-forms';

const UncontrolledForms = () => (
  <>
    <section data-auto-animate>
      <h2>Uncontrolled forms</h2>
    </section>
    <section data-auto-animate>
      <h2>Uncontrolled forms</h2>
      <ul>
        <li>
          <strong className="highlight">Controlled input</strong>: consentono di
          controllare il loro comportamento tramite uno stato di React, es.{' '}
          <code className="code-snippet">value</code>, e una funzione di
          callback, es. <code className="code-snippet">onChange</code>.
        </li>
        <li>
          <strong className="highlight">Uncontrolled input</strong>: lo stato
          del componente è gestito dal DOM. &Egrave; possibile soltanto
          specificare il valore iniziale{' '}
          <code className="code-snippet">defaultValue</code>.
        </li>
      </ul>
      <aside className="notes">
        Parlando in generale di uncontrolled components ci si riferisce ai
        componenti il cui stato può essere gestito passando delle props.
        Viceversa un &ldquo;uncontrolled components&rdquo; nasconde
        all&lsquo;esterno la gestione dello stato.
      </aside>
    </section>
    <section>
      <h2>Uncontrolled input</h2>
      <ul>
        <li>
          ✅ Non richiede la gestione diretta tramite uno state evitando che il
          componente sia renderizzato ad ogni cambiamento.
        </li>
        <li>
          ❌ Non è reattivo: è più difficile eseguire azioni in base allo stato,
          come la validazione o gestire dipendenze tra input.
        </li>
      </ul>
      <br />
      <p>
        <a
          href="https://www.epicreact.dev/improve-the-performance-of-your-react-forms"
          target="_blank"
          rel="noreferrer"
        >
          <small>
            https://www.epicreact.dev/improve-the-performance-of-your-react-forms
          </small>
        </a>
        <br />
        <a href="https://react-hook-form.com" target="_blank" rel="noreferrer">
          <small>https://react-hook-form.com</small>
        </a>
      </p>
      <aside className="notes">
        Si può limitare la mancanza di reattività tramite la &ldquo;state
        colocation&rdquo;: creando un componente che gestisce lo stato
        dell&lsquo;input e uno state che indica se l&lsquo;utente ha interagito
        con l&lsquo;input.
      </aside>
    </section>
    <section>
      <span>AddTaskForm.tsx</span>
      <SyntaxHighlight
        language="typescript"
        lineNumbers="7-10,13-14|26-27"
        fullScreen
      >
        {ADD_TASK_FORM}
      </SyntaxHighlight>
    </section>
    <section>
      <span>AddTaskForm.tsx</span>
      <SyntaxHighlight
        language="typescript"
        lineNumbers="14-18|24-30|25|16|5-11,14"
        fullScreen
      >
        {UNCONTROLLED_ADD_TASK_FORM}
      </SyntaxHighlight>
    </section>
    <section>
      <span>AddTaskForm.tsx</span>
      <SyntaxHighlight language="typescript" lineNumbers="6-8,11" fullScreen>
        {REACT_19_ADD_TASK_FORM}
      </SyntaxHighlight>
    </section>
    <section>
      <ContentDisclosure title="TodoApp5.tsx">
        <TodoApp5 />
      </ContentDisclosure>
    </section>
  </>
);

export default UncontrolledForms;
