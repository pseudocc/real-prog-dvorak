import vanix from "vanix";
import css from "@styles/page.module.css";

export const lessons = [
  {
    index: "1",
    name: "Introducing < and >: Left third finger, left second finger",
    href: "/prog/lesson1/",
    lines: [
      "<<<< >>>> <<<< >>>> <<<< >>>> <<<< >>>>",
      "<<<< >>>> <<<< >>>> <<<< >>>> <<<< >>>>",
      "< > < > < > < > > < > < > < > <",
      ">> << >> << >>< >>< >>< >>< <<> <<> <<> <<>",
      "<> <> <> <> >< >< >< ><",
      "<>< <>< <>< <>< ><> ><> ><> ><>",
    ],
  },
  {
    index: "2-1",
    name: "Comprehensive, including < and > (1)",
    href: "/prog/lesson2-1/",
    lines: [
      "<<<< <<<< <<<< <<<<",
      ">>>> >>>> >>>> >>>>",
      "<< >> << >> << >> << >>",
      "< > < > < > < > < > < > < > < >",
    ],
  },
  {
    index: "2-2",
    name: "Comprehensive, including < and > (2)",
    href: "/prog/lesson2-2/",
    lines: [
      "a > b; a > b; a > b; a > b;",
      "x << z; x << z; x << z; x << z;",
      ">..< >..< >..< >..<",
      "<:::> <:::> <:::> <:::>",
      "'<>' '<>' '<>' '<>'",
      "s >>> bits; s >>> bits; s >>> bits; s >>> bits",
      'echo "hello" > out.txt; echo "hello" > out.txt;',
      "x <<< z; x <<< z; x <<< z; x <<< z;",
      "sort < file.txt > sorted.txt; sort < file.txt > sorted.txt; ",
    ],
  },
  {
    index: "3",
    name: "Introducing - and _: Right fourth finger",
    href: "/prog/lesson3/",
    lines: [
      "---- ____ ---- ____ ---- ____ ---- ____",
      "---- ____ ---- ____ ---- ____ ---- ____",
      "-_- -_- -_- -_-",
      "_-_ _-_ _-_ _-_",
      "__ -- __ -- __ -- __ --",
      "--__-- --__-- --__-- --__--",
    ],
  },
  {
    index: "4-1",
    name: "Comprehensive, including - and _ (1)",
    href: "/prog/lesson4-1/",
    lines: ["<<<< >>>> ---- ____", "<<<< >>>> ---- ____"],
  },
  {
    index: "4-2",
    name: "Comprehensive, including - and _ (2)",
    href: "/prog/lesson4-2/",
    lines: [
      "a->w a->w a->w a->w",
      "s <-> t s <-> t s <-> t s <-> t",
      "var _k : w - v; var _k : w - v; var _k : w - v; var _k : w - v;",
      "_.map _.map _.map _.map _.reduce _.reduce _.reduce _.reduce",
      "<_> <_> <_> <_> >_< >_< >_< >_<",
      "var a, b -> c; var a, b -> c; var a, b -> c; var a, b -> c;",
    ],
  },
  {
    index: "5",
    name: "Introducing / and ?: Right fourth finger",
    href: "/prog/lesson5/",
    lines: [
      "//// //// //// ////",
      "???? ???? ???? ????",
      "/? /? /? /? ?/ ?/ ?/ ?/",
      "/?/ /?/ /?/ /?/ ?/? ?/? ?/? ?/?",
      "??/ ??/ ??/ ??/ //? //? //? //?",
    ],
  },
  {
    index: "6-1",
    name: "Comprehensive, including / and ? (1)",
    href: "/prog/lesson6-1/",
    lines: ["<<<< >>>> ---- ____ //// ????", "<<<< >>>> ---- ____ //// ????"],
  },
  {
    index: "6-2",
    name: "Comprehensive, including / and ? (2)",
    href: "/prog/lesson6-2/",
    lines: [
      'a/x < b ? "up" : "down"; a/x < b ? "up" : "down"; a/x < b ? "up" : "down"; a/x < b ? "up" : "down";',
      "s/new/old s/new/old s/new/old s/new/old",
      "/foo?/gi /foo?/gi /foo?/gi /foo?/gi",
      '_note->prop ? "start" : "stop"; _note->prop ? "start" : "stop"; _note->prop ? "start" : "stop";',
      'a->x << z ?: "unknown"; a->x << z ?: "unknown"; a->x << z ?: "unknown"; a->x << z ?: "unknown";',
      "<<-?:?--> <<-?:?--> <<-?:?--> <<-?:?-->",
    ],
  },
  {
    index: "7",
    name: "Introducing @ and ^: Right fourth finger",
    href: "/prog/lesson7/",
    lines: [
      "@@@@ ^^^^ @@@@ ^^^^ @@@@ ^^^^",
      "@@@@ ^^^^ @@@@ ^^^^ @@@@ ^^^^",
      "@^ @^ @^ @^ ^@ ^@ ^@ ^@",
      "@^@ @^@ @^@ @^@ ^@^ ^@^ ^@^ ^@^",
      "@@ ^^ @@ ^^ @@ ^^ @@ ^^",
      "@@^^ @@^^ @@^^ @@^^ ^^@@ ^^@@ ^^@@ ^^@@",
    ],
  },
  {
    index: "8-1",
    name: "Comprehensive, including @ and ^ (1)",
    href: "/prog/lesson8-1/",
    lines: [
      "<<<< >>>> ---- ____ //// ???? @@@@ ^^^^",
      "<<<< >>>> ---- ____ //// ???? @@@@ ^^^^",
    ],
  },
  {
    index: "8-2",
    name: "Comprehensive, including @ and ^ (2)",
    href: "/prog/lesson8-2/",
    lines: [
      "me@mail.com me@mail.com me@mail.com me@mail.com",
      "@interface Person : NSObject @interface Person : NSObject",
      "x^n; x^n; x^n; x^n;",
      "@res - a/b^n - @_c < w; @res - a/b^n - @_c < w; @res - a/b^n - @_c < w; @res - a/b^n - @_c < w;",
      "@x <-- @a^@b ? @n : @m; @x <-- @a^@b ? @n : @m; @x <-- @a^@b ? @n : @m; @x <-- @a^@b ? @n : @m;",
    ],
  },
  {
    index: "9",
    name: "Introducing  and |: Right fourth finger",
    href: "/prog/lesson9/",
    lines: [
      "\\\\\\\\ |||| \\\\\\\\ |||| \\\\\\\\ |||| \\\\\\\\ ||||",
      "\\\\\\\\ |||| \\\\\\\\ |||| \\\\\\\\ |||| \\\\\\\\ ||||",
      "\\\\|| \\\\|| \\\\|| \\\\||",
      "\\|\\ \\|\\ \\|\\ \\|\\",
      "||\\ ||\\ ||\\ ||\\ ",
    ],
  },
  {
    index: "10-1",
    name: "Comprehensive, including  and | (1)",
    href: "/prog/lesson10-1/",
    lines: [
      "<<<< >>>> ---- ____ //// ???? @@@@ ^^^^ \\\\\\\\ ||||",
      "<<<< >>>> ---- ____ //// ???? @@@@ ^^^^ \\\\\\\\ ||||",
    ],
  },
  {
    index: "10-2",
    name: "Comprehensive, including  and | (2)",
    href: "/prog/lesson10-2/",
    lines: [
      'ls|grep -i -E "fo?o@bar\\.com" ls|grep -i -E "fo?o@bar\\.com" ls|grep -i -E "fo?o@bar\\.com"',
      "@t->val - @a|@b ^ @x|@y; @t->val - @a|@b ^ @x|@y; @t->val - @a|@b ^ @x|@y; @t->val - @a|@b ^ @x|@y;",
      '@"\\"val\\" - myVal" @"\\"val\\" - myVal" @"\\"val\\" - myVal" @"\\"val\\" - myVal"',
      "cat /etc/hosts|grep -i domain cat /etc/hosts|grep -i domain cat /etc/hosts|grep -i domain",
      'a/b < x ? "one":"two">file.txt a/b < x ? "one":"two">file.txt a/b < x ? "one":"two">file.txt',
    ],
  },
  {
    index: "11",
    name: "Introducing (, * and =: Number row, index fingers",
    href: "/prog/lesson11/",
    lines: [
      "(((( **** ==== (((( **** ==== (((( **** ====",
      "(((( **** ==== (((( **** ==== (((( **** ====",
      "( ( ( ( * * * * = = = =",
      "( ( ( ( * * * * = = = =",
      "(* (* (* (* *( *( *( *(",
      "(= (= (= (= =( =( =( =(",
      "=* =* =* =* *= *= *= *=",
      "=(* =(* =(* =(* *(= *(= *(= *(=",
    ],
  },
  {
    index: "12",
    name: "Introducing } and ): Number row, left second finger, right index finger",
    href: "/prog/lesson12/",
    lines: [
      "}}}} )))) }}}} )))) }}}} )))) }}}} ))))",
      "}}}} )))) }}}} )))) }}}} )))) }}}} ))))",
      "} } } } ) ) ) ) } } } } ) ) ) )",
      "}) }) }) }) )} )} )} )}",
      "})} })} })} })}",
      ")}) )}) )}) )})",
    ],
  },
  {
    index: "13",
    name: "Comprehensive: (, *, =, }, )",
    href: "/prog/lesson13/",
    lines: [
      "(((( **** ==== }}}} ))))",
      "(((( **** ==== }}}} ))))",
      "(((( **** ==== }}}} ))))",
      "() () () () () () () ()",
      "=*= =*= =*= =*= *=* *=* *=* *=*",
      "}) }) }) }) )} )} )} )}",
      "(=) (=) (=) (=) (*) (*) (*) (*)",
      "}* }* }* }* *} *} *} *}",
      "}(=*) }(=*) }(=*) }(=*)",
      ")*=(} )*=(} )*=(} )*=(}",
    ],
  },
  {
    index: "14",
    name: "Introducing { and +: Number row, third fingers",
    href: "/prog/lesson14/",
    lines: [
      "{{{{ ++++ {{{{ ++++ {{{{ ++++ {{{{ ++++",
      "{{{{ ++++ {{{{ ++++ {{{{ ++++ {{{{ ++++",
      "{ { { { + + + + { { { { + + + + { { { { + + + +",
      "+{ +{ +{ +{ {+ {+ {+ {+",
      "{++ {++ {++ {++ ++{ ++{ ++{ ++{",
      "{+{ {+{ {+{ {+{ +{+ +{+ +{+ +{+",
      "{{+ {{+ {{+ {{+ {{+ {{+ {{+ {{+",
    ],
  },
  {
    index: "15",
    name: "Comprehensive, including { and +",
    href: "/prog/lesson15/",
    lines: [
      "(((( ==== **** }}}} )))) {{{{ ++++",
      "(((( ==== **** }}}} )))) {{{{ ++++",
      "() () () () {} {} {} {}",
      "{=} {=} {=} {=} (*) (*) (*) (*)",
      "}+{ }+{ }+{ }+{ (=) (=) (=) (=)",
      "(+)=* (+)=* (+)=* (+)=*",
      "{*}=+ {*}=+ {*}=+ {*}=+",
      "=+=*= =+=*= =+=*= =+=*= ",
      "*({=+=})* *({=+=})* *({=+=})* *({=+=})*",
    ],
  },
  {
    index: "16",
    name: "Introducing [ and ]: Number row, fourth fingers",
    href: "/prog/lesson16/",
    lines: [
      "[[[[ ]]]] [[[[ ]]]] [[[[ ]]]] [[[[ ]]]]",
      "[[[[ ]]]] [[[[ ]]]] [[[[ ]]]] [[[[ ]]]]",
      "[] [] [] [] ][ ][ ][ ][",
      "[[] [[] [[] [[] ]][ ]][ ]][ ]][",
      "[[]] [[]] [[]] [[]] ]][[ ]][[ ]][[ ]][[",
      "[ [ [ [ [ [ [ [ ] ] ] ] ] ] ] ]",
    ],
  },
  {
    index: "17-1",
    name: "Comprehensive, including [ and ] (1)",
    href: "/prog/lesson17-1/",
    lines: [
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]]",
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]]",
    ],
  },
  {
    index: "17-2",
    name: "Comprehensive, including [ and ] (2)",
    href: "/prog/lesson17-2/",
    lines: [
      "[{()}] [{()}] [{()}] [{()}] [=*=] [=*=] [=*=] [=*=]",
      "s(var[i++]){} s(var[i++]){} s(var[i++]){} s(var[i++]){}",
      "a[i] += {[x++]}; a[i] += {[x++]}; a[i] += {[x++]}; a[i] += {[x++]};",
      "call((a*b++)); call((a*b++)); call((a*b++)); call((a*b++));",
      "d:{var[a+b](z++)} d:{var[a+b](z++)} d:{var[a+b](z++)} d:{var[a+b](z++)}",
    ],
  },
  {
    index: "18-1",
    name: "introducing & and !: Number row, fourth fingers (1)",
    href: "/prog/lesson18-1/",
    lines: [
      "&&&& !!!! &&&& !!!! &&&& !!!! &&&& !!!!",
      "&&&& !!!! &&&& !!!! &&&& !!!! &&&& !!!!",
    ],
  },
  {
    index: "18-2",
    name: "introducing & and !: Number row, fourth fingers (2)",
    href: "/prog/lesson18-2/",
    lines: [
      "&! &! &! &! !& !& !& !&",
      "&!& &!& &!& &!& !&! !&! !&! !&!",
      "& ! & ! & ! & ! &&! &&! &&! &&!",
      "!!& !!& !!& !!& !&! !&! !&! !&!",
      "&& ! && ! && ! && !",
      "!! & !! & !! & !! &",
    ],
  },
  {
    index: "19-1",
    name: "Comprehensive, including & and ! (1)",
    href: "/prog/lesson19-1/",
    lines: [
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!!",
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!!",
    ],
  },
  {
    index: "19-2",
    name: "Comprehensive, including & and ! (2)",
    href: "/prog/lesson19-2/",
    lines: [
      "!a=b++ !a=b++ !a=b++ !a=b++",
      "*x={call(&a &b)}()++ *x={call(&a &b)}()++ *x={call(&a &b)}()++ *x={call(&a &b)}()++",
      "&z*=[!a !b !c] &z*=[!a !b !c] &z*=[!a !b !c] &z*=[!a !b !c]",
      "func(&x, &y){&x!=&y} func(&x, &y){&x!=&y} func(&x, &y){&x!=&y} func(&x, &y){&x!=&y}",
      "{a,b}->{[a*b]} != &z {a,b}->{[a*b]} != &z {a,b}->{[a*b]} != &z {a,b}->{[a*b]} != &z",
      "!((var++)*(x[z+y]))->{t} !((var++)*(x[z+y]))->{t} !((var++)*(x[z+y]))->{t} !((var++)*(x[z+y]))->{t}",
    ],
  },
  {
    index: "20-1",
    name: "introducing $ and #: Number row, fourth fingers (1)",
    href: "/prog/lesson20-1/",
    lines: [
      "$$$$ #### $$$$ #### $$$$ #### $$$$ ####",
      "$$$$ #### $$$$ #### $$$$ #### $$$$ ####",
    ],
  },
  {
    index: "20-2",
    name: "introducing $ and #: Number row, fourth fingers (2)",
    href: "/prog/lesson20-2/",
    lines: [
      "$ # $ # $ # $# $# $# $#",
      "$$# $$# $$# $$# ##$ ##$ ##$ ##$",
      "$#$ $#$ $#$ $#$ #$# #$# #$# #$#",
      "$$ # $$ # $$ # $$ #",
      "## $ ## $ ## $ ## $",
      "$#$# $#$# $#$# $#$#",
    ],
  },
  {
    index: "21-1",
    name: "Comprehensive, including $ and # (1)",
    href: "/prog/lesson21-1/",
    lines: [
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!! #### $$$$",
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!! #### $$$$",
    ],
  },
  {
    index: "21-2",
    name: "Comprehensive, including $ and # (2)",
    href: "/prog/lesson21-2/",
    lines: [
      "$x=(!a&!b) $x=(!a&!b) $x=(!a&!b) $x=(!a&!b)",
      "#APP# #APP# #APP# #APP#",
      "!(&a&b&c)->[#a #b #c] !(&a&b&c)->[#a #b #c] !(&a&b&c)->[#a #b #c] !(&a&b&c)->[#a #b #c]",
      "{#+#} {#+#} {#+#} {#+#} $s=&#x $s=&#x $s=&#x $s=&#x",
      "$x=[{a++},{b++},{c++}] $x=[{a++},{b++},{c++}] $x=[{a++},{b++},{c++}] $x=[{a++},{b++},{c++}]",
      "####COMMENT ####COMMENT ####COMMENT ####COMMENT",
      "#a->{x!==y} #a->{x!==y} #a->{x!==y} #a->{x!==y} #x#[!a!b!c] #x#[!a!b!c] #x#[!a!b!c] #x#[!a!b!c]",
    ],
  },
  {
    index: "22",
    name: "Introducing 1, 9 and 0: Number row, index fingers",
    href: "/prog/lesson22/",
    lines: [
      "1111 9999 0000 1111 9999 0000 1111 9999 0000 1111 9999 0000",
      "1111 9999 0000 1111 9999 0000 1111 9999 0000 1111 9999 0000",
      "1 1 1 1 9 9 9 9 0 0 0 0 1 1 1 1 9 9 9 9 0 0 0 0",
      "1 1 1 1 9 9 9 9 0 0 0 0 1 1 1 1 9 9 9 9 0 0 0 0",
      "10 10 10 10 01 01 01 01 90 90 90 90 09 09 09 09 19 19 19 19 91 91 91 91",
      "101 101 101 101 909 909 909 909 901 901 901 901",
      "911 911 911 911 911 911 911 911",
      "9091 9091 9091 9091 9091 9091 9091 9091",
    ],
  },
  {
    index: "23-1",
    name: "Comprehensive, including 1, 9 and 0 (1)",
    href: "/prog/lesson23-1/",
    lines: [
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!! #### $$$$ 1111 9999 0000",
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!! #### $$$$ 1111 9999 0000",
    ],
  },
  {
    index: "23-2",
    name: "Comprehensive, including 2, 9 and 0 (1)",
    href: "/prog/lesson23-2/",
    lines: [
      "$a1=[1,9] $a1=[1,9] $a1=[1,9] $a1=[1,9]",
      "x=>{a1+a9}(*) x=>{a1+a9}(*) x=>{a1+a9}(*) x=>{a1+a9}(*)",
      "(&m=$1=$0)[0] (&m=$1=$0)[0] (&m=$1=$0)[0] (&m=$1=$0)[0]",
      "@x=($1)/($0) @x=($1)/($0) @x=($1)/($0) @x=($1)/($0)",
      "(#z#)|(#y#) (#z#)|(#y#) (#z#)|(#y#) (#z#)|(#y#)",
      "{x:{y:[1,0]}, t:{k:[1+x9]}} {x:{y:[1,0]}, t:{k:[1+x9]}} {x:{y:[1,0]}, t:{k:[1+x9]}} {x:{y:[1,0]}, t:{k:[1+x9]}}",
      "w90=1+L w90=1+L w90=1+L w90=1+L $1.*.doc $1.*.doc $1.*.doc $1.*.doc",
    ],
  },
  {
    index: "24",
    name: "Introducing 3 and 2: Number row, left second finger, right index finger",
    href: "/prog/lesson24/",
    lines: [
      "3333 2222 3333 2222 3333 2222 3333 2222",
      "3333 2222 3333 2222 3333 2222 3333 2222",
      "323 323 323 323 223 223 223 223 332 332 332 332",
      "2 2 2 2 3 3 3 3 23 23 23 23 32 32 32 32",
      "2 23 2 23 2 23 2 23 2 3 2 3 2 3 2 3",
    ],
  },
  {
    index: "25-1",
    name: "Comprehensive, including 3 and 2 (1)",
    href: "/prog/lesson25-1/",
    lines: [
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!! #### $$$$ 1111 9999 0000 2222 3333",
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!! #### $$$$ 1111 9999 0000 2222 3333",
    ],
  },
  {
    index: "25-2",
    name: "Comprehensive, including 4 and 2 (1)",
    href: "/prog/lesson25-2/",
    lines: [
      "$x23-$x01=(!a-!b) $x23-$x01=(!a-!b) $x23-$x01=(!a-!b) $x23-$x01=(!a-!b)",
      "[0,1,2,3]*=9 [0,1,2,3]*=9 [0,1,2,3]*=9 [0,1,2,3]*=9",
      "{--i+=0} {--i+=0} {--i+=0} {--i+=0} (&y-&z)*=[3] (&y-&z)*=[3] (&y-&z)*=[3] (&y-&z)*=[3]",
      "3+2=(2*2)+1 3+2=(2*2)+1 3+2=(2*2)+1 3+2=(2*2)+1",
      "#2#->{3} #2#->{3} #2#->{3} #2#->{3}",
      "[{&x->&y},{&z->&f}]->@var [{&x->&y},{&z->&f}]->@var [{&x->&y},{&z->&f}]->@var [{&x->&y},{&z->&f}]->@var",
    ],
  },
  {
    index: "26",
    name: "Introducing 5 and 4: Number row, third fingers",
    href: "/prog/lesson26/",
    lines: [
      "5555 4444 5555 4444 5555 4444 5555 4444",
      "5555 4444 5555 4444 5555 4444 5555 4444",
      "5 4 5 4 5 4 5 4 54 54 54 54",
      "545 545 545 545 5 45 5 54 5 54 5 54",
      "4 45 4 45 4 45 4 45 5 45 5 45 5 45 5 45",
    ],
  },
  {
    index: "27-1",
    name: "Comprehensive, including 5 and 4 (1)",
    href: "/prog/lesson27-1/",
    lines: [
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!! #### $$$$ 1111 9999 0000 2222 3333 5555 4444",
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!! #### $$$$ 1111 9999 0000 2222 3333 5555 4444",
    ],
  },
  {
    index: "27-2",
    name: "Comprehensive, including 6 and 4 (1)",
    href: "/prog/lesson27-2/",
    lines: [
      "func5(!a, !b); func5(!a, !b); func5(!a, !b); func5(!a, !b);",
      "if($z5 > $z4){$a->speak()} if($z5 > $z4){$a->speak()} if($z5 > $z4){$a->speak()} if($z5 > $z4){$a->speak()}",
      "5+4=3+3+3 5+4=3+3+3 5+4=3+3+3 5+4=3+3+3",
      "while($i < 5){$i--} while($i < 5){$i--} while($i < 5){$i--} while($i < 5){$i--}",
      "#ERR_4 #ERR_4 #ERR_4 #ERR_4 ($z|$t)&($z|$k) ($z|$t)&($z|$k) ($z|$t)&($z|$k) ($z|$t)&($z|$k)",
      "try{f.call(!a||!b)} try{f.call(!a||!b)} try{f.call(!a||!b)} try{f.call(!a||!b)}",
      "$ev->[t5] $ev->[t5] $ev->[t5] $ev->[t5]",
    ],
  },
  {
    index: "28",
    name: "Introducing 7 and 6: Number row, fourth fingers",
    href: "/prog/lesson28/",
    lines: [
      "7777 6666 7777 6666 7777 6666 7777 6666",
      "7777 6666 7777 6666 7777 6666 7777 6666",
      "7 7 7 7 6 6 6 6 76 76 76 76 667 667 667 667",
      "6 76 6 76 6 76 6 76 676 676 676 676",
      "7 676 76 7 676 76 7 676 76 7 676 76",
    ],
  },
  {
    index: "29-1",
    name: "Comprehensive, including 7 and 6 (1)",
    href: "/prog/lesson29-1/",
    lines: [
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!!",
      "#### $$$$ 1111 9999 0000 2222 3333 5555 4444 7777 6666",
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!!",
      "#### $$$$ 1111 9999 0000 2222 3333 5555 4444 7777 6666",
    ],
  },
  {
    index: "29-2",
    name: "Comprehensive, including 8 and 6 (1)",
    href: "/prog/lesson29-2/",
    lines: [
      "/**$7->$6**/ /**$7->$6**/ /**$7->$6**/ /**$7->$6**/",
      "(!vol--)*7 (!vol--)*7 (!vol--)*7 (!vol--)*7",
      "7+6=--(9+5) 7+6=--(9+5) 7+6=--(9+5) 7+6=--(9+5)",
      "v<7x6>v v<7x6>v v<7x6>v v<7x6>v",
      "{(7t+2p)}:false {(7t+2p)}:false {(7t+2p)}:false {(7t+2p)}:false",
      "{(9*&2)||(5*&1)}->(z[7]) {(9*&2)||(5*&1)}->(z[7]) {(9*&2)||(5*&1)}->(z[7]) {(9*&2)||(5*&1)}->(z[7])",
    ],
  },
  {
    index: "30",
    name: "Introducing % and 8: Number row, fourth fingers",
    href: "/prog/lesson30/",
    lines: [
      "%%%% 8888 %%%% 8888 %%%% 8888 %%%% 8888",
      "%%%% 8888 %%%% 8888 %%%% 8888 %%%% 8888",
      "%8 %8 %8 %8 8 % 8 % 8 % 8 %",
      "8%8 8%8 8%8 8%8 % 8% % 8% % 8% % 8%",
      "% %8 % %8 % %8 % %8 8% 8%8 8% 8%8 8% 8%8 8% 8%8",
    ],
  },
  {
    index: "31-1",
    name: "Comprehensive, including % and 8 (1)",
    href: "/prog/lesson31-1/",
    lines: [
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!!",
      "#### $$$$ 1111 9999 0000 2222 3333 5555 4444 7777 6666 %%%% 8888",
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!!",
      "#### $$$$ 1111 9999 0000 2222 3333 5555 4444 7777 6666 %%%% 8888",
    ],
  },
  {
    index: "31-2",
    name: "Comprehensive, including % and 9 (1)",
    href: "/prog/lesson31-2/",
    lines: [
      "!(x%y==z) !(x%y==z) !(x%y==z) !(x%y==z)",
      "2t/3k->8m 2t/3k->8m 2t/3k->8m 2t/3k->8m",
      "{$1->$2}==8 {$1->$2}==8 {$1->$2}==8 {$1->$2}==8",
      "%[0,1,2,3,4,5,6,7,8,9]% %[0,1,2,3,4,5,6,7,8,9]% %[0,1,2,3,4,5,6,7,8,9]% %[0,1,2,3,4,5,6,7,8,9]%",
      "/is.*near[y,Y]{8}ou/g /is.*near[y,Y]{8}ou/g /is.*near[y,Y]{8}ou/g /is.*near[y,Y]{8}ou/g",
      "&m->ping(z%8) &m->ping(z%8) &m->ping(z%8) &m->ping(z%8)",
    ],
  },
  {
    index: "32",
    name: "Introducing ~ and `: Number row, fourth fingers",
    href: "/prog/lesson32/",
    lines: [
      "~~~~ ```` ~~~~ ```` ~~~~ ```` ~~~~ ````",
      "~~~~ ```` ~~~~ ```` ~~~~ ```` ~~~~ ````",
      "~`~`~`~` ~`~`~`~` ~`~`~`~` ~`~`~`~`",
      "~`~ ~`~ ~`~ ~`~ ~ ~` ~ ~` ~ ~` ~ ~`",
      "~`~~ ~`~~ ~`~~ ~`~~ `~` `~` `~` `~`",
    ],
  },
  {
    index: "33-1",
    name: "Comprehensive, including ~ and ` (You rock!) (1)",
    href: "/prog/lesson33-1/",
    lines: [
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!!",
      "#### $$$$ 1111 9999 0000 2222 3333 5555 4444 7777 6666 %%%% 8888 ~~~~ ````",
      "(((( ==== **** }}}} )))) {{{{ ++++ [[[[ ]]]] &&&& !!!!",
      "#### $$$$ 1111 9999 0000 2222 3333 5555 4444 7777 6666 %%%% 8888 ~~~~ ````",
    ],
  },
  {
    index: "33-2",
    name: "Comprehensive, including ~ and ` (You rock!) (2)",
    href: "/prog/lesson33-2/",
    lines: [
      "`_code_` `_code_` `_code_` `_code_`",
      "{~!i}([abc])->{1,2,3,4,5,6,7,8} {~!i}([abc])->{1,2,3,4,5,6,7,8}",
      "%x=&y %x=&y %x=&y %x=&y a*(b+~c) a*(b+~c) a*(b+~c) a*(b+~c)",
      "#in->[x:_w_]->`s++` #in->[x:_w_]->`s++` #in->[x:_w_]->`s++` #in->[x:_w_]->`s++`",
      "#def if( while( #def if( while( $s[x--] $s[x--] $s[x--] $s[x--]",
      "exit(0); exit(0); exit(0); exit(0);",
    ],
  },
];

