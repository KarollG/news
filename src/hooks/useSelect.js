import React, {useState} from 'react';

const useSelect = (stateInitial, options) => {

    //state del custom hook
    const [state, updateState] = useState(stateInitial);

    const SelectNews = () => (
        <select
            className="browser-default"
            value={state}
            onChange= {e => updateState(e.target.value)}
        >
            {options.map(optionn => (
                <option key={optionn.value}
                        value={optionn.value}>{optionn.label}</option>
            ))}
        </select>
    );
    return [state, SelectNews];
}

export default useSelect;