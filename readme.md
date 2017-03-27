# NSS Pet Food Exercise

### Project Description 
This assignment reads data provided in `JSON` format and displays it in `html`. 
Additionally, other data provided in spreadsheet form is coded in `JSON` format. 
#### Pet Food Display
![Pet Food Output Screen](https://raw.githubusercontent.com/SMITHsharon/petFood/screen/Screen%20Grab%20for%20Pet%20Food.png)

### Project Specs
1. Given: a file in `JSON` format of dog food products. Each brand of dog food is represented by an object in an array (shown below), `dogs.json`. 
2. Built an `html` product page that displays all brands of dog food, the different types, with the price and size for each container volume. 
3. Then, given a spreadsheet of similar data for cat food products, coded the cat food data into `JSON` format, `cats.json`. 
4. Added the cat food data to the `html` display page.  

  ```
  dogs.json
  {
    "dog_brands": [
      {
        "name": "Chuck wagon",
        "types": [
          {
            "type": "all_natural",
            "volumes": [
              {
                "name": "32oz",
                "price": 9.99
              },
              {
                "name": "64oz",
                "price": 17.99
              }
            ]
          },
          {
            "type": "standard",
            "volumes": [
              {
                "name": "58oz",
                "price": 12.99
              },
              {
                "name": "72oz",
                "price": 21.99
              }
            ]
          }
        ]
      },
      {
        "name": "Purina",
        "types": [
          {
            "type": "puppy",
            "volumes": [
              {
                "name": "16oz",
                "price": 8.99
              },
              {
                "name": "24oz",
                "price": 14.99
              }
            ]
          },
          {
            "type": "standard",
            "volumes": [
              {
                "name": "58oz",
                "price": 19.99
              },
              {
                "name": "72oz",
                "price": 24.99
              }
            ]
          }
        ]
      }
    ]
  }
  ```
  ```
  cats spreadsheet data
  Brand	Breeds	Types / Prices
  Purrina	Siamese, Bengal, Showshoe, Munchkin	Kitten, 20oz, 19.99 : Kitten, 32oz, 26.99 : Kitten, 64oz, 34.99 : Elite, 20oz, 24.99 : Elite, 40oz, 47.99
  Meow Meal	Manx, Egyptian Mau, Himalayan, Rag Doll	Kitten, 24oz, 19.99 : Kitten, 48oz, 34.99 : Adult, 28oz, 22.99 : Adult, 56oz, 40.99
  ```

### Technologies Used
- `html`
- `css`
- JavaScript`
- `XHR` and `JSON` request


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone git@github.com:SMITHsharon/petFood.git
cd food
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`

### Contributor
[Sharon Smith](https://github.com/SMITHsharon)
