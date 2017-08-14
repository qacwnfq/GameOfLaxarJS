<template>
   <!-- <div>
      <table class="table">
      <tbody v-if="rows.length">
      <tr v-for="row in rows">
      <td v-for="cell in row"><div class="block" v-bind:class="{ alive: cell }">.</div></td>
      </tr>
      </tbody>
      </table>
      </div>
   -->
   <div>
      <canvas v-on:click="onClick" v-if="board.length" width="400" height="400" v-paint="board" style="border:1px solid #000000;"></canvas>
   </div>
</template>

<script>
/**
 * Copyright 2017 Fredrik J
 * Released under the MIT license
 * www.github.com/qacwnfq
 */
   import settings from './settings';
   export default {
      data: () => ( { board: [] } ),
      directives: {
         paint: function( canvasElement, binding ){
            const width = settings.width;
            const height = settings.heigth;
            const ctx = canvasElement.getContext( "2d" );
            ctx.clearRect(0, 0, width, height );
            ctx.fillStyle = "#90EE90";
            const board = binding.value;
            if( board.length > 1 ) {
               const size_w = width / board.length;
               const size_h = height / board[0].length;
               for( let i=0; i<board.length; i++ ) {
                  for( let j=0; j<board[i].length; j++ ) {
                     if( board[i][j] === 1 ){
                        ctx.fillRect( i*size_w, j*size_h, size_w, size_h )
                     }
                  }
               }
            }
            console.log( board );
         }
      },
      methods: {
         onClick: function( event ) {
            event.clientX;
            event.clientY;
            x = index;
            y = index;
            this.eventBus.publish( 'didUpdate.board',  { x, y } );
         }
         },
         created() {
            this.eventBus.subscribe( 'didReplace.board', event => {
               this.board = event.board;
               console.log( this.board.length );
            } );
         }
      };
</script>
