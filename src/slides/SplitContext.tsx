import { ContentDisclosure } from '../components/content-disclosure/ContentDisclosure';
import { SyntaxHighlight } from '../components/syntax-highlight/SyntaxHighlight';
import TodoApp6 from '../examples/todoapp-6/todoapp6';
import TodoApp7 from '../examples/todoapp-7/todoapp7';
import {
  APP_CONTEXT,
  CONTEXT_ADD_TASK_FORM,
  CONTEXT_ADD_TASK_FORM_2,
  CONTEXT_TASKS_LIST,
  TASKS_CONTEXT,
  THEME_CONTEXT,
  TODO_APP_6,
  TODO_APP_7,
} from './data/context-code';

const SplitContext = () => (
  <>
    <section>
      <h2>Split large context</h2>
      <p>
        React Context offre un modo integrato per condividere lo stato tra i
        componenti all&apos;interno dello stesso albero, eliminando la necessità
        di passare le props manualmente.
      </p>
    </section>
    <section>
      <h2>Potenziali problemi in applicazioni</h2>
      <p>
        La facilità di uso del <code className="code-snippet">Context</code> è
        anche il suo più grande problema.
      </p>
      <p>
        Aggiungere proprietà non correlate a context object complessi può
        causare re-render inefficaci poiché ogni aggiornamento del Context forza
        il re-render di tutti i componenti che lo utilizzano.
      </p>
      <aside className="notes">
        Per applicazioni su larga scala con stato che cambia frequentemente,
        librerie di gestione dello stato dedicate come Redux, MobX, Zustand,
        ecc. sono generalmente scelte migliori.
      </aside>
    </section>
    <section>
      <SyntaxHighlight language="typescript" lineNumbers="10,15" fullScreen>
        {TODO_APP_6}
      </SyntaxHighlight>
    </section>
    <section>
      <p>app-context.tsx</p>
      <SyntaxHighlight language="typescript" lineNumbers="9-19,22|62-68|70-77">
        {APP_CONTEXT}
      </SyntaxHighlight>
    </section>
    <section>
      <p>tasks-list.tsx</p>
      <SyntaxHighlight language="typescript" lineNumbers="5-9">
        {CONTEXT_TASKS_LIST}
      </SyntaxHighlight>
    </section>
    <section>
      <p>add-task-form.tsx</p>
      <SyntaxHighlight language="typescript" lineNumbers="5-14">
        {CONTEXT_ADD_TASK_FORM}
      </SyntaxHighlight>
    </section>
    <section>
      <ContentDisclosure title="TodoApp6.tsx">
        <TodoApp6 />
      </ContentDisclosure>
    </section>
    <section data-auto-animate>
      <SyntaxHighlight
        animationId="context-app"
        language="typescript"
        lineNumbers="10,15"
        fullScreen
      >
        {TODO_APP_6}
      </SyntaxHighlight>
    </section>
    <section data-auto-animate>
      <SyntaxHighlight
        animationId="context-app"
        language="typescript"
        lineNumbers="12-14,19-21"
        fullScreen
      >
        {TODO_APP_7}
      </SyntaxHighlight>
    </section>
    <section>
      <p>theme-context.tsx</p>
      <SyntaxHighlight language="typescript" lineNumbers="4-7|13-20">
        {THEME_CONTEXT}
      </SyntaxHighlight>
    </section>
    <section>
      <p>tasks-context.tsx</p>
      <SyntaxHighlight
        language="typescript"
        lineNumbers="5-7,10|34-35|37-46|48|55"
      >
        {TASKS_CONTEXT}
      </SyntaxHighlight>
    </section>
    <section>
      <p>add-task-form.tsx</p>
      <SyntaxHighlight language="typescript" lineNumbers="6-15">
        {CONTEXT_ADD_TASK_FORM_2}
      </SyntaxHighlight>
    </section>
    <section>
      <ContentDisclosure title="TodoApp7.tsx">
        <TodoApp7 />
      </ContentDisclosure>
    </section>
  </>
);

export default SplitContext;
