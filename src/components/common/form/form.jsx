import React, { useState, useEffect, useCallback } from "react";
import { validator } from "../../../utils/validator";



const db = [
    {}
]

const FormComponent = ({
    children,
    validatorConfig,
    onSubmit,
    defaultData
}) => {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState(defaultData || {});
    // const [data, setData] = useState({
    //     nameOfLection: "",
    //     descriptionOfLection: "",
    //     englishTranslate: false,
    //     ukrainianTranslate: false,
    //     sections: {
    //       // words: [],
    //       // rules: []
    //     },
    //   });
    
    //
    const handleChange = useCallback((target) => {

        console.log("target", typeof target)
        console.log("targetname", target.name)
        console.log("targetvalue", target.value)
        // target = {
        //     name: "words",
        //     value: obj
        // }
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value // new words
        }));
    }, []);
    
    const validate = useCallback(
        (data) => {
            const errors = validator(data, validatorConfig);
            setErrors(errors);
            return Object.keys(errors).length === 0;
        },
        [validatorConfig, setErrors]
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log("data", data)
        onSubmit(data);
    };
    useEffect(() => {
        if (Object.keys(data).length > 0) {
            validate(data);
        }
    }, [data]);
    const handleKeyDown = useCallback((event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            const form = event.target.form;
            const indexForm = Array.prototype.indexOf.call(form, event.target);
            form.elements[indexForm + 1].focus();
        }
    }, []);
    const isValid = Object.keys(errors).length === 0;

    const clonedElements = React.Children.map(children, (child) => {
        const childType = typeof child.type;
        let config = {};

        if (childType === "object") {
            if (!child.props.name) {
                throw new Error(
                    "Name property required for field components",
                    child
                );
            }
            config = {
                ...child.props,
                onChange: handleChange,
                value: data[child.props.name] || "",
                error: errors[child.props.name],
                onKeyDown: handleKeyDown
            };
        }
        if (childType === "string") {
            if (child.type === "button") {
                if (
                    child.props.type === "submit" ||
                    child.props.type === undefined
                ) {
                    config = { ...child.props, disabled: !isValid };
                }
            }
        }

        return React.cloneElement(child, config);
    });
    return <form onSubmit={handleSubmit}>{clonedElements}</form>;
};

export default FormComponent;