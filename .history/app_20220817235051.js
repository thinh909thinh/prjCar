var app = angular.module('myApps', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/vehice', {
            templateUrl: 'vehice.html',
            controller: 'NewController'
        })

       .when('/gallery', {
            templateUrl: 'gallery.html',
            controller: 'GalleryController'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactController'
        })
        .when('/blog', {
            templateUrl: 'blog.html',
            controller: 'BlogController'
        })


        .when('/blog-q3', {
            templateUrl: 'blog-q3.html',
            controller: 'BlogController'
        })
        .when('/about-us', {
            templateUrl: 'about-us.html',
            controller: 'AboutController'
        })

        .when('/faq', {
            templateUrl: 'faq.html',
            controller: 'FaqController'
        })


    .otherwise({ redirectTo: '/' });

});



app.controller(
    'FaqController',
    function($scope) {
        FaqController()
    });


app.controller(
    'HomeController',
    function($scope) {
        HomeController()
    });


app.controller(
    'NewController',
    function($scope, $routeParams) {
        routers($routeParams.keyword === undefined ? '' : $routeParams.keyword);
    });


app.controller(
    'UsedController',
    function($scope, $routeParams) {
        routers($routeParams.keyword === undefined ? '' : $routeParams.keyword);
    });


app.controller(
    'BrandController',
    function($scope, $routeParams) {
        routers($routeParams.keyword === undefined ? '' : $routeParams.keyword);
    });

app.controller(
    'AboutController',
    function($scope) {
        AboutController()
    });


app.controller(
    'ContactController',
    function($scope) {
        ContactController()
    });

app.controller(
    'BlogController',
    function($scope) {
        BlogController()
    });

app.controller(
    'GalleryController',
    function($scope) {
        GalleryController()
    });












function BlogController() {
    document.title = 'Blog'


}

function ContactController() {
    document.title = 'Contact Us'

}

function HomeController() {
    document.title = 'Home';



    sliderbrand();

    //new and used
    $(document).ready(function() {
        $(".News_sd").click(function() {
            $('.New_sd1').css('display', 'flex');
            $('.Used_sd1').css('display', 'none');
        });
    });
    $(document).ready(function() {
        $(".Used_sd").click(function() {
            $('.New_sd1').css('display', 'none');
            $('.Used_sd1').css('display', 'flex');
        });
    });
    // end new and used
    function sliderbrand() {
        const imgs = document.querySelectorAll(".container-slide img");
        const leftArrow = document.querySelector(".arrow-left");
        const rightArrow = document.querySelector(".arrow-right");
        let currentIndex = 0;
        let time = 3000;
        const defClass = (startPos, index) => {
            for (let i = startPos; i < imgs.length; i++) {
                imgs[i].style.display = "none";
            }
            imgs[index].style.display = "block";

        };
        defClass(1, 0);
        leftArrow.addEventListener("click", function() {
            currentIndex <= 0 ? currentIndex = imgs.length - 1 : currentIndex--;
            defClass(0, currentIndex);
        });

        rightArrow.addEventListener("click", function() {
            currentIndex >= imgs.length - 1 ? currentIndex = 0 : currentIndex++;
            defClass(0, currentIndex);
        });

        const startAutoSlide = () => {
            setInterval(() => {
                currentIndex >= imgs.length - 1 ? currentIndex = 0 : currentIndex++;
                defClass(0, currentIndex);
            }, time);
        };

        startAutoSlide();


    }


    const interval = 12000;
    const haha = document.querySelector("#haha")
    let counting = true
    let num = document.querySelectorAll(".num");
    const checkIsVisibe = (element) => {
        const rect = element.getBoundingClientRect();
        console.log("top", rect.top)
        console.log(window.innerHeight)

        if (rect.top <= window.innerHeight && counting == true) {
            counting = false
            num.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(interval / endValue);
                var counter = setInterval(function() {
                    startValue += 1;
                    console.log(1)
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);

                    }
                }, duration);
            });
        }
    };
    document.addEventListener('scroll', () => {
        checkIsVisibe(haha)
    })

    const tabs = document.querySelectorAll(".tab-click");
    const panes = document.querySelectorAll(".tab-pane");
    const tabActive = document.querySelector(".tab-click.active");
    const boder_buttom = document.querySelector(".tabs .boder-buttom");
    requestIdleCallback(function() {
        boder_buttom.style.left = tabActive.offsetLeft + "px";
        boder_buttom.style.width = tabActive.offsetWidth + "px";
    });
    tabs.forEach(function(tab, index) {
        const pane = panes[index];
        tab.onclick = function() {
            document.querySelector(".tab-click.active").classList.remove("active");
            document.querySelector(".tab-pane.active").classList.remove("active");
            boder_buttom.style.left = this.offsetLeft + "px";
            boder_buttom.style.width = this.offsetWidth + "px";
            this.classList.add("active");
            pane.classList.add("active");
        };
    })

    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            739: {
                slidesPerView: 2,
            },
            1113: {
                slidesPerView: 3,
            },
            1240: {
                slidesPerView: 4,
            },
        },
    });



    // nav scroll

    window.onscroll = function() {
        myFunction()
    };

    function myFunction() {
        const nav_element = document.getElementsByTagName("nav")[0];
        if (document.documentElement.scrollTop > 50) {
            nav_element.style.background = "#222732";

        } else {
            nav_element.style.background = "linear-gradient(180deg, #000000f0, transparent";

        }
    }

    <!-- ---slide quoc--- -->

    $(document).ready(function() {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true
        });
        $('.play').on('click', function() {
            owl.trigger('play.owl.autoplay', [1000])
        })
        $('.stop').on('click', function() {
            owl.trigger('stop.owl.autoplay')
        })
    })

}






