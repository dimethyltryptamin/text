var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."
var innyDinozaur = "triceratops"
text = text.replace("Velociraptor", innyDinozaur.toUpperCase());
text = text.substr(0, text.length / 2);
console.log(text);
