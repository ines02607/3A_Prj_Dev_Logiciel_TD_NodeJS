const dal = require("dateLayer");
const _ = require("underscore");
const defaultNumber = 10;
const defaultPage = 1;
const maxNumber = 100;

const business = {

    getAllCustomers : function () {
        return dal.getAllCustomers();
    },

    getCustomers : function(number, page)
    {

    },

    addCustomer : function(customer) 
    {

    },

    getCounterByAttribute : function(attr) 
    {

    },

};

module.exports = business;
