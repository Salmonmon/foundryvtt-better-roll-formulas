export default function ranges() {
  roll = arguments[0]
  for (let i = 1; i < arguments.length; i += 3) {
    if (roll >= arguments[i] && roll <= arguments[i+1])
      {return(arguments[i+2])};}
}

Math.ranges = function() {
  
}
