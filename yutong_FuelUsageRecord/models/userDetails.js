import { auth, fireDB } from '../firebase'

const UserDetailsCollectionRef = fireDB.collection('userDetails');
class UserDetails {
    constructor ({
        uid, name, completed
    }) {
        this.name = name;
        this.uid = uid;
        this.completed = completed
    }

    async addUserDetails () {
        await UserDetailsCollectionRef.add({
            name: `${this.name}${Math.random()}` ,
            completed: this.completed
        });
    }

    async updateUserDetails (detailsToUpdate = {}) {
        const ref = UserDetailsCollectionRef.doc(this.uid);
        try {
            await ref.set({
              ...detailsToUpdate
            }, {merge: true});
          } catch (error) {
            console.log("inside error here ==", {error});
          }
    }

    async deleteUserDetails () {
        // To Do as home work
    }
}

export { UserDetails, UserDetailsCollectionRef }