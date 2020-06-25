const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetro:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, páginação)
 * Route Params: Parâmetros utilizados para indetificar recursos (/:id) 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
 */



app.listen(3333);