window.addEventListener("load", () => {

    const validation = new JustValidate(".main__contact");

    let isValidate = false;

    validation
        .addField("#name", [
            {
                rule : "required",
                errorMessage: "el nombre es obligatorio"
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "el nombre es muy corto"
            },
            {
                rule: "maxLength",
                value: 15,
                errorMessage: "el nombre es muy largo"
            }

        ])
        .addField("#surname", [
            {
                rule : "required",
                errorMessage: "el apellido es obligatorio"
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "el apellido es muy corto"
            },
            {
                rule: "maxLength",
                value: 15,
                errorMessage: "el apellido es muy largo"
            }

        ])
        .addField("#email", [
            {
                rule : "required",
                errorMessage: "el email es obligatorio"
            },
            {
                rule: "email",
                errorMessage: "ingrese un email valido"
            },
            

        ])
        .addField("#gender", [
            {
                rule : "required",
                errorMessage: "seleciona un genero"
            }
        ])
        .addField("#date", [
            {
                rule : "required",
                errorMessage: "la fecha es obligatoria"
            }
        ])
        .addField("#years", [
            {
                rule : "required",
                errorMessage: "la edad es obligatoria"
            },
            {
                rule: "integer",
                errorMessage: "solo son validos numeros"
            }
        ])
        .onSuccess(() => {
            isValidate = true;

            alert("todo es valido")
        })

});