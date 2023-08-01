import json

data = """
{
    "name": "dave",
    "phone": {
        "type":"intl",
        "number": "+1 453 742 5653"
    },
    "email": {
        "hide": "yes"
    }
}
"""

info = json.loads(data)
print('name is:', info['name'])
print(f"Number: {info['phone']['number']}")
