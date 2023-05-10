import React from "react";
import s from "./Login.module.css";
import {Formik, Field, Form} from "formik";

class Login extends React.Component {
    render() {
        return (<>
            <Formik
                initialValues={{
                    windVisualization: 0,
                    scaleTemperature: 0,
                    theme: 0,
                    language: 0,
                }}
                onSubmit={(values) => {
                    console.log(values)
                    values.scaleTemperature = 4;

                }}
            >

                {({values}) => (
                    <Form className={s.table}>
                        <div>
                            <div>
                                <label>
                                    <Field type="radio" name="language" value="en"/>
                                    English
                                </label>
                                <label>
                                    <Field type="radio" name="language" value="ru"/>
                                    Русский
                                </label>
                                <label>
                                    <Field type="radio" name="language" value="zh"/>
                                    中文
                                </label>
                                <label>
                                    <Field type="radio" name="language" value="es"/>
                                    Español
                                </label>
                            </div>
                            <div>
                                <label>
                                    <Field type="checkbox" name="windVisualization"/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    <Field type="checkbox" name="scaleTemperature"/>
                                </label>
                            </div>
                            <button type="submit">submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>)
    }
}

export default Login;