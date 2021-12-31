# coding=utf8
import json
from collections import namedtuple
import csv

Receipt = namedtuple(
    'Receipt',
    ['restaurant_name', 'restaurant_address', 'price'])

Restaurant = namedtuple(
    'Restaurant',
    ['restaurant_name', 'restaurant_address', 'latitude', 'longitude'])


class Aggregation(object):
    def __init__(self, name, address):
        self.name = name
        self.address = address
        self.kind = '기타'
        self.location = {
            'lat': 0,
            'lng': 0
        }
        self.totalPrice = 0
        self.times = 0

    def to_json(self):
        return {
            'name': self.name,
            'address': self.address,
            'kind': self.kind,
            'location': self.location,
            'totalPrice': self.totalPrice,
            'times': self.times
        }


aggregations = {}
receipts = []

with open('./2020-data.csv', newline='') as csvfile:
    receipt_reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    first_line = True
    for row in receipt_reader:
        if first_line:
            first_line = False
            continue
        price = 0
        try:
            price = int(row[5])
        except ValueError:
            pass
        receipt = Receipt(restaurant_name=row[6],
                          restaurant_address=row[7],
                          price=price)
        receipts.append(receipt)

for receipt in receipts:
    aggregation = aggregations.setdefault(
        f'{receipt.restaurant_name}-{receipt.restaurant_address}',
        Aggregation(
            receipt.restaurant_name,
            receipt.restaurant_address))
    aggregation.times += 1
    aggregation.totalPrice += receipt.price


def parse_lat_or_long(cell, cell2):
    try:
        return float(cell)
    except ValueError:
        pass
    try:
        return float(cell2)
    except ValueError:
        pass
    return None


restaurants = []
with open('./restaurant.csv', newline='') as csvfile:
    restaurant_reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    first_line = True
    for row in restaurant_reader:
        if first_line:
            first_line = False
            continue
        latitude = parse_lat_or_long(row[2], row[4])
        longitude = parse_lat_or_long(row[3], row[5])

        restaurants.append(
            Restaurant(restaurant_name=row[0],
                       restaurant_address=row[1],
                       latitude=latitude,
                       longitude=longitude,
                       )
        )


for restaurant in restaurants:
    aggregation = aggregations.get(
        f'{restaurant.restaurant_name}-{restaurant.restaurant_address}'
    )
    if aggregation is None:
        continue
    aggregation.location['lat'] = restaurant.latitude
    aggregation.location['lng'] = restaurant.longitude

with open('static/build/data/restaurant.json', 'w') as out_file:
    out_file.write(
        json.dumps(
            [aggregation.to_json() for k, aggregation in aggregations.items()]
        )
    )
