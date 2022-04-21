var a=0;
var a1,a2,a3,a4,a5,a6,a7,a8,a9;
var wan;
var player1=0;
var player2=0;
var index=[];
var ind = 0;
var bntset=1;

// defolt fontions
arrindex=() => {
    index.length = 0;
    index = []
    ind = 0;
}
pay1 =() =>{
    player1++;
    $('#pay1').text("Player-1: "+player1);
    wan = "Palyer 1 is wins. ";
}
pay2 =() =>{
    player2++;
    $('#pay2').text("player-2: "+player2);
    wan = "Player 2 is wins. ";
}

result = (win) => {
    bntset = 0;
    index.length=9;
    arrindex();
    if (win == 0) {
        pay1();
        }
    if (win == 'x') {
        pay2();
    }
    $('#result').text(wan+" click Reset button to restart new game");
    $('#result').addClass('result');
}

myfun = () => {
    if(a==0){
        a = 'x';
    }else{
        a = 0;
    }
}
reset=() => {
    $('#result').text(" ")
    $('.buttons').attr('value',' ');
    a=0;
    bntset=1;
    a1=2;a2=2;a3=2;a4=2;a5=2;a6=2;a7=2;a8=2;a9=2;
    arrindex();
    turn();
    $('#result').removeClass('result');
    $('.buttons').removeClass('green');
}

$('#restart').click(()=>{
    reset();
});

btnclick=(btn) => {
    if ($(btn).val() == '0' || $(btn).val() == "x") {
        alert('invalid click');
    } else {
        $(btn).attr('value', a);
        myfun();
        index[ind]=ind;
        ind++;
    }
    if(index.length==9){
        $('#result').text("Match draw click Reset button to restart new game");
        $('#result').addClass('result');
        arrindex();
    }
}
turn =() => {
    if (a == 0) {
        $('#turns').text("Player 0 is turn");
    } else {
        $('#turns').text("Player x is turn");
    }
}

// Buttons click funstions
$('#1').click(() => { if (bntset==1){btnclick("#1"); a1 = $('#1').val(); }else{alert("Press reset buttom for new game.")}});
$('#2').click(() => { if (bntset==1){btnclick("#2"); a2 = $('#2').val(); }else{alert("Press reset buttom for new game.")}});
$('#3').click(() => { if (bntset==1){btnclick("#3"); a3 = $('#3').val(); }else{alert("Press reset buttom for new game.")}});
$('#4').click(() => { if (bntset==1){btnclick("#4"); a4 = $('#4').val(); }else{alert("Press reset buttom for new game.")}});
$('#5').click(() => { if (bntset==1){btnclick("#5"); a5 = $('#5').val(); }else{alert("Press reset buttom for new game.")}});
$('#6').click(() => { if (bntset==1){btnclick("#6"); a6 = $('#6').val(); }else{alert("Press reset buttom for new game.")}});
$('#7').click(() => { if (bntset==1){btnclick("#7"); a7 = $('#7').val(); }else{alert("Press reset buttom for new game.")}});
$('#8').click(() => { if (bntset==1){btnclick("#8"); a8 = $('#8').val(); }else{alert("Press reset buttom for new game.")}});
$('#9').click(() => { if (bntset==1){btnclick("#9"); a9 = $('#9').val(); }else{alert("Press reset buttom for new game.")}});


// posible outcome to win
$('.buttons').on('click',()=>{
    turn();
    if(bntset==1){
        if (a1==0&&a2==0&&a3==0 || a1=='x'&&a2=='x'&&a3=='x'){$("#1,#2,#3").addClass('green');}
        if (a4==0&&a5==0&&a6==0 || a4=='x'&&a5=='x'&&a6=='x'){$("#4,#5,#6").addClass('green');}
        if (a7==0&&a8==0&&a9==0 || a7=='x'&&a8=='x'&&a9=='x'){$("#7,#8,#9").addClass('green');}
        if (a1==0&&a5==0&&a9==0 || a1=='x'&&a5=='x'&&a9=='x'){$("#1,#5,#9").addClass('green');}
        if (a7==0&&a5==0&&a3==0 || a7=='x'&&a5=='x'&&a3=='x'){$("#7,#5,#3").addClass('green');}
        if (a1==0&&a4==0&&a7==0 || a1=='x'&&a4=='x'&&a7=='x'){$("#1,#4,#7").addClass('green');}
        if (a2==0&&a5==0&&a8==0 || a2=='x'&&a5=='x'&&a8=='x'){$("#2,#5,#8").addClass('green');}
        if (a3==0&&a6==0&&a9==0 || a3=='x'&&a6=='x'&&a9=='x'){$("#3,#6,#9").addClass('green');}

        if (a1==0&&a2==0&&a3==0||a4==0&&a5==0&&a6==0||a7==0&&a8==0&&a9==0){result(0);}
        if (a1=='x'&&a2=='x'&&a3=='x'||a4=='x'&&a5=='x'&&a6=='x'||a7=='x'&&a8=='x'&&a9=='x'){result('x');}
        if (a1==0&&a4==0&&a7==0||a2==0&&a5==0&&a8==0||a3==0&&a6==0&&a9==0){result(0);}
        if (a1=='x'&&a4=='x'&&a7=='x'||a2=='x'&&a5=='x'&&a8=='x'||a3=='x'&&a6=='x'&&a9=='x'){result('x');}
        if (a1==0&&a5==0&&a9==0||a3==0&&a5==0&&a7==0){result(0);}
        if (a1=='x'&&a5=='x'&&a9=='x'||a3=='x'&&a5=='x'&&a7=='x'){result('x');}
    }
});
