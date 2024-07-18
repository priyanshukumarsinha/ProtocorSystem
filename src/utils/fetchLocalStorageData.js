export const fetchUserData = () => {
    const user = localStorage.getItem('user');
    if(user) {
        return JSON.parse(user);
    }else{
        localStorage.clear();
    }
    return null;
}