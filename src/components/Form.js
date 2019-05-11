import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import IconInput from "./IconInput";
import { addUrl } from "../actions/urlsActions";


const Form = () => {
    let [address, setAddress] = useState('');
    let [alias, setAlias] = useState('');

    const error = useSelector(state => state.get("auth").get("error"))
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addUrl({ address, alias }));
        setAddress('');
        setAlias('');
    }

    return (
        <form onSubmit={handleSubmit} className="mt-5">
            <IconInput label="Url" icon="fas fa-globe-europe" type="text" name="address" value={address}
                onChange={(name, value) => setAddress(value)} required={true} autofocus={true} />
            <IconInput label="Alias" icon="fas fa-bolt" type="text" name="alias" value={alias}
                onChange={(name, value) => setAlias(value)} required={false} />
            <div className="form-group text-center">
                <input type="submit" className="btn btn-primary" value="Create" />
            </div>
            <p>{error}</p>
        </form>
    )
};
export default Form;