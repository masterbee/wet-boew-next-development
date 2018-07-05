/**
 *
 */
define( function() {

    function property( name, value ) {

        let index = [ "wb5namespace" ],
            datastore = this;

        index = index.concat(  name.split( "." )  );

        for ( let prop of index ) {

            if ( !datastore.hasOwnProperty( prop ) ) {
                datastore[ prop ] = ( prop === index[ -1 ] && value ) ?  value : {};
            }

            datastore = datastore[ prop ];
        }

        return datastore;
    }

    return {
        prop: property
    };

} );
