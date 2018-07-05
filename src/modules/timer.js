// Timer function
define( [ "modules/property", "modules/wrench" ], function( Property, Wrench ) {

    /**
     * toggle - this toggles the state of the event
     * @param node
     * @returns {boolean}
     * @private
     */
    function toggle( state ) {
        if ( state ) {
            return Property.call.prop( this, state );
        }
        return  Property.call.prop( this );
    }

    /**
     * execute - main function for logic set, the context of this function is always the node
     * @param selector
     * @param options
     */
    function execute( selector, options ) {

        let eventname = ( typeof options !== "undefined" && options.hasOwnProperty( "eventname" ) ) ? options.eventname : "timerpoke",
            nodes = ( selector ) ? this.querySelectorAll( selector ) : [ this ];

        for ( let node of nodes ) {

            let tid = setInterval( function() {
                node.dispatchEvent( Wrench.createEvent( eventname, { dataset : "my event" } ) );
            }, 2000 );

            Property.prop.call( node, "event.tid", tid );
        }

    }

    return {
        handle: execute
    };
} );
