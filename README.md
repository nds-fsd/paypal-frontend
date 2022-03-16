# DayPay Frontend

## Website [payday.netlify.app](https://payday.netlify.app)

# ¿Que es DayPay?

Una forma segura de enviar dinero, comprar y vender

DayPay opera un sistema de pagos en línea que soporta transferencias de dinero entre usuarios y sirve como una alternativa electrónica a los métodos de pago tradicionales como cheques y giros postales. 

![](DayPay.gif)


# Funcionalidades

- Landing page, página principal de DayPay

Desde aquí se puede navegar a diverentes páginas, incluyendo la página del signup y del login

- Sign up, para crear un usuario

- Login el usuario

- Dashboard, mostrando el saldo del usuario

- Wallet, para ver las tarnsacciones del usuario

- Send, para que el usuario puedo mandar dinero

- Request, para que el usuario puede solicitar dinero

- Account Settings, donde el usuario puede cambiar sus detalles

# Instrucciones de instalación

- Crea una carpeta para este projecto y ir a la carpeta

- Clona los siguentes repositiorios en esta carpeta:

    https://github.com/nds-fsd/paypal-frontend.git
    
    https://github.com/nds-fsd/paypal-backend.git

- Ingrese a la carpeta de paypal-frontend y ejecute npm install

- Ingrese a la carpeta de paypal-backend
-   Navega al fichero "index.js" y en línea 13 cambia el port a 3090
-   Navega al fichero "src/mongo/index.js" y cambia línea 4 a tu docker, aquí por ejemplo "mongoose.connect('mongodb://localhost:27020/mongo-test');"
-   Agrega el fichero ".env" en la carpeta principal del backend con el siguiente contenido:

  DB_HOST = mongodb://localhost:27017/mongo-test
  
  JWT_SECRET = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcnltYXJ5QGdtYWlsLmNvbSIsImlhdCI6MTY0Mzk3ODU4MH0.XHbyy1_FsSfTcBAD_vBmfdNJ19s6BGZelw4Rvj19sW4
- Ejecuta "npm install" y "npm install -s mongoose"
- Ejecuta Docker , e.g. "docker run -d -p 27020:27017 mongo --name mongo-test" y "sudo docker-compose up -d"

# Tecnología

## Frontend

Esta aplicación se ha creado con npx "create-react-app"

React: Se usan componentes de React, p. ej. useState, useEffect, useRef, createContext y useContext
Tambien se usa useForm de react-hook-form y p. ej. Route, Navigate y Link de react-router-dom 

recharts: se usa este libreria para crear el gráfico en el Dashboard para mostar los ingresos y egresos totales
```
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
```
DotLoader: se importa "react-spinners/DotLoader" como animación para mostrar que la página requerida se carga

react-fontawesome: Para editar el imagen de usuario, se utiliza el package @fortawesome/react-fontawesome para mostar un ojo

custom Fetch: se crea un fetch personalizado para resumir los methods, paths y options 

# Muestras de código

## Frontend

```js
const SignUp = () => {
   const navigate = useNavigate();

   useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) navigate("/main/dashboard");
    }, [navigate]);
    
   
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
      customFetch("POST", "users", {body: data})
      .then(userSession => {
        setUserSession(userSession);
        navigate("/main/dashboard");
      }).catch(error => {
          'REQUEST_FAILED'
        console.error(error);
      });
    };
```   
```html
<form onSubmit={handleSubmit(onSubmit)}>
    <input type='text' placeholder="Name" {...register("name", {required: true })}/>
    {errors.name && <span className={styles.error}>Name field is required</span>}
    
    <select type='currency' {...register("currency", { required: true })} >
    <option value="$">USD ($)</option>
    <option value="€">EUR (€)</option>
    </select>
    {errors.currency && <span>currency field is required</span>}
    
    <div className={styles.send_button}>
    <input type="submit" value="Sign Up" />
</form>
```
## Backend
```js
exports.update = async (req,res) => {
  const id = req.params.id;
  const data = req.body;
  console.log("updating");
  if (data.password && data.password.length>0) {
    console.log("if: " + data.password);
    const genSalt = 10;
    const passwordHashed = bcrypt.hashSync(data.password, genSalt);
    data.password=passwordHashed;
  } else {
    console.log("else1: " + data.password);
    data.password = await User.find({_id:id}).password;
    console.log("else2: " + data.password);
  }
```
```js
var currencyConverter = new CC()

exports.create = async (req, res) => {
  const data = req.body;
  var newPayment = new Payment(data);

  const fromUser = await User.findById(data.from);
  const toUser = await User.findById(data.to);
  
  newPayment.save(
    function (err) {
      if (err) {
        console.log(err);
        return handleError(err);
      }
      else {
if (data.currency=='€') {
        
            if (fromUser.currency=='$' && toUser.currency=='$') 
            {
            currencyConverter.from("EUR").to("USD").amount(data.amount).convert()
              .then((response) => {
                console.log(response/100) ;
                fromUser.wallet -=response/100;
                fromUser.save();
              })
            
            currencyConverter.from("EUR").to("USD").amount(data.amount).convert()
              .then((response) => {
                console.log(response/100) ;
                toUser.wallet +=response/100;
                toUser.save();
              })
            }
            }
        }
    }
  );
  res.status(201).json({Message: "Your new payment was created Succesfully", newPayment});
}
```

![](changecurrency.gif)

# :sparkling_heart: Authors and acknowledgment :sparkling_heart:

This project was created by lisaub, Marylizr and Marcsc99

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=lisaub)](https://github.com/anuraghazra/github-readme-stats)
   
<p align="center">Are you considering to support the project by donating to <a href="https://paypal.me/lmu1">me</a>? Please DON'T!! Instead, please consider donating to support <a href="https://www.withukraine.org/">Ukraine</a><p>
  

<p align="center">Made with :heart: and JavaScript.<p>
