const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    "Hallo, Perkenalkan saya adalah Hantu Apps yang dikirim A'a Aul. Bagaimana keadaanmu Sekarang??",
    `Ohh ${data?.kabar}, Apakah sampeyan mau untuk dinner nanti malam? ?`,
    `Ohh ${data?.mau}, okedeh langsung Wasap aja ya, orangnya udah nungguin dari kemarin loo..?`,
    // `uww sama dong aku juga hobi ${data?.hobi}, btw udah makan belum?`,
    // `ohh ${data?.makan}, ya udah oke`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []


function botStart() {
  if(jawaban.value < 1) return alert("Silakan isi jawaban dulu ygy")
  init++
  
  if (init === 1) {
    setTimeout(botDelay({kabar : jawaban.value}))

  } else if (init === 2) {
    setTimeout(botDelay({mau : jawaban.value}))

  // } else if (init === 3) {
  //   setTimeout(botDelay({hobi : jawaban.value}))

  // } else if (init === 4) {
  //   setTimeout(botDelay({makan : jawaban.value}))

  } else if (init === 3) {
    finishing()
  }

  else {
    botEnd()
  }

}

function botDelay(jawabanUser){
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  console.log({usersData : usersData})
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
  },[1000])
  usersData.push(jawaban.value)
  jawaban.value = ""
}

function finishing(){
  pertanyaan.innerHTML = `Terima Kasih ${usersData [0]} telah berkunjung...`;
  jawaban.value = "siap suwun"

}

function botEnd(){
  alert(`Terima Kasih ${usersData[0]} sudah berkunjung, Anda akan diarahkan ke halaman utama.`)
  window.location.reload();
}