import './App.css';
import ReactMemoExample from "./react.memo/ReactMemoExample";
import UseCallbackUnOptimized from "./useCallback/UnOptimized";
import UseCallbackOptimized from "./useCallback/Optimized";
import UseMemoUnOptimizedProp from "./useMemo/UnOptimizedProp";
import UseMemoOptimizedProp from "./useMemo/OptimizedProp";
import UnOptimizedExpensiveCalculation from "./useMemo/UnOptimizedExpensiveCalculation";
import OptimizedExpensiveCalculation from "./useMemo/OptimizedExpensiveCalculation";
import DebounceUnOptimized from "./debounce/UnOptimized";
import DebounceOptimized from "./debounce/Optimized";
import VirtualizationUnOptimized from "./virtualization/UnOptimized";
import VirtualizationOptimized from "./virtualization/Optimized";

function App() {
  return <ReactMemoExample/>

  // return <UseCallbackUnOptimized/>
  // return <UseCallbackOptimized/>

  // return <UseMemoUnOptimizedProp />
  // return <UseMemoOptimizedProp />

  // return <UnOptimizedExpensiveCalculation/>
  // return <OptimizedExpensiveCalculation/>

  // return <DebounceUnOptimized />
  // return <DebounceOptimized />

  // return <VirtualizationUnOptimized />
  // return <VirtualizationOptimized />
}

export default App;