function GalleryController() {
    document.title = 'Gallery';

    //doi mau nav
    window.onscroll = function() {
        myFunction()
    };

    function myFunction() {
        const nav_element = document.getElementsByTagName("nav")[0];
        if (document.documentElement.scrollTop > 50) {
            nav_element.style.background = "#222732";

        } else {
            nav_element.style.background = "linear-gradient(180deg, #000000f0, transparent";

        }
    }

    const galleryItem = document.getElementsByClassName("gallery-item");
    const lightBoxContainer = document.createElement("div");
    const lightBoxContent = document.createElement("div");
    const lightBoxImg = document.createElement("img");
    const lightBoxPrev = document.createElement("div");
    const lightBoxNext = document.createElement("div");

    lightBoxContainer.classList.add("lightbox");
    lightBoxContent.classList.add("lightbox-content");
    lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
    lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

    lightBoxContainer.appendChild(lightBoxContent);
    lightBoxContent.appendChild(lightBoxImg);
    lightBoxContent.appendChild(lightBoxPrev);
    lightBoxContent.appendChild(lightBoxNext);

    document.body.appendChild(lightBoxContainer);

    let index = 1;

    function showLightBox(n) {
        if (n > galleryItem.length) {
            index = 1;
        } else if (n < 1) {
            index = galleryItem.length;
        }
        let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
        lightBoxImg.setAttribute("src", imageLocation);
    }

    function currentImage() {
        lightBoxContainer.style.display = "block";

        let imageIndex = parseInt(this.getAttribute("data-index"));
        showLightBox(index = imageIndex);
    }
    for (let i = 0; i < galleryItem.length; i++) {
        galleryItem[i].addEventListener("click", currentImage);
    }

    function slideImage(n) {
        showLightBox(index += n);
    }

    function prevImage() {
        slideImage(-1);
    }

    function nextImage() {
        slideImage(1);
    }
    lightBoxPrev.addEventListener("click", prevImage);
    lightBoxNext.addEventListener("click", nextImage);

    function closeLightBox() {
        if (this === event.target) {
            lightBoxContainer.style.display = "none";
        }
    }
    lightBoxContainer.addEventListener("click", closeLightBox);

    //show more
    // $(document).ready(function(){
    //     $(".content").slice(0, 6).show();
    //     $("#loadMore").on("click", function(e){
    //         e.preventDefault();
    //         $(".content:hidden").slice(0, 6).slideDown();
    //         if($(".content:hidden").length == 0) {
    //             $("#loadMore").text("No Content").addClass("noContent");
    //         }
    //     });

    // })
    //filter
    $(function() {
        var $btn = $('.category-btn [data-filter]'),
            $list = $('.category-list [data-category]');

        $btn.on('click', function() {
            var $btnCat = $(this).attr('data-filter');

            $list.removeClass('is-animate');

            if ($btnCat == 'all') {
                $list.show().addClass('is-animate');

            } else {
                $list.hide().removeClass('is-animate').filter('[data-category = "' + $btnCat + '"]').show().addClass('is-animate');
            }
            return false;
        });
    });

}

