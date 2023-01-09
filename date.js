exports.getDate = function() {

    const today = new Date();
      const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
      };
    
      const day = today.toLocaleDateString("pt-br", options);
      return day
}

exports.capitalizeFirstWord = function(word) {
    const splitAt = word.split(" ");
    for (var i = 0; i < splitAt.length; i++) {
      if (splitAt[i] != "de") {
        splitAt[i] = splitAt[i].charAt(0).toUpperCase() + splitAt[i].slice(1);
      }
    }
    const finalText = splitAt.join(" ");
    return finalText;
  }
  