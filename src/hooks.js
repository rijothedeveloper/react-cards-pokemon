import { useState } from "react";

const useHooks = (initial = true) => {
    const [state, setState] = useState(initial)

    const flipState = () => {
        setState(s => !s)
    }
    return [state, flipState];
}

export default useHooks;