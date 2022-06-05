import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'

const App = () => {
    return (
        <>
            <h1>React Setup Course</h1>
            <h2>Env var : {process.env.NODE_ENV} </h2>
            <h2>Name : {process.env.name} </h2>
            <img src={IMAGE} alt={'React PNG Logo'} width={100} height={90} />
            <img src={LOGO} alt={'React SVG Logo'} width={100} />
        </>
    )
}

export default App
