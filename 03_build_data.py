# coding=utf8
import json
from collections import namedtuple


geocodes = json.load(open('data/geocodes.json'))
data = json.load(open('data/data.json'))

CongressMan = namedtuple('CongressMan', ['name', 'party'])
Restaurant = namedtuple('Restaurant', ['name', 'kind', 'address', 'location'])
Eat = namedtuple('Eat', ['congress_man', 'restaurant', 'price'])

men = []
restaurants = []
eats = []

for man_name, party, restaurant_name, address, kind, price, memo in data:
    location = geocodes.get(address, None)
    if location:
        location = {
            'lat': location[0],
            'lng': location[1],
        }
    man = CongressMan(man_name, party)
    restaurant = Restaurant(restaurant_name, kind, address, location)

    if man not in men:
        men.append(man)

    if restaurant not in restaurants:
        restaurants.append(restaurant)

    eat = Eat(men.index(man), restaurants.index(restaurant), price)
    print(man)
    print(restaurant)
    eats.append(eat)

print(eats)

# by restaurant
search_by_restaurant = {}
for eat in eats:
    restaurant = eat.restaurant
    if restaurant not in search_by_restaurant:
        search_by_restaurant[restaurant] = []

    search_by_restaurant[restaurant].append(eat)


restaurant_loves_by_congressman = [
    {
        'name': restaurants[x].name,
        'kind': restaurants[x].kind,
        'address': restaurants[x].address,
        'location': restaurants[x].location,
        'totalPrice': sum(x.price for x in search_by_restaurant[x]),
        'times': len(search_by_restaurant[x]),
    }
    for x in reversed(sorted(search_by_restaurant, key=lambda k: len(search_by_restaurant[k])))
    if restaurants[x].location and 'lat' in restaurants[x].location
]
print(restaurant_loves_by_congressman)

json.dump({'data': restaurant_loves_by_congressman}, open('api/restaurant.json', 'w+'))
