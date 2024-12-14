import Deck from './components/deck/Deck';
import Composition from './slides/Composition';
import Intro from './slides/Intro';
import Memoization from './slides/Memoization';
import Outro from './slides/Outro';
import Problem from './slides/Problem';
import ReactCompiler from './slides/ReactCompiler';
import SplitContext from './slides/SplitContext';
import UncontrolledForms from './slides/UncontrolledForms';

const App = () => {
  return (
    <Deck>
      <Intro />
      <Problem />
      <Composition />
      <UncontrolledForms />
      <SplitContext />
      <Memoization />
      <ReactCompiler />
      <Outro />
    </Deck>
  );
};

export default App;
