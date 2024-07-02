// Variables

var isProjectListVisible = false;

// End of Variables

// Search

SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li class="search-result"><a href="{url}">{title}</a></li>'
});

// End of Search


// Events

// Ready Function
$(document).ready(
    function(){
        if($('#pic-of-me').length == 0){
            return;
        }
        $("#pic-asci").attr({style: "display: none;"});
    }
);

$(document).ready(make_chart_from_data);

jQuery(window).on( 'load', function(){
    window.setTimeout( setup_art_gallery_layout(), 1500 );
});

jQuery(window).on( 'load', function(){
    popup_image();
});

$(document).on('click', '#btnHomePage', function(){
    if($('#id-home').length > 0){
        return;
    }
    document.location.href='/';
});

$(document).on('click', '#btnAboutPage', function(){
    if($('#id-about').length > 0){
        return;
    }
    document.location.href='/about/';
});

$(document).on('click', '#btnArtPage', function(){
    if($('#id-art').length > 0){
        return;
    }
    document.location.href='/art/';
});

$(document).on('click', '#btnBlogPostsPage', function(){
    if($('#id-blogPosts').length > 0){
        return;
    }
    document.location.href='/blog_posts/';
});

$(document).on('click', '#btnUtilityPage', function(){
    if($('#id-tool').length > 0){
        return;
    }
    document.location.href='/project/tool/';
});

$(document).on('click', '#btnOtherPage', function(){
    if($('#id-other').length > 0){
        return;
    }
    document.location.href='/project/other/';
});

$(document).on('click', '#btnGamePage', function(){
    if($('#id-game').length > 0){
        return;
    }
    document.location.href='/project/game/';
});

$(document).on('click', '#btnMobilePage', function(){
    if($('#id-mobile').length > 0){
        return;
    }
    document.location.href='/project/mobile/';
});

$(document).on('click', '#btnResume', function(){
    alert("you fool!");
});

$(document).on('click', '#btnGoMore', function(){
    document.location.href='/about/';
});

$(document).on('click', '#btnProjects', function(){
    slide_down_projects();
});

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


function setup_art_gallery_layout(){
    var $masonry_gallery = jQuery('.masonry-gallery.gallery');
    if($masonry_gallery.length <= 0){
        return;
    }
    $masonry_gallery.each( function(index, element) {
		var $masonry_items = $(element).find('.gallery-item');
	
		// set masonry layout
		$(element).isotope({
			masonry: { columnWidth: $(element).find('.gallery-item')[0] },
			itemSelector: '.gallery-item'
		});
		$(element).isotope('layout');
			
		// filtering
		jQuery('#gallery-filter li a').on('click', function(){
			jQuery('#gallery-filter li a').removeClass('active');
			jQuery(this).addClass('active');
			var selector = jQuery(this).attr('data-filter');
			$masonry_gallery.isotope({ filter: selector });
			return false;
		})
		// changing layout
		jQuery('#grid-changer li a').on('click', function(){
			jQuery('#grid-changer li a').removeClass('active');
			jQuery(this).toggleClass('active')
			$masonry_items.removeClass('col-3');
			$masonry_items.removeClass('col-4');
			$masonry_items.removeClass('col-5');
			$masonry_items.toggleClass(jQuery(this).closest('li').attr('class'));
			$masonry_gallery.isotope('layout');
		});
	
	});
}

function popup_image(){

    if($('#id-artPage').length <= 0){
        return;
    }

    $('a.popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true,
            alignTop: true,
            navigateByImgClick: true,
            preload: [0,1], // Will preload 0 - before current, and 1 after the current image
         },
        image: {
            titleSrc: function(item) {
                return item.el.attr('title') + ' by ' + item.el.attr('data-caption');
            }
        }
    });
}


function slide_down_projects(){
    if(!isProjectListVisible){
        $('#id-slide').slideDown();
        isProjectListVisible = true;
    }else{
        $('#id-slide').slideUp();
        isProjectListVisible = false;
    }
}

function open_link(id){
    var val = $(id).attr('data-value');
    window.open(val, "_blank");
}


$("#pic-of-me").hover(
    function(){
        $("#pic-jpg").attr({style: "display: none;"});
        $("#pic-asci").attr({style: "visibility: show;"});
    },
    function() {
        $("#pic-jpg").attr({style: "visibility: show;"});
        $("#pic-asci").attr({style: "display: none;"});
    }
);
