import Messages from "./components/message/message";
import Background from "./components/background/background";
import Changer from "./components/changer/changer";

const variable_q = 'testing push prop'

function App() {
    // eslint-disable-next-line no-undef
    return (
        <div className="App">
            <Background item={<Messages textProps={variable_q}></Messages>}/>
            <hr/>
            <Background item={
                <Messages textProps={Changer(variable_q)}/>
            }/>
        </div>
    );
}

export default App;
