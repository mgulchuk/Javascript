for(let i = 1; i<=100; i++){
    if((i % 3 == 0) && (i % 5 == 0)) {
        document.write("Hee Haw!");
        document.write("<br>");
    }
    else if(i % 3 == 0){
        document.write("Hee!");
        document.write("<br>");
    }
    else if(i % 5 == 0){
        document.write("Haw!");
        document.write("<br>");
    }
    else{
        document.write(i);
        document.write("<br>");
    }
}