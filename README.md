## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Example Request
```
{
    "numbers": [1, 2, 3, 4, 5]
}
```

## Example Response
```
[
    {
        "number": 1,
        "prime": false
    },
    {
        "number": 2,
        "prime": true
    },
    {
        "number": 3,
        "prime": true
    },
    {
        "number": 4,
        "prime": false
    },
    {
        "number": 5,
        "prime": true
    }
]
```