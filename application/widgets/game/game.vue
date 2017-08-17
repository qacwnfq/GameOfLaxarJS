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
      <canvas id="canv" v-if="board.length" width="800" height="800" v-paint="board" v-on:click="onClick" style="border:1px solid #000000;"></canvas>
   </div>
</template>

<script>
/**
 * Copyright 2017 Fredrik J
 * Released under the MIT license
 * www.github.com/qacwnfq
 */
   export default {
      data: () => ( { board: [] } ),
      directives: {
         paint: function( canvasElement, binding ){
            redraw( canvasElement, binding );
         }
      },
      methods: {
         onClick: function( event ) {
            let canvasElement = document.getElementById( 'canv' );
            const width = 800.;
            const height = 800.;
            const size_w = width / 50;
            const size_h = height / 50;
            const x = Math.floor( ( (event.clientX - canvasElement.offsetLeft ) / size_w) % 50 );
            const y = Math.floor(( ( event.clientY - canvasElement.offsetTop ) / size_h ) % 50 );
            // this.eventBus.publish( 'didClick.board',  { x, y } );
            this.board[x][y] = !this.board[x][y];
            redraw( canvasElement, {value: this.board} );
         }
      },
      created() {
         this.eventBus.subscribe( 'didReplace.board', event => {
            this.board = event.board;
         } );
      }
   };

   function redraw( canvasElement, binding ){
      console.log( 'redraw' );
      const width = 800.;
      const height = 800.;
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
   }

</script>
