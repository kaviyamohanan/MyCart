//product array
const myProducts = [
    {
      productId: 1,
      prodName: "T-shirt",
      prodPrice: 15,
      prodImageUrl: "./images/products/1/p2.jpeg",
      rating: 4.0,
    },
    {
      productId: 2,
      prodName: "Jacket",
      prodPrice: 50,
      prodImageUrl: "./images/products/2/p1.webp",
      rating: 4.4,
    },
    {
      productId: 10,
      prodName: "Cap",
      prodPrice: 74,
      prodImageUrl: "./images/products/3/p2.jpeg",
      rating: 4.8,
    },
  ];
  


// *******Start*******Product listing******************
document.addEventListener("DOMContentLoaded", function () {
  const productListContainer = document.getElementById("products_about");

  const box_div = document.createElement("div");
  box_div.classList.add("box_div");

  const box_ul = document.createElement("ul");
  box_ul.classList.add("box_ul");

  let inner_content = "";

  for (const prod in myProducts) {
    let p_id = myProducts[prod].productId;
    inner_content += `<li class='li_elm' id = '${myProducts[prod].productId}' >
            <img src='${myProducts[prod].prodImageUrl}' alt=''/>
            <p class='p_name'>${myProducts[prod].prodName}</p>
            <div class="rating">
            <span class=" star ${p_id}star" id="${p_id}star1">★</span>
            <span class="star ${p_id}star" id="${p_id}star2">★</span>
            <span class="star ${p_id}star" id="${p_id}star3">★</span>
            <span class="star ${p_id}star" id="${p_id}star4">★</span>
            <span class="star ${p_id}star" id="${p_id}star5">★</span>
          </div> 
            <p>Price: <strong>$${myProducts[prod].prodPrice}/Item</strong></p>
            <p>Availability: <strong>In stock</strong></p>
            <p>Rating: =<strong>${myProducts[prod].rating}/5</strong>
           </p>
           <div class='less-info'><p class='p_about'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi vitae itaque perspiciatis? Ab tempora, aut maxime adipisci quos ullam deserunt delectus error...</p><a href='#' class="more-info-button" onclick=''>See more</a></div>
            
            <div class="more-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa modi vitae itaque perspiciatis? Ab tempora, aut maxime adipisci quos ullam deserunt delectus error voluptatibus iusto in unde optio obcaecati molestias vero velit. Accusantium quae doloremque laboriosam odit alias ducimus libero earum quis porro, iure optio amet eveniet a aut atque neque sint illum consequatur quasi ea facilis quaerat eaque temporibus iusto? Dolore architecto vero repellendus repudiandae nesciunt. Ex excepturi laboriosam quod officiis doloremque corrupti nostrum magnam assumenda adipisci soluta numquam maiores, dolorum id, rerum incidunt sapiente recusandae voluptates earum quo ipsam in iste. Quis repellat saepe eligendi tempora provident ipsam, quae optio ducimus voluptate repellendus iure est odio distinctio.</p>
            <a href='#' class="less-info-button" onclick=''>See less</a>
            </div>
            </li>`;
  }

  box_ul.innerHTML = inner_content;
  box_div.appendChild(box_ul);
  productListContainer.appendChild(box_div);
// rating start coloring code
  for (const prod in myProducts) {
    let p_id = myProducts[prod].productId;
    var rating = myProducts[prod].rating;
    var classname = p_id + "star";
    var stars = $("." + classname);
    console.log(stars);
    for (var i = 0; i < Math.floor(rating); i++) {
      console.log($(stars[i]));
      console.log(i);
      $(stars[i]).addClass("filled");
    }

    if (rating % 1 > 0) {
      // Fill a half star
      var halfStar = $("<span class='star filled'>★</span>");
      $(stars[Math.floor(rating)]).replaceWith(halfStar);
    }
  }

//   window.validatePhoneNumber = validatePhoneNumber;

});


$(document).ready(function () {
    //see more show/hide 
  $(".more-info-button").on("click", function () {
    var maptop = $(this).parent().next(".more-info").offset().top;
    $('html, body').animate({
        scrollTop: '+=' + (maptop - $(window).scrollTop())
    }, 500); 
    $(this).parent().next(".more-info").show();
    $(this).parent().hide();
  });
//see less show/hide 
  $(".less-info-button").on("click", function () {
    $(this).parent().prev(".less-info").show();
    $(this).parent().hide();
    var maptop = $(this).parent().prev(".less-info").offset().top;
    $('html, body').animate({
        scrollTop: '+=' + (maptop - $(window).scrollTop())
    }, 500); 
   
  });


  
});





