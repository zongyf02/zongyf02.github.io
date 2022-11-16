var chatMessages = [
  {
    msg: "Hey have you heard of mlax?",
    delay: 500,
    align: "right",
  },
  {
    msg: "Yes, mlax is a purely functional ML library built with Google JAX.",
    delay: 3000,
    align: "left",
  },
  {
    msg: "Could you give a brief explanation of what that means?",
    delay: 2000,
    align: "right",
  },
  {
    msg: "This means there are no layers, mutations, nor classes. Models are a series of transformations without internal states or side-effects.",
    delay: 3000,
    align: "left",
  },
  {
    msg: "With mlax, you can manage where every variable is stored, dictate how data move between devices, specify where each computation happens, and control the precision and dtype of every single operation, all without any low-level programming knowledge.",
    delay: 2000,
    align: "left",
  },
  {
    msg: "Wow that sounds so cool! I'll be sure to check it out on <a href='https://github.com/zongyf02/mlax' target='_blank'>GitHub</a>!",
    delay: 3000,
    align: "right",
  },
]

var chatDelay = 0
function onRowAdded() {
  $(".chat-container").animate({
    scrollTop: $(".chat-container").prop("scrollHeight"),
  })
}
$.each(chatMessages, function (index, obj) {
  chatDelay = chatDelay + 4000
  chatDelay2 = chatDelay + obj.delay
  chatDelay3 = chatDelay2 + 10
  scrollDelay = chatDelay

  className = "ms" + index
  msginner = ".messageinner-" + className
  spinner = ".sp-" + className
  $(".chat-message-list").append(
    "<li class='message-" +
      obj.align +
      " " +
      className +
      "' hidden>" +
      "<div class='sp-" +
      className +
      "'>" +
      "<span class='spinme-" +
      obj.align +
      "'>" +
      "<div class='spinner'><div id='dot1'></div><div id='dot2'></div><div id='dot3'></div></div></span></div>" +
      "<div class='messageinner-" +
      className +
      "' hidden>" +
      "<span class='message-text'>" +
      obj.msg +
      "</span>" +
      "</div></li>"
  )
  $("." + className)
    .delay(chatDelay)
    .fadeIn()
  $(spinner).delay(chatDelay2).hide(1)
  $(msginner).delay(chatDelay3).fadeIn()
  setTimeout(onRowAdded, chatDelay)
  setTimeout(onRowAdded, chatDelay3)
  chatDelay = chatDelay3
})