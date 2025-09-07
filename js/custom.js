// Aos
AOS.init();

setTimeout(() => {
  $(".loading").fadeOut(1000);
}, 2000);

if ($(".datepicker").length) {
  $(function () {
    $(".datepicker").datepicker();
  });
}
window.onload = function () {
  setTimeout(() => {
    $(".header-pages").addClass("active");
  }, 300);
};

if ($(".not-found").length) {
  if (document.querySelectorAll("#myTable .dropdown-menu").length === 0) {
    document.querySelector(".main-table").style.display = "none";
    document.querySelector(".not-found").style.display = "flex";
  }
}



let inputCheck = document.querySelectorAll(".input-check");

let myInputs = inputCheck.forEach((element) => {
  element.addEventListener('change', function (e) {
    if (document.getElementById("input-send").checked) {
      document.querySelector(".main-send-gift").style.display = 'block';
    }
    else {
      document.querySelector(".main-send-gift").style.display = 'none';

    }
  });
})











if ($("#slider-1").length) {
  $("#slider-1").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    rtl: true,
    autoplay: true,
    dots: true,
    dotsData: true,
    smartSpeed: 2000,
    responsiveClass: true,
    responsive: {
      1400: {
        item: 1,
      },
    },
  });
}

$(".remove_mune").click(function () {
  $(".side-bar").removeClass("active");
  $(".bg_menu").removeClass("active");
});

function open() {
  $(".navicon").addClass("is-active");
  $(".side-bar").addClass("active");
  $("#times-ican").addClass("active");
  $(".bg_menu").addClass("active");
}

function close() {
  $(".navicon").removeClass("is-active");
  $(".side-bar").removeClass("active");
  $("#times-ican").removeClass("active");
  $(".bg_menu").removeClass("active");

  $(".remove-mune").click(function () {
    $(".side-bar").removeClass("active");
    $(".bg_menu").removeClass("active");
    $(".times-ican").removeClass("active");
  });
}

$("#times-ican").click(function () {
  if ($(this).hasClass("active")) {
    close();
  } else {
    open();
  }
});

$(".remove-mune").click(function () {
  $(".side-bar").removeClass("active");
  $(".bg_menu").removeClass("active");
  $(".times-ican").removeClass("active");
  $(".navicon").removeClass("is-active");
});

$(".side-bar a").click(function () {
  e.preventDefault();
});

var $winl = $(window); // or $box parent container
var $boxl = $(
  ".side-bar, #times-ican , .click-dropdown , .dropdowm-language ,.click-element , .language p ,.dropdowm-element , .click-element1  , .click-element1-mune , .click-element-mune , .dropdowm-element-mune"
);
$winl.on("click.Bst", function (event) {
  if (
    $boxl.has(event.target).length === 0 && //checks if descendants of $box was clicked
    !$boxl.is(event.target) //checks if the $box itself was clicked
  ) {
    close();
  }
});

// upload file ==============

$("#upload-file").change(function (e) {
  $("#file-text").text(e.target.files[0].name);
});

$("#upload1").change(function (e) {
  $("#show-src").text(e.target.files[0].name);
});
// chenge img prpfile

$(document).ready(function () {
  let readURLprofile = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $("#img-show").addClass("active");
        $("#img-show").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  $("#upload-img").on("change", function () {
    readURLprofile(this);
  });
});

$(document).ready(function () {
  let readURLprofile = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $("#img-show1").addClass("active");
        $("#img-show1").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  $("#upload-payment").on("change", function () {
    readURLprofile(this);
  });
});

// $("#input-send").addEventListener("chenge", function () {
//   if (document.getElementById("input-send").checked) {
//     document.querySelector(".main-send-gift").style.display = "block";
//   } else {
//     document.querySelector(".main-send-gift").style.display = "none";
//   }
// });



// add List of requirements

function addList(requirementsList) {
  let div = document.createElement('div');
  div.className = 'list-item';
  div.innerHTML = `
        <div class="list-item-input">
            <input type="text" placeholder="هل تم الحصول علي تقرير المشتريات ؟">
            <div class="list-actions">
                <img class="add-list" src="./images/plus-sign.svg" alt="">
                <img class="delete-list" src="./images/delete.svg" alt="">
            </div>
        </div>
  `;
  requirementsList.appendChild(div);
}

// نمر على كل requirements-list ونضيف لها delegation
document.querySelectorAll('.requirements-list').forEach(requirementsList => {
  requirementsList.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-list')) {
      addList(requirementsList);
      console.log("tyuty");

    }

    if (e.target.classList.contains('delete-list')) {
      console.log("gtttttttttx");

      e.target.closest('.list-item').remove();
    }
  });
});


// side bar minimize

let siderMinBtn = document.querySelectorAll(".nav-toggle");
let mainApp = document.querySelector(".main-app");

siderMinBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      // للشاشات الصغيرة
      mainApp.classList.toggle("nav_open");
    } else {
      // للشاشات الكبيرة
      mainApp.classList.toggle("side-bar-minimize");
    }
  });
});

// لما يتغير حجم الشاشة
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    // لو الشاشة كبيرة نشيل nav_open
    mainApp.classList.remove("nav_open");
  } else {
    // لو الشاشة صغيرة نشيل side-bar-minimize
    mainApp.classList.remove("side-bar-minimize");
  }
});


// 
let navMinBtn = document.querySelector(".nav-toggle-dots");
let mainNav = document.querySelector(".content-app");


navMinBtn.addEventListener("click", () => {
  if (window.innerWidth < 992) {
    // للشاشات الصغيرة
    console.log("ghjhu");

    mainNav.classList.toggle("bar-open");
  } else {
    // للشاشات الكبيرة
    console.log("ghjhuttttttt");
  }
});
