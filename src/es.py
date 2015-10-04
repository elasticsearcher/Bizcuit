import os
import json
import yaml

from utils import cur_dir, request


ES_URL = 'http://localhost:9200'
INDEX = 'bizcuit'
INDEX_URL = '{es_url}/{index}'.format(es_url=ES_URL, index=INDEX)
SETTINGS_PATH = os.path.join(cur_dir(), '..', 'etc', 'es.settings.yaml')


class ESClient(object):

    def __init__(self):
        self.settings = self._read_settings()

    def _read_settings(self):
        with open(SETTINGS_PATH) as f:
            return yaml.load(f.read())

    def delete_index(self):
        print(request(url=INDEX_URL, method='DELETE'))

    def put_index(self):
        settings = self.settings['settings']
        print(request(INDEX_URL, 'PUT', json.dumps(settings)))

    def put_mappings(self):
        mappings = self.settings['mappings']

        for name, settings in mappings.items():
            print(request('{}/_mapping/{}'.format(INDEX_URL, name),
                          'PUT', json.dumps(settings)))


    def populate_test_data(self):
        clients = [{
            'first_name': 'John',
            'last_name': 'Doe',
            'email': 'john.doe@bizcuit.com',
            'phone': '555-555-5555',
            'note': 'Return customer.',
            'address': {
                'number': 100,
                'street': 'Anonymous St.',
                'suite': 1,
                'city': 'Metropolis',
                'province': 'XX'
            }
        },
        {
            'first_name': 'Jane',
            'last_name': 'Doe',
            'email': 'jane.doe@bizcuit.com',
            'phone': '555-555-5555',
            'note': 'Return customer.',
            'address': {
                'number': 100,
                'street': 'Anonymous St.',
                'suite': 1,
                'city': 'Metropolis',
                'province': 'XX'
            }
        }]

        for c in clients:
            print(request('{}/client/'.format(INDEX_URL), 'POST', json.dumps(c)))


    def reset(self):
        try:
            self.delete_index()
        except Exception as e:
            print(e)

        self.put_index()
        self.put_mappings()
        self.populate_test_data()

if __name__ == '__main__':
    c = ESClient()
    c.reset()
