import './App.css';
import Tabs from './components/Tabs';

const tab = [
  {
    titile: 'Tab1',
    content: <h4>This is Tab1</h4>
  },
  {
    titile: 'Tab2',
    content: <h4>This is Tab2</h4>
  },
  {
    titile: 'Tab3',
    content: <h4>This is Tab3</h4>
  }
]
function App() {
  return (
    <div className="App">
      <Tabs tab={tab} />
    </div>
  );
}

export default App;
