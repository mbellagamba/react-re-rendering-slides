import { ContentDisclosure } from '../components/content-disclosure/ContentDisclosure';
import { SyntaxHighlight } from '../components/syntax-highlight/SyntaxHighlight';
import TodoApp0 from '../examples/todoapp-0/todoapp0';
import TodoApp1 from '../examples/todoapp-1/todoapp1';
import { TODO_APP_0, TODO_APP_1 } from './data/problem-code';

const Problem = () => (
  <>
    <section>
      <ContentDisclosure title="TodoApp0.tsx">
        <TodoApp0 />
      </ContentDisclosure>
    </section>
    <section>
      <SyntaxHighlight
        language="typescript"
        lineNumbers="8-10|12-14|16-33|37-53|55-69|70-89"
        fullScreen
      >
        {TODO_APP_0}
      </SyntaxHighlight>
    </section>
    <section>
      <p>{`{Inserire un meme divertente del boss arrabbiato per mancanza di guadagni}`}</p>
    </section>
    <section>
      <SyntaxHighlight language="typescript" lineNumbers="92" fullScreen>
        {TODO_APP_1}
      </SyntaxHighlight>
    </section>
    <section>
      <ContentDisclosure title="TodoApp1.tsx">
        <TodoApp1 />
      </ContentDisclosure>
    </section>
  </>
);

export default Problem;
