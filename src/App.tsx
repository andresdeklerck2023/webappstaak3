import './App.css';

const backgroundColor = process.env.REACT_APP_BACKGROUND_COLOR;

const appStyle = {
    backgroundColor,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const App = () => (
    <div style={appStyle}>
        <h1>Hello, this is the production webpage!</h1>
    </div>
);

export default App;