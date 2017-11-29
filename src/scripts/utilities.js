//utility function for formatting numbers with commas every 3 digits
function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

$("#IEwarnContinue").click(function () {
    $('#aboutModal').modal({backdrop: 'static'});
    $('#aboutModal').modal('show');
});

if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
    $("#IEwarningModal").modal('show');
} else {
    $('#aboutModal').modal({backdrop: 'static'});
    $('#aboutModal').modal('show');
}
// End IE warning code


