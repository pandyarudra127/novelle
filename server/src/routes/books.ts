import { Router } from 'express'
import {
  search,
  getDetails,
  lookupByIsbn,
  browseByGenre,
  getNewReleasesHandler,
  getGenres,
  getTrending,
} from '../controllers/books'

const router = Router()

router.get('/search', search)
router.get('/trending', getTrending)
router.get('/new-releases', getNewReleasesHandler)
router.get('/genres', getGenres)
router.get('/genre/:slug', browseByGenre)
router.get('/isbn/:isbn', lookupByIsbn)
router.get('/:id', getDetails)

export default router
