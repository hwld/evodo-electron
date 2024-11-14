import electronLogo from "./assets/evodo.svg";

function App(): JSX.Element {
  return (
    <div className="grid place-items-center h-[100dvh]">
      <img alt="logo" className="logo size-[50px]" src={electronLogo} />
    </div>
  );
}

export default App;
