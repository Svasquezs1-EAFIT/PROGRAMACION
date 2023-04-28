let estado="open";
function showHidebarlateral(){
    var Links=document.getElementsByClassName("txtlink");
    if(estado=="open"){
        document.getElementById("barlateral").style.width="80px";
        document.getElementById("principal").style.marginLeft="80px";
        document.getElementById("img-info").style.width="50px";
        document.getElementById("texto-info").style.display="none";

        for(var i=links.length -1; i>=0; i--){
            links[i].style.display="none"
        }
        estado="close";
    }else if(estado=="close"){
        document.getElementById("barlateral").style.width="250px";
        document.getElementById("principal").style.marginLeft="250px";
        document.getElementById("img-info").style.width="112px";
        document.getElementById("texto-info").style.display="block";

        for(var i=links.length -1; i>=0; i--){
            links[i].style.display="inline";
        }
        estado="open";
    }
}