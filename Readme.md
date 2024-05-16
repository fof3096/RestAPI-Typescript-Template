### Plantilla para API Rest utilizando TypeScript
---
#### <ins>Dudas de Api Rest</ins>
- **¿Que es REST?**
Creo que seria la teoría de lo que Rest significa.

- **¿Que es una API Rest?**
Seria la teoría aplicada en la práctica.

- **¿Que datos maneja esta plantilla?** Esta API maneja datos sobre repuestos para automóviles de Mercado Libre.

- Las rutas reciben 3 parámetros *"req - res - next"*
    ```JavaScript
    server.get('/', (req, res, next) => {}) 
    ```
#### Recepción de datos

- ##### Recibir datos por PARÁMETROS
    > El siguiente ejemplo va a mostrar el id sin importar si tienen espacios, letras,etc...
    ```JavaScript
    server.get('/:id', (req, res) => {
        const { id } = req.params;
        res.send('You sended ' + id); 
    })
    ```

- ##### Recibir datos por QUERY
    ```JavaScript
    server.get('/', (req, res) => {
        const { dato } = req.query;
        if (dato) {
            res.send('You sended: ' + dato);
        }
        res.send('You do not send nothing');
    })
    ```

- ##### Recibir datos por BODY
    > 🚧 Para *recibir* información en *formato JSON* debemos usar el middleware **"json"**

    > 📤 **Solo** se puede usar en peticiones *PUT/POST*, para enviar grandes cantidades de información.
    ```JavaScript
    server.post('/', (req, res) => {
        const { name, email } = req.body;
        if (!name || !email) {
            res.status(400).send('You must send a name and an email');
        }
        res.json('User created');
    })
    ```