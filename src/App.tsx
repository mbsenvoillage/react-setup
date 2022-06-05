import { ReactElement } from 'react'
import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'
import Counter from './Counter'

const App = (): ReactElement => {
    return (
        <>
            <h1>React Setup Course</h1>
            <h2>Environment type : {process.env.NODE_ENV} </h2>
            <h2>Name : {process.env.name} </h2>
            <img src={IMAGE} alt={'React PNG Logo'} width={100} height={90} />
            <img src={LOGO} alt={'React SVG Logo'} width={100} />
            <Counter />
        </>
    )
}

export default App
