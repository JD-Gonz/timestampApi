# Timestamp Microservice

A Node.js-based API that checks whether a string contains a Unix timestamp or a natural language date. If the string contains a date, the API returns both the Unix timestamp and the natural language form of that date. If the string does not contain a date or Unix timestamp, it returns null for those properties.

## How to Use

To use this API, you can either deploy it on a server or run it locally on your machine.

### Running Locally

To run the API locally, you will need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your machine.

1. Clone this repository:

```
git clone https://github.com/JD-Gonz/timestampApi.git
```

2. Install the dependencies:

```
npm install
```

3. Start the server:

```
npm start
```

4. Access the API at `http://localhost:8080/:date_string`, where `:date_string` is the date string you want to check. For example:

```
http://localhost:8080/1450137600
```

### Usage Examples

* `http://localhost:8080/1450137600`
* `http://localhost:8080/2015-12-15`
* `http://localhost:8080/December%2015,%202015`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.