function routers(keyword) {

    //doi mau nav
    window.onscroll = function() {
        myFunction()
    };

    function myFunction() {
        const nav_element = document.getElementsByTagName("nav")[0];
        if (document.documentElement.scrollTop > 50) {
            nav_element.style.background = "#222732";

        } else {
            nav_element.style.background = "linear-gradient(180deg, #000000f0, transparent";

        }
    }

    // doi ten title
    document.title = 'Product';

    initial();

    function initial() {
        FilterProduct(keyword.toLowerCase());
        hienDT();
        hienDTs();
    }

    function hienDT(thuonghiendachon = [], giabandachon = []) {
        var list1 = document.getElementById("list1")
        list1.innerHTML = ""
        for (var i = 0; i < arrDT.length; i++) {
            hinh = arrDT[i].hinh
            thuonghieu = arrDT[i].thuonghieu
            gia = arrDT[i].gia.toFixed(3)
            tenDT = arrDT[i].tenDT
            imageModal1 = arrDT[i].imageModal1
            imageModal2 = arrDT[i].imageModal2
            KieuDang = arrDT[i].KieuDang
            DongCo = arrDT[i].DongCo
            HopSo = arrDT[i].HopSo
            DungTich = arrDT[i].DungTich
            ChoNgoi = arrDT[i].ChoNgoi
            NamSX = arrDT[i].NamSX


            // loc cac loai
            if (thuonghiendachon.length > 0) {
                if (thuonghiendachon.includes(thuonghieu) == false) continue
            }


            // loc gia ban
            if (giabandachon.length > 0) {
                if (gia < 200 && giabandachon.includes("1") == false)
                    continue
                if (gia >= 200 && gia < 300 && giabandachon.includes("2") == false)
                    continue
                if (gia >= 300 && gia < 400 && giabandachon.includes("3") == false)
                    continue
                if (gia >= 400 && gia < 500 && giabandachon.includes("4") == false)
                    continue
                if (gia > 500 && giabandachon.includes("5") == false)
                    continue
            }
            list1.innerHTML +=
                `<div class="item  col-xs-4 col-lg-4">
		<div class="thumbnail">
			<div class="list-img" onclick="showMyModalprd('${hinh}', '${tenDT}','${gia}','${KieuDang}','${imageModal1}','${imageModal2}','${DongCo}','${HopSo}','${DungTich}','${ChoNgoi}','${NamSX}')">
				<img class="group list-group-image" src=${hinh} data-bs-toggle="modal" data-bs-target="#myModal"/>
			     <div class="span-but">$${gia}</div>
			</div>
			    
			<div class="caption">
				<h4 class="group inner list-group-item-heading product-name modal-title" >
				${tenDT}</h4>
					<div class="list-group-sp" style="display:none">
						<div class="gourp-speci"><ul class="List-gurp">
							<li class="list-speci"><span class="card-list__title"> Year: </span>
								<span class="card-list__info"> 2010 </span></li>
							<li class="list-speci"><span class="card-list__title"> Fuel: </span>
								<span class="card-list__info"> Petrol+CNG </span></li>
							<li class="list-speci"><span class="card-list__title"> Horsepower: </span>
								<span class="card-list__info"> 200 hp </span></li>
							<li class="list-speci"><span class="card-list__title"> Condition: </span>
								<span class="card-list__info"> Driver </span></li>
						</ul></div>
						<div class="gourp-speci"><ul class="List-gurp">
							<li class="list-speci"><span class="card-list__title"> Mileage: </span>
								<span class="card-list__info"> 4,567 </span></li>
							<li class="list-speci"><span class="card-list__title"> Engine:  </span>
								<span class="card-list__info"> 1900 cm3 </span></li>
							<li class="list-speci"><span class="card-list__title"> Drive: </span>
								<span class="card-list__info"> 4x4 </span></li>
							<li class="list-speci"><span class="card-list__title"> Stock Status: </span>
								<span class="card-list__info"> In stock </span></li>
						</ul></div>
						<div class="col-xs-12 col-md-6">
							<p class="lead">
								<span>$${gia}</span>
								</p>
						</div>
					</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 sell-car">
						<div class="col-xs-icon">
							<i class="fa-solid fa-car"></i>
							<p>2022</p>
						</div>
						<div class="col-xs-icon">
							<i class="fa-solid fa-road"></i>
							<p>NEW</p>
						</div>
						<div class="col-xs-icon">
                            <i class="fa-solid fa-car"></i>
							<p>${thuonghieu}</p>
						</div>
						<div class="col-xs-icon">
						   <a href="tel:+849888888888"><i class="fa-solid fa-phone"></i></a>
						   <p>Call</p>
						 </div>
					</div>
				</div>
			</div>
		</div>
	</div>
		`
        }

    }

    var checkboxes = document.querySelectorAll("input")
    var a2 = document.getElementsByClassName("thuonghieu")
    let enabledSettings = []
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var thuonghiendachon = []
            enabledSettings =
                Array.from(checkboxes)
                .filter(i => i.checked)
                .map(i => i.value)
            for (let i = 0; i < a2.length; i++) {
                if (a2[i].checked == true)
                    thuonghiendachon.push(a2[i].value)
                console.log("tesst1")
            }

            var a3 = document.getElementsByClassName("giaban")
            var giabandachon = []
            for (let i = 0; i < a3.length; i++) {
                if (a3[i].checked == true)
                    giabandachon.push(a3[i].value)
            }
            hienDT(thuonghiendachon, giabandachon)
        })
    });

    // hienDTs();




    function hienDTs(thuonghiendachons = [], giabandachons = []) {


        var lists = document.getElementById("list2")
        lists.innerHTML = ""
        for (var i = 0; i < arrDT.length; i++) {
            hinhs = arrDT[i].hinh
            thuonghieus = arrDT[i].thuonghieu
            gias = arrDT[i].gia.toFixed(3)
            tenDTs = arrDT[i].tenDT
            imagesModal1 = arrDT[i].imageModal1
            imagesModal2 = arrDT[i].imageModal2
            KieuDangs = arrDT[i].KieuDang
            DongCos = arrDT[i].DongCo
            HopSos = arrDT[i].HopSo
            DungTichs = arrDT[i].DungTich
            ChoNgois = arrDT[i].ChoNgoi
            NamSXs = arrDT[i].NamSX



            if (thuonghiendachons.length > 0) {
                if (thuonghiendachons.includes(thuonghieus) == false) continue
            }
            if (giabandachons.length > 0) {
                if (gias < 200&& giabandachons.includes("1") == false)
                    continue
                if (gias >= 200 && gias < 300 && giabandachons.includes("2") == false)
                    continue
                if (gias >= 300 && gias < 400 && giabandachons.includes("3") == false)
                    continue
                if (gias >= 400 && gias < 500 && giabandachons.includes("4") == false)
                    continue
                if (gias > 500 && giabandachons.includes("5") == false)
                    continue
            }
            lists.innerHTML +=
                `
		<div class="row">
		<div class="col-xs-4 col-lg-4">
			<div class="img-ngang" onclick="showMyModalprd('${hinhs}', '${tenDTs}','${gias}','${KieuDangs}','${imagesModal1}','${imagesModal2}','${DongCos}','${HopSos}','${DungTichs}','${ChoNgois}','${NamSXs}')">
				<img class="group list-group-image" src=${hinhs} data-bs-toggle="modal" data-bs-target="#myModal" alt=""/>
			</div>
			
		</div>

		<div class="items  col-xs-8 col-lg-8">
        <div class="container">
			<div class="row">
				<div class="title-ngang">
					<div class="listngang product-name">
						<p>${tenDTs}</p>
						<div>
							<ul class="card__list list-unstyled">
								<li class="card-list__row"> <span class="card-list__title">
										Year: </span> <span class="card-list__info"> ${NamSXs}
									</span></li>
								<li class="card-list__row"> <span class="card-list__title">
										Mileage: </span> <span class="card-list__info"> 78,567
									</span></li>
								<li class="card-list__row"> <span class="card-list__title">
										Fuel: </span> <span class="card-list__info"> Petrol+CNG
									</span></li>
								<li class="card-list__row"> <span class="card-list__title">
										Engine: </span> <span class="card-list__info"> 1900 cm3
									</span></li>
								<li class="card-list__row"> <span class="card-list__title">
										Horsepower: </span> <span class="card-list__info"> ${DongCos}
										 </span></li>
								<li class="card-list__row"> <span class="card-list__title">
										Drive: </span> <span class="card-list__info"> 4x4
									</span></li>
								<li class="card-list__row"> <span class="card-list__title">
										Condition: </span> <span class="card-list__info"> Driver
									</span></li>
								<li class="card-list__row"> <span class="card-list__title">
										Brand: </span> <span class="card-list__info">${thuonghieus}</span></li>
							</ul>
						</div>
					</div>
					<div class="price-ngang">
						<div class="price" onChange="format_curency(${gias});">Price :$${gias}</div>
					</div>
				</div>
			</div>
            </div>
		</div>
	</div>
		`
        }


    }


    // checkbox thuong hieu va  gia ban
    var checkboxess = document.querySelectorAll("input")
    var a2s = document.getElementsByClassName("thuonghieu")
    let enabledSettingss = []
    checkboxess.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var thuonghiendachons = []
            enabledSettingss =
                Array.from(checkboxess)
                .filter(i => i.checked)
                .map(i => i.value)
            for (let i = 0; i < a2s.length; i++) {
                if (a2s[i].checked == true)
                    thuonghiendachons.push(a2[i].value)
            }
            var a3s = document.getElementsByClassName("giaban")
            var giabandachons = []
            for (let i = 0; i < a3s.length; i++) {
                if (a3s[i].checked == true)
                    giabandachons.push(a3s[i].value)
            }
            hienDTs(thuonghiendachons, giabandachons)
        })
    });








    console.log(tenDT)



    //an hien theo list va grid

    var anlist = document.querySelector("#list")
    var angrids = document.querySelector("#grid")
    var an1 = document.querySelector(".an")
    var an2 = document.querySelector(".an2")
    anlist.addEventListener("click", function() {
        an1.classList.add("hien")
        an2.classList.remove("hien")
    })
    angrids.addEventListener("click", function() {
        an2.classList.add("hien")
        an1.classList.remove("hien")
    })





}

