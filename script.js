jQuery(function () {
  const required = [];
  $("#submit").on("click", () => {
    const name = $("#name");
    const email = $("#email");
    const phone = $("#phone");
    const messageArea = $("#message");

    required.push(name, email, phone);
    required.forEach((el) => {
      if (el.val() === "") {
        messageArea.text(`Please fill out the required fields`);
        messageArea.addClass("warning");
        el.prev().addClass("warning");
      }
      if (el.val() !== "") {
        messageArea.text("");
        messageArea.removeClass("warning");
        el.prev().removeClass("warning");
      }
    });
    if (!$("label").hasClass("warning")) {
      $("#form").remove();
      $("#pre-form h2").text("Thanks for your feedback!");
    }
  });
});
