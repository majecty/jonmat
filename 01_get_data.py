from oauth2client.service_account import ServiceAccountCredentials
import json
import gspread


cred = ServiceAccountCredentials.from_json_keyfile_name('key.json', [
    'https://spreadsheets.google.com/feeds'
])
google_sheet = gspread.authorize(cred)

doc = google_sheet.open_by_key('1vjCUzjeNxnNZ-ZaaNLM4fx2n_ephZDjpJSSvJGUVm0U')
sheet = doc.worksheet('jonmat2017_naver')

data = []
for row in sheet.get_all_values()[1:]:
    man_name = row[2].strip()
    party = row[3].strip()
    restaurant_name = row[9].strip()
    address = row[16].strip()
    kind = row[10].strip()
    price = int(row[8].replace(',', ''))

    data.append((man_name, party, restaurant_name, address, kind, price, row[7]))

print(json.dumps(data), ensure_ascii=False)
json.dump(data, open('data/data.json', 'w+'), ensure_ascii=False)
