const divs = document.querySelectorAll(".color")
const bodys = document.querySelector("body")


divs.forEach(div => {
  var color = "#" + div.id
  var h2 =  document.createElement("h2")
  h2.innerHTML = color
  if (color === "#fefae0") {
    h2.style.color = "#283618"
  } else if (color === "#dda15e"){
    div.style.height = "36vh"
  }
  div.appendChild(h2)
  div.style.background = `${color}`
});

function AddNextUp() {
  const div = document.createElement("div")
  const brandBody = bodys.className
  div.className = "nextup"
  div.innerHTML = `
   <h1>see more</h1>
   <div class="ff">
    <div class="fl" id="lib"><a href="lib.html"><div></div><img class="l liblogoimg" src="img /lib/logo.png" alt=""></a></div> 
    <div class="fl" id="omar"><a href=""><div></div><img id="omarlogoimg" class="l omarlogoimg" src="img /omar.png" alt=""></a></div> 
    <div class="fl" id="hevest"><a href=""><div></div><img class="l hevestlogoimg" src="img /heaviest.png" alt=""></a></div>
    <div class="fl" id="axis"><a href="omar.html"><div></div><img class="l axislogoimg" src="img /5.png" alt=""></a></div>
   </div> 
   <style>
        .nextup::before{
         content: "";
         position: absolute;
         top: 0; 
         left: 0;
         width: 100%; 
         height: 100%;  
         opacity: .4; 
         z-index: -1;
         background: fixed url("img /${brandBody + "Bg"}.jpg");
         background-size: cover;
        }
   </style>
   `
  document.body.appendChild(div)

  const brands = document.querySelectorAll(".nextup > .ff > div")
  
  brands.forEach(brand => {
    const brandName = brand.id
    console.log(brandName , brandBody);
    if (brandName === brandBody) {
      const hideThis = document.getElementById(`${brandName}`)
      hideThis.style.display = "none"
    }
  });
}

AddNextUp()

const logo = document.querySelectorAll(".l")
logo.forEach(element => {
  element.addEventListener("mouseover" , ()=>{
    const parent = element.parentElement
    const childdiv = parent.childNodes
    const div = childdiv[0]
    div.style.display = "flex"
    div.style.height = "20vh"
    element.addEventListener("mouseout"  , ()=>{
    div.style.disply = "none"
    div.style.height = ".5vh"
    })
  })
});