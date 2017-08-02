/**
 * Copyright 2017 Fredrik J
 * Released under the MIT license
 * www.github.com/qacwnfq
 */
const board = [...Array( 50 ).keys()].map( i => Array( 50 ) );

export const injections = [ 'axEventBus' ];
export function create( eventBus ) {
   // TODO read board from settings widget
   eventBus.subscribe( 'beginLifecycleRequest', () => {
      // board.forEach( a => a.forEach( b => console.log( b ) ) );
      // TODO add loop and publish to eventbus
      for( let i=0; i<board.length; i++ ) {
         for( let j=0; j<board[i].length; j++ ) {
            if( i%2==0 && j%2==0 ){
               board[i][j] = 1;
            }
            else{
               board[i][j] = 0;
            }
         }
      }
      eventBus.publish( 'didReplace.board', { board } );
   } );
}


