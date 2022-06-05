import { ReactElement, useState } from 'react'

export default function Counter(): ReactElement {
    const [counter, setCounter] = useState<number>(0)

    return (
        <button onClick={() => setCounter((prev) => prev + 1)}>
            Counter is : {counter}
        </button>
    )
}
