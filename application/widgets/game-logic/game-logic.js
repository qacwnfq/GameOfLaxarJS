/**
 * Copyright 2017 Fredrik J
 * Released under the MIT license
 * www.github.com/qacwnfq
 */
const board = [ ...fixedArray().keys() ].map( fixedArray );

export const injections = [ 'axEventBus' ];
export function create( eventBus ) {
   eventBus.subscribe( 'beginLifecycleRequest', () => {
      for( let i = 0; i < board.length; i++ ) {
         for( let j = 0; j < board[ i ].length; j++ ) {
            if( i % 2 === 0 && j % 2 === 0 ){
               board[ i ][ j ] = 1;
            }
            else {
               board[ i ][ j ] = 0;
            }
         }
      }
      eventBus.publish( 'didReplace.board', { board } );
   } );
   eventBus.subscribe( 'didClick.board', event => {
      reverseCell( eventBus, event.x, event.y );
   } );
}


function fixedArray(){
   return Array( 50 );
}

function reverseCell( eventBus, x, y ){
   board[ x ][ y ] = !board[ x ][ y ];
   eventBus.publish( 'didReplace.board', { board } );
}
