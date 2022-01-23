class Errors {

    constructor() {
        this.errors= {}
    }

    get(field) {
        return this.errors[field] ? this.errors[field][0] :  ''
    }

    ar_get(field) {
        return this.errors[field] ? this.errors[field] :  ''
    }

    record(obj) {
        this.errors = obj
    }

    clearErrors() {
        this.errors = {}
    }

    clear(field){
        if(field){
            delete this.errors[field]
            return ;
        }
        this.errors = {}
    }
}

export default Errors;