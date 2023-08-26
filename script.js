const buttons = [...document.querySelectorAll('.btn')];
let operation = document.querySelector('.operation');
let result = document.querySelector('.result');

let current_operation = '';
let has_operation = false;
let has_dot = false;
let can_put_dot = false;
let operation_done = false;
let is_infinity = false;

function addButtonEventListeners(buttons) {
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonId = button.id;
        switch (buttonId) {
            case 'AC':
                operation.textContent = '0';
                result.textContent = '';
                current_operation = '';
                has_operation = false;
                has_dot = false;
                operation_done = false;
                is_infinity = false;
                break;
            case 'DEL':
                if (is_infinity){
                    break;
                }
                let new_op
                if (operation_done){
                    operation_done = false;
                    current_operation = ''
                    operation.textContent = '0';
                    break;
                }
                if (current_operation.length === 0){
                    break;
                }
                if (current_operation[current_operation.length - 1] === ' '){
                    new_op = current_operation.split('').slice(0, -2).join('');
                    has_operation = false;
                }
                else{
                    new_op = current_operation.split('').slice(0, -1).join('');
                    if (!new_op.includes('.')) {
                        has_dot = false;
                    }
                }
                current_operation = new_op;
                operation.innerHTML = new_op;
                can_put_dot = true;
                break;
            case '0':
                if (operation_done){
                    break;
                }
                current_operation += '0';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '1':
                if (operation_done){
                    break;
                }
                current_operation += '1';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '2':
                if (operation_done){
                    break;
                }
                current_operation += '2';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '3':
                if (operation_done){
                    break;
                }
                current_operation += '3';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '4':
                if (operation_done){
                    break;
                }
                current_operation += '4';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '5':
                if (operation_done){
                    break;
                }
                current_operation += '5';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '6':
                if (operation_done){
                    break;
                }
                current_operation += '6';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '7':
                if (operation_done){
                    break;
                }
                current_operation += '7';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '8':
                if (operation_done){
                    break;
                }
                current_operation += '8';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '9':
                if (operation_done){
                    break;
                }
                current_operation += '9';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '+':
                if (is_infinity){
                    break;
                }
                
                if (operation_done){
                    operation_done = false;
                    current_operation = result.textContent.toString();
                }
                if (!has_operation && current_operation.length > 0){
                    current_operation += ' + ';
                    has_operation = true;
                    operation.innerHTML = current_operation;
                    can_put_dot = false;
                }
                break;
            case '-':
                if (is_infinity){
                    break;
                }
                if (operation_done){
                    operation_done = false;
                    current_operation = result.textContent.toString();
                }
                if (!has_operation && current_operation.length > 0){
                    current_operation += ' - ';
                    has_operation = true;
                    operation.innerHTML = current_operation;
                    can_put_dot = false;
                }
                break;
            case '*':
                if (is_infinity){
                    break;
                }
                if (operation_done){
                    operation_done = false;
                    current_operation = result.textContent.toString();
                }
                if (!has_operation && current_operation.length > 0){
                    current_operation += ' × ';
                    has_operation = true;
                    operation.innerHTML = current_operation;
                    can_put_dot = false;
                }
                break;
            case '/':
                if (is_infinity){
                    break;
                }
                if (operation_done){
                    operation_done = false;
                    current_operation = result.textContent.toString();
                }
                if (!has_operation && current_operation.length > 0){
                    current_operation += ' ÷ ';
                    has_operation = true;
                    operation.innerHTML = current_operation;
                    can_put_dot = false;
                }
                break;
            case '^':
                if (is_infinity){
                    break;
                }
                if (operation_done && !is_infinity){
                    operation_done = false;
                    current_operation = result.textContent.toString();
                }
                if (!has_operation && current_operation.length > 0){
                    current_operation += ' ^ ';
                    has_operation = true;
                    operation.textContent = current_operation;
                    can_put_dot = false;
                }
                break;
            case 'dot':
                if (operation_done){
                    break;
                }
                if (can_put_dot && !has_dot){
                    current_operation += '.';
                    operation.innerHTML = current_operation;
                    has_dot = true;
                }
                break;
            case '=':
                if (operation_done){
                    break;
                }

                if (has_operation && can_put_dot){
                    let num1 = current_operation.split(/ [\^+×÷-] /)[0];
                    let num2 = current_operation.split(/ [\^+×÷-] /)[1];
                    let op = current_operation.match(/[\^+×÷-]/)[0];
                    let res = 0;

                    switch (op) {
                        case '+':
                            res = parseFloat(num1) + parseFloat(num2);
                            break;
                        case '-':
                            res = parseFloat(num1) - parseFloat(num2);
                            break;
                        case '×':
                            res = parseFloat(num1) * parseFloat(num2);
                            break;
                        case '÷':
                            res = parseFloat(num1) / parseFloat(num2);
                            break;
                        case '^':
                            res = Math.pow(parseFloat(num1), parseFloat(num2));
                        default:
                            break;
                    }
                    if (res > 9999999999999 || res < -9999999999999){
                        res = 'infinity';
                        is_infinity = true;
                    }
                    result.textContent = res;
                    operation_done = true;
                    has_operation = false;
                }
                break;
          default:
                break;
        }
      });
    });
}

addButtonEventListeners(buttons);