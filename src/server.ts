// iniciamos la aplicación

import app from './index';

const port = 4000;

app.listen(port, () => {
    console.log(`Se ha inicializado correctamente en el puerto ${port}`)
});
