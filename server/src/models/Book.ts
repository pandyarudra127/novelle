import mongoose, { Document, Schema } from 'mongoose'

export interface IBook extends Document {
  title: string
  subtitle?: string
  description?: string
  isbn10?: string
  isbn13?: string
  coverImage?: string
  language: string
  format: string
  pageCount?: number
  readingTime?: number
  readingDifficulty?: string
  publisher?: string
  publicationDate?: Date
  firstPublishedDate?: Date
  edition?: string
  country?: string
  averageRating: number
  ratingsCount: number
  reviewsCount: number
  genres: string[]
  tags: string[]
  authors: { name: string; authorId?: mongoose.Types.ObjectId }[]
  series?: { name: string; position?: number; seriesId?: mongoose.Types.ObjectId }
  sourceId: string
  source: 'google_books' | 'open_library' | 'manual'
}

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true, index: true },
    subtitle: String,
    description: String,
    isbn10: { type: String, index: true },
    isbn13: { type: String, index: true },
    coverImage: String,
    language: { type: String, default: 'en' },
    format: { type: String, default: 'physical' },
    pageCount: Number,
    readingTime: Number,
    readingDifficulty: { type: String, enum: ['easy', 'medium', 'hard'] },
    publisher: String,
    publicationDate: Date,
    firstPublishedDate: Date,
    edition: String,
    country: String,
    averageRating: { type: Number, default: 0, min: 0, max: 5 },
    ratingsCount: { type: Number, default: 0 },
    reviewsCount: { type: Number, default: 0 },
    genres: [{ type: String, index: true }],
    tags: [String],
    authors: [{
      name: { type: String, required: true },
      authorId: { type: Schema.Types.ObjectId, ref: 'Author' },
    }],
    series: {
      name: String,
      position: Number,
      seriesId: { type: Schema.Types.ObjectId, ref: 'Series' },
    },
    sourceId: { type: String, unique: true, sparse: true },
    source: { type: String, enum: ['google_books', 'open_library', 'manual'], default: 'google_books' },
  },
  { timestamps: true },
)

bookSchema.index({ title: 'text', description: 'text' })
bookSchema.index({ genres: 1, averageRating: -1 })
bookSchema.index({ averageRating: -1 })
bookSchema.index({ ratingsCount: -1 })

export default mongoose.model<IBook>('Book', bookSchema)
