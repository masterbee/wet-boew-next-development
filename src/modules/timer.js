// Timer function
define( function() {

    function execute( selector, options ) {
        this.innerHTML += "(OK Timer!)";
    }

    return {
        handle: execute
    };
} );
