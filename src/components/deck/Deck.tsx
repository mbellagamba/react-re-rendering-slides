import { ReactNode, useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import revealOptions from './revealOptions';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

// import 'reveal.js/plugin/highlight/monokai.css';
import './dracula.css';

const Deck = ({ children }: { children?: ReactNode }) => {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, revealOptions);

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
      deckRef.current?.registerPlugin(RevealHighlight());
      deckRef.current?.registerPlugin(RevealMarkdown());
      deckRef.current?.registerPlugin(RevealNotes());
    });

    return () => {
      try {
        if (deckRef.current?.isReady()) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn('Reveal.js destroy call failed.', e);
      }
    };
  }, []);

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">{children}</div>
    </div>
  );
};

export default Deck;
