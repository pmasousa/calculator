const buttons = [...document.querySelectorAll('.btn')];
let operation = document.querySelector('.operation');
let result = document.querySelector('.result');

let current_operation = '';
let has_operation = false;
let has_dot = false;
let can_put_dot = false;

function addButtonEventListeners(buttons) {
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonId = button.id;
        switch (buttonId) {
            case 'AC':
                operation.innerHTML = '';
                result.innerHTML = '';
                current_operation = '';
                has_operation = false;
                has_dot = false;
                break;
            case 'DEL':
                let new_op
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
                current_operation += '0';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '1':
                current_operation += '1';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '2':
                current_operation += '2';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '3':
                current_operation += '3';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '4':
                current_operation += '4';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '5':
                current_operation += '5';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '6':
                current_operation += '6';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '7':
                current_operation += '7';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '8':
                current_operation += '8';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '9':
                current_operation += '9';
                operation.innerHTML = current_operation;
                can_put_dot = true;
                break;
            case '+':
                if (!has_operation && current_operation.length > 0){
                    current_operation += ' + ';
                    has_operation = true;
                    operation.innerHTML = current_operation;
                    can_put_dot = false;
                }
                break;
            case '-':
                if (!has_operation && current_operation.length > 0){
                    current_operation += ' - ';
                    has_operation = true;
                    operation.innerHTML = current_operation;
                    can_put_dot = false;
                }
                break;
            case '*':
                if (!has_operation && current_operation.length > 0){
                    current_operation += ' × ';
                    has_operation = true;
                    operation.innerHTML = current_operation;
                    can_put_dot = false;
                }
                break;
            case '/':
                if (!has_operation && current_operation.length > 0){
                    current_operation += ' ÷ ';
                    has_operation = true;
                    operation.innerHTML = current_operation;
                    can_put_dot = false;
                }
                break;

            case 'dot':
                if (can_put_dot && !has_dot){
                    current_operation += '.';
                    operation.innerHTML = current_operation;
                    has_dot = true;
                }
                break;
            case '=':
                if (has_operation && can_put_dot){
                    const num1 = current_operation.split(/ [+×÷-] /)[0];
                    const num2 = current_operation.split(/ [+×÷-] /)[1];
                    const op = current_operation.match(/[+×÷-]/)[0];
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
                        default:
                            break;
                    }
                    result.textContent = res;
                }
                break;
          default:
                break;
        }
      });
    });
}

addButtonEventListeners(buttons);