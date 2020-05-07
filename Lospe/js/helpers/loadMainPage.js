

export default function loadAbout(membersList) {
    var members = membersList.members;
    console.log(members);

    var $containerItem = $(".about-area .container .owl-carousel")

    for (var i = 0; i < members.length; i++) {
        $containerItem.append(`
        <div class="about-item">
            <div class="row">
              <div class="col-12 col-lg-4">
                <div class="image">
                  <img src="${members[i].image}" alt="Customer 1" class="img-fluid">
                </div>
              </div>
              <div class="col-12 col-lg-8">
                <div class="row">
                  <div class="col-12">
                    <h3 class="text-center">${members[i].name}</h3>
                  </div>
                  <div class="col-12">
                    <p class="text-center">${members[i].quote}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        `);
    }


    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 1,
        lazyLoad: true,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            },
            1200:{
                items:2
            },
            1400:{
                items:2
            },
            1600:{
                items:2
            },
            1800:{
                items:2
            }
        }
    });
}