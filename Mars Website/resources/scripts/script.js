// Select pizza size
function pizzaSize() {
    document.getElementById('pizza-order').onchange = function chooseSize() {
        document.getElementById('pizza').style.display = "inline-block";
    }
}
pizzaSize();

// Select meat 
function meat() {
    document.getElementById('pizza-order-2').onchange = function chooseMeat() {
        const meatChoice = document.getElementById('pizza-order-2').value;

        // Determine user meat choice
        switch (meatChoice) {
            case 'pepperoni':
                document.getElementById('pep-topping').style.display = "inline-block";
                break;
            case 'sausage':
                document.getElementById('sausage-topping').style.display = "inline-block";
                break;
            case 'canadian-bacon':
                document.getElementById('canadian-bacon-topping').style.display = "inline-block";
                break;
            default:
                false;
        }
    }
}
meat();

// Select topping 
function topping() {
    document.getElementById('pizza-order-3').onchange = function chooseTopping() {
        const toppingChoice = document.getElementById('pizza-order-3').value;

        // Determine user topping choice
        switch (toppingChoice) {
            case 'mushrooms':
                document.getElementById('mushroom-topping').style.display = "inline-block";
                break;
            case 'jalapeno peppers':
                document.getElementById('jalapeno-topping').style.display = "inline-block";
                break;
            case 'banana peppers':
                document.getElementById('banana-pepper-topping').style.display = "inline-block";
                break;
            case 'olives':
                document.getElementById('olive-topping').style.display = "inline-block";
                break;
            default:
                false;
        }
    }
}
topping();

// Select side
function side() {
    document.getElementById('pizza-order-4').onchange = function chooseSide() {
        const sideChoice = document.getElementById('pizza-order-4').value;

        // Determine user side choice
        switch (sideChoice) {
            case 'breadsticks':
                document.getElementById('bread-bag').style.display = "inline-block",
                    document.getElementById('bread-side').style.display = "inline-block";
                break;
            case 'cheese sticks':
                document.getElementById('cheese-sticks-plate').style.display = "inline-block",
                    document.getElementById('cheese-sticks-side').style.display = "inline-block";
                break;
            case 'jalapeno poppers':
                document.getElementById('jalapeno-poppers-plate').style.display = "inline-block",
                    document.getElementById('jalapeno-poppers-dip').style.display = "inline-block",
                    document.getElementById('jalapeno-poppers-side').style.display = "inline-block";
                break;
            default:
                false;
        }
    }
}
side();