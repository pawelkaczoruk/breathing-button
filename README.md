<h1 align="center">Breathing button</h1>

![buttons](https://i.imgur.com/qApZMfX.gif)

## 1. Info
I saw similar button on my friends flutter app and decided to try and recreate it in HTML, JS and CSS. There are still some fixes left to do.

Animation made by Luboš Volkov, you can check it out [here](https://dribbble.com/shots/4653793-Empty-State-Animation)

Click [here](https://codepen.io/pawelkaczoruk/pen/MWYBRZm) to see example code and test it.

## 2. How to use:
* Add a class of ***breathing-button*** to a button
* You can go with default style or set your own styles by assigning values to a data attributes:
  * ***data-bb-size*** - sets height and width of button
  * ***data-bb-duration*** - sets breathe animation duration
  * ***data-bb-background*** - sets colors (or colors) for background linear gradient (you can set one or two colors, if you want to set two colors don't forget to separate them with **semicolon**)
  * ***data-bb-cross*** - sets color of a cross
  * ***data-bb-shadow*** - sets color of a shadow
  
### Example code:

    <button
      class="breathing-button"
      data-bb-size="160px"
      data-bb-duration="4s"
      data-bb-background="#1e6262; #2d76f7"
      data-bb-cross="#ecfffb"
      data-bb-shadow="rgba(24, 35, 54, 0.2)">
    </button>

### Result:
![button gif](https://i.imgur.com/YwfCDxq.gif)
