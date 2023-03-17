// <!-- danh sach trong navbar -->
function dropDown(id) {
    document.getElementById(id).style.display="inline-block";
    document.getElementById('key_down').style.display='none'
    document.getElementById('key_up').style.display='inline-block'
}
function closeCard(id){
    document.getElementById(id).style.display="none";
    document.getElementById('key_down').style.display='inline-block';
    document.getElementById('key_up').style.display='none';

}
//
function cardShow(id){
    document.getElementById(id).style.display ="inline-block"
}
function closeList(id){
    document.getElementById(id).style.display ="none"
}
function showtable(id){
    document.getElementById('form_table').style.display = "inline-block";
}
function  closeTable(id){
    document.getElementById('form_table').style.display = "none";
} 