# Currency converter v1.0.0

Live version available at https://mharyst.github.io/currency-converter/

## List of used technologies
- Webpack
- ES6 (with Babel)
- Bootstrap 4
- NodeJS

## Requirements:
* NodeJS 6.x

---

## How to run app:

* Install dependencies:

```
npm i
```

* Start project:

  * OS Windows:

  ```
  npm start
  ```

  * On macOS or Linux use this command:

  ```
  npm run app-start
  ```

* Open in browser:

```
localhost:8080
```

---

## How to parse data from bank.gov.ua:

* Run parse script and wait until it ends:

```
cd server
mkdir json
node node.js
```

* Filter results:

```
node filter.js
```

* Concat results to one file `currency.json`:

```
touch currency.json
node combineAll.js
```
