function chocRecipe()
{
    document.getElementById("text").innerHTML = ("<b>Ingredients</b><br>"
    +"-1/2 cup butter<br>-1/2 cup of sugar<br>-1/4 cup brown sugar<br>-2 tsp vanilla<br>-1 egg"
    +"<br>-1&3/4 cup flour<br>-1/2 tsp baking soda<br>-1/2 tsp salt<br>-1 cup chocolate chips"
    +"<br><b>Baking Instructions</b><br>"
    +"Preheat oven to 350 degres F<br>Place 1.5 tblsp of dough onto cookie sheet 2 inches apart<br>Bake in oven 7-10 mins<br>Eat to your hearts content")
}
function oatRecipe()
{
    document.getElementById("text").innerHTML = ("<b>Ingredients</b><br>"
    +"-1/2 cup butter<br>-1/2 cup of sugar<br>-1/4 cup brown sugar<br>-2 tsp vanilla<br>-1 egg"
    +"<br>-1&3/4 cup flour<br>-1/2 tsp baking soda<br>-1/2 tsp salt<br>-1 sliced banana<br>-1 cup nut of choice."
    +"<br><b>Baking Instructions</b><br>"
    +"Preheat oven to 350 degres F<br>Place 1.5 tblsp of dough onto cookie sheet 2 inches apart<br>Bake in oven 7-10 mins<br>Eat to your hearts content")
}
function banRecipe()
{
    document.getElementById("text").innerHTML = ("<b>Ingredients</b><br>"
    +"-1/2 cup butter<br>-1/2 cup of sugar<br>-1/4 cup brown sugar<br>-2 tsp vanilla<br>-1 egg"
    +"<br>-1&3/4 cup flour<br>-1/2 tsp baking soda<br>-1/2 tsp salt<br>-1 cup raisin<br>-1 cup oatmeal"
    +"<br><b>Baking Instructions</b><br>"
    +"Preheat oven to 350 degres F<br>Place 1.5 tblsp of dough onto cookie sheet 2 inches apart<br>Bake in oven 7-10 mins<br>Eat to your hearts content")
}

function msg()
{
    alert("Sorry for the inconvience but orders are tempararily disabled!")
}
//Upon clicking each button on the website will trigger one of these reipies to show up instead of the default text presented.
//document.getElementByID will search for a tag with the id of "text" and replace that with what is shown in the ()