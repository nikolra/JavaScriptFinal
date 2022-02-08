
class User {

    constructor(email_address, id, display_name ) {
        this.id = id;
        this.email_address = email_address;

        if(typeof display_name === undefined)
            this.display_name = email_address;
        else this.display_name = display_name;

    };
}

module.exports = { User }

