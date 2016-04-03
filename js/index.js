$(document).ready(function(){
  $('.modal').modal('toggle');
  $('.x').click(function() {
    var user = "X";
    var ai = "O";
    start(user, ai);
  });
  $('.o').click(function() {
    var user = "O";
    var ai = "X";
    start(user, ai);
  });
  function start(user, ai) {
    var count = 1;
    var moves = [null,null,null,null,ai,null,null,null,null];
    $('.m-4').html(ai);
    // user selects a tile
    $('.t-0').click(function() {
      if(empty(moves[0])) {
        moves[0] = user;
        count++;
        $('.m-0').html(user);
        aiMove();
        endCheck();
      }
    });
    $('.t-1').click(function() {
      if(empty(moves[1])) {
        moves[1] = user;
        count++;
        $('.m-1').html(user);
        aiMove();
        endCheck();
      }
    });
    $('.t-2').click(function() {
      if(empty(moves[2])) {
        moves[2] = user;
        count++;
        $('.m-2').html(user);
        aiMove();
        endCheck();
      }
    });
    $('.t-3').click(function() {
      if(empty(moves[3])) {
        moves[3] = user;
        count++;
        $('.m-3').html(user);
        aiMove();
        endCheck();
      }
    });
    $('.t-5').click(function() {
      if(empty(moves[5])) {
        moves[5] = user;
        count++;
        $('.m-5').html(user);
        aiMove();
        endCheck();
      }
    });
    $('.t-6').click(function() {
      if(empty(moves[6])) {
        moves[6] = user;
        count++;
        $('.m-6').html(user);
        aiMove();
        endCheck();
      }
    });
    $('.t-7').click(function() {
      if(empty(moves[7])) {
        moves[7] = user;
        count++;
        $('.m-7').html(user);
        aiMove();
        endCheck();
      }
    });
    $('.t-8').click(function() {
      if(empty(moves[8])) {
        moves[8] = user;
        count++;
        $('.m-8').html(user);
        aiMove();
        endCheck();
      }
    });
    function aiMove() {
      var t0 = moves[0];
      var t1 = moves[1];
      var t2 = moves[2];
      var t3 = moves[3];
      var t4 = ai;
      var t5 = moves[5];
      var t6 = moves[6];
      var t7 = moves[7];
      var t8 = moves[8];

      // if found 2 ai moves than select the 3rd move to win
      if(aiCheck(t0) && aiCheck(t1) && empty(t2)) {
        $('.m-2').html(ai);
        moves[2] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t0) && aiCheck(t2) && empty(t1)) {
        $('.m-1').html(ai);
        moves[1] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t0) && aiCheck(t3) && empty(t6)) {
        $('.m-6').html(ai);
        moves[6] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t0) && aiCheck(t6) && empty(t3)) {
        $('.m-3').html(ai);
        moves[3] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t1) && aiCheck(t2) && empty(t0)) {
        $('.m-0').html(ai);
        moves[0] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t2) && aiCheck(t5) && empty(t8)) {
        $('.m-8').html(ai);
        moves[8] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t2) && aiCheck(t8) && empty(t5)) {
        $('.m-5').html(ai);
        moves[5] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t3) && aiCheck(t6) && empty(t0)) {
        $('.m-0').html(ai);
        moves[0] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t5) && aiCheck(t8) && empty(t2)) {
        $('.m-2').html(ai);
        moves[2] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t6) && aiCheck(t7) && empty(t8)) {
        $('.m-8').html(ai);
        moves[8] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t6) && aiCheck(t8) && empty(t7)) {
        $('.m-7').html(ai);
        moves[7] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t7) && aiCheck(t8) && empty(t6)) {
        $('.m-6').html(ai);
        moves[6] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t0) && empty(t8)) {
        $('.m-8').html(ai);
        moves[8] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t1) && empty(t7)) {
        $('.m-7').html(ai);
        moves[7] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t2) && empty(t6)) {
        $('.m-6').html(ai);
        moves[6] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t3) && empty(t5)) {
        $('.m-5').html(ai);
        moves[5] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t5) && empty(t3)) {
        $('.m-3').html(ai);
        moves[3] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t6) && empty(t2)) {
        $('.m-2').html(ai);
        moves[2] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t7) && empty(t1)) {
        $('.m-1').html(ai);
        moves[1] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t8) && empty(t0)) {
        $('.m-0').html(ai);
        moves[0] = ai;
        count++;
        alert("You lose!");
        resetGame();
      }
      
      // check if user is close to winning
      else if(userCheck(t0) && userCheck(t1) && empty(t2)) {
        $('.m-2').html(ai);
        moves[2] = ai;
        count++;
        checkLoss();
      }
      else if(userCheck(t0) && userCheck(t2) && empty(t1)) {
        $('.m-1').html(ai);
        moves[1] = ai;
        count++;
        checkLoss();
      }
      else if(userCheck(t1) && userCheck(t2) && empty(t0)) {
        $('.m-0').html(ai);
        moves[0] = ai;
        count++;
        checkLoss();
      }
      else if(userCheck(t0) && userCheck(t3) && empty(t6)) {
        $('.m-6').html(ai);
        moves[6] = ai;
        count++;
        checkLoss();
      }
      else if(userCheck(t0) && userCheck(t6) && empty(t3)) {
        $('.m-3').html(ai);
        moves[3] = ai;
        count++;
        checkLoss();
      }
      else if(userCheck(t3) && userCheck(t6) && empty(t0)) {
        $('.m-0').html(ai);
        moves[0] = ai;
        count++;
        checkLoss();
      }
      else if(userCheck(t6) && userCheck(t7) && empty(t8)) {
        $('.m-8').html(ai);
        moves[8] = ai;
        count++;
        checkLoss();
      }
      else if(userCheck(t6) && userCheck(t8) && empty(t7)) {
        $('.m-7').html(ai);
        moves[7] = ai;
        count++;
        checkLoss();
      }
      else if(userCheck(t7) && userCheck(t8) && empty(t6)) {
        $('.m-6').html(ai);
        moves[6] = ai;
        count++;
        checkLoss();
      }
      else if(userCheck(t2) && userCheck(t5) && empty(t8)) {
        $('.m-8').html(ai);
        moves[8] = ai;
        count++;
        checkLoss();
      }
      else if(userCheck(t2) && userCheck(t8) && empty(t5)) {
        $('.m-5').html(ai);
        moves[5] = ai;
        count++;
        checkLoss();
      }
      else if(userCheck(t5) && userCheck(t8) && empty(t2)) {
        $('.m-2').html(ai);
        moves[2] = ai;
        count++;
        checkLoss();
      }

      

      // check if empty spot found
      else if(empty(t0)) {
        moves[0] = ai;
        count++;
        $('.m-0').html(ai);
      }
      else if(empty(t1)) {
        $('.m-1').html(ai);
        moves[1] = ai;
        count++;
      }
      else if(empty(t2)) {
        $('.m-2').html(ai);
        moves[2] = ai;
        count++;
      }
      else if(empty(t3)) {
        $('.m-3').html(ai);
        moves[3] = ai;
        count++;
      }
      else if(empty(t5)) {
        $('.m-5').html(ai);
        moves[5] = ai;
        count++;

      }
      else if(empty(t6)) {
        $('.m-6').html(ai);
        moves[6] = ai;
        count++;
      }
      else if(empty(t7)) {
        $('.m-7').html(ai);
        moves[7] = ai;
        count++;
      }
      else if(empty(t8)) {
        $('.m-8').html(ai);
        moves[8] = ai;
        count++;
      }
    }
    function checkLoss() {
      var t0 = moves[0];
      var t1 = moves[1];
      var t2 = moves[2];
      var t3 = moves[3];
      var t4 = ai;
      var t5 = moves[5];
      var t6 = moves[6];
      var t7 = moves[7];
      var t8 = moves[8];
      // if found 2 ai moves than select the 3rd move to win
      if(aiCheck(t0) && aiCheck(t1) && aiCheck(t2)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t0) && aiCheck(t2) && aiCheck(t1)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t0) && aiCheck(t3) && aiCheck(t6)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t0) && aiCheck(t6) && aiCheck(t3)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t1) && aiCheck(t2) && aiCheck(t0)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t2) && aiCheck(t5) && aiCheck(t8)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t2) && aiCheck(t8) && aiCheck(t5)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t3) && aiCheck(t6) && aiCheck(t0)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t5) && aiCheck(t8) && aiCheck(t2)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t6) && aiCheck(t7) && aiCheck(t8)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t6) && aiCheck(t8) && aiCheck(t7)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t7) && aiCheck(t8) && aiCheck(t6)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t0) && aiCheck(t8)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t1) && aiCheck(t7)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t2) && aiCheck(t6)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t3) && aiCheck(t5)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t5) && aiCheck(t3)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t6) && aiCheck(t2)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t7) && aiCheck(t1)) {
        alert("You lose!");
        resetGame();
      }
      else if(aiCheck(t4) && aiCheck(t8) && aiCheck(t0)) {
        alert("You lose!");
        resetGame();
      }
    }
    function empty(mv) {
      if(mv == null) {
        return true;
      }
      else {
        return false;
      }
    }
    function userCheck(mv) {
      if(mv == user) {
        return true;
      }
      else {
        return false;
      }
    }
    function aiCheck(mv) {
      if(mv == ai) {
        return true;
      }
      else {
        return false;
      }
    }
    function endCheck() {
      if(count >= 8) {
        alert("It's a draw!");
        resetGame();
      }
    }
    function resetGame() {
      moves = [null,null,null,null,ai,null,null,null,null];
      count = 1;
      $('.move').empty();
      $('.m-4').html(ai);
    }
  }
});