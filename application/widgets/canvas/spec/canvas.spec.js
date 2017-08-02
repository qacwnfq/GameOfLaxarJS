/**
 * Copyright 2017 Fredrik J
 * Released under the MIT license
 * www.github.com/qacwnfq
 */
import * as axMocks from 'laxar-mocks';

describe( 'The canvas', () => {

   beforeEach( axMocks.setupForWidget() );

   beforeEach( () => {
      axMocks.widget.configure( {} );
   } );

   beforeEach( axMocks.widget.load );

   afterEach( axMocks.tearDown );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   it( 'still needs some tests', () => {
      // ... first test here
   } );


} );
