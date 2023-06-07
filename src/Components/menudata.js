import barbecue from '../images/barbecue-chicken.png'
import cheeselunch from '../images/cheeslunch.png'
import friesbacon from '../images/fries-bacon.png'
import ham from '../images/ham-pepperoni.png'
import italian from '../images/italian-cusine.png'
import kebab from '../images/kebab-in-plate.png'
import shawarma from '../images/shawarma.png'
import sushi from '../images/sushi.png'
import veggie from '../images/veggie.png'

export const menudata = () => {
  return (
    [
        {
            'id': 1,
            'name': 'barbecue',
            'image': barbecue,
            'meal': 'lunch',
            'price': 15.99
        },
        {
            'id': 2,
            'name': 'Cheese',
            'image': cheeselunch,
            'meal': 'lunch',
            'price': 16.99
        },
        {
            'id': 3,
            'name': 'fries-bacon',
            'image': friesbacon,
            'meal': 'breakfast',
            'price': 14.99
        },
        {
            'id': 4,
            'name': 'ham-pepperoni',
            'image': ham,
            'meal': 'dinner',
            'price': 16.99
        },
        {
            'id': 5,
            'name': 'italian cuisine',
            'meal': 'breakfast',
            'image': italian,
            'price': 17.99
        },
        {
            'id': 6,
            'name': 'kebab-in-plate',
            'meal': 'lunch',
            'image': kebab,
            'price': 10.99
        },
        {
            'id': 7,
            'name': 'shawarma',
            'meal': 'dinner',
            'image': shawarma,
            'price': 13.99
        },
        {
            'id': 8,
            'name': 'veggie burger',
            'meal': 'breakfast',
            'image': veggie,
            'price': 12.99
        },
        {
            'id': 9,
            'name': 'sushi',
            'meal': 'dinner',
            'image': sushi,
            'price': 13.99
        }
    ]
  )
}


