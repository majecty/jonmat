from oauth2client.service_account import ServiceAccountCredentials
import json
import gspread


cred = ServiceAccountCredentials.from_json_keyfile_name('key.json', [
    'https://spreadsheets.google.com/feeds'
])
google_sheet = gspread.authorize(cred)

doc = google_sheet.open_by_key('1QCjbjgUOLRZzFpO3HqN-kwqX-2Iu_plJlHL-64PcKTY')
sheet = doc.worksheet('DEV')

data = []
for man_name, party, restaurant_name, address, kind, price_str, memo in sheet.get_all_values()[1:]:
    man_name = man_name.strip()
    party = party.strip()
    restaurant_name = restaurant_name.strip()
    address = address.strip()
    kind = kind.strip()
    price = int(price_str.replace(',', ''))

    data.append((man_name, party, restaurant_name, address, kind, price, memo))

print(json.dumps(data))
json.dump(data, open('data/data.json', 'w+'))
