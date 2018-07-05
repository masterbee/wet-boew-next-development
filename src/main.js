
require( [ "modules/wrench" ], function( wrench ) {

    let nodes = document.querySelectorAll( "[data-wb5]" );

    for ( let node of nodes ) {

        let cmd = wrench.parseAttribute( node.dataset.wb5 ),
            module = "modules/" + cmd.action;

        require( [ module ], function( mod ) {
            mod.handle.call( node, cmd.selector, cmd.options );
        } );
    }

} );
