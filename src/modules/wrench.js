// Timer function
define( function() {

    /**
     * parse - parses attribute text in to a action object
     * @param text - string of attribute text
     * @returns {{action: T | undefined}}
     */
    function parse( text ) {
        let components = text.split( "@" ),
            command = { action: components.shift() };

        if ( components.length ) {
            command.selector = components.shift();
        }

        if ( components.length ) {
            command.options = JSON.parse( components.shift() );
        }
        return command;
    }

    /**
     * event - creates a customevent from the dom
     * @param name - name of the customevent
     * @param detail - details (optional) of the payload
     * @param bubbles - event bubbles ( defaults : true )
     * @param cancelable - can cancel this event ( defaults : true )
     * @returns {CustomEvent<any>}
     */
    function event( name, data, bubbles, cancelable ) {
        bubbles = ( bubbles ) ? bubbles : true;
        cancelable = ( cancelable ) ? cancelable : true;
        return new CustomEvent(
            name, { detail: data }, bubbles, cancelable
        );
    }


    return {
        parseAttribute: parse,
        createEvent: event
    };
} );
