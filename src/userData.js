
const fakeUserData = {
    id: '01',
    email: 'jimmytwotoes@yamama.com',
    firstName: 'Jimmy',
    lastName: 'Two Toes',
}
    
export const fetchUser = (email, password) => new Promise((resolve, reject) => {
    console.log('fetching database')
    setTimeout(() => {
        try {

            resolve(fakeUserData)

        } catch (error) {
            reject(error);
        }
    }, 1000);
});