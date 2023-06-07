import review from '../images/review-1.jpg'
import second from '../images/review-2.jpg'
import seventh from '../images/review-7.jpg'

export const reviewdata = () => {
  return (
    [
        {
            'id': 1,
            'name': 'Sarah Doe',
            'image': review,
            'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit repellendus quis aliquam tenetur maxime incidunt repudiandae possimus maiores quia distinctio minus atque labore magnam officiis quasi voluptatibus laboriosam culpa'
        },
        {
            'id': 2,
            'name': 'Angelina Daniels',
            'image': second,
            'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit repellendus quis aliquam tenetur maxime incidunt repudiandae possimus maiores quia distinctio minus atque labore magnam officiis quasi voluptatibus laboriosam culpa'
        },
        {
            'id': 7,
            'name': 'Manasseh Christian',
            'image': seventh,
            'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit repellendus quis aliquam tenetur maxime incidunt repudiandae possimus maiores quia distinctio minus atque labore magnam officiis quasi voluptatibus laboriosam culpa'
        },
        
    ]
  )
}

