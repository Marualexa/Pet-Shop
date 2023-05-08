import { useAsync } from "./useAsync";
import { Joi } from "vue-joi-validation";


const { result, makeRequest } = useAsync();

export function useJoins() {
    const resultFrom = Joi.validate(dataForm, datos, async (err, value) => {
        if (err) {
            console.log("error", err);
            let starForm = err.message;
            let starIndex = starForm.indexOf("[") + 1;
            let endIndex = starForm.indexOf("]");
            let element = starForm.substring(starIndex, endIndex);

            let cadena2 = element;

            const string = cadena2.slice(1);
            const string2 = string.indexOf('"');
            const final = string.slice(0, string2);
            let messageIndix = string.slice(string2 + 1);

            errorObject.errorName = final;
            errorObject.errorMessage = final + " " + messageIndix;
        } else {
            loadingProduct.value = true;
            await makeRequest("product", {}, "POST", {
                imagen: dataForm.imagen,
                price: dataForm.price,
                title: dataForm.name,
                description: dataForm.description,
            });
            dataForm.imagen = "";
            dataForm.price = "";
            dataForm.name = "";
            dataForm.description = "";
            loadingProduct.value = false;
            router.push({ name: "DetalleProduct", params: { id: result.value.id } });
        }
    });

    return {
        resultFrom
    }
}