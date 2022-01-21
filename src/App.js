import './App.css';
import './Components/BTState/Style.css'
import BTChonkinh from './Components/BTState/BTChonkinh';
import GameOanTuXi from './Components/GameTuXi/GameOanTuXi'
import { Provider } from "react-redux";
import {store} from './redux/configStore'
function App() {
  return (
    <div>
      {/* <BTChonkinh/> */}
      <Provider store={store}>
        <GameOanTuXi />
      </Provider>
    </div>
  );
}

export default App;
