//SUPONGO QUE EN URL HAY UNA VARIABLE COMO http://192.168.1.43/api/
// Respuesta 200 OK
// Respuesta 400 descrption : ... ---> si algo va mal

fetch(url+'usuario', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({email: email, password: password}),
    headers:{
        'Content-Type': 'application/json'
    }
}).then(() => onClickBack()).catch(() =>
    console.log('Ha habido algún error creando la actividad')
);

export default function Login({ email, password }: any): Promise<void> {
    return new Promise((resolver) => {
        return fetch ()
    });
}