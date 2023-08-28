import Messages from "./components/Messages";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    //TO DO: check responsive styling for height
    <div className="sm:mx-10 max-sm:mx-5 my-10">
      <header className="App-header"></header>
      kōrero app
      <Messages />
      <ChatWindow />
    </div>
  );
}

export default App;
