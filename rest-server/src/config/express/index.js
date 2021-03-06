import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../../routes';

const app = express();

app.use(cors({
  allowedHeaders: 'Content-Type, authorization',
  methods: ['GET, POST, PUT, DELETE', 'OPTIONS'],
}));
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

module.exports = app;
