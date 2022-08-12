import './App.css';
import ClassCounter from './components/ClassCounter';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import UseeffectHookOne from './components/UseeffectHookOne';
import UseeffectHookTwo from './components/UseeffectHookTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo />*/}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour />  */}
      <UseeffectHookOne />
      {/* <UseeffectHookTwo /> */}
      <MouseContainer />
      <IntervalHookCounter />
      <DataFetching />
    </div>
  );
}

export default App;
