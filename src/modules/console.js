// console function
define( function() {


    /**
     * execute - main function for logic set, the context of this function is always the node
     * @param selector
     * @param options
     */
    function execute() {
        this.addEventListener("timerpoke",function( event ){
            console.log( "[event recieved] " + event.type  );
            console.log( this );
        });
    }

    return {
        handle: execute
    };
} );