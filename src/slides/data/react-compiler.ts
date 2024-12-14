export const INSTALL_REACT_COMPILER = `npm install -D babel-plugin-react-compiler@beta
eslint-plugin-react-compiler@beta`;

export const UNCOMPILED_CODE = `function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={() => setValue(v => v + 1)}
      >+1</button>
    </div>
  );
}`;

export const COMPILED_CODE = `function Counter() {
const $ = _c(5);
const [value, setValue] = useState(0);
let t0;
if ($[0] !== value) {
  t0 = <h1>{value}</h1>;
  $[0] = value;
  $[1] = t0;
} else {
  t0 = $[1];
}
let t1;
if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
  t1 = <button onClick={() => setValue(_temp)}>+1</button>;
  $[2] = t1;
} else {
  t1 = $[2];
}
let t2;
if ($[3] !== t0) {
  t2 = (
    <div>
      {t0}
      {t1}
    </div>
  );
  $[3] = t0;
  $[4] = t2;
} else {
  t2 = $[4];
}
return t2;
}
function _temp(v) {
return v + 1;
}`;
