import type { Review } from '../../types'

const REVIEWS: Omit<Review, 'id' | 'date'>[] = [
  { author: 'Sophie M.',    avatar: 'SM', rating: 5, comment: 'Excellent magasin, personnel très accueillant et produits de qualité. Je recommande vivement !' },
  { author: 'Thomas L.',    avatar: 'TL', rating: 4, comment: 'Bonne adresse dans le quartier, les prix sont raisonnables et le choix correct.' },
  { author: 'Jean-Paul R.', avatar: 'JP', rating: 2, comment: 'Déçu par la qualité des produits, trop souvent en rupture de stock.' },
  { author: 'Camille B.',   avatar: 'CB', rating: 4, comment: 'Très bon magasin, je suis cliente fidèle depuis deux ans maintenant.' },
  { author: 'Marie D.',     avatar: 'MD', rating: 3, comment: 'Correct sans être exceptionnel, les prix ont un peu augmenté dernièrement.' },
]

const DATES = ['Il y a 2 jours', 'Il y a 1 semaine', 'Il y a 2 semaines', 'Il y a 1 mois', 'Il y a 3 mois', 'Il y a 6 mois']

export const generateMockReviews = (count: number): Review[] => {
  const reviews: Review[] = []
  for (let i = 0; i < count; i++) {
    const baseReview = REVIEWS[i % REVIEWS.length]
    reviews.push({
      id: `review-${i + 1}`,
      date: DATES[i % DATES.length],
      ...baseReview
    })
  }
  return reviews
}