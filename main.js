
anime({
  targets: '.box',
  scale: [
    {value: 1.1, easing: 'easeOutQuad', duration: 500},
    {value: 1.4, easing: 'easeInOutQuad', duration: 1200}
  ],
  translateX: anime.stagger([8,15], {grid:[8,4],from: 'center'}),
  translateY: anime.stagger([0,5], {grid:[8,4],from: 'last'}),
  loop: true,
  duration: 5000,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  delay: anime.stagger(3, {from: 'first'})
});

anime({
  targets: '.boat',
  translateX: [5,15],
  translateY: [2,5],
  rotate: [-45, -35],
  scale: [
    {value: 0.98, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  loop: true,
  duration: 5000,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  delay: anime.stagger(10, {from: 'first'})
});


var textmove = document.getElementById('textMove');

var text = new Blotter.Text("the", {

      size: 90,
      fill: "#000",
      family: 'Lato',
      paddingLeft: 80,
      paddingRight: 80,
      paddingTop: 80,
      paddingBottom: 80,


});

var material = new Blotter.LiquidDistortMaterial();
material.uniforms.uSpeed.value = 0.1;
material.uniforms.uVolatility.value = 0.04;
material.uniforms.uSeed.value = 3.3;

var blotter = new Blotter(material, {

    texts: text
})

var scope = blotter.forText(text);

scope.appendTo(textmove);



var textmove2 = document.getElementById('textMove2');

var text2 = new Blotter.Text("hourglass", {

      size: 120,
      fill: "#000",
      family: 'Lato',
      paddingLeft: 80,
      paddingRight: 80,
      paddingTop: 80,
      paddingBottom: 80,


});
var material2 = new Blotter.LiquidDistortMaterial();
material2.uniforms.uSpeed.value = 0.1;
material2.uniforms.uVolatility.value = 0.04;
material2.uniforms.uSeed.value = 3.3;

var blotter2 = new Blotter(material2, {

    texts: text2
});

var scope2 = blotter2.forText(text2);

scope2.appendTo(textmove2);
