import mongoose, { Document, Schema } from 'mongoose'

export interface IAuthor extends Document {
  name: string
  biography?: string
  birthDate?: Date
  deathDate?: Date
  nationality?: string
  website?: string
  socialLinks: { platform: string; url: string }[]
  photo?: string
  genres: string[]
  awards: string[]
  ratingsCount: number
  averageRating: number
  followersCount: number
  sourceId: string
  source: 'google_books' | 'open_library' | 'manual'
}

const authorSchema = new Schema<IAuthor>(
  {
    name: { type: String, required: true, index: true },
    biography: String,
    birthDate: Date,
    deathDate: Date,
    nationality: String,
    website: String,
    socialLinks: [{ platform: String, url: String }],
    photo: String,
    genres: [String],
    awards: [String],
    ratingsCount: { type: Number, default: 0 },
    averageRating: { type: Number, default: 0 },
    followersCount: { type: Number, default: 0 },
    sourceId: { type: String, unique: true, sparse: true },
    source: { type: String, enum: ['google_books', 'open_library', 'manual'], default: 'google_books' },
  },
  { timestamps: true },
)

authorSchema.index({ name: 'text' })

export default mongoose.model<IAuthor>('Author', authorSchema)
