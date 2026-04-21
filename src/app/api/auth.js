export async function authLogin({username, password}) {
    const BASE_URL = 'http://192.168.254.102:8000/api';
    let options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',

    },
    // body: JSON.stringify({
    //     username: username,
    //     password: password,
    // }),
};
 
const response = await fetch(BASE_URL + '/login', {
    ...options,
    body: JSON.stringify({
        username: username,
        password: password,
    }),
});

 let data;
    try {
        data = await response.json();
    } catch (e) {
        data = null;
    }

    if (response.ok) {
        console.log('Login success response:', data);
        return data;
    } else {
        const message =
            (data && (data.errors?.password || data.errors?.detail || data.detail)) ||
            'Login failed';
        throw new Error(message);
    }



// const data = await response.json();

// if (response.status === 200) {
//     console.log(data);
//     return data;
// }else{
//     throw new Error(data.errors || 'Login failed');
// }

}

// export async function authRegister({username, password}) {
//     const BASE_URL = 'http://192.168.254.102:8000/api';
//     let options = {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',

//     },
// };
 
// const response = await fetch(BASE_URL + '/login', 
//     {
//     ...options,
//     body: JSON.stringify({
//         username: username,
//         password: password,
//     }),
// });
// const data = await response.json();



// if (response.status === 200) {
//     console.log(data);
//     return data;
// }else{
//     throw new Error(data.errors.password || 'Login failed');
// }

// }

//username and pass in PARAMS
// const responseParams = await fetch(BASE_URL + `/login?username=${username}&password=${password}`, options);
// const data = await responseParams.json();



// if (responseParams.status === 200) {
//     console.log(data);
//     return data;
// }else{
//     throw new Error(data.errors.password || 'Login failed');
// }
