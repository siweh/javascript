const circle = {
    radius: 2,          //radius and location we call them properties becouse they hold values
    location: {
        x: 1,
        y: 1
    },
    draw: function() {          //but draw function we call it a method becouse its used to define logic
        console.log('draw');
    }
};

// factory Function
function createFunction(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circled  = createFunction(1);
// circle.draw();

//Constractor Function
// function Circle(radius){
//     this.radius = radius;
//     this.draws = function(){
//         console.log('draws');
        
//     }
// }

// const Circler = new Function('radius', `this.radius = radius;
// this.draws = function(){
//     console.log('draws');
    
// }`);

// const circle1 = new Circler(1);

// const another = new Circle(1);
//The new oparator creates an empty objects, set 'this' to point to that object and returns that object from Circle object.

//Values or Primitives
var x = 10;
var y = x;

x = 20;     //the output for x will be 20 and the output for y will be 10.

//Objects

