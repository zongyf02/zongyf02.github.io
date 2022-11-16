$(document).ready(function () {
  var current = ""
  const $window = $(window)
  const fadeAt = 0
  const zeroAt = -$window.height()
  const $section = $("section")
  const $navLink = document.querySelectorAll(".link")

  function EventHandler() {
    const st = $window.scrollTop()
    $.each($section, function (idx, el) {
      const sectionTop = $(el).offset().top
      if (scrollY >= sectionTop - 200 && current != this.id) {
        current = this.id
        // console.log("sY", scrollY)
        // console.log("sT", sectionTop)
      }
      const secPos = sectionTop - st
      if (secPos < fadeAt) {
        const $ch = $("*", this)
        $.each($ch, function () {
          const top = $(this).offset().top - st
          if (top < fadeAt) {
            let opa = (top - zeroAt) / (fadeAt - zeroAt)
            opa = Math.round((opa + Number.EPSILON) * 100) / 100
            this.style.opacity = opa
          }
        })
      }
    })

    $navLink.forEach((li) => {
      li.classList.remove("active")
      if (li.classList.contains(current)) {
        li.classList.add("active")
      }
    })
  }

  EventHandler() // init before scroll
  $window.on("scroll load resize", EventHandler)
})
