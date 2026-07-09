import mongoose, { Document, Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
  name: string
  username: string
  email: string
  password: string
  profilePicture?: string
  bio?: string
  favoriteGenres: string[]
  favoriteAuthors: string[]
  readingGoal: number
  readingPreferences: {
    preferredFormats: string[]
    preferredLanguages: string[]
  }
  followers: mongoose.Types.ObjectId[]
  following: mongoose.Types.ObjectId[]
  reviewsCount: number
  booksRead: number
  emailVerified: boolean
  verificationToken?: string
  verificationTokenExpires?: Date
  resetPasswordToken?: string
  resetPasswordExpires?: Date
  accountStatus: 'active' | 'suspended' | 'deleted'
  role: 'user' | 'admin'
  lastLogin?: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      lowercase: true,
      minlength: [3, 'Username must be at least 3 characters'],
      maxlength: [30, 'Username cannot exceed 30 characters'],
      match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      maxlength: [500, 'Bio cannot exceed 500 characters'],
      default: '',
    },
    favoriteGenres: [{ type: String }],
    favoriteAuthors: [{ type: String }],
    readingGoal: {
      type: Number,
      default: 12,
    },
    readingPreferences: {
      preferredFormats: [{ type: String }],
      preferredLanguages: [{ type: String, default: 'en' }],
    },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    reviewsCount: { type: Number, default: 0 },
    booksRead: { type: Number, default: 0 },
    emailVerified: { type: Boolean, default: false },
    verificationToken: String,
    verificationTokenExpires: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    accountStatus: {
      type: String,
      enum: ['active', 'suspended', 'deleted'],
      default: 'active',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    lastLogin: Date,
  },
  { timestamps: true },
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  const salt = await bcrypt.genSalt(12)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

userSchema.methods.comparePassword = async function (
  candidatePassword: string,
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password)
}

userSchema.index({ username: 1 })
userSchema.index({ email: 1 })

export default mongoose.model<IUser>('User', userSchema)
