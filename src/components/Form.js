import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import IconInput from "./IconInput";
import { addUrl } from "../actions/urlsActions";


const Form = () => {
    let [address, setAddress] = useState('');
    let [alias, setAlias] = useState('');

    const post_error = useSelector(state => state.get("urls").get("post_error"));
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addUrl({ address, alias })).then((json) => {
            if (json) {
                setAddress('');
                setAlias('');
            }
        });
    }

    return (
        <form onSubmit={handleSubmit} className="mt-5">
            <IconInput label="Url" icon="fas fa-globe-europe fa-fw" type="text" name="address" value={address}
                onChange={(name, value) => setAddress(value)} required={true} autofocus={true} />
            <IconInput label="Alias" icon="fas fa-bolt fa-fw" type="text" name="alias" value={alias}
                onChange={(name, value) => setAlias(value)} required={false} />
            {post_error &&
                <div className="alert alert-warning" role="alert">
                    {post_error}
                </div>
            }
            <div className="form-group text-center">
                <input type="submit" className="btn btn-primary" value="Create" />
            </div>
        </form>
    )
};
export default Form;