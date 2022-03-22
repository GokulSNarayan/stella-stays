// src/mocks/handlers.js
import { rest } from 'msw'
import bookableDates from '../api/bookableDates.json'
import excludeDates from '../api/excludeDates.json'



export const handlers = [
    // Handles a GET /user request
    rest.get('http://localhost:3001/api/v1/bookableDates', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(bookableDates))
    }),
    rest.get('http://localhost:3001/api/v1/excludeDates', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(excludeDates))
    }),
]