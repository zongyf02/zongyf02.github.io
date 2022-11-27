var chatMessages = [
  {
    msg: "Hey, have you heard of <a href='https://github.com/zongyf02/mlax' target='_blank'>mlax</a>?",
    delay: 500,
    align: "right",
  },
  {
    msg: "No, what is it?",
    delay: 1000,
    align: "left",
  },
  {
    msg: "It's a new pure functional neural-network library built on top on Google JAX.",
    delay: 2000,
    align: "right",
  },
  {
    msg: "Wait, how is it different from Flax or Haiku?",
    delay: 1000,
    align: "left",
  },
  {
    msg: "mlax decouples model weights, hyperparamters, and functions. So it's fully compatible with JAX's native transformations.",
    delay: 2000,
    align: "right",
  },
  {
    msg: "Like, you can just use jax.jit, jax.grad on the layers. If you know JAX, you understand mlax already.",
    delay: 2000,
    align: "right",
  },
  {
    msg: "Wow, that's pretty cool! I'll check it out.",
    delay: 1000,
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
