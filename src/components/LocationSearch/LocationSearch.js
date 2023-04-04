import React from "react";
import {useFormik} from "formik";

function LocationSearch(props) {

    function isLocationView() {
        props.toggleIsLocationView(true);
    }

    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // TODO: don't work 'submit'
    const formik = useFormik({
        initialValues: {
            //location: props.getSettings.location,
            location: props.currentLocation.name,
        },
        onSubmit: values => {
            isLocationView();
            props.setSettings(values);
            //console.log(JSON.stringify(values, null, 2));
            //onBlur={()=>{isLocationView()}}
        },
    });
    return <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Location search</label>
        <input autoFocus={true}
               id="location"
               name="location"
               type="text"
               onChange={formik.handleChange}
               value={formik.values.location}
        />

        <button type="submit">Search</button>
        <button type="reset" onClick={() => {
            isLocationView()
        }}>cancel
        </button>
    </form>
}

export default LocationSearch;