function lesson_item_ctor(lesson) {
  const arch = {
    tag: "div",
    props: [
      {
        name: "style",
        value: "padding: 16px",
      },
    ],
    children: [
      {
        tag: "a",
        props: [
          {
            name: "textContent",
            value: `Lesson ${lesson.index}: ${lesson.name}`,
          },
          {
            name: "href",
            value: __APP__.base + lesson.href,
          },
          {
            name: "onclick",
            value: window.route,
          },
        ],
      },
    ],
  };

  return vanix(arch);
}

export default function prog_ctor() {
  /** @type {Vanix.Arch} */
  const arch = {
    tag: "div",
    props: [
      {
        name: "className",
        value: css.container,
      },
    ],
    children: [
      {
        tag: "p",
        props: [
          {
            name: "className",
            value: "title",
          },
          {
            name: "textContent",
            value: "Programmer Dvorak course",
          },
        ],
      },
      {
        tag: "p",
        props: [
          {
            name: "className",
            value: css.note,
          },
          {
            name: "innerHTML",
            value:
              "Originate from <a href='http://programmer-dvorak.appspot.com/'>Programmer Dvorak typing tutorial</a>.",
          },
        ],
      },
      {
        tag: "p",
        props: [
          {
            name: "className",
            value: css.text,
          },
          {
            name: "textContent",
            value:
              "This course is mainly designed to help you get used to the Programmer Dvorak layout for those braces and numbers, brackets ampersand or so. Now, Let's get started!",
          },
        ],
      },
    ],
  };

  for (const lesson of lessons) {
    arch.children.push({
      ctor: lesson_item_ctor,
      ctor_args: [lesson],
    });
  }

  return vanix(arch);
}
