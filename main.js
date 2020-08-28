function t1() {
    var inp = document.getElementById('inputti').value.toLowerCase();
    var pist = 0;
    for(var i = 0; i < inp.length; i++)
    {
        switch (inp[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'n':
            case 's':
            case 't':
                pist++;
                break;
            case 'o':
            case 'ä':
            case 'k':
            case 'l':
                pist+=2;
                break;
            case 'u':
            case 'm':
                pist+=3;
                break;
            case 'y':
            case 'h':
            case 'j':
            case 'p':
            case 'r':
            case 'v':
                pist+=4;
                break;
            case 'ö':
            case 'd':
                pist+=7;
                break;
            case 'b':
            case 'f':
            case 'g':
                pist+=8;
                break;
            case 'c':
                pist+=10;
                break;
            default:
                pist+=12;
        }
        document.getElementById('tulos').innerHTML = pist
    }
}
function t2() {
  var n1 = [];
  for(var i = 0; i < 7; i++) {
    temp = Math.floor(Math.random()*40);
    n1[i] = temp;
  }
  n1.sort(function(a, b){return a-b});
  
  document.getElementById('tulos2').innerHTML = '<p>'+n1+'</p>';
}

function t3() {
  var n1 = [];
  n1 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  var tb = '<table border="1">';
  for(var j = 0; j < n1.length; j++) {
    tb += '<tr>';
    for(var k = 0; k < n1[j].length; k++) {
        tb += '<td>' + n1[j][k] + '</td>';
    }
    tb += '</tr>';
  }
  tb += '</table>';
  document.getElementById('tulos3').innerHTML = tb;
}
function t4()
{
  var pakka = [''];
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  var knm = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;
  for(m = 0; m < maat.length; m++)
  {
    for(n = 0; n < knm.length; n++)
    {
      if(m == maat.length-1 && n == knm.length-1)
      {
        pakka[laskuri] = maat[m] + knm[n];
      }
      else {
        pakka[laskuri] = maat[m]+knm[n];
        laskuri++;
      }

    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById('tulos4').innerHTML = kortit;
}