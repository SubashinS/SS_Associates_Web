import 'dotenv/config'
import crypto from 'node:crypto'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import cors from 'cors'
import express from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const feedbackFile = path.join(__dirname, '..', 'data', 'feedback.json')

const app = express()
const port = Number(process.env.PORT ?? 5000)
const clientOrigin = process.env.CLIENT_ORIGIN ?? 'http://localhost:5173'

app.use(
  cors({
    origin: [clientOrigin, 'http://127.0.0.1:5173'],
  }),
)
app.use(express.json({ limit: '1mb' }))

app.get('/health', (_request, response) => {
  response.json({
    ok: true,
    service: 'ss-associates-server',
  })
})

app.get('/feedback', async (_request, response) => {
  const feedback = await readFeedback()
  response.json({ success: true, feedback })
})

app.post('/feedback', async (request, response) => {
  try {
    const item = validateFeedback(request.body)
    const feedback = await readFeedback()
    const nextFeedback = [item, ...feedback].slice(0, 50)

    await writeFile(feedbackFile, JSON.stringify(nextFeedback, null, 2))

    response.status(201).json({ success: true, feedback: item })
  } catch (error) {
    response.status(400).json({ success: false, message: error.message })
  }
})

app.use((request, response) => {
  response.status(404).json({
    success: false,
    message: `Route not found: ${request.method} ${request.path}`,
  })
})

app.listen(port, () => {
  console.log(`SS Associates server running on http://localhost:${port}`)
})

function validateFeedback(body) {
  const name = String(body.name ?? '').trim()
  const feedback = String(body.feedback ?? '').trim()
  const rating = Number(body.rating)

  if (!name) throw new Error('Name is required.')
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new Error('Rating must be between 1 and 5.')
  }
  if (feedback.length < 8) {
    throw new Error('Feedback must be at least 8 characters.')
  }

  return {
    id: crypto.randomUUID(),
    name,
    rating,
    feedback,
    timestamp: new Date().toISOString(),
  }
}

async function readFeedback() {
  try {
    const raw = await readFile(feedbackFile, 'utf8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}
