export default function StudentValidation(values) {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const mobile_no_pattern = /^\d{10}$/;


    if (values.name === "") {
        errors.name = "Name is required!";
    }
    if (values.mobile === "") {
        errors.mobile = "Mobile No. is required!";
    } else if (!mobile_no_pattern.test(values.mobile)) {
        errors.mobile = "Please Enter 10 digit Mobile Number!";
    }

    if (values.email === "") {
        errors.email = "Email is required!";
    }
    else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid Email!";
    }
    if (values.subject === "") {
        errors.subject = "Subject is required!";
    }
    if (values.message === "") {
        errors.message = "Message is required!";
    }


    return errors;
}







