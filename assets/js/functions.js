// Events
$(document).ready(make_chart_from_data);
// End of Events


// Functions

async function get_json_data(){
    const response = await fetch("assets/jsons/gitLangData.json");
    const json = await response.json();
    return json;
}

async function make_chart_from_data(){
    if($('#chartElement').length == 0){
        return;
    }
    var color_palete = ["#F2E1AE", "#BFAE8E", "#8E8870", "#BF9A84"]
    var data = await get_json_data();
    var no_of_total_Values = 0;
    var values = Object.values(data);
    for (var i=0; i< values.length; i++){
        if (typeof(values[i]) == "string"){
            continue;
        }
        no_of_total_Values += values[i];
    }
    for ( const [key, value] of Object.entries(data)){
        if(typeof(value) == "string"){
            continue;
        }
        var percentage = (value / no_of_total_Values) * 100;
        if(percentage < 1.0){
            continue;
        }
        var color = color_palete[Math.floor(Math.random() * color_palete.length)];
        var tempalte_div = `
            <span style="height: ${percentage.toFixed(2)*4}px;background-color: ${color};" class="block" title="${key}>
                <span class="value"> ${key + ": "}${percentage.toFixed(2)}%</span>
            </span>
        `;
        $('.chart').append(tempalte_div);
    }
    var last_updated_div = `<h3>Last update: ${data["created"]} </h3>`; 
    $('.last-updated').append(last_updated_div);
}