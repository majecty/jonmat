import json
import requests

# get key from https://developers.google.com/maps/documentation/geocoding/get-api-key
key = ""

def geocode(address):
    print(address)

    response = requests.get('https://maps.googleapis.com/maps/api/geocode/json', params=dict(address=address, key=key))
    results = response.json()['results']

    if len(results) < 1:
        partial = address.rsplit(' ', 1)[0]
        if partial == address:
            raise ValueError('can not geocode')
        return geocode(partial)

    location = results[0]['geometry']['location']
    return location['lat'], location['lng']


# TODO : normalize address
codes = {}
for line in json.load(open('data/data.json')):
    address = line[3]
    if address not in codes:
        try:
            code = geocode(address)
        except ValueError as e:
            print(e)
            code = None

        codes[address] = code

print(codes)
json.dump(codes, open('data/geocodes.json', 'w+'))
