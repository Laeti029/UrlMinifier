app.service("dateUtilsService", [
    function() {

        this.getDateAndTimeWithPattern = function () {            
            moment.locale();         // fr
            result = moment().format('LLL');  // 27 février 2017 15:18

            return result; 
        };
    }
]);