//Stefan Dimitrovski 181258
$(document).ready(function () {

    var indeks=0;
    getData(indeks);


    $("#Addbtn").click(function () {
        indeks=indeks+5;
       getData(indeks);

    });


    function getData() {
        $.ajax({
            url:"http://ergast.com/api/f1/2019/drivers.json?offset="+indeks+"&limit=5",
            dataType:"json",
            success:function (data) {
                console.log(data);
                $.each(data.MRData.DriverTable.Drivers,function (i,item) {
                    var name=item.givenName;
                    var familyName=item.familyName;
                    $("#lista").append("<li permNum='"+item.permanentNumber+"' urlbiografija='"+item.url+"' dateBir='"+item.dateOfBirth+"' nat='"+item.nationality+"'>"+name+" "+familyName+"</li>")
                })
            }
        })
    }

    $(document).on("click","li",function () {
        $("#detalenPrikaz").show();
        $("#vozaci").hide();
        $("#permNumber").html($(this).attr("permNum"));
        $("#birtDate").html($(this).attr("dateBir"));
        $("#nationality").html($(this).attr("nat"));
        $("#urlBio").html($(this).attr("urlbiografija"));
    });

    $("#backBtn").click(function () {
        $("#detalenPrikaz").hide();
        $("#vozaci").show();
    })
});