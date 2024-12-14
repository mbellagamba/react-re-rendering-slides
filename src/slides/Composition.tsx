import { ContentDisclosure } from '../components/content-disclosure/ContentDisclosure';
import { SyntaxHighlight } from '../components/syntax-highlight/SyntaxHighlight';
import TodoApp2 from '../examples/todoapp-2/todoapp2';
import TodoApp3 from '../examples/todoapp-3/todoapp3';
import TodoApp4 from '../examples/todoapp-4/todoapp4';
import { TODO_APP_1 } from './data/problem-code';
import {
  ADD_TASK_FORM,
  APP_LAYOUT,
  COMPOSITION_1_FINAL,
  COMPOSITION_1_PART_1,
  COMPOSITION_1_PART_2,
  COMPOSITION_2_FINAL,
  COMPOSITION_2_PART_1,
  COMPOSITION_2_PART_2,
  COMPOSITION_3_FINAL,
  TASKS_VIEW,
} from './data/composition-code';

const Composition = () => (
  <>
    <section data-auto-animate>
      <h2>Components composition</h2>
    </section>
    <section data-auto-animate>
      <h2>Components composition</h2>
      <ul>
        <li>
          <strong className="highlight">Moving the state down</strong>: se uno
          stato è utilizzato da un solo componente figlio o da un sottoinsieme
          di componenti figli, delegare la gestione dello stato a questo
          componente.
        </li>
      </ul>
    </section>
    <section>
      <SyntaxHighlight
        language="typescript"
        lineNumbers="10,13-15,23|56-70"
        fullScreen
      >
        {TODO_APP_1}
      </SyntaxHighlight>
    </section>
    <section>
      <p>add-task-form.tsx</p>
      <SyntaxHighlight language="typescript" lineNumbers="7-15|18-32">
        {ADD_TASK_FORM}
      </SyntaxHighlight>
    </section>
    <section data-auto-animate>
      <SyntaxHighlight
        language="html"
        animationId="comp1"
        fullScreen
        lineNumbers
      >
        {COMPOSITION_1_PART_1}
      </SyntaxHighlight>
    </section>
    <section data-auto-animate>
      <SyntaxHighlight
        language="html"
        animationId="comp1"
        fullScreen
        lineNumbers
      >
        {COMPOSITION_1_PART_2}
      </SyntaxHighlight>
    </section>
    <section>
      <ContentDisclosure title="TodoApp2.tsx">
        <TodoApp2 />
      </ContentDisclosure>
    </section>
    <section data-auto-animate>
      <h2>Components composition</h2>
      <ul>
        <li>
          <strong className="highlight">Moving the state down</strong>: se uno
          stato è utilizzato da un solo componente figlio o da un sottoinsieme
          di componenti figli, delegare la gestione dello stato a questo
          componente.
        </li>
        <li className="fragment">
          <strong className="highlight">Encapsulate the parent state</strong>:
          se lo stato di un parent component non influenza lo stato dei figli,
          creare un componente parent che si gestisce autonomamente lo stato e
          che accetta una children prop.
        </li>
      </ul>
    </section>
    <section>
      <SyntaxHighlight
        language="typescript"
        lineNumbers="10|32,39,40"
        fullScreen
      >
        {COMPOSITION_1_FINAL}
      </SyntaxHighlight>
    </section>
    <section>
      <p>app-layout.tsx</p>
      <SyntaxHighlight language="typescript" lineNumbers="7,10|17-18|27">
        {APP_LAYOUT}
      </SyntaxHighlight>
    </section>
    <section data-auto-animate>
      <SyntaxHighlight
        animationId="composition2"
        language="typescript"
        lineNumbers
        fullScreen
      >
        {COMPOSITION_2_PART_1}
      </SyntaxHighlight>
    </section>
    <section data-auto-animate>
      <SyntaxHighlight
        animationId="composition2"
        language="typescript"
        lineNumbers
        fullScreen
      >
        {COMPOSITION_2_PART_2}
      </SyntaxHighlight>
    </section>
    <section>
      <ContentDisclosure title="TodoApp3.tsx">
        <TodoApp3 />
      </ContentDisclosure>
    </section>
    <section>
      <SyntaxHighlight
        language="typescript"
        lineNumbers="11,13-18,20-28|33-53"
        fullScreen
      >
        {COMPOSITION_2_FINAL}
      </SyntaxHighlight>
    </section>
    <section>
      <SyntaxHighlight
        language="typescript"
        lineNumbers="9-26|29-49"
        fullScreen
      >
        {TASKS_VIEW}
      </SyntaxHighlight>
    </section>
    <section>
      <SyntaxHighlight language="typescript" lineNumbers fullScreen>
        {COMPOSITION_3_FINAL}
      </SyntaxHighlight>
    </section>
    <section>
      <ContentDisclosure title="TodoApp4.tsx">
        <TodoApp4 />
      </ContentDisclosure>
    </section>
  </>
);

export default Composition;
