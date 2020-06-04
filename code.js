$(() => {
  let obniz = new Obniz("2180-0676");
  obniz.onconnect = async () => {
    let led = obniz.wired("LED", { anode: 0, cathode: 1 });

    $("#on").click(e => {
      led.on();
      $("#on").prop("disabled", true);
      $("#off").prop("disabled", false);
    });
    $("#off").click(e => {
      led.off();
      $("#on").prop("disabled", false);
      $("#off").prop("disabled", true);
    });
  };
});
