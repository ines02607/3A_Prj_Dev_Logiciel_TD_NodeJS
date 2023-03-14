const dal = require("dataLayer");
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
        if(number=== undefined || page === undefined){
            number = defaultNumber;
            page = defaultPage;
        }
        if(number > maxNumber){
            number = maxNumber;
        }

        const resCustomers = dal.getCustomers(number,page);

        resCustomers.page = page;
        resCustomers.numberByPage = number;
        resCustomers.totalPages = Math.ceil(resCustomers.total / number);

        return resCustomers;

    },

    addCustomer : function(customer) 
    {

    },

    getCounterByAttribute : function(attr) 
    {

    },

};

module.exports = business;