function AboutController() {

    document.title = 'About Us';


    const tabs = document.querySelectorAll(".tab-click");
    const panes = document.querySelectorAll(".tab-pane");
    const tabActive = document.querySelector(".tab-click.active");
    const boder_buttom = document.querySelector(".tabs .boder-buttom");
    requestIdleCallback(function() {
        boder_buttom.style.left = tabActive.offsetLeft + "px";
        boder_buttom.style.width = tabActive.offsetWidth + "px";
    });
    tabs.forEach(function(tab, index) {
            const pane = panes[index];

            tab.onclick = function() {
                document.querySelector(".tab-click.active").classList.remove("active");
                document.querySelector(".tab-pane.active").classList.remove("active");

                boder_buttom.style.left = this.offsetLeft + "px";
                boder_buttom.style.width = this.offsetWidth + "px";

                this.classList.add("active");
                pane.classList.add("active");
            };
        })
        // modal
    const btns = document.querySelectorAll("[data-target]");
    const close_modals = document.querySelectorAll(".close-modals");
    const overlay = document.getElementById("overlay");

    btns.forEach((btns1) => {
        btns1.addEventListener("click", () => {
            document.querySelector(btns1.dataset.target).classList.add("active1");
            overlay.classList.add("active1");
        });
    });

    close_modals.forEach((btns1) => {
        btns1.addEventListener("click", () => {
            const modal = btns1.closest(".modals");
            modal.classList.remove("active1");
            overlay.classList.remove("active1");
        });
    });

    window.onclick = (event) => {
        if (event.target == overlay) {
            const modals = document.querySelectorAll(".modals");
            modals.forEach((modal) => modal.classList.remove("active1"));
            overlay.classList.remove("active1");
        }
    };
    // zola
    var zolamodal = document.querySelector(".zola-modal")
    var zalo = document.querySelector(".zalo")
    var xzalo = document.querySelector(".close-x")

    zalo.addEventListener("click", function() {
        console.log(123)
        zolamodal.classList.remove('no-closed')
        zolamodal.classList.toggle('no-closed1')
        document.getElementById("focus").focus();
    })
    xzalo.addEventListener("click", function() {
            zolamodal.classList.add('no-closed1')
        })
        // nav scroll

    window.onscroll = function() {
        myFunction()
    };

    function myFunction() {
        if (document.documentElement.scrollTop > 50) {
            document.getElementsByTagName("nav")[0].style.background = "#222732";
        } else {
            document.getElementsByTagName("nav")[0].style.background = "linear-gradient(180deg, #000000f0, transparent";
        }
    }
}



