export const signUpStorage = (users , newSignupData) => {
    localStorage.setItem(users , JSON.stringify(newSignupData));
};

export const getSignUpStorage = (users) => {
    const data = localStorage.getItem(users);
    return data ? JSON.parse(data):null;
};


