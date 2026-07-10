import { Request, Response, NextFunction } from 'express'
import { searchBooks, getBookById, getBookByIsbn, getBooksByGenre, getNewReleases } from '../services/bookApi'
import { genres, getGenreBySlug } from '../data/genres'

function str(val: unknown): string {
  return typeof val === 'string' ? val : ''
}

function num(val: unknown, def = 1): number {
  const n = parseInt(str(val), 10)
  return isNaN(n) ? def : n
}

export async function search(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const q = str(req.query.q)
    const genre = str(req.query.genre)
    const author = str(req.query.author)
    const language = str(req.query.language)
    const publisher = str(req.query.publisher)
    const sort = str(req.query.sort) as 'relevance' | 'newest' | undefined
    const page = num(req.query.page, 1)
    const limit = Math.min(num(req.query.limit, 20), 40)

    let query = q
    if (genre) query += ` subject:${genre}`
    if (author) query += ` author:${author}`
    if (publisher) query += ` publisher:${publisher}`

    const result = await searchBooks(query || 'fiction', {
      maxResults: limit,
      startIndex: (page - 1) * 20,
      langRestrict: language || undefined,
      orderBy: sort === 'newest' ? 'newest' : 'relevance',
    })

    res.json({
      status: 'success',
      ...result,
      page,
    })
  } catch (error) {
    next(error)
  }
}

export async function getDetails(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const book = await getBookById(str(req.params.id))

    if (!book) {
      res.status(404).json({ status: 'error', message: 'Book not found' })
      return
    }

    res.json({ status: 'success', book })
  } catch (error) {
    next(error)
  }
}

export async function lookupByIsbn(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const book = await getBookByIsbn(str(req.params.isbn))

    if (!book) {
      res.status(404).json({ status: 'error', message: 'Book not found' })
      return
    }

    res.json({ status: 'success', book })
  } catch (error) {
    next(error)
  }
}

export async function browseByGenre(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const slug = str(req.params.slug)
    const genreData = getGenreBySlug(slug)

    if (!genreData) {
      res.status(404).json({ status: 'error', message: 'Genre not found' })
      return
    }

    const page = num(req.query.page, 1)
    const limit = Math.min(num(req.query.limit, 20), 40)
    const result = await getBooksByGenre(genreData.name, limit, (page - 1) * limit)

    res.json({
      status: 'success',
      genre: genreData,
      ...result,
      page,
    })
  } catch (error) {
    next(error)
  }
}

export async function getNewReleasesHandler(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const books = await getNewReleases()
    res.json({ status: 'success', books })
  } catch (error) {
    next(error)
  }
}

export async function getGenres(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    res.json({ status: 'success', genres })
  } catch (error) {
    next(error)
  }
}

export async function getTrending(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const result = await searchBooks('fiction', {
      maxResults: 20,
      orderBy: 'relevance',
    })
    res.json({ status: 'success', ...result })
  } catch (error) {
    next(error)
  }
}
