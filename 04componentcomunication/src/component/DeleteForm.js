import React, { useState } from 'react'

function DeleteForm(props) {

    const [name, setName] = useState("");

    return (
        <div>

            <form style={{ "width": "50%" }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Name </label>
                    <input type="name" class="form-control" id="name" name='name' value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <button type="button" class="btn btn-primary" onClick={
                    () => { props.deleteName(name); }
                }>Submit</button>
                <div>{name}</div>
            </form>

        </div>
    )
}

export default DeleteForm;