var arrDT_origin = [{
        tenDT: "BMW i8",
        gia: 150,
        hinh: "https://img.tinxe.vn/resize/1000x-/2020/06/09/XForF7yt/gia-xe-bmw-i8-4-1779.jpg",
        imageModal1: 'https://img.tinbanxe.vn/images/bmw/bmw%20i8/ANHDAIDIEN2020_24.jpg',
        imageModal2: 'https://nld.mediacdn.vn/thumb_w/540/2016/img20160415181920864.jpg',
        thuonghieu: "BMW",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2021',



    },
    {
        tenDT: "BMW X6",
        gia: 200,
        hinh: "https://hips.hearstapps.com/hmg-prod/images/2023-bmw-x6-front-1658771739.jpg?crop=0.700xw:0.590xh;0.279xw,0.390xh&resize=1200:*",
        imageModal1: 'https://tinoto.net/wp-content/uploads/2021/06/18_danh-gia-xe-bmw-x6-2020.jpg',
        imageModal2: 'https://muaxegiatot.vn/wp-content/uploads/2021/07/duoi-xe-bmw-x6-2020-the-he-moi-muaxegiatot-com.jpg',
        thuonghieu: "BMW",
        KieuDang: 'SUV',
        DongCo: '300 HP',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2021',
    },
    {
        tenDT: "BMW 550i",
        gia: 230,
        hinh: "https://media.vov.vn/uploaded/mgexs9y4vchrwhdtzaag/2020_05_28/1_JWOT.jpg",
        imageModal1: 'https://znews-photo.zingcdn.me/w660/Uploaded/bgtngt/2020_05_28/front_view_carbuzz_713053_1600.jpg',
        imageModal2: 'https://tuvanmuaxe.vn/upload/upload_img/images/BMW-5-Series-2017-tuvanmuaxe_vn-29(1).jpg',
        thuonghieu: "BMW",
        KieuDang: 'Sedan',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2022',
    },
    {
        tenDT: "BMW X3",
        gia: 90,
        hinh: "https://danchoioto.vn/wp-content/uploads/2020/12/bmw-x3-la-mau-xe-suv-thuoc-phan-khuc-5-cho-gam-cao-co-nho.jpg",
        imageModal1: 'https://dailyauto.vn/wp-content/uploads/2019/10/bmw-x3-18.jpg',
        imageModal2: 'https://xetv.vn/wp-content/uploads/2021/02/bmw-x3-2019-u%CC%9Baqa.jpg  ',
        thuonghieu: "BMW",
        KieuDang: 'SUV',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2022',
    },
    {
        tenDT: "Merc c200",
        gia: 120,
        hinh: "https://static.carmudi.vn/files/model-photo/444/photo/620e8c0d546ca_E-200.jpg",
        imageModal1: 'https://mbaauto.vn/wp-content/uploads/2019/12/Mercedes-C200-Exclusive-2020-mbaauto-vietnam-1.jpg',
        imageModal2: 'https://picar.vn/wp-content/uploads/2021/05/danh-gia-ngoai-that-xe-mercedes-c200-2021.jpg',
        thuonghieu: "MERC",
        KieuDang: 'Sedan',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2021',

    },
    {
        tenDT: "G63",
        gia: 520,
        hinh: "http://hcauto.com.vn/admin/sanpham/4420cb4bf8a409fa50b5_886_anh1.jpg",
        imageModal1: 'https://hcauto.com.vn/admin/sanpham/e2e5278e1461e53fbc70_886_anhkhac11.jpg',
        imageModal2: 'https://autopro8.mediacdn.vn/2021/9/1/24076624619955001806103027218052266629503946n-16304836404421729094688.jpg',
        thuonghieu: "MERC",
        KieuDang: 'SUV',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2022',
    },
    {
        tenDT: "S650",
        gia: 700,
        hinh: "https://static.carmudi.vn/otosvn/images/media/2020-11/SE6wc3OifU.jpg",
        imageModal1: 'https://cdn-img.thethao247.vn/upload/namvu/2020/05/06/chi-tiet-mercedes-s650-1.jpg',
        imageModal2: 'https://mb.dkn.tv/wp-content/uploads/2017/12/maybach.jpg',
        thuonghieu: "MERC",
        KieuDang: 'Sedan',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2022',
    },
    {
        tenDT: "PORSCHE 911",
        gia: 350,
        hinh: "https://porsche-vietnam.vn/wp-content/uploads/2019/10/modelseries-911carrera992-outdoor-22-960x540.jpg",
        imageModal1: 'https://porsche-vietnam.vn/wp-content/uploads/2019/10/modelseries-911carrera992-outdoor-32-960x540.jpg',
        imageModal2: 'https://porsche-vietnam.vn/wp-content/uploads/2019/10/modelseries-911carrera992-outdoor-07-960x540.jpg',
        thuonghieu: "PORSCHE",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2021',
    },
    {
        tenDT: "PORSCHE 718",
        gia: 300,
        hinh: "https://porsche-vietnam.vn/wp-content/uploads/2013/11/jdp-2016-982-718-c7-gallery-exterior-16-960x540.jpg    ",
        imageModal1: 'https://porsche-vietnam.vn/wp-content/uploads/2013/11/jdp-2016-982-718-c7-gallery-exterior-15-960x540.jpg',
        imageModal2: 'https://porsche-vietnam.vn/wp-content/uploads/2013/11/jdp-2016-982-718-c7-wallpaper-1-960x540.jpg',
        thuonghieu: "PORSCHE",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2022',
    },
    {
        tenDT: "PORSCHE TAYCAN",
        gia: 325,
        hinh: "https://porsche-vietnam.vn/wp-content/uploads/2019/09/modelseries-j1-taycan-outdoor-08-960x540.jpg",
        imageModal1: 'https://porsche-vietnam.vn/wp-content/uploads/2019/09/modelseries-j1-taycan-interior-04-960x540.jpg    ',
        imageModal2: 'https://porsche-vietnam.vn/wp-content/uploads/2019/09/modelseries-j1-taycan-interior-03-960x540.jpg',
        thuonghieu: "PORSCHE",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2020',
    },
    {
        tenDT: "lamborghini urus",
        gia: 434,
        hinh: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2021/09_21/s_gateway_urus_02.jpg",
        imageModal1: 'https://img.tinbanxe.vn/images/bmw/bmw%20i8/ANHDAIDIEN2020_24.jpg',
        imageModal2: 'https://znews-photo.zingcdn.me/w660/Uploaded/qfrqy/2016_05_04/BMWi8Roadster.jpg',
        thuonghieu: "lamborghini",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2019',
    },
    {
        tenDT: "lamborghini aventador",
        gia: 337,
        hinh: "https://giaxeoto.vn/admin/upload/images/lamborghini-aventador-1603436146.jpg",
        imageModal1: 'https://img.tinbanxe.vn/images/bmw/bmw%20i8/ANHDAIDIEN2020_24.jpg',
        imageModal2: 'https://znews-photo.zingcdn.me/w660/Uploaded/qfrqy/2016_05_04/BMWi8Roadster.jpg',
        thuonghieu: "lamborghini",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '2',
        NamSX: '2021',
    },
    {
        tenDT: "lamborghini veneno",
        gia: 556,
        hinh: "https://choxe.vn/blog/wp-content/uploads/2019/06/sieu-xe-hiem-va-dat-gia-nhat-cua-nha-sieu-bo-lamborghini-veneno-roadster-1.jpg",
        imageModal1: 'https://img.tinbanxe.vn/images/bmw/bmw%20i8/ANHDAIDIEN2020_24.jpg',
        imageModal2: 'https://znews-photo.zingcdn.me/w660/Uploaded/qfrqy/2016_05_04/BMWi8Roadster.jpg',
        thuonghieu: "lamborghini",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '2',
        NamSX: '2021',
    }

    ,
    {
        tenDT: "ferrari roma",
        gia: 442,
        hinh: "https://vcdn-vnexpress.vnecdn.net/2021/05/23/ferrari-roma-vne-1621743619-16-7684-5018-1621744262.jpg",
        imageModal1: 'https://img.tinbanxe.vn/images/bmw/bmw%20i8/ANHDAIDIEN2020_24.jpg',
        imageModal2: 'https://znews-photo.zingcdn.me/w660/Uploaded/qfrqy/2016_05_04/BMWi8Roadster.jpg',
        thuonghieu: "ferrari",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '2',
        NamSX: '2021',
    },
    {
        tenDT: "ferrari laferrari",
        gia: 338,
        hinh: "https://vnluxury.vn/vnlux-media/22/5/10/ferrari-laferrari-aperta-1.jpg",
        imageModal1: 'https://img.tinbanxe.vn/images/bmw/bmw%20i8/ANHDAIDIEN2020_24.jpg',
        imageModal2: 'https://znews-photo.zingcdn.me/w660/Uploaded/qfrqy/2016_05_04/BMWi8Roadster.jpg',
        thuonghieu: "ferrari",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2021',
    },
    {
        tenDT: "ferrari ",
        gia: 448,
        hinh: "https://wrapstylevietnam.com/Uploads/images/WS-Ferrari%20SF90%20Stradale%20%C4%91%E1%BB%99%20Novitec%20(9).JPG",
        imageModal1: 'https://img.tinbanxe.vn/images/bmw/bmw%20i8/ANHDAIDIEN2020_24.jpg',
        imageModal2: 'https://znews-photo.zingcdn.me/w660/Uploaded/qfrqy/2016_05_04/BMWi8Roadster.jpg',
        thuonghieu: "ferrari",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2021',
    },
    {
        tenDT: "bugatti chiron",
        gia: 170,
        hinh: "https://vcdn-vnexpress.vnecdn.net/2022/04/07/Bugatti-Chiron-1-7951-1649299072.jpg",
        imageModal1: 'https://img.tinbanxe.vn/images/bmw/bmw%20i8/ANHDAIDIEN2020_24.jpg',
        imageModal2: 'https://znews-photo.zingcdn.me/w660/Uploaded/qfrqy/2016_05_04/BMWi8Roadster.jpg',
        thuonghieu: "bugatti",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2021',
    },
    {
        tenDT: "ferrari laferrari",
        gia: 125,
        hinh: "https://image-us.24h.com.vn/upload/2-2019/images/2019-05-04/Bugatti-La-Voiture-Noire-gia-gan-19-trieu-do-se-ve-tay-Cristiano-Ronaldo-2-1556943525-538-width660height371.jpg",
        imageModal1: 'https://img.tinbanxe.vn/images/bmw/bmw%20i8/ANHDAIDIEN2020_24.jpg',
        imageModal2: 'https://znews-photo.zingcdn.me/w660/Uploaded/qfrqy/2016_05_04/BMWi8Roadster.jpg',
        thuonghieu: "bugatti",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2021',
    },
    {
        tenDT: "bugatti veyron ",
        gia: 700,
        hinh: "https://baodautu.vn/files/2014/07/11/bugatti-veyron-hybrid-co-kha-nang-ra-mat-nam-2015-1.jpg",
        imageModal1: 'https://img.tinbanxe.vn/images/bmw/bmw%20i8/ANHDAIDIEN2020_24.jpg',
        imageModal2: 'https://znews-photo.zingcdn.me/w660/Uploaded/qfrqy/2016_05_04/BMWi8Roadster.jpg',
        thuonghieu: "bugatti",
        KieuDang: 'Sport',
        DongCo: 'V8 3.9l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '5',
        NamSX: '2021',
    },
    {
        tenDT: "ROLL ROY PHANTOM",
        gia: 900,
        hinh: "https://image-us.24h.com.vn/upload/2-2022/images/2022-06-03/av-1654241100-739-width740height555.jpg",
        imageModal1: 'https://vcdn-vnexpress.vnecdn.net/2021/04/28/Rolls-Royce-Phantom-Oribe-Bai-6555-1619601514.jpg',
        imageModal2: 'https://baokhanhhoa.vn/dataimages/202205/original/images5504674_1.jpg',
        thuonghieu: "Roll-Roy",
        KieuDang: 'Sedan',
        DongCo: 'V12 6,8l',
        HopSo: 'AT',
        DungTich: '6.749cc',
        ChoNgoi: '4',
        NamSX: '2022',



    }, {
        tenDT: "ROLL ROY GHOST",
        gia: 999,
        hinh: "https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/w860/Uploaded/abhuuwo/2021_09_21/Rolls_Royce_Ghost_EWB_2021_Zing_01.jpg",
        imageModal1: 'https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/w860/Uploaded/abhuuwo/2021_09_21/Rolls_Royce_Ghost_EWB_2021_Zing_03.jpg',
        imageModal2: 'https://cms-i.autodaily.vn/du-lieu/2017/07/17/Ghost/rolls-royce-ghost-8.jpg',
        thuonghieu: "Roll-Roy",
        KieuDang: 'Sedan',
        DongCo: 'V12 6,75l',
        HopSo: 'AT',
        DungTich: '6.498cc',
        ChoNgoi: '4',
        NamSX: '2021',



    },
    {
        tenDT: "ROLL ROY DAWN",
        gia: 900,
        hinh: "https://giaxeoto.vn/admin/upload/images/rolls-royce-dawn-1603183322.jpg",
        imageModal1: 'https://thegioirollsroyce.com/wp-content/uploads/2021/09/roll-royce-dawn-black-badge.jpg',
        imageModal2: 'https://thegioirollsroyce.com/wp-content/uploads/2021/09/rolls-royce-dawn-cu.jpg',
        thuonghieu: "Roll-Roy",
        KieuDang: 'Sport',
        DongCo: 'V12 6.6l',
        HopSo: 'AT',
        DungTich: '6.598cc',
        ChoNgoi: '4',
        NamSX: '2020',



    },
]; // data origin

