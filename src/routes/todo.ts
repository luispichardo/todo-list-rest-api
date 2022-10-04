import { Router } from 'express';
import { toUnicode } from 'punycode';
import { createTodo, getTodos, updateTodo, deletTodo } from '../controllers/todos';
// const express = require('express');
// const Router = express.Router;

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', deletTodo);

export default router;
