var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"];




function addElementToBeginningOfArray(chocolateBars){
  chocolateBars.unshift("milky-way");
    return chocolateBars
}
function destructivelyAddElementToBeginningOfArray(chocolateBars){
  var moreChocolate =["milky-way", ... chocolateBars];
return moreChocolate  

}