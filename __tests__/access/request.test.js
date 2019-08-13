// Tests for the request function

const request = require('../../src/access/request').request;
let AWS = require('aws-sdk');
let AWSMock = require('aws-sdk-mock');

describe('Utility function \'request\'', () => {
    // integration tests for utility function request

    test.todo('Throws error if service is not registered in the database');

    test.todo('Throws error if user is not registered in the database');
    
    test.todo('Given valid input, should add the request to the database');

    test.todo('Given invalid input, should not add the request to the database');
});