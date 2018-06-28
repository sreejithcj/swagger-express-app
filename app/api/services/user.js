import Promise from 'bluebird';
class User {

    //Service method to implement the logic
	createUser(username, password, first_name, last_name, full_name) {
        return new Promise((resolve, reject) => {
            //TODO: Connect to database and create a user account. 
            
            //Returning a dummy userID for this example.
            resolve('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
        })
    }
}

const UserService = new User();
export { UserService };