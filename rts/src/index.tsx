// import GuestList from './state/GuestList'
// import UserSearch from './state/UserSearch'
// import EventComponent from './events/EventComponent'
import UserSearch from './refs/UserSearch'

import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el!)

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  )
}

root.render(<App />)
