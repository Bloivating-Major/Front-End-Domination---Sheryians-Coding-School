units = px , %, vw, vh, em, rem
1. px = 1px = 1px on screen
    pixel can vary from screen to screen because my density per pixel could be different than others.
    so when we use pixel we should think about this density.

    pixel depends on the quality of the screen. 

2. % = total of the screen. 
    like whenever we give some kind of percentage to our css for example: 50% of the screen then if i reduce the size of the screen it will change itself according to the size of the screen.

3. vw = (viewwidth) 

    --> percentage (%) takes value from the parent itself.
    --> vw and vh takes value from the screen.

4. em = depends of font size of the element and if
    you apply it on parent it can  be applied on children also.
    it is fixed as a pixel.

5. rem = it depends on the font size of html tag 
    it only depends on the size given in the html tag only and it also works like a pixel.

6. max & min height and width = it tells us what is
    maximum and minimum value of the height and 
    width it cannot exceed those values.