import pandas as pd
import urllib.parse
import json
import copy

df = pd.read_csv('data/data.csv', header=0)

checks = {}

# prefixes = []

map = {}
items = {}

for index, row in df.iterrows():
  check = row["チェック"]

  if check == "OK" and not pd.isnull(row["タイプ"]):

    print(row["タイプ"])

    type = row["タイプ"].lower().replace("person", "chname").replace("organization", "org").replace("riverbodyofwater", "keyword").replace("mountain", "keyword").replace("city", "place")
    url = row["url"]
    data = type + ":" + url.split("/")[-1]
    
    map[row["元表記"]] = [{
      "wikidata": [],
      "kotobank": [],
      "wiki" : [
        url
      ],
      "uri" : data
    }]


with open("data/structured.json", 'w') as outfile:
    json.dump(map, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))
      
'''
# print(prefixes)

# print(checks)

reps = {}

for key in checks:
  values = checks[key]
  if len(values) > 1:
    for value in values:
      prefix = value.split(":")[0]
      ln = key.split("/")[-1]
      data2 = prefix + ":" + ln
      if value != data2:
        reps[value] = data2

with open("data/reps.json", 'w') as outfile:
    json.dump(reps, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))
'''