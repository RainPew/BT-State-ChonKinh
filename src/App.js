import './App.css';
import GameOanTuXi from './Components/GameTuXi/GameOanTuXi'
import { Provider } from "react-redux";
import {store} from './redux/configStore'
import BTChonkinh from './Components/BTStateChonKinh/BTChonkinh';
import CineTicket from './cinema/CineTicket';
function App() {
  return (
    <div>
      {/* em cmt các component lại anh chị chấm thì bật từng component giúp em với nha ^^ */}
      <Provider store={store}>
        
        {/* <GameOanTuXi /> */}

        {/* <BTChonkinh /> */}

        <CineTicket/>


      </Provider>
    </div>
  );
}

export default App;
