# DayPay Frontend

## Website [payday.netlify.app](https://payday.netlify.app)

# ¿Que es DayPay?

Una forma segura de enviar dinero, comprar y vender

DayPay opera un sistema de pagos en línea que soporta transferencias de dinero entre usuarios y sirve como una alternativa electrónica a los métodos de pago tradicionales como cheques y giros postales. 

![](DayPay.gif)


# Funcionalidades

- Landing page, página principal de DayPay

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






# Authors and acknowledgment

This project was created by lisaub, Marylizr and Marcsc99






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

[![Lisa's GitHub stats](https://github-readme-stats.vercel.app/api?username=lisaub)](https://github.com/anuraghazra/github-readme-stats)

</p>
<p align="center">Love the project? Please consider <a href="https://paypal.me/lmu1">donating with this link</a> to help it improve!
<p>
    
</p>
<p align="center">Are you considering to support the project by donating to me? Please DON'T!! Instead, please consider donating to support <a href="https://www.withukraine.org/">Ukraine</a>
<p>
    

    
