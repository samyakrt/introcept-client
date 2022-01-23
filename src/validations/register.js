import { required, email, minLength, helpers, maxLength } from "@vuelidate/validators";

const VALID_NUMBERS = [
    984,
    985,
    986,
    974,
    975,
    980,
    981,
    982,
    961,
    962,
    988,
    972,
    963
];

const validPhoneNumber = (value) =>  {
    const first_three_numbers = Number(value.substr(0,3))
    return !!VALID_NUMBERS.includes(first_three_numbers)
}
const validations = {
    user: {
        name: { required: helpers.withMessage("name is required", required), },
        email: {
            required: helpers.withMessage("email is required", required),
            email: helpers.withMessage("Must be a valid email", email),
        },
        phone: {
            required: helpers.withMessage("Phone is required", required),
            minLength: minLength(10),
            maxLength: maxLength(10),
            validPhoneNumber: helpers.withMessage("Enter Valid Phone number",validPhoneNumber),
        },
        address: {
            required: helpers.withMessage("address is required", required),
            minLengthValue: minLength(10),
        },
        nationality: {
            required: helpers.withMessage("nationality is required", required),
        },
        education_background: { required: helpers.withMessage("education background is required", required), minLengthValue: minLength(10), },
        gender: {
            required: helpers.withMessage("Select one of the gender", required),
        },
        mode_of_contact: {
            required: helpers.withMessage("Mode of contact is required", required),
        }

    },
};
export default validations