# Stdlib
import json
import urllib.request as url_request

# Flask
from flask import Flask, request, send_from_directory


# ui is the root directory for static files
app = Flask(__name__, static_url_path='', static_folder='../ui')


@app.route('/')
def root():
  return app.send_static_file('index.html')

@app.route('/clients', methods=['POST'])
def clients_POST():
  data = request.data
  encoding = 'utf-8'
  data_dict = json.loads(data.decode(encoding))
  data_dict.pop('id')

  # Process address fields
  address_fields = {}
  for k, v in data_dict.items():
    if k.startswith('address'):
        address_fields[k] = k[k.find('_') + 1:]

  data_dict['address'] = {}
  address_dict = data_dict['address']

  for k, v in address_fields.items():
      address_dict[v] = data_dict[k]
      del data_dict[k]

  url_request.urlopen('http://localhost:9200/bizcuit/client',
    data=json.dumps(data_dict).encode(encoding))
  return data

if __name__ == '__main__':
  app.run(debug=True)
