// Wait for the page to load prior to setting jQuery functions
$(document).ready(function () {
  // Add Class
  $("#addClass > button.btn.btn-success").click(function () {
    $("#addClass > p").addClass("text-success");
    if ($("#addClass > div > button")[0].style.display == "inline-block")
      return;
    $("#addClass > div > button").toggle();
  });
  $("#addClass > div > button").click(function () {
    $("#addClass > p").removeClass("text-success");
    $("#addClass > div > button").toggle();
  });
  // Slide Toggle
  $("#slideToggle > button.btn.btn-success").click(function () {
    $("#slideToggle > p").slideToggle();
  });
  // Append
  $("#appendBtn").click(function () {
    let id = $(".appendData").length + 1;
    let timeStamp = Date.now();
    $("#accordion-1 table").append(`
    <tr class="appendData">
    <td>${id}</td>
    <td>${timeStamp}</td>
    </tr>
    `);
    if ($("#appendRemove")[0].style.display != "inline-block") {
      $("#appendRemove").toggle();
    } else {
      $("#appendRemove").click(function () {
        $(".appendData").remove();
        $("#appendContent .btn.btn-danger").toggle();
      });
    }
  });
  // Click
  $("#clickBtn1").click(function () {
    $("#clickAction p:first").toggle();
    $("#clickAction p.text-right").toggle();
    $("#clickBtn2").toggle();
    $("#clickBtn1").toggle();
  });
  $("#clickBtn2").click(function () {
    $("#clickAction p:first").toggle();
    $("#clickAction p.text-right").toggle();
    $("#clickBtn2").toggle();
    $("#clickBtn1").toggle();
  });
  // Hide
  $("#hide").click(() => {
    $("#hideAlert").hide();
    $("#hide").hide();
    $("#hideRemove").show();
  });
  $("#hideRemove").click(() => {
    $("#hideAlert").show();
    $("#hide").show();
    $("#hideRemove").hide();
  });
  // Show
  $("#show").click(() => {
    $("#showAlert").show();
    $("#show").hide();
    $("#showRemove").show();
  });
  $("#showRemove").click(() => {
    $("#showAlert").hide();
    $("#show").show();
    $("#showRemove").hide();
  });
  // SlideDown
  $("#slideDownBtn").click(() => {
    $("#slideDownBtnReset").show();
    $("#slideDownP").slideDown();
    $("#slideDownBtn").hide();
  });
  $("#slideDownBtnReset").click(() => {
    $("#slideDownBtnReset").hide();
    $("#slideDownP").hide();
    $("#slideDownBtn").show();
  });
  // SlideUp
  $("#slideUpBtn").click(() => {
    $("#slideUpBtnReset").show();
    $("#slideUpP").slideUp();
    $("#slideUpBtn").hide();
  });
  $("#slideUpBtnReset").click(() => {
    $("#slideUpBtnReset").hide();
    $("#slideUpP").show();
    $("#slideUpBtn").show();
  });
  // FadeIn
  $("#fadeInBtn").click(() => {
    $("#fadeInBtnReset").show();
    $("#fadeInP").fadeIn();
    $("#fadeInBtn").hide();
  });
  $("#fadeInBtnReset").click(() => {
    $("#fadeInBtnReset").hide();
    $("#fadeInP").hide();
    $("#fadeInBtn").show();
  });
  // FadeOut
  $("#fadeOutBtn").click(() => {
    $("#fadeOutBtnReset").show();
    $("#fadeOutP").fadeOut();
    $("#fadeOutBtn").hide();
  });
  $("#fadeOutBtnReset").click(() => {
    $("#fadeOutBtnReset").hide();
    $("#fadeOutP").show();
    $("#fadeOutBtn").show();
  });
  // Before
  $("#beforeBtn").click(() => {
    $("#beforeBtnReset").show();
    $("#beforeP").before(`<p class="before">Paragraph placed Before</p>`);
    $("#beforeBtn").hide();
  });
  $("#beforeBtnReset").click(() => {
    $("#beforeBtnReset").hide();
    $(".before").remove();
    $("#beforeBtn").show();
  });
  // After
  $("#afterBtn").click(() => {
    $("#afterBtnReset").show();
    $("#afterP").after(`<p class="after">Paragraph placed After</p>`);
    $("#afterBtn").hide();
  });
  $("#afterBtnReset").click(() => {
    $("#afterBtnReset").hide();
    $(".after").remove();
    $("#afterBtn").show();
  });
  // HTML
  $("#htmlBtn").click(() => {
    $("#htmlBtnReset").show();
    $("#htmlP").html(`
      <div id="htmlP">
        <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation"><a class="nav-link active" role="tab" data-toggle="tab" href="#tab-1">Tab 1</a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-toggle="tab" href="#tab-2">Tab 2</a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-toggle="tab" href="#tab-3">Tab 3</a></li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane active" role="tabpanel" id="tab-1">
                <p>Content for tab 1.</p>
            </div>
            <div class="tab-pane" role="tabpanel" id="tab-2">
                <p>Content for tab 2.</p>
            </div>
            <div class="tab-pane" role="tabpanel" id="tab-3">
                <p>Content for tab 3.</p>
            </div>
        </div>
    </div>
      `);
    $("#htmlBtn").hide();
  });
  $("#htmlBtnReset").click(() => {
    $("#htmlBtnReset").hide();
    $("#htmlP").html(
      `<p id="htmlP">Click the button to change this Paragraph with Tabs<br /></p>`
    );
    $("#htmlBtn").show();
  });
  // Attr
  $("#attrBtn").click(() => {
    $("#attrBtnReset").show();
    $("#attrImg").attr("width", "400");
    $("#attrBtn").hide();
  });
  $("#attrBtnReset").click(() => {
    $("#attrBtnReset").hide();
    $("#attrImg").attr("width", "200");
    $("#attrBtn").show();
  });
  // Val
  $("#valBtn").click(() => {
    $("#valBtnReset").show();
    $("#valInput").val("CODING DOJO");
    $("#valBtn").hide();
  });
  $("#valBtnReset").click(() => {
    $("#valBtnReset").hide();
    $("#valInput").val("");
    $("#valBtn").show();
  });
  // Text
  $("#textBtn").click(() => {
    $("#textBtnReset").show();
    $("#textP").text("CODING DOJO");
    $("#textBtn").hide();
  });
  $("#textBtnReset").click(() => {
    $("#textBtnReset").hide();
    $("#textP").text("Click the button to change the Text of this Paragraph ");
    $("#textBtn").show();
  });
});
