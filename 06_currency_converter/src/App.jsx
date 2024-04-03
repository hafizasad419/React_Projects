import './App.css'
import bgDark from './assets/bg-dark.jpg'
import CurrencyWrapper from './components/CurrencyWrapper'
import {CurrencyProvider} from './currencyContext'
function App() {

  return (
    <div
      className='bg-cover h-screen w-full py-12'
      style={{ backgroundImage: `url(${bgDark})` }}
    >
      <CurrencyProvider >
        <CurrencyWrapper />
      </CurrencyProvider>
    </div >
  )
}

export default App
