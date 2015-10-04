import os

from urllib.request import Request, urlopen


def cur_dir():
    return os.path.abspath(os.path.dirname(__file__))


def request(url, method, data=None):
    if data:
        data = data.encode('utf-8')

    req = Request(url=url,
                  method=method,
                  data=data)
    f = urlopen(req)
    return f.read()
