var ID="865934061";
$.getJSON("https://api.opendota.com/api/players/"+ID+"/wl?limit=10",function(data){
    console.log(data);
    var wins=data.win;
    var losses=data.lose;
    $("#win").html(wins);
    $("#loss").html(losses);
    $("#mald").html((losses*100)/(losses+wins)+"%");
});