var arrDT = arrDT_origin; // data filter

const FilterProduct = (value) => {
    if (value === '') {
        arrDT = arrDT_origin;
        return;
    }
    arrDT = arrDT_origin.filter(item => item.tenDT.toLowerCase().indexOf(value) > -1);
}

function showMyModalprd(hinhs, tenDTs, gias, KieuDangs, imagesModal1, imagesModal2, DongCos, HopSos, DungTichs, ChoNgois, NamSXs) {
    document.querySelector('#myModal img').src = hinhs;
    document.querySelector('#myModal .modal-title-product').textContent = tenDTs;
    document.querySelector('#myModal .modal-content-Price').textContent = 'Price' + ' :$' + gias;
    document.querySelector('#myModal .modal-content-Kieudang').textContent = 'Type' + ' :' + KieuDangs;
    document.querySelector('#myModal .list-group-image1 img').src = imagesModal1;
    document.querySelector('#myModal .list-group-image2 img').src = imagesModal2;
    document.querySelector('#myModal .modal-content-Dongco').textContent = 'Engine' + ' :' + DongCos;
    document.querySelector('#myModal .modal-content-Hopso').textContent = 'Transmission' + ' :' + HopSos;
    document.querySelector('#myModal .modal-content-Dungtich').textContent = 'Capacity' + ' :' + DungTichs;
    document.querySelector('#myModal .modal-content-ChoNgoi').textContent = 'Chair' + ' :' + ChoNgois;
    document.querySelector('#myModal .modal-content-NamSx').textContent = 'Year' + ' :' + NamSXs;
    document.querySelector('#img-bottom img').src = hinhs;
    document.querySelector('#img-bottom .list-group-image1 img').src = imagesModal1;
    document.querySelector('#img-bottom .list-group-image2 img').src = imagesModal2;






}


//preloader
$(window).load(function() {
    $('#preloader').fadeOut(2000, function() {
        $(this).remove();
    });
});



// search product by enter
$("#MyInput").on("keypress", function(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        const url_search = location.href.split('?keyword=')[0];
        let arr_url = url_search.split('/');
        arr_url[arr_url.length - 1] = 'vehice';
        location.href = `${arr_url.join('/')}?keyword=${e.target.value.toLowerCase()}`;
        return false;
    }
});
// search product by enter click

$("#submit-filter").click(function() {
    const value = $("#MyInput")[0].value;
    const url_search = location.href.split('?keyword=')[0];
    let arr_url = url_search.split('/');
    arr_url[arr_url.length - 1] = 'vehice';
    location.href = `${arr_url.join('/')}?keyword=${value.toLowerCase()}`;

})

function format_curency(a) {
    a.value = a.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}






