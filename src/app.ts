import morgan from 'morgan';
import express from 'express'; //! OJO que para utilizar el middleware ''json'' debemos importar 'express'. Como aquí XD
const server = express();


/* El segundo parámetro es opcional */
server.listen(3001, () => console.log('Server is running on port 3001'));

server.use(morgan('dev'));

// import routerUsers from './src/routes/userRoutes';
// server.use('/users', routerUsers);





















/* Recibe 3 parámetros "req - res - next" 
   server.<metodo>('/ruta', (req, res, next)=>{})*/
/* PARAMS */
server.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send('You sended ' + id); // Va a mostrar el id sin importar si tienen espacios, letras,etc
})

/* QUERY */
server.get('/', (req, res) => {
    const { dato } = req.query;
    if (dato) {
        res.send('You sended: ' + dato);
    }
    res.send('You do not send nothing');
})

/* BODY */
/* Solo se puede utilizar con los métodos POST y PUT,
   para enviar grandes cantidades de información */

//! Para *recibir* información en formato JSON debemos usar el middleware ''json''
server.use(express.json());

server.post('/', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).send('You must send a name and an email');
    }
    res.json('User created');
})
