import { TwoColumnsLayout } from '../components/layout/TwoColumnsLayout';
import me from '../assets/me.jpeg';

const Outro = () => (
  <>
    <section>
      <h2>Strategie per ottimizzare il re-render</h2>
      <ol>
        <li>Components composition</li>
        <li>Uncontrolled forms</li>
        <li>Split large context</li>
        <li>Memoization</li>
        <li>React Compiler (?)</li>
      </ol>
    </section>
    <section>
      <TwoColumnsLayout>
        <div className="column-centered">
          <h2>Grazie!</h2>
          <p>
            <a
              href="https://x.com/mircoBellaG"
              target="_blank"
              rel="noopener noreferrer"
              className="personal-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M 18.242188 2.25 L 21.554688 2.25 L 14.324219 10.507812 L 22.828125 21.75 L 16.171875 21.75 L 10.953125 14.933594 L 4.992188 21.75 L 1.679688 21.75 L 9.40625 12.914062 L 1.257812 2.25 L 8.082031 2.25 L 12.792969 8.480469 Z M 17.082031 19.773438 L 18.914062 19.773438 L 7.082031 4.125 L 5.113281 4.125 Z M 17.082031 19.773438 " />
              </svg>
              @mircoBellaG
            </a>
            <a
              href="https://github.com/mbellagamba"
              target="_blank"
              rel="noopener noreferrer"
              className="personal-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <title>GitHub</title>
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
              </svg>
              mbellagamba
            </a>
            <a
              href="https://linkedin.com/in/mirco-bellagamba"
              target="_blank"
              rel="noopener noreferrer"
              className="personal-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <title>LinkedIn</title>
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"></path>
              </svg>
              mirco-bellagamba
            </a>
            <a
              href="https://mircobellagamba.com"
              target="_blank"
              rel="noopener noreferrer"
              className="personal-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M 16.5 12 C 16.5 13.039062 16.445312 14.042969 16.34375 15 L 7.660156 15 C 7.554688 14.042969 7.503906 13.039062 7.503906 12 C 7.503906 10.960938 7.5625 9.957031 7.660156 9 L 16.34375 9 C 16.449219 9.957031 16.5 10.960938 16.5 12 Z M 17.851562 9 L 23.621094 9 C 23.867188 9.960938 24 10.964844 24 12 C 24 13.035156 23.867188 14.039062 23.621094 15 L 17.851562 15 C 17.949219 14.035156 18 13.03125 18 12 C 18 10.96875 17.949219 9.964844 17.851562 9 Z M 23.128906 7.5 L 17.65625 7.5 C 17.1875 4.503906 16.261719 1.996094 15.066406 0.394531 C 18.734375 1.363281 21.722656 4.027344 23.125 7.5 Z M 16.140625 7.5 L 7.859375 7.5 C 8.148438 5.792969 8.585938 4.285156 9.125 3.0625 C 9.617188 1.953125 10.167969 1.152344 10.695312 0.648438 C 11.222656 0.148438 11.65625 0 12 0 C 12.34375 0 12.777344 0.148438 13.304688 0.648438 C 13.832031 1.152344 14.382812 1.953125 14.875 3.0625 C 15.417969 4.28125 15.851562 5.789062 16.140625 7.5 Z M 6.34375 7.5 L 0.871094 7.5 C 2.277344 4.027344 5.257812 1.363281 8.933594 0.394531 C 7.738281 1.996094 6.8125 4.503906 6.34375 7.5 Z M 0.378906 9 L 6.148438 9 C 6.050781 9.964844 6 10.96875 6 12 C 6 13.03125 6.050781 14.035156 6.148438 15 L 0.378906 15 C 0.132812 14.039062 0 13.035156 0 12 C 0 10.964844 0.132812 9.960938 0.378906 9 Z M 9.125 20.933594 C 8.582031 19.714844 8.148438 18.207031 7.859375 16.5 L 16.140625 16.5 C 15.851562 18.207031 15.414062 19.714844 14.875 20.933594 C 14.382812 22.039062 13.832031 22.84375 13.304688 23.347656 C 12.777344 23.851562 12.34375 24 12 24 C 11.65625 24 11.222656 23.851562 10.695312 23.351562 C 10.167969 22.847656 9.617188 22.046875 9.125 20.9375 Z M 6.34375 16.5 C 6.8125 19.496094 7.738281 22.003906 8.933594 23.605469 C 5.257812 22.636719 2.277344 19.972656 0.871094 16.5 Z M 23.128906 16.5 C 21.722656 19.972656 18.742188 22.636719 15.070312 23.605469 C 16.265625 22.003906 17.1875 19.496094 17.664062 16.5 L 23.132812 16.5 Z M 23.128906 16.5 " />
              </svg>
              mircobellagamba.com
            </a>
            <a
              href="https://www.strava.com/athletes/mirco-bellagamba"
              target="_blank"
              rel="noopener noreferrer"
              className="personal-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z" />
              </svg>
              mirco-bellagamba
            </a>
            <br />
            <a
              href="https://rerenderingslides.mircobellagamba.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>https://rerenderingslides.mircobellagamba.com</small>
            </a>
          </p>
        </div>
        <div className="column-centered">
          <img
            src={me}
            alt="Mirco Bellagamba"
            style={{ borderRadius: '10%' }}
          />
          <p>
            Mirco Bellagamba
            <br />
            Software Engineer @ Madisoft
          </p>
        </div>
      </TwoColumnsLayout>
    </section>
  </>
);

export default Outro;
