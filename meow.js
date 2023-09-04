alert (' مرحبا بك في موقعي !انا علي ,وسوف احسب درجتك')
let grade = prompt("ادخل درجتك ")
console.log (grade)

if(grade>=90 && grade <= 100){
console.log("لقد حصلت على امتياز");
}
else if (grade>=80 && grade <= 89){
console.log("جدا جيد على حصلت لقد")

} 
else if(grade>=70 && grade <= 79)  { 
    console.log(" جيد على  حصلت لقد"
    )
}
else if  (grade>=60 && grade <=69) {
    console.log ("لقد حصلت على مقبول😕")
}
else if(grade>=50 && grade <= 59){
console.log("لقد حصلت على ضعيف☹️")
}
else { 
console.log( "راسب💔") 
}