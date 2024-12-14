import { TwoColumnsLayout } from '../components/layout/TwoColumnsLayout';
import { SyntaxHighlight } from '../components/syntax-highlight/SyntaxHighlight';
import Add3Quiz from '../examples/add-3-quiz/Add3Quiz';
import { QUIZ_CODE } from './data/intro-code';

const Intro = () => (
  <>
    <section>
      <h1>Ottimizzare le prestazioni delle React app</h1>
      <p>Strategie per evitare re-render inutili</p>
      <small className="highlight">Mirco Bellagamba</small>
      <aside className="notes">
        Chi è sviluppatore front-end? Chi utilizza o ha utilizzato React?
      </aside>
    </section>
    <section>
      <h2>Perché avviene un re-render?</h2>
    </section>
    <section>
      <h2>State updates</h2>
    </section>
    <section>
      <h2>view = f(state)</h2>
    </section>
    <section>
      <TwoColumnsLayout>
        <div>
          <h2>Il ciclo di React</h2>
          <ol>
            <li>Trigger</li>
            <li>Render</li>
            <li>Commit</li>
          </ol>
        </div>
        <div className="column-centered">
          <img
            src="https://raw.githubusercontent.com/reactjs/react.dev/refs/heads/main/public/images/docs/diagrams/preserving_state_dom_tree.dark.png"
            alt="React render and commit"
          />
          <a
            href="https://react.dev/learn/render-and-commit"
            target="_blank"
            rel="noreferrer"
          >
            <small>https://react.dev/learn/render-and-commit</small>
          </a>
        </div>
      </TwoColumnsLayout>
    </section>
    <section>
      <TwoColumnsLayout>
        <div>
          <h2>Quiz</h2>
          <p>Che valore si visualizza quando si clicca &quot;+3&quot;?</p>
          <SyntaxHighlight language="typescript">{QUIZ_CODE}</SyntaxHighlight>
        </div>
        <div className="column-centered">
          <Add3Quiz />
        </div>
      </TwoColumnsLayout>
    </section>

    <section>
      <h2>Perché React esegue il re-render di un componente?</h2>
      <ul>
        <li className="fragment">Aggiornamento di stato del componente</li>
        <li className="fragment">Re-render del parent component</li>
        <li className="fragment">Aggiornamento del context</li>
        <li className="fragment">Aggiornamento di un hook</li>
      </ul>
    </section>
    <section>
      <h2>Aggiornamento delle props?</h2>
      <p className="fragment">
        Le props non influenzano il re-render di un componente
        <span className="highlight">*</span>
      </p>
    </section>
  </>
);

export default Intro;
